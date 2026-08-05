import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'data/portfolio_data.dart';

void main() => runApp(const PortfolioApp());

class PortfolioApp extends StatelessWidget {
  const PortfolioApp({super.key});

  @override
  Widget build(BuildContext context) => MaterialApp(
    debugShowCheckedModeBanner: false,
    title: 'Sanjay Kumar S — Engineering',
    theme: ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(
        seedColor: const Color(0xff2459d6),
        brightness: Brightness.light,
      ),
      scaffoldBackgroundColor: const Color(0xfff7f7f4),
      fontFamily: 'Arial',
    ),
    home: const PortfolioPage(),
  );
}

class PortfolioPage extends StatefulWidget {
  const PortfolioPage({super.key});
  @override
  State<PortfolioPage> createState() => _PortfolioPageState();
}

class _PortfolioPageState extends State<PortfolioPage> {
  final ScrollController _scrollController = ScrollController();
  final Map<String, GlobalKey> _sections = {
    for (final id in [
      'home',
      'mission',
      'journey',
      'projects',
      'research',
      'stack',
      'contact',
    ])
      id: GlobalKey(),
  };

  void _go(String id) => Scrollable.ensureVisible(
    _sections[id]!.currentContext!,
    duration: const Duration(milliseconds: 550),
    curve: Curves.easeInOutCubic,
  );
  Future<void> _open(String url) async {
    await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final compact = MediaQuery.sizeOf(context).width < 900;
    return Scaffold(
      endDrawer: compact
          ? Drawer(
              child: SafeArea(
                child: ListView(
                  children: [
                    const Padding(
                      padding: EdgeInsets.all(24),
                      child: Text(
                        'Navigate',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                    for (final item in const {
                      'Mission': 'mission',
                      'Journey': 'journey',
                      'Projects': 'projects',
                      'Research': 'research',
                      'Stack': 'stack',
                      'Contact': 'contact',
                    }.entries)
                      ListTile(
                        title: Text(item.key),
                        onTap: () {
                          Navigator.pop(context);
                          _go(item.value);
                        },
                      ),
                  ],
                ),
              ),
            )
          : null,
      body: Stack(
        children: [
          const Positioned.fill(child: _PaperTexture()),
          CustomScrollView(
            controller: _scrollController,
            slivers: [
              SliverToBoxAdapter(
                child: _NavBar(
                  compact: compact,
                  onGo: _go,
                  onResume: () => _open('assets/resume/current_resume.pdf'),
                ),
              ),
              SliverToBoxAdapter(
                child: _Hero(
                  key: _sections['home'],
                  compact: compact,
                  onGo: _go,
                  onResume: () => _open('assets/resume/current_resume.pdf'),
                ),
              ),
              SliverToBoxAdapter(child: _Mission(key: _sections['mission'])),
              SliverToBoxAdapter(child: _Journey(key: _sections['journey'])),
              SliverToBoxAdapter(
                child: _Projects(key: _sections['projects'], onOpen: _open),
              ),
              SliverToBoxAdapter(child: _Research(key: _sections['research'])),
              SliverToBoxAdapter(child: _Stack(key: _sections['stack'])),
              SliverToBoxAdapter(
                child: _Contact(key: _sections['contact'], onOpen: _open),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _NavBar extends StatelessWidget {
  const _NavBar({
    required this.compact,
    required this.onGo,
    required this.onResume,
  });
  final bool compact;
  final void Function(String) onGo;
  final VoidCallback onResume;
  @override
  Widget build(BuildContext context) => Container(
    height: 78,
    padding: const EdgeInsets.symmetric(horizontal: 28),
    alignment: Alignment.center,
    decoration: const BoxDecoration(
      border: Border(bottom: BorderSide(color: Color(0x120f172a))),
    ),
    child: ConstrainedBox(
      constraints: const BoxConstraints(maxWidth: 1400),
      child: Row(
        children: [
          const Text(
            'SK.',
            style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.w800,
              letterSpacing: -1,
            ),
          ),
          const Spacer(),
          if (!compact) ...[
            for (final item in const {
              'Mission': 'mission',
              'Journey': 'journey',
              'Projects': 'projects',
              'Research': 'research',
              'Contact': 'contact',
            }.entries)
              TextButton(
                onPressed: () => onGo(item.value),
                child: Text(
                  item.key,
                  style: const TextStyle(color: Color(0xff24272d)),
                ),
              ),
            const SizedBox(width: 12),
            OutlinedButton(onPressed: onResume, child: const Text('Resume ↗')),
          ] else
            Builder(
              builder: (context) => IconButton(
                onPressed: () => Scaffold.of(context).openEndDrawer(),
                tooltip: 'Open navigation',
                icon: const Icon(Icons.menu),
              ),
            ),
        ],
      ),
    ),
  );
}

class _Hero extends StatelessWidget {
  const _Hero({
    super.key,
    required this.compact,
    required this.onGo,
    required this.onResume,
  });
  final bool compact;
  final void Function(String) onGo;
  final VoidCallback onResume;
  @override
  Widget build(BuildContext context) => Section(
    child: SizedBox(
      height: compact ? null : 650,
      child: Flex(
        direction: compact ? Axis.vertical : Axis.horizontal,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Flexible(
            fit: FlexFit.loose,
            flex: compact ? 0 : 11,
            child: Padding(
              padding: EdgeInsets.only(
                top: compact ? 82 : 118,
                bottom: compact ? 54 : 68,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const _Eyebrow('AI · RESEARCH · SOFTWARE ENGINEERING'),
                  const SizedBox(height: 25),
                  Text(
                    'Building intelligent systems for the real world.',
                    style: TextStyle(
                      fontSize: compact ? 50 : 76,
                      height: .98,
                      letterSpacing: -3.6,
                      fontWeight: FontWeight.w300,
                      color: const Color(0xff15171b),
                    ),
                  ),
                  const SizedBox(height: 27),
                  const SizedBox(
                    width: 520,
                    child: Text(
                      'Sanjay Kumar S works at the intersection of artificial intelligence, simulation research, and modern software.',
                      style: TextStyle(
                        fontSize: 18,
                        height: 1.55,
                        color: Color(0xff5c626d),
                      ),
                    ),
                  ),
                  const SizedBox(height: 35),
                  Wrap(
                    spacing: 12,
                    runSpacing: 12,
                    children: [
                      FilledButton(
                        onPressed: () => onGo('projects'),
                        child: const Text('Explore selected work  ↓'),
                      ),
                      OutlinedButton(
                        onPressed: onResume,
                        child: const Text('View resume  ↗'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
          Flexible(
            fit: FlexFit.loose,
            flex: compact ? 0 : 9,
            child: Padding(
              padding: EdgeInsets.only(
                top: compact ? 0 : 73,
                bottom: compact ? 48 : 58,
                left: compact ? 0 : 48,
              ),
              child: const _SignalField(),
            ),
          ),
        ],
      ),
    ),
  );
}

class _Mission extends StatelessWidget {
  const _Mission({super.key});
  @override
  Widget build(BuildContext context) => Section(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const _Eyebrow('01 / MISSION'),
        const SizedBox(height: 18),
        const Text(
          'Engineering with curiosity, rigour, and intent.',
          style: TextStyle(
            fontSize: 43,
            letterSpacing: -2,
            fontWeight: FontWeight.w300,
          ),
        ),
        const SizedBox(height: 43),
        Wrap(
          spacing: 18,
          runSpacing: 18,
          children: const [
            _Principle(
              'Research-driven',
              'Turning experiments into useful systems.',
            ),
            _Principle(
              'Systems thinker',
              'Connecting models, simulation, and interface.',
            ),
            _Principle(
              'Builder mindset',
              'Moving deliberately from idea to product.',
            ),
          ],
        ),
      ],
    ),
  );
}

class _Principle extends StatelessWidget {
  const _Principle(this.title, this.body);
  final String title, body;
  @override
  Widget build(BuildContext context) => Container(
    width: 300,
    padding: const EdgeInsets.all(26),
    decoration: BoxDecoration(
      color: Colors.white.withValues(alpha: .7),
      border: Border.all(color: const Color(0xffe5e7ea)),
      borderRadius: BorderRadius.circular(18),
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w600),
        ),
        const SizedBox(height: 10),
        Text(
          body,
          style: const TextStyle(height: 1.5, color: Color(0xff616773)),
        ),
      ],
    ),
  );
}

class _Journey extends StatelessWidget {
  const _Journey({super.key});
  @override
  Widget build(BuildContext context) => Section(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const _Eyebrow('02 / ENGINEERING JOURNEY'),
        const SizedBox(height: 20),
        const Text(
          'A practice shaped by exploration.',
          style: TextStyle(
            fontSize: 43,
            letterSpacing: -2,
            fontWeight: FontWeight.w300,
          ),
        ),
        const SizedBox(height: 42),
        const _TimelineRow(
          '2024',
          'Applied AI',
          'Explored machine learning through hackathons and applied projects.',
        ),
        const _TimelineRow(
          '2025 — now',
          'Research systems',
          'Undergraduate researcher at SRM Institute of Science and Technology.',
        ),
        const _TimelineRow(
          'Current focus',
          'Autonomous simulation',
          'Reinforcement learning control policies in Unreal Engine 5 and Cosys AirSim.',
        ),
      ],
    ),
  );
}

class _TimelineRow extends StatelessWidget {
  const _TimelineRow(this.date, this.title, this.body);
  final String date, title, body;
  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.symmetric(vertical: 24),
    decoration: const BoxDecoration(
      border: Border(top: BorderSide(color: Color(0xffdedfe0))),
    ),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SizedBox(
          width: 125,
          child: Text(
            date,
            style: const TextStyle(
              color: Color(0xff2459d6),
              fontWeight: FontWeight.w600,
            ),
          ),
        ),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: const TextStyle(
                  fontSize: 21,
                  fontWeight: FontWeight.w600,
                ),
              ),
              const SizedBox(height: 6),
              Text(
                body,
                style: const TextStyle(color: Color(0xff626874), height: 1.45),
              ),
            ],
          ),
        ),
      ],
    ),
  );
}

class _Projects extends StatelessWidget {
  const _Projects({super.key, required this.onOpen});
  final Future<void> Function(String) onOpen;
  @override
  Widget build(BuildContext context) => Section(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const _Eyebrow('03 / SELECTED WORK'),
        const SizedBox(height: 20),
        const Text(
          'Projects, treated as products.',
          style: TextStyle(
            fontSize: 43,
            letterSpacing: -2,
            fontWeight: FontWeight.w300,
          ),
        ),
        const SizedBox(height: 37),
        for (final project in PortfolioData.projects)
          _ProjectPanel(project: project, onOpen: onOpen),
      ],
    ),
  );
}

class _ProjectPanel extends StatefulWidget {
  const _ProjectPanel({required this.project, required this.onOpen});
  final Project project;
  final Future<void> Function(String) onOpen;
  @override
  State<_ProjectPanel> createState() => _ProjectPanelState();
}

class _ProjectPanelState extends State<_ProjectPanel> {
  bool hovered = false;
  @override
  Widget build(BuildContext context) => MouseRegion(
    onEnter: (_) => setState(() => hovered = true),
    onExit: (_) => setState(() => hovered = false),
    child: AnimatedContainer(
      duration: const Duration(milliseconds: 180),
      margin: const EdgeInsets.only(bottom: 18),
      padding: const EdgeInsets.all(26),
      decoration: BoxDecoration(
        color: hovered ? const Color(0xffffffff) : const Color(0xfff0f1ee),
        borderRadius: BorderRadius.circular(22),
        boxShadow: hovered
            ? const [
                BoxShadow(
                  color: Color(0x16000000),
                  blurRadius: 24,
                  offset: Offset(0, 10),
                ),
              ]
            : [],
      ),
      child: LayoutBuilder(
        builder: (context, c) => Flex(
          direction: c.maxWidth < 650 ? Axis.vertical : Axis.horizontal,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: c.maxWidth < 650 ? double.infinity : 185,
              height: 132,
              decoration: BoxDecoration(
                color: const Color(0xff16274c),
                borderRadius: BorderRadius.circular(15),
              ),
              child: Center(
                child: Text(
                  widget.project.kind.toUpperCase(),
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                    color: Color(0xffb6ccff),
                    fontSize: 12,
                    letterSpacing: 1.2,
                  ),
                ),
              ),
            ),
            const SizedBox(width: 25, height: 18),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    widget.project.name,
                    style: const TextStyle(
                      fontSize: 25,
                      fontWeight: FontWeight.w500,
                      letterSpacing: -.7,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Text(
                    widget.project.summary,
                    style: const TextStyle(
                      color: Color(0xff58606c),
                      height: 1.5,
                    ),
                  ),
                  const SizedBox(height: 17),
                  Wrap(
                    spacing: 7,
                    runSpacing: 7,
                    children: widget.project.stack
                        .map((tag) => _Chip(tag))
                        .toList(),
                  ),
                ],
              ),
            ),
            TextButton(
              onPressed: () => widget.onOpen(widget.project.url),
              child: const Text('GitHub ↗'),
            ),
          ],
        ),
      ),
    ),
  );
}

class _Chip extends StatelessWidget {
  const _Chip(this.label);
  final String label;
  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
    decoration: BoxDecoration(
      border: Border.all(color: const Color(0xffd9dde5)),
      borderRadius: BorderRadius.circular(20),
    ),
    child: Text(
      label,
      style: const TextStyle(fontSize: 12, color: Color(0xff3e4651)),
    ),
  );
}

class _Research extends StatelessWidget {
  const _Research({super.key});
  @override
  Widget build(BuildContext context) => Section(
    child: Container(
      padding: const EdgeInsets.all(32),
      decoration: BoxDecoration(
        color: const Color(0xff18233a),
        borderRadius: BorderRadius.circular(26),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const _Eyebrow('04 / RESEARCH', light: true),
          const SizedBox(height: 18),
          const Text(
            'Learning control in simulation.',
            style: TextStyle(
              fontSize: 42,
              letterSpacing: -1.8,
              fontWeight: FontWeight.w300,
              color: Colors.white,
            ),
          ),
          const SizedBox(height: 15),
          const Text(
            'Current work explores reinforcement learning policies for autonomous navigation, using Unreal Engine 5 and Cosys AirSim as a high-fidelity testing environment.',
            style: TextStyle(
              color: Color(0xffc5cedd),
              fontSize: 17,
              height: 1.55,
            ),
          ),
          const SizedBox(height: 32),
          const Wrap(
            spacing: 0,
            runSpacing: 20,
            children: [
              _Pipeline('State\nrepresentation'),
              _Pipeline('Reward\ndesign'),
              _Pipeline('Control\npolicy'),
              _Pipeline('Performance\nbenchmarking'),
            ],
          ),
        ],
      ),
    ),
  );
}

class _Pipeline extends StatelessWidget {
  const _Pipeline(this.label);
  final String label;
  @override
  Widget build(BuildContext context) => Container(
    width: 165,
    padding: const EdgeInsets.only(right: 20),
    child: Row(
      children: [
        const Icon(Icons.arrow_forward, color: Color(0xff7d9fff), size: 17),
        const SizedBox(width: 9),
        Text(label, style: const TextStyle(color: Colors.white, height: 1.3)),
      ],
    ),
  );
}

class _Stack extends StatelessWidget {
  const _Stack({super.key});
  @override
  Widget build(BuildContext context) => Section(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const _Eyebrow('05 / TECHNICAL PRACTICE'),
        const SizedBox(height: 20),
        const Text(
          'Tools in service of the work.',
          style: TextStyle(
            fontSize: 43,
            letterSpacing: -2,
            fontWeight: FontWeight.w300,
          ),
        ),
        const SizedBox(height: 36),
        Wrap(
          spacing: 30,
          runSpacing: 25,
          children: PortfolioData.technologies.entries
              .map(
                (group) => SizedBox(
                  width: 250,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        group.key.toUpperCase(),
                        style: const TextStyle(
                          fontSize: 12,
                          letterSpacing: 1.1,
                          color: Color(0xff2459d6),
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      const SizedBox(height: 13),
                      Wrap(
                        spacing: 7,
                        runSpacing: 7,
                        children: group.value.map((x) => _Chip(x)).toList(),
                      ),
                    ],
                  ),
                ),
              )
              .toList(),
        ),
      ],
    ),
  );
}

class _Contact extends StatelessWidget {
  const _Contact({super.key, required this.onOpen});
  final Future<void> Function(String) onOpen;
  @override
  Widget build(BuildContext context) => Container(
    color: const Color(0xffecece7),
    child: Section(
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 86),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const _Eyebrow('06 / CONTACT'),
            const SizedBox(height: 20),
            const Text(
              'Let’s build something meaningful.',
              style: TextStyle(
                fontSize: 50,
                letterSpacing: -2.5,
                fontWeight: FontWeight.w300,
              ),
            ),
            const SizedBox(height: 18),
            const Text(
              'For research, product, and engineering conversations.',
              style: TextStyle(fontSize: 18, color: Color(0xff606671)),
            ),
            const SizedBox(height: 30),
            Wrap(
              spacing: 12,
              runSpacing: 12,
              children: [
                FilledButton(
                  onPressed: () => onOpen('mailto:${PortfolioData.email}'),
                  child: const Text('Email Sanjay  ↗'),
                ),
                OutlinedButton(
                  onPressed: () => onOpen(PortfolioData.linkedin),
                  child: const Text('LinkedIn  ↗'),
                ),
                OutlinedButton(
                  onPressed: () => onOpen(PortfolioData.github),
                  child: const Text('GitHub  ↗'),
                ),
              ],
            ),
            const SizedBox(height: 78),
            const Divider(),
            const SizedBox(height: 18),
            const Text(
              '© 2026 Sanjay Kumar S · Built with Flutter',
              style: TextStyle(color: Color(0xff747984)),
            ),
          ],
        ),
      ),
    ),
  );
}

class Section extends StatelessWidget {
  const Section({super.key, required this.child});
  final Widget child;
  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 76),
    child: Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 1400),
        child: child,
      ),
    ),
  );
}

class _Eyebrow extends StatelessWidget {
  const _Eyebrow(this.text, {this.light = false});
  final String text;
  final bool light;
  @override
  Widget build(BuildContext context) => Text(
    text,
    style: TextStyle(
      fontSize: 12,
      letterSpacing: 1.25,
      fontWeight: FontWeight.w700,
      color: light ? const Color(0xff9eb7f9) : const Color(0xff2459d6),
    ),
  );
}

class _PaperTexture extends StatelessWidget {
  const _PaperTexture();
  @override
  Widget build(BuildContext context) => IgnorePointer(
    child: DecoratedBox(
      decoration: BoxDecoration(
        gradient: RadialGradient(
          center: Alignment.topRight,
          radius: 1.2,
          colors: [
            const Color(0xffeef3ff).withValues(alpha: .7),
            Colors.transparent,
          ],
        ),
      ),
    ),
  );
}

class _SignalField extends StatelessWidget {
  const _SignalField();
  @override
  Widget build(BuildContext context) => Container(
    height: 410,
    decoration: BoxDecoration(
      color: const Color(0xffe9edf4),
      borderRadius: BorderRadius.circular(28),
    ),
    child: Stack(
      children: [
        Positioned.fill(child: CustomPaint(painter: _SignalPainter())),
        const Positioned(
          left: 24,
          top: 24,
          child: _Eyebrow('SYSTEMS / SIGNAL / MOTION'),
        ),
        const Positioned(
          right: 24,
          bottom: 24,
          child: Text('01 — 04', style: TextStyle(color: Color(0xff5c6c88))),
        ),
      ],
    ),
  );
}

class _SignalPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.2;
    for (var i = 0; i < 7; i++) {
      p.color = Color.lerp(
        const Color(0xff88a3dd),
        const Color(0xff2459d6),
        i / 8,
      )!;
      final path = Path();
      for (double x = 0; x <= size.width; x += 5) {
        final y =
            size.height * .52 +
            ((i - 3) * 18) +
            42 * __sin((x / 58) + (i * .7));
        if (x == 0) {
          path.moveTo(x, y);
        } else {
          path.lineTo(x, y);
        }
      }
      canvas.drawPath(path, p);
    }
    final dot = Paint()..color = const Color(0xff2459d6);
    canvas.drawCircle(size.center(Offset.zero), 6, dot);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

double __sin(double x) {
  var y = x % 6.283185307;
  var sum = 0.0;
  var term = y;
  for (var n = 1; n < 12; n += 2) {
    sum += term;
    term *= -y * y / ((n + 1) * (n + 2));
  }
  return sum;
}

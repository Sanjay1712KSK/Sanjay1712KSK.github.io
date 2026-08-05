import 'package:flutter_test/flutter_test.dart';
import 'package:sanjay_portfolio/main.dart';

void main() {
  testWidgets('shows the engineering landing page', (tester) async {
    await tester.pumpWidget(const PortfolioApp());
    expect(find.text('Building intelligent systems for the real world.'), findsOneWidget);
  });
}

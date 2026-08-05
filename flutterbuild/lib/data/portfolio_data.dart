class Project {
  const Project({
    required this.name,
    required this.kind,
    required this.summary,
    required this.stack,
    required this.url,
  });
  final String name;
  final String kind;
  final String summary;
  final List<String> stack;
  final String url;
}

abstract final class PortfolioData {
  static const name = 'Sanjay Kumar S';
  static const email = 'sanjayksk1712@gmail.com';
  static const github = 'https://github.com/Sanjay1712KSK';
  static const linkedin = 'https://www.linkedin.com/in/sanjaykumarksk/';

  static const projects = [
    Project(
      name: 'Cattle-Go',
      kind: 'Computer vision',
      summary:
          'An AI-powered cattle breed classification system with multilingual support and a RAG chatbot.',
      stack: ['Computer Vision', 'Deep Learning', 'RAG'],
      url: 'https://github.com/Sanjay1712KSK/Cattle-Go',
    ),
    Project(
      name: 'Drug MRP Price Prediction',
      kind: 'Machine learning',
      summary:
          'A regression-focused system for estimating pharmaceutical MRP from structured data.',
      stack: ['Machine Learning', 'Regression', 'Data Preparation'],
      url: 'https://github.com/Sanjay1712KSK/Drug-MRP-Price-Prediction',
    ),
    Project(
      name: 'Padayappa Paarvai',
      kind: 'Developer tools',
      summary:
          'An interactive repository structure visualizer that turns JSON trees into a navigable hierarchy.',
      stack: ['Web', 'Interactive UI'],
      url: 'https://github.com/Sanjay1712KSK/Padayappa-Paarvai',
    ),
    Project(
      name: 'Rule-Based Chatbot',
      kind: 'Interface systems',
      summary:
          'A React and TypeScript chatbot with persistent conversation handling and a rule-processing engine.',
      stack: ['React', 'TypeScript'],
      url: 'https://github.com/Sanjay1712KSK/Rule-Based-Chatbot-with-UI',
    ),
  ];

  static const technologies = {
    'Intelligence': [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'RAG',
    ],
    'Simulation': ['Reinforcement Learning', 'Unreal Engine 5', 'Cosys AirSim'],
    'Software': ['Flutter', 'React', 'TypeScript', 'Linux'],
  };
}

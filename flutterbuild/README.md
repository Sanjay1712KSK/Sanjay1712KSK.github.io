# Sanjay Kumar S — Flutter Web Portfolio

The Flutter Web rebuild is intentionally isolated from the legacy React app.

## Run and build

```bash
cd flutterbuild
flutter pub get
flutter run -d chrome
flutter build web --release
```

The build output is `build/web`. The included workflow publishes this output to GitHub Pages whenever the `flutterbuild` branch is pushed. Enable **GitHub Actions** as the repository Pages source once in repository settings.

Portfolio content is centralized in `lib/data/portfolio_data.dart`; the resume is kept at `assets/resume/current_resume.pdf`.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Learn Flutter](https://docs.flutter.dev/get-started/learn-flutter)
- [Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Flutter learning resources](https://docs.flutter.dev/reference/learning-resources)

For help getting started with Flutter development, view the
[online documentation](https://docs.flutter.dev/), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

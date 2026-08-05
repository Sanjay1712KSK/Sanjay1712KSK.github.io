# PROJECT REQUIREMENTS DOCUMENT (PRD)

# Sanjay Kumar S Portfolio v2

Version: 2.0

Status: Planning

Target Platform: Flutter Web

Deployment: GitHub Pages

Branch: flutterbuild

---

# 1. Project Objective

The objective of this project is to completely redesign and rebuild the existing personal portfolio into a premium Flutter Web application.

This is **not** a UI migration.

This is **not** a Flutter conversion.

This is a complete redesign of the user experience while preserving the professional information contained in the latest resume.

The final product should represent the engineering identity of Sanjay Kumar S through elegant storytelling, modern design, smooth interactions, and high-quality software architecture.

---

# 2. Primary Goals

The portfolio must:

- Showcase engineering capabilities.
- Showcase research.
- Showcase projects.
- Showcase professional growth.
- Present technical achievements.
- Present experience.
- Present education.
- Present certifications.
- Present skills.
- Present interests.
- Present contact information.

The website should feel like an interactive software product rather than a traditional resume.

---

# 3. Source of Truth

The latest resume is the canonical source of portfolio content.

Resume File:

Sanjay_Kumar_S_Resume.pdf

Every page must be derived from the information available in the latest resume.

Repository assets such as screenshots, GitHub links, APKs, videos, diagrams, and images may be reused only when they support an existing resume entry.

Never invent:

- Projects
- Awards
- Certifications
- Skills
- Research
- Experience

If there is a mismatch between the repository and the resume, prefer the resume.

---

# 4. Target Audience

The portfolio should be designed primarily for:

- Recruiters
- Hiring Managers
- Engineering Managers
- Technical Interviewers
- Research Mentors
- Professors
- Open Source Maintainers
- Hackathon Judges
- Startup Founders

The portfolio should not be optimized for casual visitors.

---

# 5. Product Philosophy

The portfolio should communicate professionalism through simplicity.

Visitors should quickly understand:

Who is Sanjay?

↓

What does he build?

↓

How does he think?

↓

What problems does he solve?

↓

What projects has he completed?

↓

Why should someone work with him?

The portfolio should tell this story naturally.

---

# 6. Design Philosophy

The UI should feel inspired by premium software companies.

Primary Inspirations

- Apple
- Linear
- Vercel
- Stripe
- Notion
- Raycast
- Arc Browser

Do NOT copy any design.

Instead, understand their design principles.

The website should prioritize:

Whitespace

Typography

Motion

Spacing

Hierarchy

Consistency

Elegance

Confidence

---

# 7. Visual Identity

The portfolio should represent:

AI Engineer

Flutter Developer

Research Engineer

Linux Enthusiast

Autonomous Systems Researcher

Software Engineer

Every section should reinforce this identity.

---

# 8. Functional Requirements

The website shall:

✓ Support Light Theme.

✓ Support Dark Theme.

✓ Default to Light Theme.

✓ Remember selected theme.

✓ Support responsive layouts.

✓ Support keyboard navigation.

✓ Support browser history.

✓ Support deep linking.

✓ Support GitHub Pages deployment.

✓ Embed resume.

✓ Allow downloading resume.

✓ Link GitHub.

✓ Link LinkedIn.

✓ Link Email.

✓ Display project links.

✓ Display research timeline.

✓ Display engineering timeline.

✓ Display certifications.

✓ Display achievements.

✓ Display technical stack.

✓ Display contact information.

---

# 9. Non Functional Requirements

Performance

95+ Lighthouse

Accessibility

95+

Responsive

Desktop

Laptop

Tablet

Mobile

Fast loading

Minimal rebuilds

Reusable widgets

Maintainable architecture

Easy updates

---

# 10. Content Requirements

The portfolio content must remain synchronized with the resume.

Every section should read content from a centralized data source.

Suggested:

lib/data/portfolio_data.dart

or

assets/content/portfolio.json

No duplicated content.

No hardcoded strings throughout the UI.

---

# 11. Resume Requirements

The resume page should include:

Embedded Preview

Download Button

Last Updated information

Professional Layout

Resume Path

assets/resume/current_resume.pdf

Future updates should require replacing only this PDF.

---

# 12. Project Requirements

Projects are the centerpiece.

Each project should become a premium showcase.

Every project page should include:

Overview

Problem

Solution

Technology Stack

Architecture

Key Features

Deployment

Repository

Live Demo

Gallery

Challenges

Learning Outcomes

Animations

Projects should NOT be displayed as simple cards.

Each should feel like a product page.

---

# 13. Research Requirements

The research section deserves dedicated treatment.

Research should include:

Overview

Research Timeline

Research Focus

Simulation Pipeline

Technologies

Methodology

Future Work

Interactive Architecture

Visual Storytelling

---

# 14. Experience Requirements

Experience should be presented as:

Timeline

Responsibilities

Achievements

Impact

Technologies Used

Professional Growth

---

# 15. Skills Requirements

Never use progress bars.

Instead:

Group technologies into categories.

Programming

Frameworks

AI

Simulation

Linux

Cloud

Backend

Developer Tools

Represent them using chips or badges.

---

# 16. Animation Requirements

Animations should improve storytelling.

Use:

Fade

Slide

Scale

Scroll Reveal

Hover

Parallax

Navbar Blur

Smooth Transitions

Avoid:

Excessive animations

Random bouncing

Spinning objects

Unnecessary motion

---

# 17. Theme Requirements

Material 3

Light Theme

Dark Theme

Dynamic Colors

Adaptive Components

Professional Color Palette

Persistent Theme Selection

---

# 18. Accessibility Requirements

Keyboard Navigation

Semantic Widgets

High Contrast

Readable Fonts

Responsive Text

Accessible Buttons

---

# 19. SEO Requirements

Configure:

Page Title

Description

Open Graph

Twitter Cards

Favicon

Metadata

Although Flutter Web has SEO limitations, maximize discoverability where practical.

---

# 20. Coding Standards

Feature-first architecture.

Reusable widgets.

Small widget files.

Meaningful naming.

Const constructors.

No duplicated code.

No magic numbers.

No massive build() methods.

---

# 21. Deployment Requirements

The final application must build successfully using:

flutter build web

The generated build must deploy correctly to GitHub Pages.

Routing, assets, and base paths must all work correctly.

---

# 22. Constraints

The following are NOT allowed:

Terminal UI

ASCII art

Developer meme interfaces

Neon themes

Generic templates

AI-looking layouts

Placeholder content

Fake data

Fake metrics

Unresponsive layouts

Monolithic widget files

Poor accessibility

---

# 23. Success Criteria

The project is complete when:

✓ Flutter Web fully replaces the old frontend.

✓ The website reflects the latest resume.

✓ The UI feels premium and handcrafted.

✓ Every page is responsive.

✓ Animations are smooth.

✓ GitHub Pages deployment works.

✓ Codebase is clean and maintainable.

✓ Updating the resume requires minimal effort.

✓ Visitors understand the engineering journey within minutes.

---

# 24. Future Scope

The architecture should allow future additions without major refactoring.

Potential future enhancements:

- Blog
- Technical articles
- Publications
- Open Source Contributions
- Research Papers
- Project Filtering
- Search
- Interactive Case Studies
- Analytics Dashboard
- Admin Content Management
- Localization
- Progressive Web App
- Offline Support

The architecture should remain flexible enough to accommodate these features.
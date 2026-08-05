# Sanjay Kumar S Portfolio v2
### Flutter Web | Product Experience | GitHub Pages

---

# Overview

This repository contains the complete redesign and migration of my personal portfolio from the existing Node.js/React implementation into a fully Flutter Web based application.

This is **not** a UI migration.

This is a complete redesign of the portfolio experience.

The goal is to build a premium product website that tells the story of my engineering journey instead of simply displaying information like a traditional portfolio or resume.

The website should communicate technical excellence, product thinking, engineering maturity, research capability, and software craftsmanship.

---

# Project Goals

The objectives of this project are:

- Convert the existing Node.js portfolio into Flutter Web.
- Preserve the content while redesigning the presentation.
- Create a premium product experience.
- Build an interactive portfolio.
- Make the website highly responsive.
- Improve maintainability.
- Support Light and Dark themes.
- Continue deployment through GitHub Pages.
- Use modern Flutter architecture.
- Create reusable UI components.
- Separate content from UI.
- Ensure easy future updates.

---

# Existing Repository

Current Technology Stack

- Node.js
- React
- GitHub Pages

Current Problems

- Terminal inspired UI
- Monospace heavy design
- Developer portfolio aesthetic
- Limited storytelling
- UI lacks premium polish
- Weak content hierarchy
- Limited interaction
- Difficult future maintenance

---

# Target Technology Stack

Frontend

Flutter Web

Framework

Material 3

State Management

Riverpod

Routing

go_router

Animations

flutter_animate

Icons

flutter_svg

Typography

Google Fonts

Responsive Framework

responsive_framework

Deployment

GitHub Pages

---

# Deployment Branch

All Flutter development must happen inside:

flutterbuild

The main branch should remain untouched until migration is complete.

---

# Source of Truth

The portfolio content must be derived primarily from the latest resume.

Latest Resume

Sanjay_Kumar_S_Resume.pdf

The resume determines:

- Education
- Experience
- Research
- Skills
- Projects
- Certifications
- Achievements
- Languages
- Interests

Repository assets should only enrich existing resume content.

Do not invent projects.

Do not invent experience.

Do not invent achievements.

Do not invent skills.

---

# Vision

The portfolio should feel like browsing a premium software company's product website.

Visitors should remember:

"This engineer builds production quality systems."

instead of

"This is another student portfolio."

The experience should resemble:

- Apple Product Pages
- Linear
- Vercel
- Stripe
- Raycast
- Notion
- Framer

without copying their designs.

---

# User Experience Goals

Visitors should naturally progress through the following story.

Discover

↓

Understand

↓

Explore

↓

Trust

↓

Connect

Instead of dumping information on the visitor, the website should progressively reveal information through interactive storytelling.

---

# Design Principles

The website should be:

Minimal

Elegant

Professional

Interactive

Fast

Responsive

Accessible

Premium

Modern

Confident

The design should avoid:

Terminal themes

Developer jokes

ASCII art

Green hacker colors

Overused gradients

Overused glassmorphism

Random animations

Generic AI generated layouts

---

# Content Philosophy

The portfolio is NOT a resume.

The portfolio is NOT a blog.

The portfolio is NOT a GitHub profile.

It is an interactive representation of my engineering journey.

Every section should answer one question.

Who am I?

↓

What do I build?

↓

Why do I build it?

↓

How do I solve problems?

↓

What have I achieved?

↓

How can someone contact me?

---

# Resume Philosophy

The resume exists as one section inside the website.

The website should never become a PDF viewer.

Instead,

the website should communicate everything visually.

The embedded PDF is only provided for recruiters who want a downloadable version.

---

# Future Updates

The portfolio should be easy to maintain.

Whenever my resume changes,

updating the portfolio should require minimal effort.

Content should never be hardcoded across multiple widgets.

Centralize all portfolio information.

Suggested location

lib/data/portfolio_data.dart

or

assets/content/portfolio.json

Resume PDF

assets/resume/current_resume.pdf

Replacing this single PDF should automatically update the Resume page.

---

# Performance Goals

Desktop Lighthouse Score

95+

Accessibility

95+

Performance

95+

SEO (Flutter limitations acknowledged)

90+

No unnecessary rebuilds.

Use const constructors wherever possible.

Lazy load heavy widgets.

Maintain smooth animations.

---

# Responsive Support

Desktop

Laptop

Tablet

Mobile

Ultrawide

The layout should adapt naturally.

No fixed pixel layouts.

---

# Accessibility

Keyboard navigation

Semantic widgets

Readable typography

High contrast support

Responsive text scaling

Screen reader friendly

---

# Repository Workflow

Development Process

1. Analyze repository

2. Plan migration

3. Create Flutter architecture

4. Build Design System

5. Build reusable components

6. Build pages

7. Add animations

8. Optimize

9. Deploy

---

# Commit Convention

Every major milestone should have its own commit.

Example

feat(theme): create Material 3 theme system

feat(home): redesign hero section

feat(projects): create interactive project showcase

feat(research): add research timeline

feat(resume): build embedded resume viewer

fix(layout): improve tablet responsiveness

refactor(content): centralize portfolio data

---

# Success Criteria

This project is successful when:

✓ The Node.js frontend has been fully replaced.

✓ Flutter Web runs correctly.

✓ GitHub Pages deployment works.

✓ The portfolio reflects the latest resume.

✓ The UI feels handcrafted.

✓ Visitors can easily navigate every section.

✓ The experience is memorable.

✓ The codebase is clean.

✓ Future updates are simple.

✓ The portfolio represents a premium engineering brand rather than a traditional resume.

---

# Next Documents

The remaining project specifications are contained in:

PROJECT_REQUIREMENTS.md

WEBSITE_STRUCTURE.md

DESIGN_GUIDELINES.md

CODING_GUIDELINES.md

DEPLOYMENT.md

TODO.md

Every document should be read before implementation begins.
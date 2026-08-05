# WEBSITE STRUCTURE DOCUMENT

Version: 2.0

Status: Planning

Target Platform: Flutter Web

Design Style:
Premium Product Experience

---

# WEBSITE PHILOSOPHY

The website should NOT feel like a resume.

The website should NOT feel like a portfolio.

The website should feel like the official product page of an engineer.

Imagine someone opening the website.

The experience should naturally answer these questions:

Who is this engineer?

↓

What problems does he solve?

↓

What has he built?

↓

How does he think?

↓

Why should I hire him?

↓

How do I contact him?

This story should unfold naturally while scrolling.

The visitor should never feel overwhelmed.

The website should be immersive, interactive, and elegant.

---

# WEBSITE FLOW

Loading Screen

↓

Landing Hero

↓

Mission

↓

Engineering Journey

↓

Featured Projects

↓

Research

↓

Experience

↓

Technology Stack

↓

Achievements

↓

Resume

↓

Contact

↓

Footer

---

# GLOBAL LAYOUT

Every page should contain

Navigation Bar

↓

Main Content

↓

Call to Action

↓

Footer

Consistent spacing should exist between sections.

Never place sections too close together.

The page should breathe.

---

# NAVIGATION BAR

The navigation should always remain visible.

Desktop

Sticky Navigation

Transparent initially

Blur when scrolling

Smooth transition

Sections

Home

Mission

Journey

Projects

Research

Experience

Tech Stack

Resume

Contact

Theme Toggle

GitHub Button

Mobile

Hamburger Navigation

Animated Drawer

Theme Toggle

GitHub

Resume Shortcut

---

# HERO SECTION

Purpose

Immediately communicate identity.

Large headline.

Minimal design.

Large typography.

Example structure

-------------------------------------------------

Small Badge

AI • Robotics • Flutter • Linux

Large Heading

Building Intelligent Systems
for the Future.

Subtitle

AI Engineer, Flutter Developer,
Researcher and Systems Enthusiast
focused on building intelligent,
high-performance software.

Buttons

Explore Projects

Download Resume

Contact Me

Professional Portrait

Animated Background

Scroll Indicator

-------------------------------------------------

Hero Height

100vh

Spacing

Very spacious

Animation

Fade

Slide

Text reveal

Parallax background

---

# MISSION SECTION

Replace the traditional About Me.

Title

Mission

Subtitle

Engineering with purpose.

This section explains

Who I am

What motivates me

Engineering philosophy

Research interests

Long-term vision

Instead of long paragraphs

Split information into cards.

Examples

Problem Solver

Research Driven

Systems Thinker

Continuous Learner

Builder Mindset

---

# ENGINEERING JOURNEY

Interactive timeline.

Title

Engineering Journey

Timeline

2023

Started B.Tech

↓

2024

AI & ML Exploration

↓

Hackathons

↓

Research

↓

Flutter Development

↓

Current

Each milestone expands when clicked.

Include

Description

Achievements

Technologies

Images if available

---

# FEATURED PROJECTS

This is the most important section.

Projects should NOT look like cards.

Every project should feel like a product launch.

Project Layout

-------------------------------------------------

Project Hero

Large Screenshot

↓

Overview

↓

Problem Statement

↓

Solution

↓

Architecture

↓

Technology Stack

↓

Features

↓

Challenges

↓

Learning Outcomes

↓

Deployment

↓

GitHub

↓

Live Demo

-------------------------------------------------

Featured Order

1

Aero-Controllers

Research flagship.

2

GigShield

Full Stack flagship.

3

LLLMao

Systems flagship.

4

Cattle-Go

AI flagship.

5

Padayappa-Paarvai

Developer Tools flagship.

Every project should contain animations.

Project images should slightly move while scrolling.

Buttons should animate.

Technology chips should animate.

---

# RESEARCH SECTION

This should feel like visiting a research laboratory.

Sections

Research Overview

Research Timeline

Research Focus

Simulation Pipeline

Methodology

Current Work

Future Vision

Potential Publications

Architecture Diagram

Technologies

Isaac Sim

AirSim

Flutter

PPO

Python

ROS

Linux

Future Roadmap

Visual Timeline

---

# EXPERIENCE SECTION

Professional timeline.

Each experience

Timeline

Role

Organization

Duration

Responsibilities

Impact

Technologies

Achievements

Avoid long bullet lists.

Use visual storytelling.

---

# TECH STACK

Instead of progress bars

Create categorized technology groups.

Programming Languages

Frameworks

Artificial Intelligence

Simulation

Mobile Development

Backend

Databases

Developer Tools

Operating Systems

Cloud

Every technology displayed as

Rounded Chip

Hover Animation

Icon

Grouped cards

---

# CERTIFICATIONS

Card layout.

Each certification

Title

Provider

Date

Credential Link

Animated Card

Hover Effect

---

# ACHIEVEMENTS

Timeline + Cards.

Examples

Hackathons

Research

Awards

Academic Achievements

Every achievement should appear as milestone cards.

---

# RESUME SECTION

Professional Resume Viewer.

Contains

Resume Preview

Highlights

Download Button

Quick Summary

The resume PDF loads from

assets/resume/current_resume.pdf

The UI should never require changing when the PDF changes.

---

# CONTACT SECTION

Large call-to-action.

Heading

Let's Build Something Meaningful Together

Buttons

Email

GitHub

LinkedIn

Resume

Social Icons

Professional spacing.

Simple.

Elegant.

---

# FOOTER

Minimal.

Contains

Name

Current Year

Built with Flutter

GitHub

LinkedIn

Back to Top

---

# PAGE TRANSITIONS

Every page transition

Fade

Slide

Smooth easing

No abrupt changes.

---

# SCROLL ANIMATIONS

Sections appear progressively.

Animations

Fade

Scale

Slide

Parallax

Cards

Hover elevation

Mouse movement effects

Subtle background movement

---

# MICRO INTERACTIONS

Buttons

Lift

Shadow

Ripple

Cards

Scale

Shadow

Icons

Rotate slightly

Technology Chips

Glow softly

Navigation

Underline animation

Theme Toggle

Animated transition

---

# RESPONSIVE BEHAVIOR

Desktop

Large hero

Horizontal layouts

Tablet

Two-column layout

Mobile

Single column

Bottom spacing increased

Larger touch targets

Navigation becomes drawer

No overflow allowed.

---

# CONTENT MANAGEMENT

All textual content should come from

lib/data/portfolio_data.dart

or

assets/content/portfolio.json

UI components must never contain duplicated content.

---

# FINAL EXPERIENCE

The visitor should leave the website remembering

Professional Engineering

↓

Strong Research

↓

High Quality Software

↓

Clean Design

↓

Excellent Attention to Detail

The portfolio should feel like a premium software product—not just another developer portfolio.
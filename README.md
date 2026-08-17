# Kocknet Emmanuella | Machine Learning Engineer

Build a premium, minimalist personal portfolio website for me as a Machine Learning Engineer.

The website should feel elegant, modern, technically sophisticated, clean, and intentional. It should look like a professional portfolio for an ML Engineer, not a generic software developer template.

Overall Design

Use a minimalist visual system with:

Clean typography

Plenty of whitespace

Dark/charcoal grey and white as the primary palette

One subtle accent color

Very subtle borders and shadows

Smooth animations

Excellent spacing and alignment

High-quality responsive design

Mobile, tablet, and desktop support

Do NOT use:

Excessive gradients

Glowing neon effects

Floating blobs

Excessive glassmorphism

Excessive animations

Cluttered backgrounds

Generic AI-themed illustrations

Huge amounts of text on the homepage

The website should feel simple at first glance but extremely polished when interacted with.

HERO SECTION

Create a clean hero section containing:

Name:
Kocknet Emmanuella

Role:
Machine Learning Engineer

Short description:
Building intelligent systems from data to deployment.

Include subtle entrance animations when the page loads.

Include links for:

GitHub

LinkedIn

Email

The email must be a real clickable mail link using:

mailto:MY_EMAIL_ADDRESS

When the user clicks the email address/button, it should open their default email client with my email address already populated as the recipient.

Do not use a fake contact form instead of the email link.

PROJECTS SECTION

This is the most important visual interaction on the website.

Create a scroll-driven stacked project card animation.

I want the project cards to behave like a stack of physical cards while the user scrolls.

Desired interaction:

When the Projects section begins:

The first project card appears prominently.

As the user scrolls downward, the next project card smoothly moves upward and stacks over/behind the previous card.

The previous card should remain partially visible underneath.

Continue this behavior for all project cards.

Each card should appear to have depth and hierarchy.

The cards should remain visually aligned rather than moving randomly around the screen.

The animation should be smooth and controlled by scroll position.

The cards should feel like they are physically stacking.

When the final project is reached, the section should naturally transition into the next section.

Use a sticky/pinned project container with scroll-driven transforms to achieve this effect.

The animation should feel similar to a premium modern product website.

Do NOT make the cards flip.

Do NOT make them spin.

Do NOT make them fly around the screen.

Do NOT make the animation excessive.

The effect should be subtle, smooth, sophisticated, and professional.

Use transforms such as:

translateY

scale

opacity

subtle rotation if necessary

The cards should progressively scale slightly smaller as they move deeper into the stack.

The currently active project should remain the most prominent card.

PROJECT CARD DESIGN

Each project card should contain:

Project title

Short one-to-two sentence description

Technologies used

Small visual/preview area

GitHub link

Optional live demo link

Every GitHub button/link must point to the actual GitHub repository URL for that specific project.

Do not use placeholder links in the final implementation.

Create the project data in a centralized data structure so I can easily replace the project information and URLs later.

Example structure:

Project 1:
Title: Aircraft Engine Remaining Useful Life Prediction
Description: End-to-end machine learning system for predicting the remaining useful life of aircraft engines using NASA C-MAPSS.
Technologies: Python, LSTM, CatBoost, SHAP, FastAPI, Flutter
GitHub: [ACTUAL_GITHUB_REPOSITORY_URL]

Project 2:
Title: Mechatronic Tutor
Description: Edge AI-powered educational assistant designed to run locally on Raspberry Pi 5.
Technologies: Python, BitNet, RAG, Vosk, Piper TTS, Raspberry Pi
GitHub: [ACTUAL_GITHUB_REPOSITORY_URL]

Make the GitHub links visually obvious but minimal.

Use text such as:

View on GitHub ↗

When clicked, open the correct repository.

ABOUT SECTION

Create a concise About section explaining that I am a Machine Learning Engineer with a background in Mechatronics Engineering and an interest in building intelligent systems that connect machine learning with real-world applications.

Keep this section concise.

Do not create a huge wall of text.

SKILLS SECTION

Display my technical skills in a clean, minimal format.

Group them into categories such as:

Machine Learning
Python, Scikit-learn, TensorFlow, PyTorch

Data
Pandas, NumPy, SQL

ML Engineering
FastAPI, Docker, Git, APIs

AI
LLMs, RAG, NLP, Computer Vision, Edge AI

Do not use oversized progress bars showing fake percentages.

Use clean tags, text, or minimal visual indicators instead.

EXPERIENCE / EDUCATION

Create clean timeline-style sections for relevant experience and education.

Keep them visually minimal.

CERTIFICATIONS

Create a clean certifications section.

Each certification should support a clickable verification link where available.

The links should open the actual certification/verification page.

CONTACT SECTION

Create a simple final contact section.

Include:

"Let's build something intelligent."

Include my email as a clickable link.

The email must use:

mailto:MY_EMAIL_ADDRESS

Also include GitHub and LinkedIn links.

NAVIGATION

Create a minimal sticky navigation bar.

Navigation:

Home
About
Projects
Skills
Experience
Contact

The navigation should smoothly scroll to each section.

On mobile, use a clean hamburger menu.

ANIMATION PRINCIPLES

Animations should be:

Smooth

Fast enough to feel responsive

Subtle

Purposeful

Use scroll-triggered animations for section entrances.

The Projects section should have the most sophisticated animation because it is the centerpiece of the portfolio.

Respect prefers-reduced-motion accessibility settings.

If the user has reduced motion enabled, provide a simpler non-animated project layout.

RESPONSIVENESS

The website must work beautifully on:

Desktop

Laptop

Tablet

Mobile

The stacked project animation should be adapted for mobile rather than simply breaking the layout.

Make sure cards do not overlap important text or become difficult to read on small screens.

CODE QUALITY

Use reusable components.

Keep project information separate from presentation components.

Create reusable components for:

Navigation

Project cards

Project stack

Skills

Certifications

Contact

Keep all external links in a centralized configuration/data structure where practical.

Do not hardcode fake URLs.

Use semantic HTML and accessible buttons/links.

Optimize the site for performance.

The final result should feel like a high-end minimalist ML Engineer portfolio: simple, professional, technically impressive, and memorable without being visually noisy. 
i will like to combine thsi two palattes in this design

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kocknetemmanuella-portfolio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bfe73592-3575-48e5-adba-a54756a26751).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

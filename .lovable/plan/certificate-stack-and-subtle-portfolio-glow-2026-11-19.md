# Certificate stack and subtle portfolio glow

## User-facing changes
- Replace the long certificate list on the homepage with a compact animated stack that visitors can swipe or navigate with accessible previous/next controls.
- Keep the complete certificate archive and current certificate viewer intact.
- Add restrained, softly animated glow accents to a few existing portfolio sections, matching the dark graphite, blue, and gold palette.
- Respect reduced-motion preferences and keep small-screen content readable.

## Technical details
- Update the existing Certifications section and shared styles; avoid extra dependencies and preserve the `/certificates` archive route.
- Use the existing certificate data, viewer dialog, and semantic design tokens; verify swipe/navigation and preview loading in the browser.

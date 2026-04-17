# Profile Card – HNG Internship Stage 1b

A testable, accessible, and responsive Profile Card component built with vanilla HTML, CSS, and JavaScript.

## Features

- **Live epoch time** — displays current `Date.now()` in milliseconds, updates every second with `aria-live="polite"`
- **Avatar** — rendered with meaningful alt text inside a `<figure>` element
- **Social links** — Twitter, GitHub, LinkedIn — open in new tab with `rel="noopener noreferrer"`
- **Hobbies & Dislikes** — distinct lists with individual testids and visual differentiation
- **Staggered entry animations** — each section animates in sequentially on load
- **Dark theme** — cohesive dark UI with ambient background orbs

## Design Decisions

- Dark theme with a deep navy/charcoal base — readable, modern, developer-appropriate
- Syne (display) + DM Sans (body) font pairing — distinctive without being distracting
- Hobbies in green, dislikes in red — immediate visual distinction between positive and negative lists
- Epoch time displayed in a dedicated pill row — clearly labeled, easy to locate for tests
- Background orbs add depth without affecting readability or accessibility
- Avatar has a gradient ring (CSS `::after` pseudo-element) — visual polish, zero extra markup

## Accessibility Notes

- Avatar `<img>` has descriptive `alt` text
- Social `<nav>` has `aria-label="Social media links"`
- Each social link has `aria-label` for screen readers
- Epoch time element has `aria-live="polite"` and `aria-atomic="true"`
- Hobbies and dislikes sections use `aria-labelledby` pointing to their headings
- All links are keyboard focusable with visible focus styles
- Color contrast meets WCAG AA for all text

## Testids

| Element | data-testid |
|---|---|
| Card root | `test-profile-card` |
| Name | `test-user-name` |
| Bio | `test-user-bio` |
| Epoch time | `test-user-time` |
| Avatar | `test-user-avatar` |
| Social links container | `test-user-social-links` |
| Twitter link | `test-user-social-twitter` |
| GitHub link | `test-user-social-github` |
| LinkedIn link | `test-user-social-linkedin` |
| Hobbies list | `test-user-hobbies` |
| Dislikes list | `test-user-dislikes` |

## Tech Stack

- HTML5 (semantic — article, figure, nav, section)
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript
- Syne + DM Sans (Google Fonts)
- DiceBear Avatars (avatar placeholder)

## Running Locally

```bash
git clone https://github.com/robert-dominic/profile-card.git
cd profile-card
open index.html
```

## Live Demo

[https://robert-dominic.github.io/profile-card/](#) — replace with your live URL

## Submission

Built for the Frontend Wizards track — HNG Internship Stage 1b task.
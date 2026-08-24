# AFAAQ Typography Comparison — 2026-08-24

## Brand words

The typography decision is evaluated against three physical/brand words:

**precise / electrical / institutional**

The goal is not to select a fashionable "modern" typeface. The body family must remain highly readable for engineering/procurement audiences while avoiding the predictable technical-brand shorthand created by IBM Plex Sans.

## Current system

- Display: Archivo
- Body/navigation: IBM Plex Sans
- Technical data: IBM Plex Mono

## Candidates

### Schibsted Grotesk

Strengths:
- Strong digital readability
- Functional grotesk with personality
- Broad language support
- Designed to work for text and display

Rejection reason:
- It was created specifically as Schibsted's signature brand typeface. Even though it is open source, using it as AFAAQ's main body personality would borrow a visual asset too closely associated with another company's identity.

### Barlow

Strengths:
- Industrial/public-infrastructure associations
- Strong signage character
- Broad weight range
- Good utility for labels and interfaces

Rejection reason:
- Slightly rounded, transport-oriented personality is less institutional than the desired AFAAQ tone and risks pulling the site toward mobility/wayfinding rather than electrical engineering.

### Source Sans 3

Strengths:
- Excellent interface and long-form readability
- Mature open-source family
- Reliable weight/italic range

Rejection reason:
- Too neutral as a brand move. It improves readability but does not meaningfully move AFAAQ away from a generic interface type system.

### Public Sans

Strengths:
- Strong, neutral, principles-driven design
- Large x-height and high small-size legibility
- Good running-text texture
- Broad weight range
- Tabular numerals suitable for technical/data contexts
- Institutional rather than startup/SaaS character
- Metrics compatible with common system fonts

Risk:
- Can feel governmental if used too austerely.

Mitigation:
- Keep Archivo as the stronger display voice.
- Use AFAAQ Navy/Electric Blue and the Power Rail as brand signatures.
- Keep Public Sans primarily in body, navigation and interface copy.

## Decision

**Keep Archivo for display. Replace IBM Plex Sans with Public Sans for body/navigation. Keep IBM Plex Mono only for genuine technical data.**

This yields:

- Archivo = assertive corporate headline voice
- Public Sans = precise institutional reading voice
- IBM Plex Mono = constrained engineering/data voice

## Tracking guidance

- Long display headlines: approximately `-0.025em` to `-0.04em`
- Body text: normal tracking
- Navigation: approximately `-0.01em` to normal
- Technical mono: no decorative wide tracking unless the data format requires it

Avoid `-0.048em` to `-0.052em` on long inner-page headlines.

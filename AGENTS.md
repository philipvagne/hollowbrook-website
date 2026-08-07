# AGENTS.md

## Project

Hollowbrook Outdoor Living is a fictional premium residential landscape design and outdoor living company.

This website is a polished concept demo for a web-design business portfolio. Its purpose is to show prospective clients the quality of the final visual result, interaction design, responsiveness, and implementation.

Do not turn the project into a developer case study. Do not add process documentation, technical showcases, dashboards, admin features, authentication, databases, or unnecessary product functionality.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router

## Routes

- `/`
- `/projects`
- `/services`
- `/about`
- `/faq`
- `/contact`

## Initial Task

Start by structuring the repository and establishing the shared site foundation.

Create:

- Route-level page components for all six routes
- Shared layout
- Header/navigation
- Footer
- Reusable button component
- Reusable section/container primitives
- Shared typography and color tokens
- Centralized content/data files where appropriate
- A clean asset structure for photography and branding

Do not invent finished page layouts for pages that have not yet been fully designed.

The homepage has an approved wireframe and should be implemented first after the project foundation is ready.

## Design Ownership

The design is directed by the project owner.

Codex should:

- Implement the documented design faithfully
- Preserve the intended hierarchy and composition
- Ask before making major visual changes
- Avoid replacing intentional layouts with generic templates
- Avoid adding sections because they are common on marketing websites
- Avoid introducing extra cards, badges, icons, statistics, or marketing blocks
- Keep Projects and Services equally prominent on the homepage
- Work with the photography supplied for this project

## Visual Direction

The site should feel:

- Premium
- Calm
- Professional
- Architectural
- Natural
- Warm
- Confident
- Spacious
- Photography-led
- Timeless rather than trendy

Avoid:

- Generic landscaping templates
- Bright green “eco” branding
- Excessive rounded cards
- Heavy shadows
- Glassmorphism
- SaaS-style layouts
- Overly playful animation
- Dense pages
- Clip-art landscaping icons
- Generic stock-site visual patterns

## Typography

Use Figtree as the primary typeface.

Recommended starting weights:

- 400 — body copy
- 500 — navigation, labels, subtle emphasis
- 600 — buttons and smaller headings
- 700 — major headings where needed

Use restraint. Typography should feel clean and contemporary, not loud or oversized for its own sake.

## Color Tokens

Use the approved palette:

- Background / light text: `#FFFDF7`
- Primary dark olive text: `#233628`
- CTA yellow: `#FFBA49`
- CTA text: `#212121`
- Frame accent: `#645B54`
- Process-section background: `#394A3E`
- Beige panel background: `#C5C2BC`
- Beige-panel text: `#27221E`
- Soft utility neutral: `#ECE8E0`

Use the yellow sparingly and primarily for actions.

## Layout Rules

- Use generous spacing.
- Let photography carry visual weight.
- Prefer a few strong sections over many small sections.
- Preserve editorial overlaps and clipping where documented.
- Do not normalize intentional asymmetry into generic centered grids.
- Maintain a calm reading rhythm.
- Use a sensible maximum content width while allowing selected photography to extend wider.
- Build mobile layouts intentionally rather than simply stacking everything without refinement.

## Responsive Behaviour

Support at minimum:

- Mobile
- Tablet
- Desktop
- Large desktop

Navigation should remain clear and usable at all sizes.

Overlapping desktop compositions may simplify on smaller screens, but the visual relationship between image and panel should remain recognizable.

Do not allow text to become too narrow or images to become decorative slivers.

## Interaction and Motion

Motion should be subtle and purposeful.

Suitable behaviour includes:

- Gentle image fades
- Soft overlay transitions
- Small positional movement
- Underline or color transitions on links
- Calm testimonial transitions
- Horizontal process movement where appropriate

Avoid:

- Large parallax effects
- Bouncy easing
- Continuous decorative animation
- Aggressive scale effects
- Fast auto-rotating carousels
- Motion that interferes with reading

Respect `prefers-reduced-motion`.

## Accessibility

- Use semantic HTML.
- Ensure all interactive elements are keyboard accessible.
- Provide visible focus states.
- Use descriptive alternative text for meaningful images.
- Do not put essential text only inside background images.
- Maintain sufficient color contrast.
- Use proper heading order.
- Make hover-revealed content available to keyboard and touch users.
- Forms must have proper labels and validation feedback.

## Component Guidance

Create reusable components only where genuine reuse exists.

Good candidates:

- `SiteHeader`
- `SiteFooter`
- `PageContainer`
- `Section`
- `Button`
- `ImageFrame`
- `PageIntro`
- `ProjectPreview`
- `ServicePreview`
- `ProcessRail`
- `TestimonialPanel`
- `ContactCTA`

Avoid overengineering with many tiny abstraction layers.

## Code Quality

- Use TypeScript.
- Keep route components readable.
- Keep static content out of deeply nested JSX where a small data file would be clearer.
- Use descriptive names.
- Remove dead code.
- Do not add dependencies unless they solve a real problem.
- Prefer CSS/Tailwind transitions over heavy animation libraries initially.
- Keep the console free of warnings and errors.

## Working Method

For each meaningful implementation pass:

1. Read `DESIGN.md`.
2. Read `CONTENT.md`.
3. Check `TODO.md`.
4. Implement only the requested scope.
5. Summarize what changed.
6. Note any assumptions.
7. Do not proceed into unapproved page design work.

# DESIGN.md

## Brand Direction

Hollowbrook Outdoor Living designs premium residential outdoor environments.

The visual identity should communicate:

- Architecture
- Craftsmanship
- Permanence
- Natural materials
- Restraint
- Confidence
- Timeless design

The first impression should be “high-end outdoor design firm,” not “local lawn service.”

## Typography

Primary font: **Figtree**

Initial usage:

- Navigation and labels: Figtree 500
- Body copy: Figtree 400
- Buttons: Figtree 600
- Section headings: Figtree 600–700
- Large display headings: Figtree 600–700

Typography should feel spacious and controlled. Avoid extreme display sizes unless the composition clearly supports them.

## Approved Palette

| Role | Value |
|---|---|
| Main cream background / light text | `#FFFDF7` |
| Primary dark olive text | `#233628` |
| CTA yellow | `#FFBA49` |
| CTA text | `#212121` |
| Frame accent | `#645B54` |
| Process section background | `#394A3E` |
| Beige panel background | `#C5C2BC` |
| Text on beige panels | `#27221E` |
| Soft utility neutral | `#ECE8E0` |

### Usage Notes

- `#FFFDF7` is the primary light canvas.
- `#233628` is the main brand text color and may also support links and dark interface elements.
- `#FFBA49` is the main action accent. Use it sparingly.
- `#394A3E` creates a strong sectional break.
- `#C5C2BC` is reserved for the testimonial and consultation CTA compositions, plus closely related uses.
- `#645B54` supports the dark square image-frame treatment.
- `#ECE8E0` may be used for subtle borders, separators, quiet surfaces, and hover states.

## Global Visual Principles

1. Photography leads.
2. The site should not explain everything on the homepage.
3. Projects and Services are equally important entry points.
4. Use a small number of visually strong sections.
5. Preserve generous whitespace.
6. Use overlap and clipping to create an editorial feel.
7. Avoid generic card grids unless a page specifically requires one.
8. Keep motion calm.
9. Use the supplied content and imagery instead of inventing unnecessary material.
10. The final website should feel distinct from the designer's own business website.

# Homepage

The homepage wireframe is approved at a structural level.

Spacing, exact dimensions, image crops, and responsive details will be refined in the browser.

## 1. Full-Image Hero

The entire hero section is a photograph.

Floating over the image:

- Hollowbrook logo
- Main navigation
- Hero heading
- Supporting copy
- Primary CTA

The image should feel immersive and premium.

The navigation and hero content must remain readable without making the image feel heavily covered.

Possible tools:

- Subtle image overlay
- Localized gradient
- Careful text placement
- Light text using `#FFFDF7`

Do not turn the hero into a separate text column beside an image.

## 2. Project and Service Previews

Background: `#FFFDF7`

Display:

- One featured Project preview
- One featured Service preview

Both have equal conceptual and visual importance.

Each preview uses:

- A strong supplied photograph
- A dark frame/accent treatment using `#645B54`
- A premium composition rather than a generic card
- A hover/focus state that gently fades or darkens the image
- Revealed supporting text
- A CTA link to the relevant page

Projects and Services must remain equal in prominence.

The final arrangement may be aligned or offset based on what works best in the browser, but it should preserve the original idea of two large framed image destinations.

Touch devices must have a clear way to access the same information without relying on hover.

## 3. Process Section

Background: `#394A3E`

This section creates a visual break from the cream page background.

The process content is presented horizontally.

Initial process:

1. Consultation
2. Design
3. Build
4. Enjoy

The horizontal format may support sliding or dragging when needed, especially at narrower widths.

The intended feel is inspired by the Brother Grimms website process section, but the implementation should suit Hollowbrook rather than copy it literally.

Keep the content concise.

## 4. Testimonials Section

Background around the composition: `#FFFDF7`

Primary panel: `#C5C2BC`

Text color: `#27221E`

Composition:

- A larger beige/grey rectangular block containing the testimonial section heading and supporting copy
- A separate testimonial/review container positioned partly above or offset against that panel
- Approximately 3–5 testimonials can rotate within the review container

The interaction should not look like a generic carousel.

Exact behaviour will be decided after it can be tested in the browser.

Possible approaches:

- Slow fade
- Gentle horizontal transition
- Manual controls
- A restrained combination

Do not add loud pagination dots or oversized arrows by default.

## 5. Consultation CTA Section

Background around the composition: `#FFFDF7`

Primary panel: `#C5C2BC`

Text color: `#27221E`

Composition:

- CTA heading
- Short supporting copy
- Yellow booking button
- One supplied homepage image positioned to the left
- The image floats partly above and clips or overlaps the beige panel

Do not use the Dave consultation image here. That image is reserved for the About page.

## 6. Footer

The footer should be simple and useful.

Primary content:

- Company name or logo
- Contact details
- Navigation links as needed
- Service area if supplied
- Copyright

Avoid a dense multi-column corporate footer.

# Other Pages

The remaining page structures exist in physical sketches but are not yet documented here in enough detail for final visual implementation.

Create route shells and shared foundations only until their designs are supplied.

## Projects

Purpose: Let visitors explore finished work.

Known projects:

- Gates Mills
- Moreland Hills
- Hunting Valley
- Bainbridge
- Chagrin Falls

Do not assume each project needs its own route in version one.

## Services

Known services:

- Landscape Design
- Patios & Stonework
- Outdoor Kitchens
- Pergolas
- Outdoor Lighting

## About

Known photography:

- Dave consulting with homeowners
- Crew completing stonework

The Dave consultation photo belongs on this page.

## FAQ

Dedicated frequently asked questions page.

Avoid placing a large FAQ block on the homepage.

## Contact

Dedicated inquiry page.

The main conversion should be a clear consultation request rather than a complicated quoting system.

# Image Direction

Photography should feel:

- Believable
- Premium
- Residential
- Natural
- Warm
- Detailed
- Professionally composed
- Consistent enough to feel like one company

Avoid unnecessary filters that make the images look artificial.

Use thoughtful cropping with `object-position` where needed rather than forcing every image into the same aspect ratio.

# Logo

The final logo may be introduced later.

Until supplied, use a restrained typographic placeholder reading:

**Hollowbrook Outdoor Living**

Do not invent a generic tree logo.

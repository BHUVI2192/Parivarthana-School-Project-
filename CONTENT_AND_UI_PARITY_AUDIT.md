# Parivarthana Website Content and UI Parity Audit

## Executive summary

The active `parivarthana-new` application has the main institutional structure, core navigation, visual assets, forms, gallery, leadership route, and 360° tour in place. It is not yet content-complete compared with the original HTML and the earlier React migration. The largest gaps are the **Analytics** and **News & Events** routes, which are currently generic utility placeholders, and the **Campus Life** route, which omits several original facilities and their descriptions. The original navigation also exposed a direct Leadership link and a Login Portal link that are not currently present in the new header.

There are two kinds of differences in this audit. A **missing** item is present in the original and absent from the new application. A **changed** item exists in both versions but uses different wording, structure, imagery, or interaction. Visual changes are not automatically defects: the new app intentionally replaces Nicepage’s fixed-position layout with responsive Grid and Flexbox. Content and functional differences, however, should be reviewed for parity.

## Global navigation and shared UI

| Area | Original implementation | New implementation | Finding |
|---|---|---|---|
| Home navigation | Explicit `Home` item | Logo links to `/`, but there is no visible Home item | Changed; add a visible Home link if the original navigation must be preserved exactly |
| About menu | About OSNT; About Parivarthana | Same two destinations | Preserved |
| Academics menu | School; PUC | Same two destinations | Preserved |
| Student Corner | Life at Parivarthana; Gallery; 360° Virtual Tour | Campus Life; Gallery; 360° Virtual Tour | Wording changed from “Life at Parivarthana” to “Campus Life”; tour is now present and functional |
| Leadership | Direct navigation item | No direct header item; leadership is reachable from homepage cards and `/leadership` | Missing from primary navigation |
| Login Portal | External `Login Portal` link to the Gibbon portal | Not present in the new header or footer | Missing; confirm whether this external portal should be restored |
| News & Events | Direct navigation item | Direct navigation item | Preserved as a route, but page content is incomplete; see route audit |
| Search | Search control/route existed in the earlier migration | `/search` exists, but the current search button has no search handler or results data | Functionally incomplete |
| Admission CTA | Admission enquiry route | Admission enquiry CTA and route | Preserved |
| Footer quick links | Admissions, Login Portal, News & Events, Gallery, Contact, Analytics | Admissions, Gallery, Analytics, News and Events | Login Portal is missing |
| Footer social links | WhatsApp and Instagram with icon-based controls | WhatsApp and Instagram text links | Destinations preserved; icon treatment changed |
| Back-to-top control | Shared `BackToTop` component existed in the earlier migration | No back-to-top control in the new shared layout | Missing functional UI element |

## Route-by-route findings

| Route | Original content or UI | New app status | Gap or change |
|---|---|---|---|
| `/` Home | Original homepage used a video/image hero, institutional introduction, academic or learning sections, facilities, leadership, campus/tour content, and multiple Nicepage sections | New homepage has hero video, introduction, learning experience cards, 360° callout, leadership cards, and admission CTA | Core structure is present, but the section inventory should be checked against the complete original homepage. The new page uses simplified copy and a newly authored section hierarchy rather than reproducing every original section and CTA |
| `/about-osnt` | Original page contained the OSNT history and institutional narrative with generated section layouts and original images | New page contains the major historical narrative in a new story-row layout | Likely content is substantially preserved, but the new page reuses `img3.jpg` for every story row rather than preserving distinct original imagery. The original visual section backgrounds and per-section image treatment are missing |
| `/about-parivarthana` | Core belief, mission, vision, and three strategic objectives | New page contains core belief, mission, vision, and strategic objectives | Main topics are present. Wording and capitalization have changed. The original page used “Vission” as a typo in the old implementation; the new app correctly uses “Vision.” Original image and decorative sections are not reproduced one-to-one |
| `/leadership` | “Meet Our Chairman,” “Meet Our Visionary Managing Director,” “Meet Our Managing Trustee,” and “Meet Our Treasurer,” with individual profile sections and original imagery | New page contains all four leaders in alternating profile rows | Names and roles are present. The new biography text is generic and should be replaced with the original individual profile text if exact content preservation is required. The original page’s per-profile section styling and any unique biographies are missing |
| `/school` | Primary School, Middle School, High School; Class 1 to 8; Class 9 & 10; Facilities & Infrastructure; “Read More”; Academic Infrastructure; State of Art Classrooms; Library and Reading Program; Language Labs; laboratory details | New page has learning stages, Class 1 to 8, Class 9 & 10, and facilities cards | The main categories are present, but the original `Read More` interaction is missing. The facilities content is compressed into short repeated text and omits the original image-backed infrastructure cards, separate Language Labs presentation, and the original facility section structure |
| `/puc` | Pre University College introduction; Science (Integrated); PCMB; PCMCs; NEET and JEE preparation; Commerce (Integrated); EBACs; EBAS; commerce, law, CA, CS, and CLAT Foundation Courses; Facilities & Infrastructure; “Read More”; facility cards | New page has generic Science, Commerce, and Campus facilities cards | Major content gap. The subject combinations and integrated career pathways are missing. NEET, JEE, CA, CS, and CLAT Foundation Courses are missing. The original `Read More` control and facility subsections are missing |
| `/campus-life` | Hostel/residential introduction plus Library, Transportation, Dining Area, Dormitories, Sports, Yoga, and Activities sections, each with dedicated image and description | New page has a generic introduction plus four facility cards: Boarding and residence, Learning spaces, Sports and recreation, and Community life | Major content gap. The original Library, Transportation, Dining Area, Dormitories, Sports, Yoga, and Activities sections are not all represented individually. Their original descriptions and several original images are missing |
| `/gallery` | Gallery with a specific original image collection, including `WhatsAppImage2024-07-22at8.41.01PM.jpeg` and `DSC_0129-scaled.jpg` | New page has a responsive gallery with a subset of the original image list | The gallery is functional, but at least the original `WhatsAppImage2024-07-22at8.41.01PM.jpeg` and `DSC_0129-scaled.jpg` are absent from the new gallery array. The new gallery should be reconciled against the full original list |
| `/admissions` | Admission Enquiry Form with Name, Email Id, Contact Number, Course, four course options, Submit; How to apply?; four steps | New page contains the same visible fields, course options, submit action, and four steps | Largely preserved. The original hero image and exact section composition are changed. The new form uses a Google Forms action and should be tested end-to-end after deployment |
| `/contact` | Contact Us form with Name, Email ID, Contact Number, Message, Submit; Careers & Human Resources section; department hours; “Look for openings”; “Write to us”; original image | New page has contact information, a simplified form, map, and no careers section | Major content gap. Careers & Human Resources, its explanatory copy, working hours, and both CTA links are missing. The new form also omits Contact Number and does not define a submission action |
| `/analytics` | Website Analytics Dashboard with 12,450 Total Page Views, 2m 45s Avg. Time Spent, 4,890 Link Clicks, Visitors by Location, and Top Traffic Sources | Generic utility placeholder | Major content gap; the entire original dashboard content and UI are missing |
| `/news-events` | News & Events hero plus three event cards: Annual Sports Day Celebration, Science & Technology Exhibition, Cultural Fest & Talent Show, dates, descriptions, and images | Generic utility placeholder | Major content gap; all original event cards, dates, descriptions, imagery, and event UI are missing |
| `/search` | Search Our Website; `Type to search...`; result title and description rendering; `No results found for “{query}”.` state | Generic input and button | Major functional gap; no query state, filtering, result rendering, or empty-state behavior is implemented |
| `/360virtualtour` | Full generated 3DVista/TDV virtual-tour experience | New page embeds the preserved tour at `/assets/360virtualtour/index.html` | Preserved and verified. The tour is also available under Student Corner. The asset is referenced through a symlink to the preserved root `public/360virtualtour` tree |

## Content wording that changed

Several new pages replace exact original wording with summaries. The most important changes are in the following areas:

- The new Leadership page uses the same generic paragraph for all four leaders instead of individual original profile content.
- PUC content was reduced from specific combinations and career pathways to generic Science and Commerce descriptions.
- Campus Life content was grouped into broad categories instead of keeping the original seven facility sections.
- Contact content removed the Careers & Human Resources section.
- News & Events and Analytics were replaced by placeholders.
- Search was reduced to a visual input and button without the original result behavior.
- Some headings were deliberately modernized, such as “People who shape our purpose” and “Begin the journey.” These are design changes, not necessarily parity defects, but they should be retained only if the project allows editorial rewriting.

## Original UI elements not currently reproduced

The original Nicepage implementation also included several visual or interaction patterns that are not carried into the new React app:

1. Original per-section color backgrounds using blue, coral, yellow, cyan, and pale neutral variants.
2. Large rounded Nicepage content groups with fixed section-specific radii and drop shadows.
3. Original image-backed section cards for School, PUC, Campus Life, Contact, and News & Events.
4. “Read More” buttons in School and PUC infrastructure sections.
5. Individual event cards with dates and descriptions.
6. Analytics statistic cards and traffic-source blocks.
7. Search result and no-result states.
8. Careers and Human Resources CTAs.
9. Direct Leadership and Login Portal navigation items.
10. Shared Back-to-top control.
11. Icon-based social controls rather than text-only social links.

The new application correctly removes the old fixed-width and absolute-positioned geometry. The missing items above should be reintroduced using the new responsive design system rather than copying the old Nicepage layout rules.

## Recommended implementation order

The highest-priority parity work is to replace the Analytics and News & Events placeholders with their original content. The next priority is to restore the full Campus Life facility inventory and PUC-specific academic pathways. Contact Careers, Search behavior, and the missing Login Portal and Leadership navigation items should follow. Gallery reconciliation and individual Leadership biographies should then be completed. These changes would close the main content and functional gaps without bringing back the original layout defects.

## References

[1]: https://github.com/BHUVI2192/Parivarthana-School-Project-/tree/aa04bbd5 "Original Parivarthana React migration commit"
[2]: https://github.com/BHUVI2192/Parivarthana-School-Project-/tree/main/parivarthana-new "Active Parivarthana new React application"
[3]: https://github.com/BHUVI2192/Parivarthana-School-Project-/blob/main/public/nicepage.css "Preserved original Nicepage stylesheet"

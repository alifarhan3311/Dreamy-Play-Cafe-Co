# Dreamy Play Cafe & Co — Static Website Development Prompt

## 1. Project Overview

Build a modern, playful, premium and family-friendly static website for:

**Business Name:** Dreamy Play Cafe & Co  
**Business Type:** Indoor Playground + Play Café + Kids Birthday Party Venue  
**Location:** 13 Queen St Unit 102, Brantford, ON N3T 3B1, Canada  
**Phone:** +1 437-533-5650  
**Google Rating:** 4.7/5 from 37 reviews  
**Current Status:** Open · Closes 6 PM

The website should communicate that Dreamy Play Cafe & Co is a clean, welcoming, safe and beautiful indoor play space where families can bring children to play, relax and celebrate birthdays.

The website should particularly focus on:

- Indoor children's playground
- Kids play sessions
- Birthday parties
- Private celebrations
- Family-friendly environment
- Clean and safe play space
- Beautiful/welcoming atmosphere
- Easy contact/booking
- Play Café experience

---

# 2. Website Goal

The primary purpose of the website is to convert visitors into:

1. Parents looking for an indoor playground
2. Families looking for a children's activity
3. Parents planning birthday parties
4. Customers interested in booking the venue
5. Families wanting to learn about the play space
6. Customers looking for café/refreshment options
7. Local Brantford families searching for a safe children's play environment

The website should feel:

- Fun
- Dreamy
- Warm
- Colorful
- Premium
- Safe
- Clean
- Family-oriented
- Trustworthy
- Child-friendly

Avoid making the website look like a generic daycare or generic restaurant.

The visual identity should clearly communicate **Kids + Play + Café + Birthday Celebrations**.

---

# 3. Recommended Technology

Build this as a STATIC frontend website.

Preferred stack:

- React
- Vite
- Tailwind CSS
- JavaScript
- React Router if multiple pages are required
- Lucide React or another lightweight icon library
- Local/static JSON data for products and categories

Do NOT implement:

- Backend
- Authentication
- Database
- Admin panel
- Payment gateway
- Online ordering
- Real-time booking system

However, structure the product/category data cleanly so that a backend can be integrated later without redesigning the frontend.

---

# 4. Website Pages

## Current Website Expansion

In addition to the core pages below, the current website includes these conversion-focused pages:

- **Play Packages** (`/packages`)
  - Tiny Explorer: 2-hour play package, CAD $15.99
  - Big Kids Club: 2-hour play package, CAD $17.99
  - Prices are promotional seed data and must be confirmed with the business before being treated as final.

- **Events** (`/events`)
  - Kinder Meet & Greet
  - Back-to-school play day
  - Meet & Make Friends community events
  - Event enquiry CTA
  - Current visit-hours panel

- **Kids Fun** (`/play`)
  - Indoor Playground
  - Ball Pit
  - Toddler Play
  - Imaginative Play
  - Each section includes a description, play-style label, age-oriented guidance, image and Plan a Visit CTA.

The site intentionally does not include Login, Sign Up or Forgot Password pages. This is a static marketing and enquiry website with no authentication requirement.

Create the following pages:

## Home

Main conversion-focused landing page.

Sections:

1. Announcement Bar
2. Navbar
3. Hero
4. Quick Information Cards
5. About Dreamy Play Cafe
6. Why Families Love Us
7. Play Area / Activities
8. Birthday Parties
9. Café / Treats
10. Featured Products
11. Gallery
12. Customer Reviews
13. Location
14. CTA
15. Footer

---

## About Us

Include:

- Business introduction
- Our philosophy
- Family-friendly environment
- Clean and welcoming atmosphere
- Safe play environment
- Community-focused messaging
- Why Dreamy Play Cafe was created

Use warm and emotional copy rather than corporate language.

---

## Play & Activities

Show different play/activity categories.

Example categories:

- Indoor Playground
- Ball Pit
- Toddler Play
- Imaginative Play
- Free Play
- Family Play
- Special Activities

Each activity should have:

- Name
- Short description
- Image placeholder
- Age suitability where appropriate
- Feature tags

---

## Birthday Parties

This should be one of the most important pages.

Hero heading:

**Make Their Birthday Extra Dreamy!**

Explain that Dreamy Play Cafe can provide a space for children's birthday celebrations.

Use the business owner's existing message as inspiration:

"Are you looking for a perfect space to celebrate your little one's birthday? Just shoot us a message and we could handle everything for you!"

Do NOT copy the wording exactly everywhere. Rewrite it professionally.

Include:

### Birthday Party Features

- Kids' play area
- Party space
- Birthday celebrations
- Family-friendly environment
- Setup assistance
- Flexible celebration options
- Food/treat options
- Decoration possibilities
- Friendly staff

Add prominent CTA:

**Plan a Birthday Party**

CTA should open the contact/booking section or phone/contact action.

---

## Café

Create a café section/page.

This should present sample/static café products.

IMPORTANT:

These are seed/demo products only because actual menu information has not yet been provided.

Clearly structure the data so the business owner can replace the products later.

Categories:

### Hot Drinks

Seed products:

- Hot Chocolate
- Coffee
- Latte
- Cappuccino
- Tea

### Cold Drinks

Seed products:

- Iced Coffee
- Fresh Juice
- Fruit Drink
- Bottled Water

### Kids Drinks

Seed products:

- Chocolate Milk
- Apple Juice
- Orange Juice
- Kids Fruit Drink

### Snacks

Seed products:

- Chips
- Popcorn
- Granola Bar
- Cookies
- Pretzels

### Sweet Treats

Seed products:

- Chocolate Chip Cookie
- Cupcake
- Brownie
- Donut
- Mini Muffin

Do not claim these are the actual menu items. Treat them as placeholder/demo seed data.

---

# 5. Product Data Structure

Create a local data file such as:

`src/data/products.js`

Each product should use a structure similar to:

```js
{
  id: 1,
  name: "Hot Chocolate",
  slug: "hot-chocolate",
  category: "hot-drinks",
  description: "A warm and comforting chocolate drink, perfect for kids and families.",
  price: 4.50,
  currency: "CAD",
  image: "/images/products/hot-chocolate.jpg",
  featured: true,
  available: true
}
```

Use CAD pricing.

Suggested seed pricing:

| Category | Product | Price |
|---|---|---:|
| Hot Drinks | Hot Chocolate | $4.50 |
| Hot Drinks | Coffee | $3.50 |
| Hot Drinks | Latte | $5.00 |
| Hot Drinks | Cappuccino | $5.00 |
| Hot Drinks | Tea | $3.50 |
| Cold Drinks | Iced Coffee | $5.00 |
| Cold Drinks | Fresh Juice | $5.00 |
| Cold Drinks | Fruit Drink | $4.00 |
| Cold Drinks | Bottled Water | $2.50 |
| Kids Drinks | Chocolate Milk | $4.00 |
| Kids Drinks | Apple Juice | $3.50 |
| Kids Drinks | Orange Juice | $3.50 |
| Kids Drinks | Kids Fruit Drink | $3.50 |
| Snacks | Chips | $3.00 |
| Snacks | Popcorn | $3.50 |
| Snacks | Granola Bar | $3.00 |
| Snacks | Cookies | $3.00 |
| Snacks | Pretzels | $3.50 |
| Sweet Treats | Chocolate Chip Cookie | $3.00 |
| Sweet Treats | Cupcake | $4.00 |
| Sweet Treats | Brownie | $4.00 |
| Sweet Treats | Donut | $3.50 |
| Sweet Treats | Mini Muffin | $3.00 |

IMPORTANT:

These prices are temporary seed data and should be clearly isolated so they can easily be replaced with real prices later.

---

# 6. Category Data

Create:

`src/data/categories.js`

Use:

```js
[
  {
    id: 1,
    name: "Hot Drinks",
    slug: "hot-drinks",
    description: "Warm and comforting drinks for parents and families.",
    icon: "Coffee"
  },
  {
    id: 2,
    name: "Cold Drinks",
    slug: "cold-drinks",
    description: "Refreshing drinks for playtime and family visits.",
    icon: "GlassWater"
  },
  {
    id: 3,
    name: "Kids Drinks",
    slug: "kids-drinks",
    description: "Fun and refreshing drink options for little ones.",
    icon: "CupSoda"
  },
  {
    id: 4,
    name: "Snacks",
    slug: "snacks",
    description: "Quick bites for hungry little players and parents.",
    icon: "Cookie"
  },
  {
    id: 5,
    name: "Sweet Treats",
    slug: "sweet-treats",
    description: "Little treats to make your visit even sweeter.",
    icon: "CakeSlice"
  }
]
```

---

# 7. Play Activity Data

Create:

`src/data/activities.js`

Seed activities:

### Indoor Playground

Description:

"A fun indoor environment where little ones can explore, move, climb and enjoy active play."

### Ball Pit

Description:

"A colorful ball pit experience designed for playful exploration and endless fun."

### Toddler Play

Description:

"A comfortable play environment where younger children can explore at their own pace."

### Imaginative Play

Description:

"Encourage creativity and imagination through fun, interactive play."

### Free Play

Description:

"Let little ones choose their favorite activities and enjoy playtime their own way."

### Family Play

Description:

"A welcoming space where families can spend quality time together."

---

# 8. Homepage Hero

Create a visually impressive hero section.

Suggested headline:

**Where Little Dreams Come Out to Play**

Supporting text:

"An inviting indoor play café in Brantford where little ones can play, families can relax, and special moments become unforgettable memories."

Primary CTA:

**Plan a Visit**

Secondary CTA:

**Celebrate With Us**

Include a large playground/family image.

If real images are not available, use high-quality placeholder image assets and clearly organize them for easy replacement later.

---

# 9. Quick Information Section

Immediately below hero.

Create four cards:

### Indoor Play
Fun-filled indoor play for little ones.

### Birthday Parties
Celebrate special days in a playful environment.

### Family Friendly
A welcoming space for kids and parents.

### Brantford
Conveniently located at 13 Queen St.

---

# 10. About Section

Heading:

**A Little Place for Big Smiles**

Content should explain:

Dreamy Play Cafe & Co is a welcoming indoor play destination in Brantford created for families to enjoy quality time together.

Focus on:

- Play
- Family
- Fun
- Safety
- Cleanliness
- Community
- Memories

Do not make unsupported claims such as "certified safety facility" or "100% chemical-free" etc.

---

# 11. Why Choose Us

Create six feature cards:

### Safe & Welcoming
A comfortable environment where families can enjoy their time together.

### Clean Play Space
A beautiful and well-maintained environment.

### Kid-Focused Fun
Designed around children's curiosity, movement and imagination.

### Birthday Ready
A space where special celebrations can become memorable.

### Family Friendly
A place parents and children can enjoy together.

### Friendly Service
Warm and welcoming service from the team.

Use playful icons.

---

# 12. Birthday CTA

Create a visually strong section.

Heading:

**Planning a Birthday Party?**

Description:

"Make their special day extra memorable with play, laughter and a celebration designed around your little one."

CTA:

**Ask About Birthday Parties**

Secondary CTA:

**Call +1 437-533-5650**

Phone number should be clickable using:

`tel:+14375335650`

---

# 13. Reviews Section

Use the available Google review information.

Overall rating:

**4.7 / 5**

Reviews:

**37 Google Reviews**

Use these as short testimonial cards.

Review themes from the supplied Google information:

### Review 1
"The space was perfect for a children's birthday party."

### Review 2
"My 3 year old son and 2 year old niece had an awesome time!"

### Review 3
"Very friendly staff and the facility seemed clean."

Additional review sentiment:

- Beautiful and welcoming
- Kids love the play space
- Clean environment
- Friendly owner
- Safe environment
- Highly recommended
- Great experience for families

Do not fabricate reviewer names unless they are intentionally being used as sourced Google review data.

Show:

**4.7 ⭐**

**37 Reviews**

CTA:

**See More Reviews**

This can later link to the Google Business Profile.

---

# 14. Gallery

Create a responsive image gallery.

Categories/tabs:

- All
- Playground
- Café
- Birthday Parties
- Kids
- Interior

Use placeholder image paths such as:

```text
/images/gallery/playground-1.jpg
/images/gallery/playground-2.jpg
/images/gallery/playground-3.jpg
/images/gallery/cafe-1.jpg
/images/gallery/cafe-2.jpg
/images/gallery/birthday-1.jpg
/images/gallery/birthday-2.jpg
/images/gallery/interior-1.jpg
```

The architecture must make replacing placeholder images easy.

---

# 15. Location Section

Heading:

**Come Play With Us**

Address:

**13 Queen St Unit 102  
Brantford, ON N3T 3B1  
Canada**

Phone:

**+1 437-533-5650**

Create buttons:

- Get Directions
- Call Us

Include an embedded map placeholder or Google Maps link area.

The location should be prominently visible on the homepage.

---

# 16. Contact Section

Create a contact form with:

- Full Name
- Email
- Phone
- Number of Children
- Preferred Date
- Message

Dropdown:

**I'm interested in:**

Options:

- General Visit
- Birthday Party
- Private Event
- Café
- Other

Since this is a static website, the form does not need backend functionality.

For now:

- prevent actual submission
- show a friendly success/demo message OR
- provide a mailto/call CTA

Do not pretend that a booking has actually been submitted.

---

# 17. Navigation

Navbar:

Logo:

**Dreamy Play Cafe & Co**

Menu:

- Home
- About
- Kids Fun
- Play Packages
- Events
- Birthday Parties
- Café
- Gallery
- Contact

Right-side CTA:

**Plan a Visit**

Mobile:

- Hamburger menu
- Full-screen/slide-down navigation
- Prominent birthday party CTA

Navbar should become sticky on scroll.

The navigation must make regular play sessions and community events as discoverable as birthday parties. On mobile, keep the primary actions visible: Kids Fun, Play Packages, Events, Birthday Parties and Plan a Visit.

---

# 18. Footer

Footer content:

**Dreamy Play Cafe & Co**

"Where little dreams come out to play."

Contact:

13 Queen St Unit 102  
Brantford, ON N3T 3B1  
Canada

Phone:

+1 437-533-5650

Links:

- Home
- About
- Play
- Birthday Parties
- Café
- Gallery
- Contact

Social placeholders:

- Instagram
- Facebook

Do not invent social media URLs. Use placeholders until official profiles are provided.

Footer copyright:

© 2026 Dreamy Play Cafe & Co. All rights reserved.

---

# 19. Visual Design

## Facebook Content Direction

Use the supplied Facebook posts as real brand references. The recurring visual and messaging direction is:

- Soft pastel watercolor-inspired artwork
- Dreamy rainbow, cloud, star, teddy bear and playful illustration motifs
- Warm community language rather than corporate copy
- Play packages and two-hour sessions as a regular offer
- Kinder Meet & Greet and Meet & Make Friends community programming
- Back-to-school and kindergarten-related seasonal activities
- Guest Wi-Fi and a comfortable parent break while children play
- Clear opening-hours and event-information graphics
- Real children and play-space photography wherever available

The website gallery should support real supplied social assets, not only generic stock or generated illustrations. Store replaceable post images locally under `public/images/` and use descriptive alt text.

The website should have a dreamy children's café aesthetic.

Suggested palette:

### Primary
Soft lavender / dreamy purple

### Secondary
Warm pastel pink

### Accent
Soft sky blue

### Supporting
Cream / off-white

### Text
Dark charcoal

### CTA
A stronger playful purple/pink accent.

Avoid excessive rainbow colors.

The website should look premium rather than like a kindergarten website.

---

# 20. Typography

Use a combination of:

### Headings
A rounded, playful font.

Possible:

- Fredoka
- Baloo 2
- Quicksand
- Nunito

### Body

- Poppins
- Nunito Sans
- Inter

Use rounded typography for headings but maintain excellent readability.

---

# 21. Design Elements

Use:

- Rounded cards
- Soft shadows
- Large border-radius
- Blob shapes
- Cloud-like decorative elements
- Small stars
- Dots
- Soft gradients
- Playful illustrations
- Floating decorative shapes
- Rounded buttons
- Image cards

Do NOT overdo animations.

Animations should be subtle:

- Fade-in
- Slide-up
- Hover lift
- Button hover
- Image zoom
- Gentle floating decorative objects

---

# 22. Responsive Requirements

The website must be fully responsive.

Test:

- Desktop 1920px
- Desktop 1440px
- Laptop 1366px
- Tablet 1024px
- Tablet 768px
- Mobile 430px
- Mobile 390px
- Mobile 375px

Mobile should not simply be a compressed desktop design.

Pay particular attention to:

- Navbar
- Hero
- CTA buttons
- Gallery
- Product cards
- Birthday party section
- Contact form
- Map
- Footer

---

# 23. SEO

Implement basic SEO.

Title:

**Dreamy Play Cafe & Co | Indoor Playground & Birthday Parties in Brantford**

Meta description:

"Discover Dreamy Play Cafe & Co in Brantford, Ontario — a welcoming indoor play café for kids, families and unforgettable birthday celebrations."

Keywords naturally incorporated:

- indoor playground Brantford
- kids indoor playground Brantford
- play cafe Brantford
- kids birthday party Brantford
- children's birthday venue Brantford
- indoor play Brantford
- family activities Brantford

Do not keyword-stuff.

---

# 24. Local Business Information

Use consistent NAP information throughout the website.

**Name:** Dreamy Play Cafe & Co

**Address:**  
13 Queen St Unit 102  
Brantford, ON N3T 3B1  
Canada

**Phone:**  
+1 437-533-5650

Business category:

**Indoor Playground / Play Café**

Add LocalBusiness structured data where appropriate.

Do not invent:

- Opening hours
- Email
- Website
- Social media accounts
- Menu
- Prices
- Party package prices

unless later provided by the business owner.

---

# 25. Important Content Rules

Do not make unsupported claims.

For example, do NOT automatically claim:

- Licensed daycare
- Certified playground
- Government approved
- Allergy-free food
- Halal food
- Gluten-free food
- Security cameras
- Professional childcare
- Drop-off childcare
- Membership program
- Specific age limits
- Specific party package prices
- Specific opening hours

unless the owner provides this information.

The website should use safe general language such as:

"family-friendly", "welcoming", "beautiful", "clean", "playful", and "designed for families."

---

# 26. Component Structure

Create reusable React components.

Suggested:

```text
src/
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── gallery/
│   │   ├── products/
│   │   └── activities/
│   └── logo/
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── AnnouncementBar.jsx
│   │
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── QuickInfo.jsx
│   │   ├── AboutPreview.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── ActivitiesPreview.jsx
│   │   ├── BirthdayCTA.jsx
│   │   ├── CafePreview.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── GalleryPreview.jsx
│   │   ├── Reviews.jsx
│   │   ├── Location.jsx
│   │   └── FinalCTA.jsx
│   │
│   ├── products/
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── CategoryFilter.jsx
│   │
│   ├── gallery/
│   │   ├── GalleryGrid.jsx
│   │   └── Lightbox.jsx
│   │
│   └── common/
│       ├── Button.jsx
│       ├── SectionHeading.jsx
│       ├── Container.jsx
│       └── Badge.jsx
│
├── data/
│   ├── products.js
│   ├── categories.js
│   ├── activities.js
│   ├── reviews.js
│   └── gallery.js
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Play.jsx
│   ├── BirthdayParties.jsx
│   ├── Cafe.jsx
│   ├── Gallery.jsx
│   └── Contact.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 27. Future Backend Compatibility

Although this version is static, write the frontend in a way that future API integration is straightforward.

Instead of hardcoding products directly inside components:

BAD:

```jsx
<h3>Hot Chocolate</h3>
<p>$4.50</p>
```

Use:

```jsx
products.map(product => (
  <ProductCard
    key={product.id}
    product={product}
  />
))
```

This allows:

```text
Static Data
     ↓
products.js
     ↓
Product Components
```

to later become:

```text
API
 ↓
Products Endpoint
 ↓
React Query / Fetch
 ↓
Product Components
```

without redesigning the UI.

---

# 28. UX Requirements

Every important page should have clear CTAs.

Primary conversion actions:

**Plan a Visit**

**Birthday Party**

**Call Us**

**Get Directions**

**Contact Us**

On mobile, phone number should be clickable.

Avoid excessive popup modals.

Do not force users to create accounts.

Do not create a fake checkout system.

---

# 29. Accessibility

Implement:

- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Proper form labels
- Good color contrast
- Mobile-friendly tap targets

---

# 30. Performance

Optimize for fast loading.

Use:

- Lazy-loaded images
- Responsive image sizing
- WebP where possible
- Minimal dependencies
- No unnecessary animation libraries
- No huge video backgrounds
- Component-based loading
- Optimized assets

Target a strong Lighthouse score.

---

# 31. Final Homepage Flow

The homepage should tell a story in this order:

```text
Visitor lands
      ↓
Beautiful kids/play hero
      ↓
Immediately understands what Dreamy Play Cafe is
      ↓
Sees Play + Birthday Party benefits
      ↓
Builds trust through reviews
      ↓
Sees beautiful gallery
      ↓
Sees café/treat options
      ↓
Finds location
      ↓
Strong CTA
      ↓
Call / Visit / Birthday Inquiry
```

---

# 32. Brand Messaging

Use these messaging concepts throughout the site:

**Primary Brand Message:**

"Where Little Dreams Come Out to Play."

Supporting concepts:

- Play
- Explore
- Imagine
- Celebrate
- Connect
- Create memories

Possible section headlines:

**Big Adventures for Little Explorers**

**A Place to Play, Relax & Connect**

**Make Their Birthday Extra Dreamy**

**Little Treats, Happy Moments**

**Made for Play. Made for Families.**

**Come Play With Us**

---

# 33. Important Implementation Instruction

Build the actual website, not just a design mockup.

The final result must include:

- Fully working navigation
- Responsive layouts
- All pages
- Reusable components
- Static seed data
- Product categories
- Product cards
- Activity cards
- Reviews
- Gallery
- Contact form
- Birthday CTA
- Phone CTA
- Directions CTA
- SEO metadata
- Proper loading states where relevant
- Empty states where relevant
- Mobile navigation

Use realistic placeholder images where actual business images are unavailable, but make all images easy to replace later.

Do not leave major sections as "Coming Soon."

The website should look like a **real, production-quality website for a Brantford children's indoor play café**, even though the current version is static.

Before finishing, verify the complete website on desktop and mobile and fix:

- Overflow
- Broken links
- Layout shifts
- Missing images
- Incorrect spacing
- Mobile navigation issues
- Button alignment
- Typography issues
- Accessibility issues
- Console errors

The final website should feel **warm, premium, playful, trustworthy and conversion-focused**, with birthday parties and indoor play as the primary business offerings.
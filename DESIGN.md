# Design System: Technical Nexus (IEEE Student Branch Portal)

## 1. Color Palette

### 1.1 Brand Colors
- **Primary:** `#00629B` (Main CTAs, active navigation, brand accents)
- **Secondary:** `#243746` (Headers, footers, high-level hierarchy)
- **Tertiary:** `#00B5E2` (Data visualization, badges, hover states)

### 1.2 Neutral & Surface Colors
- **Background:** `#f7f9fb`
- **Surface:** `#f7f9fb`
- **Surface Dim:** `#d8dadc`
- **Surface Bright:** `#f7f9fb`
- **Surface Container Lowest:** `#ffffff` (Base surfaces, neutral foundation)
- **Surface Container Low:** `#f2f4f6`
- **Surface Container:** `#eceef0`
- **Surface Container High:** `#e6e8ea`
- **Surface Container Highest:** `#e0e3e5`
- **Surface Tint:** `#02639c`
- **Surface Variant:** `#e0e3e5`
- **Inverse Surface:** `#2d3133`
- **Inverse On Surface:** `#eff1f3`

### 1.3 Text & Content Colors
- **On Background:** `#191c1e`
- **On Surface:** `#191c1e`
- **On Surface Variant:** `#414750`
- **On Primary:** `#ffffff`
- **On Primary Container:** `#badbff`
- **On Secondary:** `#ffffff`
- **On Secondary Container:** `#526575`
- **On Tertiary:** `#ffffff`
- **On Tertiary Container:** `#9be1ff`

### 1.4 State & Feedback Colors
- **Error:** `#ba1a1a`
- **On Error:** `#ffffff`
- **Error Container:** `#ffdad6`
- **On Error Container:** `#93000a`
- **Primary Container:** `#00629b`
- **Secondary Container:** `#cee2f6`
- **Tertiary Container:** `#006681`

### 1.5 Outline Colors
- **Outline:** `#717881`
- **Outline Variant:** `#c0c7d1`

### 1.6 Fixed Color Roles
- **Primary Fixed:** `#cee5ff`
- **Primary Fixed Dim:** `#98cbff`
- **On Primary Fixed:** `#001d33`
- **On Primary Fixed Variant:** `#004a77`
- **Secondary Fixed:** `#d1e5f8`
- **Secondary Fixed Dim:** `#b5c9dc`
- **On Secondary Fixed:** `#091d2b`
- **On Secondary Fixed Variant:** `#364958`
- **Tertiary Fixed:** `#baeaff`
- **Tertiary Fixed Dim:** `#5cd4ff`
- **On Tertiary Fixed:** `#001f29`
- **On Tertiary Fixed Variant:** `#004d62`
- **Inverse Primary:** `#98cbff`

---

## 2. Typography

All typography is set in the **Poppins** typeface to maintain a clean, geometric, and modern feel.

### 2.1 Display & Headlines
- **Headline XL**
  - Font Family: `Poppins`
  - Font Size: `48px`
  - Font Weight: `700`
  - Line Height: `1.2`
  - Letter Spacing: `-0.02em`
- **Headline LG**
  - Font Family: `Poppins`
  - Font Size: `32px`
  - Font Weight: `600`
  - Line Height: `1.3`
- **Headline LG (Mobile)**
  - Font Family: `Poppins`
  - Font Size: `28px`
  - Font Weight: `600`
  - Line Height: `1.3`
- **Headline MD**
  - Font Family: `Poppins`
  - Font Size: `24px`
  - Font Weight: `600`
  - Line Height: `1.4`

### 2.2 Body & Labels
- **Body LG**
  - Font Family: `Poppins`
  - Font Size: `18px`
  - Font Weight: `400`
  - Line Height: `1.6`
- **Body MD**
  - Font Family: `Poppins`
  - Font Size: `16px`
  - Font Weight: `400`
  - Line Height: `1.6`
- **Label MD**
  - Font Family: `Poppins`
  - Font Size: `14px`
  - Font Weight: `500`
  - Line Height: `1.2`
  - Letter Spacing: `0.05em`

---

## 3. Spacing & Layout

The rhythm is built on an **8px base unit**, utilizing a fluid 12-column grid for desktop (capped at 1280px) and a 4-column grid for mobile devices.

### 3.1 Base Tokens
- **Base Unit:** `8px`
- **Gutter Width:** `24px` (Desktop) / `16px` (Mobile)
- **Container Max Width:** `1280px`

### 3.2 Margins & Padding
- **Margin Desktop:** `64px` (side margins)
- **Margin Mobile:** `20px` (side margins)
- **Vertical Section Padding:** Minimum `80px` (10 units)

---

## 4. Radii & Shapes

Shape language is defined as **Rounded**, providing an approachable modern feel paired with structured engineered aesthetics.

- **Small (sm):** `0.25rem`
- **Default:** `0.5rem` (Used for standard buttons and interactive elements)
- **Medium (md):** `0.75rem`
- **Large (lg):** `1rem` (Used for larger containers, feature cards, modal windows)
- **Extra Large (xl):** `1.5rem`
- **Full (Pill):** `9999px` (Used for chips, badges)

---

## 5. Elevation & Depth

Tonal layers and ambient diffused shadows establish depth.

- **Level 0 (Base):** Main background (typically white or light gray).
- **Level 1 (Cards/Inputs):**
  - Border: `1px solid #E2E8F0`
  - Shadow: `0 2px 4px rgba(0, 0, 0, 0.05)` (Y: 2px, Blur: 4px, 5% opacity)
- **Level 2 (Hover/Navigation):**
  - Shadow: `0 8px 16px rgba(0, 0, 0, 0.10)` (Y: 8px, Blur: 16px, 10% opacity)
- **Backdrop:** `10%` Primary Blue overlay for images.

---

## 6. Components

- **Cards:** 
  - Top tier: Tech-focused imagery (optional blue tint overlay).
  - Middle tier: Headline + descriptive body text (ample padding).
  - Bottom tier: Dedicated action area with 1px divider, full-width Primary Blue button.
- **Buttons:**
  - *Primary:* Solid `#00629B` background, white Poppins Semibold text, `0.5rem` radius.
  - *Secondary:* Outlined with a 2px `#00629B` border, `0.5rem` radius.
- **Navigation:** Top-aligned, white background. Active links use a 3px bottom border in Primary Blue (`#00629B`).
- **Input Fields:** Light gray background (`#F1F5F9`) with 1px bottom border. On focus, border transitions to Primary Blue with a subtle glow.
- **Chips / Badges:** Pill-shaped (`9999px` radius) with light tint background (`#E6F0F5`) and Primary Blue text.
- **Imagery:** High-resolution, desaturated hardware/circuit photography. Apply a grid or dot-matrix overlay.

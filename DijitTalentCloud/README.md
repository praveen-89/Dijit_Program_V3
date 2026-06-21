# DIJIT Talent Cloud

**Enterprise HR-Tech SaaS Platform — Frontend Prototype**

A production-ready, glassmorphism-themed UI system built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies — just clean, performant code.

---

## 🚀 Getting Started

Simply open `DijitTalentCloud.html` in any modern browser. No build step required.

### Project Structure

```
/DijitTalentCloud
│
├── DijitTalentCloud.html          ← Master Design System & Component Showcase
│
├── pages/
│   ├── signup.html                ← Account creation (split layout)
│   ├── login.html                 ← Authentication
│   ├── otp-verification.html      ← Email verification with countdown
│   ├── forgot-password.html       ← Password reset with success state
│   ├── company-profile.html       ← Company onboarding (multi-step)
│   ├── consultancy-profile.html   ← Consultancy onboarding (multi-step)
│   └── dashboard.html             ← Full dashboard with sidebar
│
├── css/
│   ├── variables.css              ← Design tokens, reset, accessibility
│   ├── components.css             ← Buttons, inputs, cards, alerts, badges
│   ├── layout.css                 ← Grid, header, footer, breadcrumb, nav
│   ├── animations.css             ← Keyframes, micro-interactions, skeleton
│   └── style.css                  ← Main import file
│
├── js/
│   ├── app.js                     ← Mobile nav, password toggle, scroll reveal
│   ├── validation.js              ← Form validation with ARIA error handling
│   ├── otp.js                     ← OTP multi-input keyboard logic
│   ├── dashboard.js               ← Dashboard widget animations
│   └── animations.js              ← IntersectionObserver scroll animations
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
│
└── README.md
```

---

## 🎨 Design System

| Token          | Value                                    |
|----------------|------------------------------------------|
| Primary        | `#6366F1` (Indigo)                       |
| Secondary      | `#06B6D4` (Cyan)                         |
| Accent         | `#F43F5E` (Rose)                         |
| Background     | `#0B0F19` (Deep Space)                   |
| Font           | Inter (Google Fonts)                     |
| Glass BG       | `rgba(255, 255, 255, 0.03)` + blur(12px) |

---

## ♿ Accessibility

- Skip-to-content links on every page
- Full ARIA roles, labels, and live regions
- `prefers-reduced-motion` support
- Keyboard-navigable mobile menus (Escape to close)
- Focus-visible ring styling
- `aria-invalid` and `role="alert"` for form errors

---

## 📱 Responsive Breakpoints

| Breakpoint | Target        |
|------------|---------------|
| ≤ 1024px   | Tablet        |
| ≤ 768px    | Mobile        |
| ≤ 640px    | Small mobile  |
| ≤ 400px    | OTP input     |

---

## 🔗 Page Flow

```
Signup → OTP Verification → Company/Consultancy Profile → Dashboard
Login → Dashboard
Forgot Password → (email sent) → Login
```

---

## 📋 Technologies

- **HTML5** — Semantic elements
- **CSS3** — Custom properties, Grid, Flexbox, Glassmorphism
- **Vanilla JavaScript** — No frameworks
- **Phosphor Icons** — Premium icon set (CDN)
- **Google Fonts** — Inter typeface

---

© 2026 DIJIT Talent Cloud. All rights reserved.

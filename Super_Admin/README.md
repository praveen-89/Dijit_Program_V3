# DIJIT Talent Cloud — Super Admin Portal

## Overview

The Super Admin Portal is the internal control center for the DIJIT operations team. It provides comprehensive management of companies, consultancies, recruiters, jobs, candidates, subscriptions, billing, sales CRM, and platform analytics.

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Modular CSS with custom properties (variables)
- **Vanilla JavaScript** — No frameworks
- **Chart.js** (CDN) — Analytics charts
- **Lucide Icons** (CDN) — Icon library

## Project Structure

```
Super_Admin/
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
├── css/
│   ├── variables.css      # Design tokens
│   ├── layout.css          # Sidebar, header, content layout
│   ├── components.css      # Reusable UI components
│   ├── animations.css      # Keyframes, loaders
│   └── style.css           # Master stylesheet (imports all)
├── js/
│   ├── app.js              # Core: sidebar, dropdowns, command palette
│   ├── dashboard.js        # Dashboard-specific logic
│   ├── charts.js           # Chart.js configurations
│   ├── tables.js           # Reusable table rendering
│   ├── analytics.js        # Usage analytics (Phase 2)
│   └── crm.js              # Kanban CRM logic (Phase 3)
├── pages/
│   ├── dashboard.html
│   ├── user-management.html
│   ├── company-management.html
│   ├── consultancy-management.html
│   ├── job-management.html
│   ├── candidate-management.html
│   ├── usage-analytics.html    (Phase 2)
│   ├── subscriptions.html      (Phase 2)
│   ├── billing.html            (Phase 2)
│   ├── sales-crm.html          (Phase 3)
│   ├── reports.html            (Phase 3)
│   └── settings.html           (Phase 3)
├── index.html              # Redirect to dashboard
└── README.md
```

## Development Phases

### Phase 1 ✅ (Complete)
- Dashboard with 12 KPI cards, charts, activity timeline
- User Management with tabs, filters, bulk actions, modals
- Company Management with detail drawer
- Consultancy Management with detail drawer
- Job Management with status tabs, filters, job detail drawer
- Candidate Database with resume scores, profile preview drawer
- Command Palette (Ctrl+K) on all pages
- Reusable design system and component library

### Phase 2 (Planned)
- Usage Analytics
- Subscription Management
- Billing & Payments

### Phase 3 (Planned)
- Sales CRM (Kanban board)
- Reports & Analytics
- Settings

## Getting Started

Simply open `index.html` in a browser or serve the `Super_Admin/` folder with any static server. No build step required.

```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx serve .
```

## Design System

The CSS variables in `variables.css` define the complete design system:
- **Colors**: Primary (#6366F1), Secondary (#06B6D4), semantic colors
- **Typography**: Inter font family
- **Spacing**: 0.25rem – 3rem scale
- **Shadows**: sm / md / lg / card / dropdown
- **Borders**: sm / md / lg / full radius scale

## Key Features

- Collapsible sidebar with submenu support
- Global command palette (Ctrl+K / ⌘K)
- Quick Actions dropdown in header
- Responsive layout with mobile drawer
- Slide-out detail drawers for companies, consultancies, jobs, and candidates
- Tab navigation with count badges
- Table toolbar with search and filter dropdowns
- Pagination component
- Modal dialogs for create/edit forms
- Activity timeline component
- KPI cards with trend indicators

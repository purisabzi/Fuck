# chore: remove dead code, unused components & dependencies

## What changed

This PR removes all unused, dead, and duplicate code from the codebase with zero functional impact.

---

## Files Deleted

### Unused component files
- `client/src/components/Map.tsx` — Google Maps component, never imported anywhere
- `client/src/components/ManusDialog.tsx` — Dialog component, never imported anywhere
- `client/src/const.ts` — OAuth/login utilities not used in this app

### Unused shadcn/ui components (44 files)
The project uses exactly **3** UI components: `button`, `sonner`, `tooltip`.
All others were scaffolding that never got used:

```
accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb,
button-group, calendar, card, carousel, chart, checkbox, collapsible,
command, context-menu, dialog, drawer, dropdown-menu, empty, field, form,
hover-card, input, input-group, input-otp, item, kbd, label, menubar,
navigation-menu, pagination, popover, progress, radio-group, resizable,
scroll-area, select, separator, sheet, sidebar, skeleton, slider, spinner,
switch, table, tabs, textarea, toggle, toggle-group
```

### Unused hooks
- `hooks/useMobile.tsx` — only used by sidebar (which is deleted)
- `hooks/usePersistFn.ts` — only used by Map.tsx and useComposition (both deleted)
- `hooks/useComposition.ts` — only used by Input/Textarea (both deleted)

---

## Dependencies Removed (package.json)

~20 unused npm packages stripped:

| Package | Why removed |
|---|---|
| `framer-motion` | Not used in any active file |
| `recharts` | chart.tsx deleted |
| `embla-carousel-react` | carousel.tsx deleted |
| `react-day-picker` | calendar.tsx deleted |
| `cmdk` | command.tsx deleted |
| `input-otp` | input-otp.tsx deleted |
| `react-resizable-panels` | resizable.tsx deleted |
| `vaul` | drawer.tsx deleted |
| `axios` | Not used in any active file |
| `@hookform/resolvers` + `react-hook-form` | form.tsx deleted |
| `zod` | No schemas in use |
| `nanoid` | Not used |
| `streamdown` | Not used |
| `@types/google.maps` | Map.tsx deleted |
| Various unused `@radix-ui/*` | Corresponding UI components deleted |

---

## Files NOT changed

| File | Status |
|---|---|
| `pages/Home.tsx` | ✅ Identical — zero changes |
| `App.tsx` | ✅ Identical |
| `components/ErrorBoundary.tsx` | ✅ Identical |
| `contexts/ThemeContext.tsx` | ✅ Identical |
| `pages/NotFound.tsx` | ✅ Identical |
| `components/ui/button.tsx` | ✅ Identical |
| `components/ui/sonner.tsx` | ✅ Identical |
| `components/ui/tooltip.tsx` | ✅ Identical |
| `client/src/index.css` | ✅ Identical |
| `netlify.toml` | ✅ Identical |
| `vite.config.ts` | ✅ Identical |
| `server/index.ts` | ✅ Identical |

---

## Impact

- **Before:** 56+ files, ~50 npm deps
- **After:** 20 files, ~12 npm deps
- **Build output:** Identical (unused code was tree-shaken anyway, but now it's clean)
- **Install time:** Significantly faster (fewer packages to download)
- **Functionality:** Zero change — app works identically

---

## Checklist

- [x] No functionality changed
- [x] No runtime errors introduced
- [x] All active imports traced and verified
- [x] Build config unchanged
- [x] Netlify deploy config unchanged

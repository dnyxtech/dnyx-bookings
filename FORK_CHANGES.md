# Fork changes (Dnyx Booking)

Every file this fork changes compared with upstream [calcom/cal.diy](https://github.com/calcom/cal.diy).
Keep this list current so upstream syncs stay easy to review. Code edits are marked in the source with `DNYX-PATCH: branding`.

| Change | Files | Why |
| --- | --- | --- |
| Brand name and company in the example env | `.env.example` (`NEXT_PUBLIC_APP_NAME="Dnyx Booking"`, `EMAIL_FROM_NAME='Dnyx Booking'`, `NEXT_PUBLIC_COMPANY_NAME="Dnyx"`) | The name is configured through env. Each deployment's `.env` (never committed) must set the same values, plus `NEXT_PUBLIC_SENDGRID_SENDER_NAME="Dnyx Booking"`. |
| Header/app logo replaced in place (same names, same 84x26 size) | `apps/web/public/calcom-logo-white-word.svg`, `apps/web/public/cal-logo-word-black.svg`, `apps/web/public/cal-logo-word.svg` | `LOGO`/`LOGO_DARK` in `packages/lib/constants.ts` point to these. Despite its name, `calcom-logo-white-word.svg` is the dark logo used on light backgrounds. |
| Dark-mode logo replaced with the white logo | `apps/web/public/cal-logo-word-dark.svg` | Upstream's only light-on-dark wordmark (`#fafafa`). |
| Icon replaced in place (56x56) | `apps/web/public/cal-com-icon-white.svg`, `apps/web/public/cal-com-icon.svg` | `LOGO_ICON` and the OAuth authorize page. `cal-com-icon.svg` keeps upstream's dark rounded tile. |
| Favicons and app icons replaced in place (same sizes; `.ico` keeps the same frame sizes) | `apps/web/app/favicon.ico`, `apps/web/public/favicon.ico`, `apps/web/public/favicon-16x16.png`, `apps/web/public/favicon-32x32.png`, `apps/web/public/apple-touch-icon.png`, `apps/web/public/android-chrome-192x192.png`, `apps/web/public/android-chrome-256x256.png`, `apps/web/public/android-chrome-384x384.png`, `apps/web/public/android-chrome-512x512.png`, `apps/web/public/mstile-70x70.png`, `apps/web/public/mstile-144x144.png`, `apps/web/public/mstile-150x150.png`, `apps/web/public/mstile-310x150.png`, `apps/web/public/mstile-310x310.png`, `apps/web/public/safari-pinned-tab.svg` | Browser tab, bookmarks, home-screen and Windows tile icons. Upstream tile shape and colours are kept; only the glyph is swapped for the Dnyx mark. |
| Email logo replaced in place | `apps/web/public/emails/logo.png` (123x38), `apps/web/public/emails/CalLogo@2x.png` (178x38, unreferenced upstream; replaced so no old logo is served) | Logo in the header of every email. |
| Logo alt/title text and dark-mode rendering (code, `DNYX-PATCH`) | `packages/ui/components/logo/Logo.tsx` | `alt`/`title` were hard-coded "Cal.diy" and now use `APP_NAME`. In dark mode, `dark:invert` became `dark:brightness-0 dark:invert`, which renders the logo all white: a plain invert would turn the magenta mark green. No new logo spot. |
| Login page heading (code, `DNYX-PATCH`) | `apps/web/modules/auth/login-view.tsx` | The heading in the login card's logo spot was hard-coded "Cal.diy" and now shows `APP_NAME`. |
| This file | `FORK_CHANGES.md` | Change log for the fork. |

## Brand source

Assets were generated from the supplied Dnyx Booking logo with `D:\Dnyx-bookings\tools\make-brand.py`, which is kept outside the repo. Small wordmarks (84x26, emails) use the mark plus "dnyx". The "booking" subtitle is left out because it would be under 4px tall at those sizes.

## Local dev notes (Windows)

- `packages/prisma/.env` is a git symlink. On Windows it checks out as a text file, so load the root `.env` into the shell before running Prisma or `yarn dev`, as the README's Windows note describes.
- `core.autocrlf=false` is set for this repo so the generated files in `packages/app-store/*.generated.ts` don't show up as line-ending changes.

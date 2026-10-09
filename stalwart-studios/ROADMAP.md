# Stalwart site roadmap

## Before next Play / app store release — merchant disclosure review

**Status:** Deferred (public site intentionally minimized contact details as of 2026-10.)

Removing street address and phone from public website pages may conflict with **Google Play merchant disclosure** expectations and some **DPDP grievance** interpretations. Product-specific policies and store listings often still need a clear contact path.

**Before deploy to production or store updates, confirm:**

- Google Play Console requirements for developer contact (email, address, phone) vs. what appears on the live site and in each app’s store listing.
- Whether email + Udyam on contact/company legal pages is sufficient for your grievance officer obligations.

**Easy revert:** Full merchant fields remain in [`lib/site.ts`](lib/site.ts) (`phone`, `phoneTel`, `address`, `legalName`). To restore on contact/legal pages, re-add the removed blocks in:

- `app/contact/page.tsx`
- `app/privacy-policy/page.tsx`
- `app/terms-and-conditions/page.tsx`
- `components/Footer.tsx` (address line)

See git history for the “about footer legal cleanup” change set.

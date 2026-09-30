# Hero geometry restore point

Created **2026-09-29** before the refined full-field geometry pass (no hero dot field).

## Files in this folder

- `HeroGrid.tsx` — hero background SVG / motion
- `HeroSection.tsx` — hero copy, stats, layout

## Revert manually

From repo root (`StalwartStudios`):

```powershell
Copy-Item -Force "stalwart-studios\components\.restore-points\hero-geometry-pre-refactor\HeroGrid.tsx" "stalwart-studios\components\HeroGrid.tsx"
Copy-Item -Force "stalwart-studios\components\.restore-points\hero-geometry-pre-refactor\HeroSection.tsx" "stalwart-studios\components\HeroSection.tsx"
```

## Revert with git

Annotated tag: `restore/hero-geometry-pre-refactor`

```powershell
git checkout restore/hero-geometry-pre-refactor -- stalwart-studios/components/HeroGrid.tsx stalwart-studios/components/HeroSection.tsx
```

Or restore from the checkpoint commit (same tag points at it):

```powershell
git show restore/hero-geometry-pre-refactor:stalwart-studios/components/HeroGrid.tsx | Set-Content -Encoding utf8 stalwart-studios/components/HeroGrid.tsx
```

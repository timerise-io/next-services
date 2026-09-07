# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2026-09-07

### Added

- Vercel Web Analytics via `@vercel/analytics` in the root layout
- `.nvmrc` pinning the Node.js 24 runtime
- Flat ESLint configuration (`eslint.config.mjs`) as expected by eslint-config-next v16
- Turbopack configuration in `next.config.mjs`
- Environment variable setup step in README (the tracked `.env` ships placeholders only, so a fresh clone starts but every API request fails until `.env.local` sets the endpoint)

### Changed

- **BREAKING**: Node.js 24 is now required (`engines.node: "24.x"`); builds on Node 18, 20, and 22 are no longer supported
- **BREAKING**: Bun replaces npm as the package manager — `bun.lock` supersedes `package-lock.json` and the version is pinned via `packageManager: "bun@1.2.23"`. Running `npm install` recreates a competing lockfile and desyncs the tree
- Upgraded to Next.js 16.3.4, React 19.2.8, Tailwind CSS 4.3.3, i18next 26 with react-i18next 17, and TypeScript 6
- API routes and page components updated for the Next.js 16 async `params` and `searchParams` contract
- Migrated `globals.css` to Tailwind v4 CSS-first import syntax with the `@tailwindcss/postcss` plugin
- `lint` script now invokes `eslint` directly, since Next.js 16 removed `next lint`
- Documentation corrected to state that booking is handed off to the external Timerise booking app rather than completed in this application

### Removed

- Hardcoded Bloomy Health whitelabel configuration (branding, colors, terms and privacy URLs) and its production domain mapping; `ORGANIZATIONS` now maps `localhost:3000` only
- Legacy `.eslintrc.json`, replaced by the flat config

### Fixed

- `lint` script, which was broken after Next.js 16 removed the `next lint` command
- ESLint import resolution under Bun by listing `unrs-resolver` in `trustedDependencies`, so its postinstall selects the required native binary

### Security

- Cleared all 9 outstanding dependency audit advisories via the dependency upgrade

## [0.2.0] - 2025-12-13

### Added

- Custom primary and secondary colors configuration for whitelabel support
- Featured label configuration for organization and project marketplaces
- Multi-language support with 18 translations (bg, cs, de, el, en, es, fi, fr, hu, it, nb, nl, pl, pt, sk, sv, tr, uk)
- Internationalization using i18next v25.7.2 with browser language detection
- Type-safe environment variables using @t3-oss/env-nextjs
- Comprehensive documentation in CLAUDE.md with architecture details

### Changed

- Updated to Next.js 16.0.10 with React 19
- Upgraded Tailwind CSS to v4.1.18
- Upgraded dependencies to latest versions (Headless UI 2.2.9, SWR 2.3.7, Zod 4.1.13)
- Enhanced README.md with detailed project structure and feature descriptions
- Improved responsive design across components

### Fixed

- Services layout rendering issues
- React Server Components CVE vulnerabilities patched

### Security

- Fixed Next.js and React CVE vulnerabilities by updating to secure versions
- Implemented Zod schema validation for environment variables

## [0.1.0] - 2024-07-14

### Added

- Initial Next.js 14 marketplace application
- Organization and project-based service browsing
- Whitelabel domain-based configuration system
- GraphQL integration with Timerise.io API
- SWR-based data fetching and caching
- Search and label filtering for services
- Headless UI components with Tailwind CSS styling
- TypeScript support with strict mode
- ESLint configuration for code quality

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

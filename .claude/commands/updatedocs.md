---
description: "Sync documentation files with actual codebase state"
allowed-tools: ["Bash", "Read", "Edit", "Grep", "Glob"]
---

# Update Documentation Command

This command synchronizes all documentation files (README.md, CLAUDE.md) with the actual codebase state, ensuring documentation accurately reflects implemented features, dependencies, and project structure.

## Usage

- `/updatedocs` - Analyze codebase and sync all documentation files

## Process

**IMPORTANT**: When the user says "update docs" or runs `/updatedocs`, this means:

1. **Analyze the current codebase state** to gather accurate information:
   - Read `package.json` for dependencies, versions, and scripts
   - Scan folder structure (`src/app/`, `src/components/`, `src/hooks/`, `src/models/`, `src/utlis/`, `src/context/`)
   - Count files by directory
   - Verify configuration files (tsconfig.json, .eslintrc.json, tailwind.config.ts)
   - Check internationalization setup (public/locales/)
   - Review API route structure
   - Check whitelabel configuration

2. **Update README.md** with accurate project information:
   - **Technology Stack**: Update all dependency versions from package.json
   - **Project Structure**: Update file counts and folder organization
   - **Features List**: Verify implemented features (Browse Services, Bookings, i18n, etc.)
   - **Configuration Details**: Verify environment variables and setup
   - **Scripts**: Ensure npm scripts are accurate

3. **Update CLAUDE.md** (AI assistant instructions):
   - **Tech Stack Section**: Update dependency versions
   - **Project Structure**: Update file counts by directory
   - **Architecture Sections**: Verify accuracy of:
     - Whitelabel system description
     - Routing structure
     - Data flow (API routes → Models → SWR hooks → Components)
     - i18n configuration
   - **Common Patterns**: Ensure examples match current implementation

## Codebase Analysis Checklist

### Dependencies Analysis

Run these commands to gather accurate information:

```bash
# Get all dependencies with versions
cat package.json | grep -A 30 '"dependencies"'
cat package.json | grep -A 15 '"devDependencies"'

# Get project metadata
cat package.json | grep '"name"\|"version"\|"private"'
```

### Folder Structure Analysis

Use Glob and Bash to count files:

```bash
# Count TypeScript files in each directory
find src/app -name "*.tsx" -o -name "*.ts" | wc -l
find src/components -name "*.tsx" -o -name "*.ts" | wc -l
find src/hooks -name "*.ts" | wc -l
find src/models -name "*.ts" | wc -l
find src/utlis -name "*.ts" | wc -l
find src/context -name "*.ts" | wc -l

# List app structure
ls -la src/app/
ls -la src/app/api/

# List components
ls -la src/components/
ls -la src/components/Organization/
ls -la src/components/Project/

# Count locale directories
ls public/locales/ | wc -l
```

### Configuration Verification

Check configuration files exist and are correctly set up:

- **TypeScript**: Check `tsconfig.json` for `@/*` path alias
- **Tailwind CSS**: Check `tailwind.config.ts` or verify version in package.json
- **ESLint**: Check `.eslintrc.json` for Next.js config
- **Environment**: Check `.env` file for required variables
- **i18n**: Check `src/utlis/i18n.ts` for supported languages
- **Whitelabel**: Check `src/utlis/Whitelabel.ts` for domain mappings

## README.md Update Sections

### Technology Stack

Update these subsections with actual versions from package.json:

- **Framework**: Next.js version
- **Language**: TypeScript version
- **UI Libraries**: React, Tailwind CSS, Headless UI versions
- **Internationalization**: i18next, react-i18next versions
- **Data Fetching**: SWR version
- **Schema Validation**: Zod version
- **Utilities**: Lodash version
- **Markdown**: React Markdown version

### Scripts

Verify all npm scripts are documented:

```bash
npm run dev    # Development server
npm run build  # Production build
npm start      # Production server
npm run lint   # ESLint
```

### Features

Ensure these features are accurately documented:

- Browse Services (with actual implementation details)
- Bookings (Timerise.io API integration)
- Responsiveness (confirm Tailwind + react-responsive)
- Internationalization (count supported languages)
- Performance (SWR data fetching)
- Security (Zod validation, TypeScript)

### Requirements

Verify Node.js and npm version requirements are accurate.

## CLAUDE.md Update Sections

### Project Overview

Ensure the description accurately reflects:
- Next.js version (14.2.5)
- Purpose (marketplace for Timerise.io services)
- Whitelabel capability (domain-based organization mapping)

### Development Commands

Verify all commands are accurate and complete.

### Environment Setup

Check that environment variables match `src/utlis/Env.ts`:
- `NEXT_PUBLIC_TIMERISE_API_ENDPOINT` (required)
- `TIMERISE_API_KEY` (optional)

### Architecture Sections

#### Whitelabel System
- Verify `src/utlis/Whitelabel.ts` path is correct
- Check if domain mappings example is up to date
- Confirm context path: `src/context/Whitelabel.ts`

#### Routing Structure
- Verify routes: `/` (organization) and `/[projectId]` (project)
- Confirm redirect behavior for unmapped domains

#### Data Flow
1. API Routes count and structure:
   ```bash
   find src/app/api -name "route.ts" | wc -l
   ```
2. Models count:
   ```bash
   ls src/models/*.ts | wc -l
   ```
3. SWR Hooks count:
   ```bash
   ls src/hooks/SWR/*.ts | wc -l
   ```
4. Components organization (Organization vs Project)

#### Internationalization
- Verify supported languages list matches `src/utlis/i18n.ts`
- Count actual locale directories:
  ```bash
  ls public/locales/ | wc -l
  ```
- Confirm detection order and configuration

### TypeScript Configuration

Verify path alias configuration and strict mode status.

### Key Data Models

Ensure type definitions in `src/utlis/Types.ts` are accurately described:
- `WhitelabelContextType`
- `OrganizationInterface`
- `ProjectInterface`
- `ServiceInterface`

## Common Documentation Discrepancies to Fix

### 1. Dependency Versions

**Issue**: Documentation shows outdated versions
**Actual**: package.json has current versions
**Fix**: Sync all version numbers with package.json

### 2. File Counts by Directory

**Issue**: Documentation shows incorrect file counts
**Actual**: Count actual files in each src/ subdirectory
**Fix**: Update structure sections with accurate counts

### 3. Supported Languages

**Issue**: i18n language list might be outdated
**Actual**: Check both `src/utlis/i18n.ts` supportedLngs array and `public/locales/` directories
**Fix**: Ensure both match and update documentation

### 4. API Route Structure

**Issue**: API routes might have changed
**Actual**: Scan `src/app/api/` structure
**Fix**: Update data flow section with current route organization

### 5. Component Organization

**Issue**: Component structure might have evolved
**Actual**: Check `src/components/`, `src/components/Organization/`, `src/components/Project/`
**Fix**: Update component organization description

### 6. Whitelabel Domains

**Issue**: Domain mappings example might be outdated or include commented examples
**Actual**: Check `src/utlis/Whitelabel.ts` ORGANIZATIONS constant
**Fix**: Update with current active mappings (excluding commented localhost examples)

### 7. Environment Variables

**Issue**: Required environment variables might have changed
**Actual**: Check `src/utlis/Env.ts` schema
**Fix**: Ensure .env template and documentation match actual schema

### 8. SWR Hooks Inventory

**Issue**: Hook list might be incomplete
**Actual**: Count and list files in `src/hooks/SWR/`
**Fix**: Update if new hooks were added

### 9. Tailwind CSS Version

**Issue**: Documentation might reference wrong version
**Actual**: Check package.json for tailwindcss version (v3.4.1, not v4)
**Fix**: Ensure no references to Tailwind v4 features

### 10. Configuration Files

**Issue**: Wrong config file names or paths
**Actual**: Verify existence of tsconfig.json, .eslintrc.json, tailwind config
**Fix**: Update references to match actual files

## Analysis Process

### Step 1: Gather Data

Run commands and read files to collect:

- Package versions (package.json)
- File counts (find/glob commands for each directory)
- API routes structure (scan src/app/api/)
- Component inventory (src/components/ subdirectories)
- Hook count (src/hooks/SWR/)
- Locale count (public/locales/)
- Configuration files verification
- Whitelabel domain mappings

### Step 2: Compare with Documentation

For each documentation file, identify:

- Outdated version numbers (package.json vs docs)
- Incorrect file counts (src/app/, src/components/, src/hooks/, etc.)
- Wrong file paths or directory structure
- Outdated language lists
- Incorrect API route descriptions
- Missing or extra features

### Step 3: Update Files

Make precise edits to:

- README.md (Technologies, Features, Requirements, Scripts)
- CLAUDE.md (Overview, Commands, Architecture, Patterns)

### Step 4: Verify Consistency

Check that all documentation files have:

- Same version number (from package.json)
- Consistent dependency versions
- Matching file structure descriptions
- Accurate feature lists
- Correct configuration details

## Example Workflow

```bash
# 1. Analyze package.json
cat package.json

# 2. Count files by directory
find src/app -type f \( -name "*.tsx" -o -name "*.ts" \) | wc -l
find src/components -type f \( -name "*.tsx" -o -name "*.ts" \) | wc -l
find src/hooks/SWR -name "*.ts" | wc -l
find src/models -name "*.ts" | wc -l

# 3. Count API routes
find src/app/api -name "route.ts" | wc -l

# 4. List components structure
ls -la src/components/

# 5. Count locales
ls public/locales/ | wc -l

# 6. Check configuration files
ls -la tsconfig.json .eslintrc.json .env

# 7. Read current documentation
# (Read README.md, CLAUDE.md)

# 8. Update documentation files
# (Edit each file with corrections)

# 9. Commit changes (if needed)
git add README.md CLAUDE.md
git commit -m "docs: sync documentation with actual codebase state"
```

## Notes

- Always verify counts by actually scanning the codebase
- Don't assume features exist - check for files
- Update all documentation files consistently
- When in doubt, check the actual code, not assumptions
- Pay special attention to version numbers across all files
- Verify i18n supported languages match both config and actual locale files
- This is a services marketplace app, not a landing page
- Uses Timerise.io API for backend services
- Whitelabel system is domain-based (check src/utlis/Whitelabel.ts)
- Uses Tailwind CSS v3.4.1 (not v4)
- Uses Headless UI (not shadcn/ui)
- Note: There's a typo in the codebase - "utlis" instead of "utils"

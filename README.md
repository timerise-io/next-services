# Next Services Marketplace

A marketplace of services available for booking, built with Next.js and the [Timerise.io](https://timerise.io/) API. The application allows users to browse and book various services in a simple and intuitive way.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Browse Services**: Intuitive interface for exploring available services across organizations and projects.
- **Whitelabel Support**: Domain-based organization marketplace configuration for custom branding.
- **Service Discovery**: Featured services, label filtering, and search functionality.
- **Bookings**: Seamless booking experience through integration with the Timerise.io API.
- **Responsiveness**: Optimized display on various devices with responsive design using Tailwind CSS.
- **Internationalization**: Multi-language support with 18 languages (bg, cs, de, el, en, es, fi, fr, hu, it, nb, nl, pl, pt, sk, sv, tr, uk) using i18next.
- **Performance**: Efficient data fetching and caching with SWR.
- **Security**: Type-safe environment variables with @t3-oss/env-nextjs, data validation with Zod, and strong typing with TypeScript.

## Technologies

- **Framework**: [Next.js](https://nextjs.org/) 16.3.4
- **Language**: [TypeScript](https://www.typescriptlang.org/) ^6.0.3
- **UI Libraries**:
  - [React](https://reactjs.org/) ^19.2.8
  - [Tailwind CSS](https://tailwindcss.com/) ^4.3.3
  - [Headless UI](https://headlessui.com/) ^2.2.10
- **Internationalization**:
  - [i18next](https://www.i18next.com/) ^26.4.2
  - [react-i18next](https://react.i18next.com/) ^17.0.13
  - [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector) ^8.2.1
  - [i18next-http-backend](https://github.com/i18next/i18next-http-backend) ^4.0.2
- **Data Fetching**: [SWR](https://swr.vercel.app/) ^2.5.1
- **Schema Validation**: [Zod](https://github.com/colinhacks/zod) ^4.5.4
- **Environment Variables**: [@t3-oss/env-nextjs](https://env.t3.gg/) ^0.13.11
- **Others**:
  - [Lodash](https://lodash.com/) ^4.18.1
  - [React Markdown](https://remarkjs.github.io/react-markdown/) ^10.1.0
  - [React Responsive](https://github.com/yocontra/react-responsive) ^10.0.1

## Requirements

- **Node.js**: Version 24 (see `.nvmrc`)
- **npm**: Version 9 or higher

## Installation

1. **Clone the repository**:

  ```bash
  git clone https://github.com/your-username/next-services.git
  cd next-services
  ```

2. **Install dependencies**:

  ```bash
  npm install
  ```

3. **Development Mode**
  Run the application in development mode with hot-reloading:

  ```bash
  npm run dev
  ```

  The application will be available at http://localhost:3000.

4. **Scripts**

  ```bash
  npm run dev - Starts the development server.
  npm run build - Builds the application for production.
  npm start - Starts the production server.
  npm run lint - Runs ESLint to check code quality.
  ```

5. **Contributing**
  Contributions are welcome! Please open an issue or submit a pull request.

6. **License**
  This project is licensed under the terms of the MIT license.

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

- **Browse Services**: Intuitive interface for exploring available services.
- **Bookings**: Seamless booking experience through integration with the Timerise.io API.
- **Responsiveness**: Optimized display on various devices with responsive design.
- **Internationalization**: Multi-language support using i18next.
- **Performance**: Efficient rendering with Next.js and data prefetching using SWR.
- **Security**: Data validation with Zod and strong typing with TypeScript.

## Technologies

- **Framework**: [Next.js](https://nextjs.org/) 14.2.5
- **Language**: [TypeScript](https://www.typescriptlang.org/) ^5
- **UI Libraries**:
  - [React](https://reactjs.org/) ^18
  - [Tailwind CSS](https://tailwindcss.com/) ^3.4.1
  - [Headless UI](https://headlessui.com/) ^2.1.3
- **Internationalization**:
  - [i18next](https://www.i18next.com/) ^23.12.2
  - [react-i18next](https://react.i18next.com/) ^15.0.0
- **Data Fetching**: [SWR](https://swr.vercel.app/) ^2.2.5
- **Schema Validation**: [Zod](https://github.com/colinhacks/zod) ^3.23.8
- **Others**:
  - [Lodash](https://lodash.com/) ^4.17.21
  - [React Markdown](https://remarkjs.github.io/react-markdown/) ^9.0.1

## Requirements

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher

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

3. **Running the Application**

  Development Mode
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
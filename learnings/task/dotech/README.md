# 🛍️ React Native Marketplace App

[![React Native](https://img.shields.io/badge/React_Native-0.76-blue?logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-52.0-4630eb?logo=expo)](https://expo.dev/)
[![NativeWind](https://img.shields.io/badge/NativeWind-4.0-06B6D4?logo=tailwindcss)](https://www.nativewind.dev/)

A modern React Native marketplace app with authentication, custom tab navigation, and a floating action button. Built with Expo and NativeWind.

---

## ✨ Features

- **Authentication** - Login, registration, and protected routes
- **Custom Tab Bar** - Floating gradient QR button with transparent cutout
- **Marketplace** - Product listings with skeleton loaders
- **State Management** - Context API for user sessions and data caching
- **Responsive UI** - Tailwind CSS styling with NativeWind

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Expo Go app (for physical device)

### Installation

````bash
# Clone the repository
git clone https://github.com/Ahmad61-6/react_native_tukitaki/tree/dotech-task/learnings/task/dotech
cd marketplace-app

# Install dependencies
npm install

# Start development server
npx expo start


Run the App
iOS Simulator: Press i

Android Emulator: Press a

Physical Device: Scan QR code with Expo Go

🔑 Test Credentials
Username	Password
testuser	password123
johndoe	password123
New users can also sign up directly from the app.

🏗️ Tech Stack
Technology	Purpose
React Native	Mobile framework
Expo	Development platform
NativeWind	Tailwind CSS styling
Expo Router	File-based navigation
Context API	State management
TypeScript	Type safety
📁 Project Structure
text
marketplace-app/
├── app/              # Expo Router pages
├── components/       # Reusable UI components
├── contexts/         # React Context providers
├── hooks/            # Custom React hooks
├── constants/        # Mock data and constants
└── assets/           # Images and fonts
🎯 Key Decisions
NativeWind - Faster UI development with Tailwind CSS

Expo Router - Simple file-based routing with protected layouts

CSS Tab Bar - No heavy SVG libraries, smaller bundle size

Context API - Perfect scale for this app, no external deps



<div align="center"> Made with ❤️ using React Native & Expo </div> ```



````

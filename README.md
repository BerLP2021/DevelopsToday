# Car Dealer App

## 📚 Overview

This is a Car Dealer App built with Next.js 14 using App Router. The app allows users to filter vehicles by make and model year, and displays the results.

## 🚀 How to Run

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## 🛠️ Technologies Used

-   Next.js 14 (App Router)
-   TypeScript
-   Tailwind CSS
-   Shadcn/UI
-   React Suspense
-   ESLint and Prettier

## 📄 Features

-   Filter vehicles by make and model year.
-   Static path generation for result pages.
-   Responsive and accessible UI using Tailwind CSS.

## 🌐 API Endpoints

-   Vehicle Makes: `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`
-   Vehicle Models: `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json`

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

/**********************\*\***********************\*\***********************\*\***********************
GitHub README
Add a well-designed README.md that includes:
Project name
Short description
Technologies used
5 key features of the project

# FitLog

## Short Description

FitLog is a modern, dark-themed fitness tracking web application built with Next.js App Router. It serves as your personal gym companion, allowing you to explore a rich workout library, manage your daily fitness plan with strict capacity caps, and persist your progress effortlessly via local storage.

## Technologies Used

- **Framework:** Next.js (App Router, Server & Client Components)
- **UI Library & Icons:** React, React Icons (`react-icons`)
- **Styling:** Tailwind CSS
- **Notifications:** React Toastify (`react-toastify`)
- **State Management:** React Context API (`WorkOutContext`)
- **Data Persistence:** Browser LocalStorage

## 5 key features of the project

1. **Interactive Workout Library:** Browse a comprehensive collection of exercises fetched dynamically with caching, complete with custom image cards, tags, and detailed breakdowns.
2. **Dynamic Today's Plan Logger:** Add workouts directly to your daily routine with a built-in capacity cap (maximum 5 active lifts) to keep your focus sharp.
3. **Save for Later Bookmarking:** Seamlessly bookmark and store your favorite exercises in a dedicated tab for quick access during future training sessions.
4. **Interactive Completion Tracking:** Check off completed lifts with a line-through UI toggle or remove items dynamically from your active plan or saved list.
5. **Robust State & Toast Notifications:** Enjoy smooth data persistence synced across browser sessions via LocalStorage, accompanied by animated alert toasts (`react-toastify`) for real-time user feedback.
   /**********************\*\***********************\*\***********************\*\***********************

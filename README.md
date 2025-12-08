# 🎴 Memory Card Game 🎲

A simple memory card matching game built with React and TailwindCSS.

## Features

- **Card Matching Game**: Match pairs of fruit emoji cards
- **Score Tracking**: Keep track of your score and moves
- **Shuffle Algorithm**: Cards are randomly shuffled at the start of each game
- **Reset Functionality**: Start a new game anytime with the "New Game" button

## Tech Stack

- **React** - UI framework with hooks (useState, useEffect)
- **TailwindCSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and dev server

## Components

- `App.jsx` - Main game logic and state management
- `GameStat.jsx` - Displays score, moves, and reset button
- `GameBoard.jsx` - Renders the grid of fruit cards
- `constants.js` - Game configuration (fruit emojis)

## Game Logic

- 16 cards total (8 pairs of fruit emojis)
- Fisher-Yates shuffle algorithm for randomization
- Responsive grid layout (4x4)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

---

Built as a learning project for React state management and component composition.

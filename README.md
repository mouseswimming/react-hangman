# Hangman with API by React + TypeScript + Vite + Tailwind
Hangman Game is a fun and interactive word-guessing game built with modern web technologies. Test your word-guessing skills and have a great time playing this classic word game. Can you solve the puzzle and save the hangman?

## Responsive Design
[Demo](https://vivian-react-hangman.netlify.app/)

![image](https://github.com/mouseswimming/react-hangman/assets/2342125/b1fb1502-59a3-4724-a45d-8beaabd09432)
![image](https://github.com/mouseswimming/react-hangman/assets/2342125/48bf4534-fe9a-4f8d-8718-20922428a1e3)


## About the Game

Players are presented with a hidden word, and their goal is to guess the letters of the word one by one before the hangman is fully drawn. With a limited number of incorrect guesses, it's a race against time and wit.

**Features:**

- A user-friendly and interactive game interface.
- Engaging word puzzles that challenge your vocabulary.
- Integration with an open word API for word selection.
- Visual representation of the hangman's progress.
- Support for TypeScript to enhance code quality and maintainability.
- Utilizes React for building the user interface.
- Stylish design and responsive layout with Tailwind CSS.

## Tech Stack

- **React**: The game is built using the React library, which allows for efficient component-based development and state management.

- **TypeScript**: TypeScript is used to add static typing to JavaScript, making the codebase more robust and maintainable.

- **Tailwind CSS**: The application's responsive and visually appealing design is achieved with the help of Tailwind CSS, a utility-first CSS framework.

- **Open Word API**: The game leverages an [open word API - wordgamedb](https://www.wordgamedb.com/) to fetch words for the hangman puzzles, providing an ever-expanding pool of challenges.

## Getting Started

To run the Hangman Game locally or contribute to the project, follow the installation below.

- npm install to install all the dependecies
- npm run dev to run the app in development mode
- npm run build to build app for production

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

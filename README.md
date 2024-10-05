# Pokédex App

This is a **Pokedex App** built using **React** and **SCSS** that consumes the [PokeAPI](https://pokeapi.co/). The app allows users to view detailed information about Pokémon such as abilities, stats, types, and much more. The app is fully responsive and designed to offer a sleek and modern user experience.

![Screenshot of Pokédex App](./public/screenshot.png)

## Features

-   **Pokémon Details**: Displays detailed information about each Pokémon, including:
    -   **Types**
    -   **Abilities**
    -   **Base Stats** (HP, Attack, Defense, etc.)
    -   **Height & Weight**
    -   **Sprites**
-   **Responsive Design**: The app is fully responsive and optimized for both mobile and desktop devices.
-   **Sleek UI**: Built with modern styling using SCSS to enhance the user experience.

## Tech Stack

-   **React**: JavaScript library for building the user interface.
-   **SCSS**: CSS preprocessor for styling the application with cleaner, more maintainable code.
-   **PokeAPI**: Free and open API used to fetch data about Pokémon.
-   **HTML5 & CSS3**: Structuring and styling the content.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

-   Node.js (>= 14.x)
-   npm (>= 6.x) or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/pokedex-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd pokedex-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

### Running the Project Locally

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and go to `http://localhost:5173`.

### Building for Production

To build the app for production:

```bash
npm run build
```

The compiled site will be available in the `build/` folder.

## Project Structure

```bash
├── public/
├── src/
│   ├── components/
│   ├── styles/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── webpack.config.js
```

-   **public/**: Static assets like favicon, logos, and images.
-   **src/components/**: Reusable components like Pokémon cards and Pokémon details.
-   **src/styles/**: Global and component-specific SCSS files for styling.
-   **src/assets/**: Pokémon icons, sprites, and other static resources.
-   **webpack.config.js**: Webpack configuration for bundling the app.

## Key Features

-   **Pokémon Details**:
    -   Clicking on a Pokémon card shows detailed stats, abilities, and sprites.
    -   Information such as type, weight, height, and base stats is also available.

## API Integration

This app uses the **[PokeAPI](https://pokeapi.co/)** to fetch real-time Pokémon data. Make sure to review the API's documentation for further details and limits.

## Contact

Feel free to reach out if you have any questions or would like to collaborate:

-   **Email**: arzoladeveloper@gmail.com
-   **LinkedIn**: [Your LinkedIn](https://www.linkedin.com/in/luis-arzola/)
-   **GitHub**: [Your GitHub](https://github.com/ArzolaG)

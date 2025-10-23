# Bé Vui Học - Educational Game for Kids

This is an interactive educational game designed for children, built with React and Vite. The game aims to make learning fun through a series of engaging levels and questions.

## 🚀 Features

-   **Interactive Gameplay:** Engaging drag-and-drop and selection-based questions.
-   **Multiple Levels:** Different levels with varying difficulty to keep children engaged.
-   **Responsive Design:** A clean and responsive user interface that works on different devices.
-   **Engaging Visuals:** Colorful assets and a friendly mascot to guide children through the game.

## 🛠️ Technologies Used

-   **Frontend:** React.js, Vite
-   **Styling:** TailwindCSS, Ant Design
-   **Routing:** React Router DOM
-   **Drag & Drop:** React DnD
-   **Animations:** Framer Motion

## 📦 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/Dainn98/AI_ThucChien.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd AI_ThucChien
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To run the application in development mode, execute the following command:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view it in the browser.

## 📁 Project Structure

The project follows a standard React project structure:

```
src/
├── assets/         # Images, icons, etc.
├── components/     # Reusable UI components
├── hooks/          # Custom hooks
├── layouts/        # Layout components (MainLayout, etc.)
├── pages/          # Route-based pages (HomePage, GamePage, etc.)
├── services/       # API integration and data services
├── App.jsx         # Main application component
├── main.jsx        # Entry point of the application
└── index.css       # Global styles

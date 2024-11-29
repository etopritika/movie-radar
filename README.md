# Movie Radar 🎥

Movie Radar 🎥 is a Next.js/TypeScript application for searching movies by name, displaying a gallery of trending movies, and saving movies to a personal library. The app provides a user-friendly interface for exploring, searching, and managing your favorite movies.

## 🚀 Installation

Follow these steps to install and run the project locally:

1. Clone the repository

```bash
git clone https://github.com/etopritika/movie-radar.git
cd movie-radar
```

2. Install dependencies
   Using npm:

```bash
npm install
```

3. Set up environment variables
   Create a .env.local file in the root directory and add the following variables:

env

```bash
NEXT_PUBLIC_API_KEY=<Your TMDB API Key>
NEXT_PUBLIC_BASE_URL=https://api.themoviedb.org/3
```

4. Start the development server
   Using npm:

```bash
npm run dev
```

5. Open the application
   Visit http://localhost:3000 in your browser to view the app.

## 📖 Usage

Follow these steps to explore the application's features:

### 1. Search for Movies

- Navigate to the search bar at the top of the page.
- Enter the title of the movie you want to search for.
- Click the search icon or press **Enter**.
- View the search results and find the movie you're looking for.

### 2. Explore Trending Movies

- Visit the **Trending** section to browse through a curated list of popular movies.
- Use pagination to navigate through multiple pages of trending movies.

### 3. Save Movies to Your Library

- Click on a movie to view its details.
- Use the **Add to Library** button to save the movie to your personal collection.
- To remove a movie from the library, click the **Remove from Library** button.

### 4. Access Your Library

- Navigate to the **Library** section to view your saved movies.
- Use pagination to browse your collection if it spans multiple pages.

### 5. Responsive Design

- The app works seamlessly across desktop, tablet, and mobile devices, allowing you to enjoy the experience anywhere.

## ✨ Features

1. **Search Movies**

   - Search for movies by name using the TMDB API.
   - Automatically updates search results as the query changes.

2. **Trending Movies**

   - View weekly trending movies.
   - Convenient pagination to browse through a large collection of movies.

3. **Movie Details**

   - View detailed information about a movie, including:
     - Original title.
     - Genre.
     - Rating and vote count.
     - Overview (description).
   - Responsive modal window for displaying movie details.

4. **Personal Movie Library**

   - Add movies to your personal library.
   - Remove movies from the library.
   - Data is stored in LocalStorage, ensuring your library persists after page reloads.

5. **Responsive Design**

   - Fully responsive design for mobile, tablet, and desktop devices.

6. **Custom Pagination**

   - Easy-to-use pagination in the **Trending** and **Library** sections.

7. **Error Handling**

   - Informative error messages when issues arise with fetching movies or connecting to the API.

8. **Smooth Animations**
   - Smooth transitions and intuitive interactive elements enhance the user experience.

## 🛠 Technologies Used

This project is built using the following technologies:

- **[React](https://reactjs.org/)** - A JavaScript library for building user interfaces.
- **[Next.js](https://nextjs.org/)** - A React framework for server-side rendering and static site generation.
- **[TypeScript](https://www.typescriptlang.org/)** - A typed superset of JavaScript for catching errors and improving code quality.
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for styling.
- **[Radix UI](https://www.radix-ui.com/)** - Accessible, unstyled components for building high-quality UI.
  - `@radix-ui/react-dialog` - For creating accessible modal dialogs.
  - `@radix-ui/react-toast` - For displaying notifications.
- **[React Hook Form](https://react-hook-form.com/)** - For managing form state and validation efficiently.
- **[Zod](https://zod.dev/)** - A TypeScript-first schema validation library.
- **[Zustand](https://github.com/pmndrs/zustand)** - A small, fast, and scalable state management library.
- **[TMDB API](https://developers.themoviedb.org/3)** - Provides movie data, including trending movies, search functionality, and movie details.
- **[LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)** - Persists user-added movies to a personal library.
- **[Lucide React](https://lucide.dev/)** - A library of simple, beautiful SVG icons.
- **[clsx](https://github.com/lukeed/clsx)** - A utility for constructing className strings conditionally.
- **[class-variance-authority](https://github.com/joe-bell/cva)** - A tool for managing Tailwind class variance.
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - For merging Tailwind class strings dynamically.

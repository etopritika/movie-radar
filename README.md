# Movie Radar 🎥

Movie Radar 🎥 is a Next.js/TypeScript application for searching movies by name, displaying a gallery of trending movies, saving movies to a personal library, and receiving smart movie **recommendations** based on your saved favorites.

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
   Create a `.env.local` file in the root directory and add the following variables:

```bash
NEXT_PUBLIC_API_KEY=<Your TMDB API Key>
NEXT_PUBLIC_BASE_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

4. Start the development server

```bash
npm run dev
```

5. Open the application  
   Visit http://localhost:3000 in your browser to view the app.

## 📖 Usage

### 1. Search for Movies

Use the search bar to look for movies by name.

### 2. Explore Trending Movies

Browse weekly trending movies and use pagination to navigate.

### 3. Save Movies to Your Library

Add or remove movies from your personal collection.

### 4. Access Your Library

See all your saved movies and paginate through them.

### 5. Get Movie Recommendations 💡

Visit the **Recommendations** page to receive personalized suggestions based on your library.

- Requires at least one movie saved to the library.
- Suggestions are generated via a backend service using genres, rating, and popularity.

### 6. Responsive Design

Optimized for desktop, tablet, and mobile.

## ✨ Features

1. **🔍 Search Movies**  
   Fast search powered by TMDB API.

2. **🔥 Trending Movies**  
   Explore what’s popular right now.

3. **📄 Movie Details**  
   Full info in a responsive modal.

4. **📚 Personal Library**  
   Save your favorite movies with LocalStorage support.

5. **🤖 Smart Recommendations**  
   New: Personalized movie suggestions based on your library.

6. **📱 Responsive Design**  
   Works beautifully on all screen sizes.

7. **📦 Local Storage Persistence**  
   Your saved movies stay even after reloads.

8. **✨ Smooth Animations**  
   Clean and modern UI transitions.

9. **🚧 Error Handling**  
   User-friendly messages and retry options.

## 🛠 Technologies Used

- **React**, **Next.js**, **TypeScript**
- **Tailwind CSS**, **Radix UI**
- **React Hook Form**, **Zod**
- **Zustand** for state management
- **Lucide Icons**, **clsx**, **cva**, **tailwind-merge**
- **TMDB API**
- **LocalStorage**
- **Custom backend (FastAPI)** for recommendations

---

💡 **Pro Tip:** On free hosting (e.g., Render), the recommendation backend may take a few seconds to wake up if idle.

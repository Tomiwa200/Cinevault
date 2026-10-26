import {
  createBrowserRouter,
} from "react-router";

import { MainLayout } from "./MainLayout";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { MediaDetailsPage } from "./pages/MediaDetailsPage";
import { FavouritesPage } from "./pages/FavouritesPage";
import { WatchlistPage } from "./pages/WatchlistPage";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "search",
        Component: SearchPage,
      },
      {
        path: "movie/:id",
        Component: MediaDetailsPage,
      },
      {
        path: "tv/:id",
        Component: MediaDetailsPage,
      },
      {
        path: "favorites",
        Component: FavouritesPage,
      },
      {
        path: "watchlist",
        Component: WatchlistPage,
      },
    ],
  },
]);
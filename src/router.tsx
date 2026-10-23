import {
  createBrowserRouter,
} from "react-router";

import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./components/pages/HomePage";
import { SearchPage } from "./components/pages/SearchPage";
import { MediaDetailsPage } from "./components/pages/MediaDetailsPage";
import { FavouritesPage } from "./components/pages/FavouritesPage";
import { WatchlistPage } from "./components/pages/WatchlistPage";



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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  About, 
  HomeLayout,
  Landing,
  Error,
  SinglePageError,
  Newsletter,
  Cocktail,

} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/Newsletter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: '/cocktail/:id',
        errorElement: <SinglePageError />,
        element: <Cocktail />,
        loader: singleCocktailLoader(queryClient),
      },
      {
        path: '/newsletter',
        element: <Newsletter />,
	errorElement: <SinglePageError />,
        action: newsLetterAction,  
      },
      {
        path: '/about',
        element: <About />,
      },
    ]
  },
  
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider  router={router} />
      <ReactQueryDevtools  initialIsOpen={false}/>
    </QueryClientProvider>
  )
}
export default App
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './pages/RootLayout';
import GamesPage from './pages/GamesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <GamesPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
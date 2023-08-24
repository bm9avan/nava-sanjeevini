import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import LoanDetails from './pages/LoanDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/loan", element: <LoanDetails /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

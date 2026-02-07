import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./ui/Layout";
import "flowbite";
import DisplayProducts from "./features/productsManagement/components/DisplayProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddProducts from "./features/productsManagement/components/AddProducts";
import Register from "./features/user-management/components/Register";
import Login from "./features/user-management/components/Login";

// notes :
//1. Component-Based Routing (Old/Traditional Way)
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Dashboard />} />
//     <Route path="/products" element={<Products />} />
//     <Route path="/orders" element={<Orders />} />
//   </Routes>
// </BrowserRouter>
// 2. Data/Object-Based Routing with createBrowserRouter (Modern/Recommended)
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       { path: "/", element: <Dashboard /> },
//       { path: "/products", element: <Products /> },
//       { path: "/orders", element: <Orders /> },
//     ]
//   }
// ]);
const routes = createBrowserRouter([
  { path: "", element: <Register /> },
  { path: "login", element: <Login /> },
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "products", element: <DisplayProducts /> },
      { path: "addProducts", element: <AddProducts /> },
    ],
  },
]);
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;

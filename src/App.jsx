import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./ui/Layout";
import "flowbite";
import DisplayProducts from "./features/productsManagement/components/DisplayProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddProducts from "./features/productsManagement/components/AddProducts";
import Register from "./features/user-management/components/Register";
import Login from "./features/user-management/components/Login";
import ForgotPassword from "./features/user-management/components/ForgotPassword";
import AuthProvider from "./contexts/Auth/AuthProvider";
import Dashboard from "./features/dashboard-overview/components/Dashboard";
import Unauthorized from "./pages/Unautharized";
import PermissionRoute from "./ui/PermissionRoute";
import { PERMISSIONS } from "./config/permissions";
import ProtectedRoute from "./features/user-management/ui/ProtectedRoute";
import GuestRoute from "./features/user-management/ui/GuestRoute";
// import GuestRoute from "./features/user-management/ui/GuestRoute";

// import ProtectedRoute from "./ui/ProtectedRoute";

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
  {
    path: "register",
    element: (
      <GuestRoute>
        <Register />
      </GuestRoute>
    ),
  },
  {
    path: "login",
    element: (
      <GuestRoute>
        {" "}
        <Login />{" "}
      </GuestRoute>
    ),
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Dashboard /> },
      {
        path: "",
        children: [
          { path: "products", element: <DisplayProducts /> },
          {
            path: "addProducts",
            element: (
              <PermissionRoute permission={PERMISSIONS.CREATE_PRODUCT}>
                <AddProducts />
              </PermissionRoute>
            ),
          },
        ],
      },
      { path: "unautharized", element: <Unauthorized /> },
    ],
  },
]);
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className=" me-5">
          <RouterProvider router={routes}></RouterProvider>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

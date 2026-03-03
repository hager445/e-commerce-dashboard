import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  ChevronLeft,
  PlusCircle,
  Layers,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "@/contexts/Auth/AuthContext";
import { PERMISSIONS } from "@/config/permissions";
import { logout } from "@/services/apiUsers";

export default function Sidebar() {
  const { isAllowed, setSession, setLoading, setProfile } =
    useContext(AuthContext);
  async function signOut() {
    try {
      await logout();
      setLoading(false);
      setSession(null);
      // setProfile(null);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <aside className="fixed top-0 bottom-0 left-0 right-[75%] w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      {/* Brand */}
      <div className="flex h-16 items-center px-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Dashboard
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {/* Dashboard */}
        <NavLink className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <LayoutDashboard className="h-5 w-5" />
          <span>Dashboard</span>
        </NavLink>

        {/* Products (Active) */}
        <div className="space-y-1">
          {/* Parent */}
          <NavLink className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Package className="h-5 w-5" />
            <span>Products</span>
          </NavLink>

          {/* Nested Links */}

          <div className="ml-8 space-y-1">
            {isAllowed(PERMISSIONS.VIEW_PRODUCTS) && (
              <NavLink
                to="/products"
                end
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive
                      ? "bg-gray-100 dark:bg-gray-800"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
              >
                <Package className="h-5 w-5" />
                <span> All Products</span>
              </NavLink>
            )}
            {isAllowed(PERMISSIONS.CREATE_PRODUCT) && (
              <NavLink
                to="/addProducts"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive
                      ? "bg-gray-100 dark:bg-gray-800"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
              >
                <PlusCircle className="h-4 w-4" />
                Add Product
              </NavLink>
            )}
          </div>
        </div>

        {/* Orders */}
        <NavLink
          to="/orders"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Orders</span>
          <span className="ml-auto rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 text-xs px-2 py-0.5">
            5
          </span>
        </NavLink>

        {/* Customers */}
        <NavLink
          to="/customers"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Users className="h-5 w-5" />
          <span>Customers</span>
        </NavLink>

        {/* Analytics */}
        {/* <NavLink  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <BarChart3 className="h-5 w-5" />
          <span>Analytics</span>
        </NavLink> */}

        {/* Divider */}
        <div className="my-4 border-t border-gray-200 dark:border-gray-800" />

        {/* Settings */}
        <NavLink className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </NavLink>
        {/* logout */}
        <button
          onClick={signOut}
          className="flex justify-start rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <span className="font-semibold">Logout</span>
        </button>
      </nav>

      {/* Collapse Button */}
      {/* <div className="absolute bottom-4 left-4 right-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Collapse</span>
        </Button>
      </div> */}
    </aside>
  );
}

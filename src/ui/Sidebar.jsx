import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
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
        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <LayoutDashboard className="h-5 w-5" />
          <span>Dashboard</span>
        </NavLink>

        {/* Products (Active) */}
        <NavLink
          to="/products"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <Package className="h-5 w-5" />
          <span>Products</span>
          <span className="ml-auto rounded-full bg-blue-600 text-white text-xs px-2 py-0.5">
            24
          </span>
        </NavLink>

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
        {/* <NavLink to="/" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <BarChart3 className="h-5 w-5" />
          <span>Analytics</span>
        </NavLink> */}

        {/* Divider */}
        <div className="my-4 border-t border-gray-200 dark:border-gray-800" />

        {/* Settings */}
        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </NavLink>
      </nav>

      {/* Collapse Button */}
      <div className="absolute bottom-4 left-4 right-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Collapse</span>
        </Button>
      </div>
    </aside>
  );
}

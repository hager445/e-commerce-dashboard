import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">🚫 Access Denied</h1>

      <p className="text-gray-500">
        You don’t have permission to view this page.
      </p>

      <Link
        to="/"
        className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-80"
      >
        Go Dashboard
      </Link>
    </div>
  );
}

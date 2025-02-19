"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useUser } from "@clerk/nextjs";

const UsersDashboard = () => {
  interface User {
    id: string;
    first_name: string;
    last_name: string;
    email_addresses: { email_address: string }[];
    public_metadata: { role?: string };
  }

  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 10;

  const { user, isSignedIn } = useUser();

  // Get current hour
  const currentHour = new Date().getHours();

  let greeting = "Good evening";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  }

  useEffect(() => {
    fetch("/api/clerk-users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name} ${user.email_addresses[0]?.email_address}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const paginatedUsers = filteredUsers.slice(
    currentPage * usersPerPage,
    (currentPage + 1) * usersPerPage
  );

  return (
    <section className="w-full px-4 lg:px-4 pt-10">
      <div className="max-w-6xl mx-auto">
        <h4>
          {" "}
          {isSignedIn && user ? (
            <>
              👋 {greeting},{" "}
              <span className="font-sans font-bold">
                {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
              </span>
            </>
          ) : (
            "👋 Hi there!"
          )}
        </h4>
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text py-4">
          Users Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          Manage and view all registered users along with their roles.
        </p>
        <input
          type="text"
          placeholder="Search users..."
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <table className="w-full border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={3} className="text-center py-4 text-gray-500">
                    Loading users...
                  </td>
                </tr>
              ) : (
                paginatedUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                  >
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                      {user.first_name} {user.last_name}
                    </td>
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                      {user.email_addresses[0]?.email_address}
                    </td>
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                      {user.public_metadata.role || "User"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {filteredUsers.length > usersPerPage &&
          currentPage * usersPerPage + usersPerPage < filteredUsers.length && (
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="mt-4 px-6 py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all"
            >
              Load More
            </button>
          )}
      </div>
    </section>
  );
};

export default UsersDashboard;

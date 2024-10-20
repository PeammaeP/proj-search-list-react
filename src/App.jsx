import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [userSearchName, setUserSearchName] = useState("");
  const [gender, setGender] = useState("All");

  useEffect(() => {
    const fetchAPI = async () => {
      const url =
        gender === "All"
          ? "https://65a25d5342ecd7d7f0a771bd.mockapi.io/users"
          : `https://65a25d5342ecd7d7f0a771bd.mockapi.io/users?gender=${gender}`;
      const data = await fetch(url, {
        method: "GET",
      }).then((res) => res.json());
      setUsers(data);
    };
    fetchAPI();
  }, [gender]);

  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-xl font-bold mb-4">User List</h1>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            className="border rounded-lg p-2 w-1/2"
            onChange={(event) => setUserSearchName(event.target.value)}
          />
          <select
            className="border rounded-lg p-2"
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="All">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Full Name</th>
              <th className="py-2 px-4 border-b">Image URL</th>
              <th className="py-2 px-4 border-b">Gender</th>
              <th className="py-2 px-4 border-b">Interests</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.fullName}</td>
                <td className="py-2 px-4 border-b">
                  <img
                    src={user.imageUrl}
                    alt="user avatar"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="py-2 px-4 border-b">{user.gender}</td>
                <td className="py-2 px-4 border-b">
                  {user.interests.join(", ") || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;

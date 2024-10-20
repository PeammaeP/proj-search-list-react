const UserList = () => {
  const users = [
    {
      id: 1,
      fullName: 'Test',
      imageUrl: 'https://via.placeholder.com/40',
      gender: 'Male',
      interests: ['coding', 'music'],
    },
    {
      id: 2,
      fullName: 'Mike',
      imageUrl: 'https://via.placeholder.com/40',
      gender: 'Female',
      interests: ['coding'],
    },
    {
      id: 3,
      fullName: 'Test',
      imageUrl: 'https://via.placeholder.com/40',
      gender: 'Male',
      interests: ['coding'],
    },
    {
      id: 4,
      fullName: 'Test Mike',
      imageUrl: 'https://via.placeholder.com/40',
      gender: 'Male',
      interests: [],
    },
  ]

  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-xl font-bold mb-4">User List</h1>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            className="border rounded-lg p-2 w-1/2"
          />
          <select className="border rounded-lg p-2">
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
                  {user.interests.join(', ') || 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList
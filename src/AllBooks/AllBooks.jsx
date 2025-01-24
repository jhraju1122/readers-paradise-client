import { useLoaderData } from "react-router-dom";
  
const AllBooks = () => {
    const users = useLoaderData();
    const userCount = Array.isArray(users) ? users.length : 0;

    return (
        <div>
            <h2>Books Available</h2>
            <h2>{userCount}</h2>

            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.category}</p>)
                }
            </div>
        </div>
    );
};

export default AllBooks;

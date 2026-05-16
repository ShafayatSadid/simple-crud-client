import { getUserById } from "@/lib/data";


const UserDetailsPage = async ({ params }) => {
    const { id } = await params;
    const user = await getUserById(id);
    console.log(user, 'Usr information:');
    return (
        <div>
            <h2>User Details Page</h2>
            <p>{user.name}</p>
        </div>
    );
};

export default UserDetailsPage;
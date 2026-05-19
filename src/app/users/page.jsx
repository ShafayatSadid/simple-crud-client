import UsersTable from "@/components/shared/UsersTable";
import { getUsers } from "../../lib/data";
import { deleteUser } from "@/lib/actions";
import AddUserModal from "@/components/AddUserModal";


const UsersPage = async () => {

    const users = await getUsers();
    return (
        <div>
            <h2 className="text-[2rem] font-bold text-center my-10">Users management: {users.length}</h2>
            
            <div className="my-6 flex justify-center">
                <AddUserModal/>
            </div>
            <UsersTable deleteUserAction={deleteUser} users={users}/>
        </div>
    );
};

export default UsersPage;
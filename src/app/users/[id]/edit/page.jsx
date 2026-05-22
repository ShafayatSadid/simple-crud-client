import { getUserById } from "@/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";

const UserEditPage = async ({ params }) => {
    const { id } = await params;
    const user = await getUserById(id);
    // console.log(user, 'User:..........');
    return (
        <div>
            <h2>User Editing</h2>

            <div className="w-1/4 mx-auto my-7">
                <form className="flex flex-col gap-4">

                <TextField className="w-full" defaultValue={user?.name} name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                </TextField>

                <TextField className="w-full" defaultValue={user?.email} name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                </TextField>

                <TextField className="w-full" defaultValue={user?.role} name="role" type="text">
                    <Label>Role</Label>
                    <Input placeholder="Enter user role" />
                </TextField>


                <div className="flex gap-2">
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" slot="close">Update User</Button>
                </div>

            </form>
        </div>
        </div >
    );
};

export default UserEditPage;
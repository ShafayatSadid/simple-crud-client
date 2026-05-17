import { revalidatePath } from "next/cache"

export const deleteUser = async (id) => {
    'use server'
    const response = await fetch(`http://localhost:5001/users/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    // TODO: revalidate cash
    if(data.deletedCount > 0){
        revalidatePath("/users")
    }
    return data;
}
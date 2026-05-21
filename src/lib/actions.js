import { revalidatePath } from "next/cache"

export const createUser = async (formData) => {
    'use server'
    const newUser = Object.fromEntries(formData.entries());
    const res = await fetch('http://localhost:5001/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    const data = await res.json();

    // TODO: revalidate cash
    if (data.insertedId) {
        revalidatePath("/users")
    }

    return data
}

export const deleteUser = async (id) => {
    'use server'
    const response = await fetch(`http://localhost:5001/users/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    // TODO: revalidate cash
    if (data.deletedCount > 0) {
        revalidatePath("/users")
    }
    return data;
}
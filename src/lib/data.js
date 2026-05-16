export const getUsers = async () => {
    const res = await fetch('http://localhost:5001/users')
    const users = await res.json();

    return users;
}

export const getUserById = async (id) => {
    const response = await fetch(`http://localhost:5001/users/${id}`)
    const data = await response.json()
    return data;
}
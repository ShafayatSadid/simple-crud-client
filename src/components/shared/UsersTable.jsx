'use client'

import { AlertDialog, Button, Table } from '@heroui/react';
import Link from 'next/link';


const UsersTable = ({ users, deleteUserAction }) => {

    // delete function
    const handleDelete = async (id) => {
        await deleteUserAction(id)
    }
    return (
        <Table className='max-w-11/12 mx-auto'>
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[600px]">

                    <Table.Header>
                        <Table.Column isRowHeader>Name</Table.Column>
                        <Table.Column>Role</Table.Column>
                        <Table.Column>Status</Table.Column>
                        <Table.Column>Email</Table.Column>
                    </Table.Header>

                    <Table.Body>

                        {
                            users.map(user => <Table.Row key={user._id}>

                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{user.role}</Table.Cell>

                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>
                                    {/* view details */}
                                    <Link href={`users/${user._id}`}>
                                        <Button variant="secondary">View Details</Button>
                                    </Link>

                                    {/* edit */}
                                    <Link href={`users/${user._id}/edit`}>
                                        <Button className={"mx-2"} variant="secondary">Edit</Button>
                                    </Link>

                                    {/* delete btn */}
                                    <AlertDialog>
                                        <Button variant="danger">Delete</Button>
                                        <AlertDialog.Backdrop>
                                            <AlertDialog.Container>
                                                <AlertDialog.Dialog className="sm:max-w-[400px]">
                                                    <AlertDialog.CloseTrigger />
                                                    <AlertDialog.Header>
                                                        <AlertDialog.Icon status="danger" />
                                                        <AlertDialog.Heading>Delete user permanently?</AlertDialog.Heading>
                                                    </AlertDialog.Header>
                                                    <AlertDialog.Body>
                                                        <p>
                                                            This will permanently delete <strong>My Awesome Project</strong> and all of its
                                                            data. This action cannot be undone.
                                                        </p>
                                                    </AlertDialog.Body>
                                                    <AlertDialog.Footer>
                                                        <Button slot="close" variant="tertiary">
                                                            Cancel
                                                        </Button>
                                                        {/* delete btn */}
                                                        <Button onClick={() => handleDelete(user._id)} slot="close" variant="danger">
                                                            Delete User
                                                        </Button>
                                                    </AlertDialog.Footer>
                                                </AlertDialog.Dialog>
                                            </AlertDialog.Container>
                                        </AlertDialog.Backdrop>
                                    </AlertDialog>


                                </Table.Cell>

                            </Table.Row>)
                        }


                    </Table.Body>

                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
};

export default UsersTable;
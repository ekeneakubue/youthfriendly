import { getUsers } from "@/lib/actions/users";
import UsersList from "./UsersList";

export default async function UsersPage() {
    const users = await getUsers();

    return <UsersList initialUsers={users} />;
}

import { createContext, useContext, useState } from "react";
import { getUsersRequest, deleteUserRequest } from "../api/users.js";

    const UserContext = createContext();

    export const useUser = () => {
        const context = useContext(UserContext);

        if (!context) {
            throw new Error("useUsers must be used within a UserProvider");
        }

        return context;
    }

    export function UserProvider({ children }) {

        const [users, setUsers] = useState([]);

        const getUsers = async () => {
            try {
                const res = await getUsersRequest();
                setUsers(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        const deleteUser = async (id) => {
            try {
                const res = await deleteUserRequest(id);
                if (res.status === 204) setUsers(users.filter((user) => user._id !== id));
            } catch (error) {
                console.log(error);
            }
        }
        
        return (
            <UserContext.Provider value={{
                users,
                getUsers,
                deleteUser,
            }} >
                {children}
            </UserContext.Provider>
        )

    }
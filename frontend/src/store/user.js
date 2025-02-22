import {create} from "zustand";

export const useUserStore = create((set) => ({

    users:[],
    setUsers:(users) =>set({users},
        createUsers: async (newUsers) =>{
            if(!user.name || !user.age || !user.type || !user.phone || !user.address || !user.password)
            {
                return{sucess:false,message:"please fill in all fields"};
            }
            const res= await fetch("http://localhost:5000/api/users");

        }


})
const 
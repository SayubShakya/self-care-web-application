import { create } from "zustand";

export const useUserStore = create((set) => ({
  users: [],
  setUsers: (users) => set({ users }),

  createUsers: async (newUser) => {
    if (!newUser.name || !newUser.age || !newUser.type || !newUser.phone || !newUser.address || !newUser.password) {
      return { success: false, message: "Please fill in all fields" };
    }

    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      console.log("Response:", res); // Log the response

      if (!res.ok) {
        console.log(res)
        const errorText = await res.text(); // Log the raw response text
        console.error("Server error response:", errorText);
        return { success: false, message: errorText || "Failed to create user" };
      }

      const data = await res.json();
      set((state) => ({ users: [...state.users, data.data] }));
      return { success: true, message: "User added successfully" };
    } catch (error) {
      console.error("Error creating user:", error);
      return { success: false, message: "An error occurred while creating the user" };
    }
  },
}));
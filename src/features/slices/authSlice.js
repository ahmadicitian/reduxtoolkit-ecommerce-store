import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(sessionStorage.getItem("Redux-Store-Auth")) || {
            name: "",
            password: "",
            image: "",
            authUser: false
        },
    },
    reducers: {
        login(state, action) {
            const user = action.payload;
            const userValidation = /^[A-Za-z]{4,10}$/i.test(user.name);
            const passwordValidation =
                /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
                    user.password
                );
            state.user = user;
            if (!userValidation || !passwordValidation) {
                state.user.authUser = false;
            } else {
                state.user.authUser = true;
                const saveState = JSON.stringify(user);
                sessionStorage.setItem("Redux-Store-Auth", saveState);
            }
        },
        logout(state) {
            state.user = {
                name: "",
                password: "",
                image: "",
                authUser: false,
            };
            sessionStorage.clear();
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
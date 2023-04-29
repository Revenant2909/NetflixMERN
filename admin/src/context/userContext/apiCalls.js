import axios from "axios";
import { createUserFailure, createUserStart, createUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess } from "./UserActions"

export const getUsers = async (dispatch) =>{
    dispatch(getUsersStart());
    try {
        const res = await axios.get("/users", {
            headers: {token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken},
        });
        dispatch(getUsersSuccess(res.data))
    } catch (err) {
        dispatch(getUsersFailure());
    }
};
//Create User
export const createUser = async (User,dispatch) =>{
    dispatch(createUserStart());
    try {
           const res =  await axios.post("/users/", User, {
            headers: {token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken},
        });
        dispatch(createUserSuccess(res.data))
    } catch (err) {
        dispatch(createUserFailure());
    }
};

export const deleteUser = async (id,dispatch) =>{
    dispatch(deleteUserStart());
    try {
            await axios.delete("/users/"+id, {
            headers: {token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken},
        });
        dispatch(deleteUserSuccess(id))
    } catch (err) {
        dispatch(deleteUserFailure());
    }
};
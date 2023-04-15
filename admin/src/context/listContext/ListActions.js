export const getListsStart = () =>({
    type: "GET_LISTS_START",
});
export const getListsSuccess = (lists) =>({
    type: "GET_LISTS_SUCCESS",
    payload:lists,
});
export const getListsFailure = () =>({
    type: "GET_LISTS_FAILURE",
});
//Create Lists

export const createListStart = () =>({
    type: "CREATE_LIST_START",
});
export const createListSuccess = (List) =>({
    type: "CREATE_LIST_SUCCESS",
    payload: List,
});
export const createListFailure = () =>({
    type: "CREATE_LIST_FAILURE",
});
// //Update Lists

export const updateListStart = () =>({
    type: "UPDATE_LIST_START",
});
export const updateListSuccess = (List) =>({
    type: "UPDATE_LIST_SUCCESS",
    payload: List,
});
export const updateListFailure = () =>({
    type: "UPDATE_LIST_FAILURE",
});


// //Delete Listss
export const deleteListStart = () =>({
    type: "DELETE_LIST_START",
});
export const deleteListSuccess = (id) =>({
    type: "DELETE_LIST_SUCCESS",
    payload:id,
});
export const deleteListFailure = () =>({
    type: "DELETE_LIST_FAILURE",
});
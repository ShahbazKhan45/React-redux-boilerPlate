
// Signle Reducer
const INITIAL_STATE = {
    users: [{
        name: "Shahbaz Khan",
        email: "shahbaz@gmail.com"
    }
    ]
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "Set_Data":
            return ({
                ...state,
                users: [...state.users, action.data]
            })
        default:
            return state;
    }

}



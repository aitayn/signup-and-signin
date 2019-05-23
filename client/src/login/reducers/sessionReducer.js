export const SessionReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return Object.assign({}, state, {
                loggedIn: true,
                user: action.response.data
            });
    }
    return state;
}
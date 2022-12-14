export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_LOGIN_SUCCESS":
            return { userInfo: action.payload }
        case "USER_LOGIN_FAIL":
            return { error: action.payload }
        case "USER_LOGOUT":
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_REGISTER_SUCCESS":
            return { userInfo: action.payload }
        case "USER_REGISTER_FAIL":
            return { error: action.payload }
        default:
            return state
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case "USER_DETAILS_SUCCESS":
            return { user: action.payload }
        case "USER_DETAILS_FAIL":
            return { error: action.payload }
        default:
            return state
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: "USER_LOGOUT" })
}



export function loginRequest(email, senha) {
    return {
        type: 'LOGIN_REQUEST',
        payload: { email, senha}
    }
}

export function loginSuccess(token, user) {
    return {
        type: 'LOGIN',
        payload: { token, user}
    }
}

export function loginFailure() {
    return {
        type: 'LOGIN_FAILURE'
    }
}

export function signOutRequest() {
    return {
        type: 'SIGN-OUT'
    }
}
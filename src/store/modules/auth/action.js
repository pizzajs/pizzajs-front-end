export function login(email, senha) {
    return {
        type: 'LOGIN',
        payload: { email, senha}
    }
}

import { useKeycloak } from "@react-keycloak/web";

const API_BASE_URL = 'http://localhost:8000'; // local dev
// const API_BASE_URL = ''; // server installation


// for local dev
const authProvider = () => {

    const keycloakStub = {
        tokenParsed: {
                        preferred_username:"architect",

                     },
        token: "adsfsfsfsadfa"
    }

    return {
        keycloak: keycloakStub,
        initialized: true
    }

}
// const authProvider = useKeycloak; // server instance


// server instance
// const config = () => {
//
//     const token = authProvider().keycloak.token
//
//     return{
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     }
//
// }

// dev instance
const config = () => {

    return{
        headers: {
            'Content-Type': 'application/json',
        }
    }

}

function ApiClient() {

    return {
        baseUrl: API_BASE_URL,
        config: config,
        auth_srv: authProvider
    }

}


export default ApiClient


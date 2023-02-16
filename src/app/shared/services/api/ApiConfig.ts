import axios from "axios"


export const Api = () => {
    return axios.create({
        baseURL: 'http://localhost:3333'  //ficou 3333 pra n conflitar com a aplicação q está rodando na 3000 ja
    });
}
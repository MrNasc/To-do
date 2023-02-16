// a extensao 'e ts pq nesse arquivo n tem html

import { useContext } from "react"


import { LogedUserContext } from "../contexts"

export const useLogedUser = () => { 
    const context = useContext(LogedUserContext)                        // react hook customizado é uma função que dentro dela eu utilizo um react hook padrão
    return context;
}
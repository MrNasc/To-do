import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLogedUser } from "../../shared/hooks";

import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const buttonEnterRef = useRef<HTMLButtonElement>(null);

    const { userName } = useLogedUser();


    const [email, setEmail] = useState('');           //useState é importante para atualizar valor (procurar a)
    const [password, setPassword] = useState('');

    const emailLength = useMemo(() => {                 //useMemo memoriza calculos complexos, e o useCallback armazena funcoes
        return email.length;
    }, [email.length]);

    useEffect(() => {                                  //posso colocar a chamada para API dentro do useEffect
        if (window.confirm('Você é homem?')) {
            console.log('Homem')
        } else {
            console.log('Mulher')
        }
    }, []); //se eu deixo vazio o array, ele executa uma vez só

    useEffect(() => {                                  //posso colocar a chamada para API dentro do useEffect
        console.log(email)
    }, [email]); // Nesse caso, vai ser executado toda vez q email for alterado (dependencias)

    useEffect(() => {                                  //posso colocar a chamada para API dentro do useEffect
        console.log(password)
    }, [password]); // Nesse caso, vai ser executado toda vez q a senha for alterada

    const handleLogIn = useCallback(() => {           //usando useCallback essa parte do codigo n precisara ser rodada toda vez q um estate for alterado (performance)
        console.log(email)
        console.log(password)

        // if (inputPasswordRef.current !== null) {
        //     inputPasswordRef.current.focus()
        // }

    }, [email, password])

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
                <p>{userName}</p>

                <InputLogin                         // componente customizado
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    type="password"
                    label="Password"
                    value={password}
                    ref={inputPasswordRef}
                    onChange={newValue => setPassword(newValue)}
                    onPressEnter={() => buttonEnterRef.current?.click()}
                />

                {/* <label>
                    <span>Senha</span>
                    <input
                        type="password"
                        value={password}
                        ref={inputPasswordRef}
                        onChange={e => setPassword(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' ? : undefined}
                        />
                </label> */}

                {/* <ButtonLogin
                button="Entrar"
                ref={buttonEnterRef}
                onClick={() => handleEntrar}
                /> */}
                {/* <button
                    type="button"
                    ref={buttonEnterRef}
                    onClick={handleEntrar}>
                    Entrar
                </button> */}
            
                <ButtonLogin type="button" onClick={handleLogIn}>
                    Login
                </ButtonLogin>
                {/* <ButtonLogin children={<>Entrar</>}/> */}  
            </form>
        </div>
    );
}


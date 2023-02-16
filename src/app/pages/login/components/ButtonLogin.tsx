interface IButtonLoginProps {
    type?: "button" | "submit" | "reset";
    onClick: () => void;

    children: React.ReactNode;
}
export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {  //desestruturando pros dentro das chaves, n sei pq


    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}

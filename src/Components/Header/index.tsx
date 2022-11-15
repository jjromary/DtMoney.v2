import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles"
import logoImg from '../../Assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt=""></img>
                <NewTransationButton>Nova Transação</NewTransationButton>
            </HeaderContent>
        </HeaderContainer>
    )
}
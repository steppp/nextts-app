import IComponentProps from "../common/ComponentProps.interface";
import { StyledPrimaryCard } from "./styled";

export type CardContent = {
    link: string
    title: string
    description: string
    image: string | undefined
}

interface CardProps extends IComponentProps { }

const Card = ({ children }: CardProps) => {
    return <StyledPrimaryCard>
        { children }
    </StyledPrimaryCard>
}

export default Card;
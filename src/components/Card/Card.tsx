import { Component } from "react";
import { StyledPrimaryCard } from "./styled";

export type CardContent = {
    link: string
    title: string
    description: string
    image: string | undefined
}

type CardProps = { 
    children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    return <StyledPrimaryCard>
        { children }
    </StyledPrimaryCard>
}

export default Card;
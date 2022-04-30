import { useContext, useRef } from "react";
import IComponentProps from "../../components/common/ComponentProps.interface";
import { TransitionContext } from "../../contexts/TransitionContext";
import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";
import { StyledSlideFadeWrapper } from "./styled";
import gsap from 'gsap'

const SlideFade = ({ children, id }: IComponentProps) => {
    const { timeline } = useContext(TransitionContext)
    const el = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
        gsap.to(el.current, {
            transform: 'translateY(0px)',
            opacity: 1,
            duration: 0.5,
        })

        const timelineTweensIds = timeline
            ?.getChildren(false, true, true)
            .map(t => t.vars.id)

        console.log(timelineTweensIds)
        if (timelineTweensIds?.includes(id)) {
            return
        }
        
        timeline?.add(
            gsap.to(el.current, {
                id: id,
                transform: 'translateY(3rem)',
                opacity: 0,
                duration: 0.5,
            }),
            0
        )
    }, [])

    return (
        <StyledSlideFadeWrapper ref={el}>
            {children}
        </StyledSlideFadeWrapper>
    )
}

export default SlideFade
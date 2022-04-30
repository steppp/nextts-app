import gsap from "gsap"
import { useContext, useRef, useState } from "react"
import { TransitionContext } from "../contexts/TransitionContext"
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect"

const TransitionLayout = ({ children }: { children: React.ReactNode}) => {
    const [displayChildren, setDisplayChildren] = useState(children)
    const { timeline } = useContext(TransitionContext)
    const el = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
        if (children !== displayChildren) {
            console.log(timeline?.duration())
            if (timeline?.duration() === 0) {
                // no outro animations, immediately load incoming children
                setDisplayChildren(children)
                return
            }
    
            // play the current timeline
            timeline?.play().then(() => {
                console.log('timeline played')
                // outro complete: reset to an empty paused timeline
                timeline.seek(0).pause().clear()
                setDisplayChildren(children)
            })
        }
    }, [children])

    return <div ref={el}>
        {displayChildren}
    </div>
}

export default TransitionLayout
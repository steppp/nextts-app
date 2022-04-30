import React, { useState, createContext, useCallback} from 'react'
import gsap from 'gsap'
import ITransitionContext from './TransitionContext.interface'

const TransitionContext = createContext<Partial<ITransitionContext>>({})

const TransitionProvider = ({ children }: { children: React.ReactNode}) => {
    const [timeline, setTimeline] = useState(() => 
        gsap.timeline({ paused: true})
    )

    return (
        <TransitionContext.Provider value={{ timeline, setTimeline }}>
            {children}
        </TransitionContext.Provider>
    )
}

export { TransitionContext, TransitionProvider }
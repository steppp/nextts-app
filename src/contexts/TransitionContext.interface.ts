import gsap from "gsap"

export default interface ITransitionContext {
    timeline: gsap.core.Timeline
    setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>
}
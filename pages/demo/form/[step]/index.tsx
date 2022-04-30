import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const formStepsGenerator = (function *generateNextQueryParam() {
    const params = [
        'page1',
        'page2',
        'page3',
        'page4'
    ]
    let i = 0

    while (true) {
        yield params[i]
        i = (i+1)%params.length
    }
})()

const getRandomQueryParam = () => formStepsGenerator.next().value

const getFollowingPageUrl = (unique: string) => `/demo/form/${unique}`

const FormStep = () => {
    const [nextQueryParam, setNextQueryParam] = useState<string>('page0')
    const [currentStep, setCurrentStep] = useState<string>('page0')
    const containerRef = useRef<HTMLDivElement>(null)
    const router = useRouter()
    const { step } = router.query

    useEffect(() => {
        const timeline = gsap.timeline()
        timeline.add(
            gsap.to(containerRef.current, {
                transform: 'translateY(2rem)',
                opacity: 0,
                duration: 0.5,    
            }),
            0
        )
        timeline.add(() => setCurrentStep(step?.toString?.() ?? ''))
        timeline.add(
            gsap.to(containerRef.current, {
                transform: 'translateY(0px)',
                opacity: 1,
                duration: 0.5,    
            })
        )

        const queryParam = getRandomQueryParam()
        console.log('setting next query param to ' + queryParam)
        setNextQueryParam(queryParam)
    }, [step])

    return (
        <div ref={containerRef}>
            <h1>Form step: { currentStep }</h1>
            <Link href={getFollowingPageUrl(nextQueryParam)}>
                <a>
                    Go to next page
                </a>
            </Link>
            <Link href={'/'}>
                <a>
                    Home
                </a>
            </Link>
        </div>
    )
}

export default FormStep
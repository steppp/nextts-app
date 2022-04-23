import { useRouter } from "next/router"

const ExperienceStep = () => {
    const router = useRouter()
    const { step } = router.query

    return <h1>Experience step: { step }</h1>
}

export default ExperienceStep
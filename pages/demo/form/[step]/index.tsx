import { useRouter } from "next/router"

const FormStep = () => {
    const router = useRouter()
    const { step } = router.query

    return <h1>Form step: { step }</h1>
}

export default FormStep
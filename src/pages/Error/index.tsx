type ErrorPageProps = {
    code: number
    message?: string
    from?: string
    additionalData?: any
}

const ErrorPage = (props: ErrorPageProps) => {
    const { code, message } = props

    return <div>
        <h1>{code}</h1>
        <p>
            <i>
                {message}
            </i>
        </p>
    </div>
}

export default ErrorPage
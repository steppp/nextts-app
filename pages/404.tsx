import ErrorPage from '../src/pages/Error'

const _404 = () => {
    return <ErrorPage code={404} message="The page you requested does not exist" />
}

export default _404
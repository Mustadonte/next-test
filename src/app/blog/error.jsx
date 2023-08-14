'use client'

const ErrorWarapper = ({ error }) => {
    return (
        <h1>Ooops!!! {error.message}</h1>
    )
}

export default ErrorWarapper
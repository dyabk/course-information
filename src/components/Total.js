import React from 'react'

const Total = ({ parts }) => {
    const callbackFn = (sum, part) => sum + part.exercises
    const total = parts.reduce(callbackFn, 0)

    return (
        <p><strong>total of {total} exercises</strong></p>
    )
}

export default Total
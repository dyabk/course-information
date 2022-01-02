import React from 'react'

const Total = ({ parts }) => {
    const totalExercises = (sum, part) =>
        (sum + part.exercises)

    const total = parts.reduce(totalExercises, 0)

    return (
        <p><strong>total of {total} exercises</strong></p>
    )
}

export default Total
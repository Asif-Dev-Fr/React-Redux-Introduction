const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}


export { increment, decrement };
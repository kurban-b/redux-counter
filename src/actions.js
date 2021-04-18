
export function increment (num = 1) {
    if(num === '') {
        num = 1
    }
    return {
        type: 'INCREMENT',
        value: +num
    }
}

export function decrement (num = 1) {
    if(num === '') {
        num = 1
    }
    return {
        type: 'DECREMENT',
        value: +num
    }
}

export function reset () {
    return {
        type: 'RESET'
    }
}
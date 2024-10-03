const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success)
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!')
        } catch (error) {
            console.log(e)
        }
    }, 500)
}

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = {'message': 'delayed success!'}
            resolve(success)
        })
    })
}

const rejectPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = new Error('error: delayed exception!')
            reject(error)
        })
    })
}

resolvedPromise().then(result => console.log(result))
rejectPromise().catch(error => console.log(error))
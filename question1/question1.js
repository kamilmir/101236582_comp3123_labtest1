const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        const filterArray = []
        mixedArray.forEach(item => {
            if (typeof item === 'string') {
                filterArray.push(item.toLocaleLowerCase())
            }
        })
        if (filterArray.length > 0) {
            resolve(filterArray)
        } else {
            reject(filterArray)
        }
    })
}


mixedArray = ['PIZZA', 1234, 'Wings', 213413, 'gBlearning']

lowerCaseWords(mixedArray).then(rs => console.log(rs))
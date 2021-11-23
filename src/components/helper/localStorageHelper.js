

const registeredArrGet = (key) => {
    return JSON.parse(localStorage.getItem(key) || '[]')
}

const registeredObjGet = (key) => {
    return JSON.parse(localStorage.getItem(key) || '{}')
}

const registeredArrSet = (key, arr) => {
    localStorage.setItem(key, JSON.stringify(arr))
}

const registeredObjSet = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj))
}

export { registeredArrGet, registeredObjGet, registeredArrSet, registeredObjSet }
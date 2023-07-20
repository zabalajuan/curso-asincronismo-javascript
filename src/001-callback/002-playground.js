function execCallback(callback) {
    // Tu código aquí 👈
    setTimeout(() => {
        return callback()
    },2000)
}
const myFunc = () => console.log('Log after 2s')
execCallback(myFunc);
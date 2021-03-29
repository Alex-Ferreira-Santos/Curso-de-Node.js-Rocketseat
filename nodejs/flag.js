/* My Solution

module.exports = function getFlag(string) {
    process.argv.map( flag => {
        if(flag === string){
            console.log(process.argv[process.argv.indexOf(string) + 1])
        }
    })
}*/

//Course Solution

function getFlagValue(flag){
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}

module.exports = getFlagValue
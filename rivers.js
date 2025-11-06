//Get the sum of all the river miles
export const totalRiverTrails = (rivers) => {
    let total = 0
    for (const river of rivers) {
        total += river.length
    }
    return total
}
//Get the shortest Rivertail
export const shortRiver = () => {
    let shortest = Infinity
    for (const river of rivers) {
        if(river.length < shortest){
            shortest = river.length
        }
    }
    return shortest
}

// Get the longest rivertrail
export const longRiver = () => {
    let longest = 0 
    for (const river of rivers) {
        if(river.length > longest){
            longest = river.length
        }
    }
    return longest 
}

export const expensiveRivers = (rivers) => {
    const priceyRivers = []
    for (const river of rivers) {
        if (river.price == "$$$$" || "$$$$$"){
            priceyRivers.push(river.river)
        }
    }
    return priceyRivers
}

export const inexpensiveRivers = (rivers) => {
    const cheapRivers = []
    for (const river of rivers) {
        if (river.price == "$") {
            cheapRivers.push(river.river)
        } 
    }
    return cheapRivers
}

export const createRiverDetails = (rivers) => {
    let riverDetailsString = ""
    for (const river of rivers) {
        riverDetailsString += `${river.river} starts at [${river.latitude},${river.longitude}] and is ${river.length} Kilometers long. The unquie fish for the trip is ${river.uniqueFish}\n\n`
    }
    return riverDetailsString
}
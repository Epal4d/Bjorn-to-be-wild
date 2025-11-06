// Get the sum of all trail miles
export const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total += trail.length
    }

    return Math.round(total)
}


// Get the shortest of all trails
export const shortyTrail = (trailArray) => {
    let shortest = Infinity
    for (const trail of trailArray) {
        if(trail.length < shortest) {
            shortest = trail.length
        }
    }

    return shortest
}



// Get the longest of all trails
export const longTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if(trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
}

//Find most expensive trails 
export const expensiveTrails = (trails) => {
    priceyTrails = []
    for (const trail of trails){
        if (trail.price == "$$$$" || "$$$$$"){
            priceyTrails.push(trail.trailName)
        }
        
    }
    return priceyTrails
}
//Find least expensive trails
export const inexpensiveTrails = (trails) => {
    const cheapTrails = []
    for (const trail of trails) {
        if (trail.price == "$"){
            cheapTrails.push(trail.trailName)
        }
    }
    return cheapTrails
}



export const createTrailDetails = (trails) => {
    let trailDetailString = ""
    for (const trail of trails) {
        trailDetailString += `${trail.trailName} starts at [${trail.latitude},${trail.longitude}] and is ${trail.length} kilometers long. The highlighted plant for the trip is ${trail.plantHighlight}\n\n`
    }
    return trailDetailString
}

import {totalRiverTrails, shortRiver, longRiver, expensiveRivers, inexpensiveRivers, createRiverDetails } from "./rivers.js"
import {totalTrailMiles, shortyTrail, longTrail, expensiveTrails, inexpensiveTrails, createTrailDetails } from "./trails.js"

console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')
const trailTotal = totalTrailMiles(trails)
console.log(`We service ${trailTotal} miles of wilderness trails across the US`)

const shortTrail = shortyTrail(trails)
console.log(`The shortest trail is ${shortTrail} kilometers`)

const longest = longTrail(trails)
console.log(`The longest trail is ${longest} kilometers`)

const leastExpensiveTrails = inexpensiveTrails(trails)
console.log(`\n\nThe least expensive trails are: \n${leastExpensiveTrails.join("\n")}`)


const mostExpensiveTrails = expensiveTrails(trails)
console.log(`The most expensive are: \n${mostExpensiveTrails.join("\n")}`)

console.log('TRAIL DETAILS:')
console.log('-----------------------------')

const trailDetails = createTrailDetails(trails)

console.log(trailDetails)

console.log('***************************************************')
console.log('*****              R I V E R S                *****')
console.log('***************************************************')
const riverTotal = totalRiverTrails(rivers)

console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`)

const shortestRiver = shortRiver(rivers)
const longestRiver = longRiver(rivers)

console.log(`The shortest river tour is ${shortestRiver} kilometers`)
console.log(`The longest river tour is ${longestRiver} kilometers`)



const leastExpensiveRivers = inexpensiveRivers(rivers)

console.log(`\n\nThe least expensive river tours are: \n${leastExpensiveRivers.join("\n")}`)

const mostExpensiveRivers = expensiveRivers(rivers)

console.log(`\n\nThe most expensive river tours are: \n${mostExpensiveRivers.join("\n")}`)

console.log("\n\nRIVER DETAILS")
console.log("---------------------------------")

const  riverDetails = createRiverDetails(rivers)
console.log(riverDetails)
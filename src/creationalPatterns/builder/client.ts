import CastleDirector from "./castleDirector"
import House from "./house"
import IglooDirector from "./iglooDirector"



const IGLOO: House = IglooDirector.construct()
console.log("🚀 ~ file: client.ts:7 ~ IGLOO:", IGLOO.construction())
const CASTLE: House = CastleDirector.construct()
console.log("🚀 ~ file: client.ts:9 ~ CASTLE:", CASTLE.construction())

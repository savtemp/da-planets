import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class GalaxiesService{
    async getGalaxies(){
        let galaxies = await dbContext.Galaxies.find()
        return galaxies
    }

    async createGalaxy(galaxyData){
        let galaxy = await dbContext.Galaxies.create(galaxyData)
        return galaxy
    }

    async deleteGalaxy(galaxyId){
        let galaxy = await this.deleteGalaxy(galaxyId)
        await galaxy.remove()
        return galaxy
    }
}



export const galaxiesService = new GalaxiesService()
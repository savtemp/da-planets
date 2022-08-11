import { starsService } from "../services/StarsService.js";
import BaseController from "../utils/BaseController.js";

export class StarsController extends BaseController {
    constructor(){
        super(`/api/stars`)
        this.router
            .post('', this.createStar)
            .get('/:starId/planets', this.getPlanetsByStarId)
            .delete('/:starId', this.deleteStar)
    }

    async createStar(req, res, next){
        try {
            let starData = req.body
            let star = await starsService.createStar(starData)
            res.send(star)
        } catch (error) {
            next(error)
        }
    }

    async getPlanetsByStarId(req, res, next){
        try {
            let planets = await planetsService.getPlanetsByStarId(req.params.starId)
            res.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async deleteStar(req, res, next){
        try {
            let star = await starsService.deleteStar(req.params.starId)
            res.send(star)
        } catch (error) {
            next(error)
        }
    }
}
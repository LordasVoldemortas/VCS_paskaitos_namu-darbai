import { Router } from "express";
import Like from '../model/like.js'

const router = Router();

// naujo  sukurimas
router.post('/', async (req, res) => {
   try{
    const data = await Like.findOne(req.body)
    // tikrinam ar like jau buvo uzdetas
        if(data){
            // jeigu like'as jau buvo pridetas, noresime ji pasalint
            await data.deleteOne()
        } else {
            // jei ne- noresim prideti
            await Like.create(req.body)
        }
        // await Like.create(req.body)
        res.json('irasas sekmingai issaugotas')
   } catch{
        res.status(500).json('ivyko klaida')
   }
})


export default router;
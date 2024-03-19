import { Router } from "express";
import Post from '../model/post.js'
import upload from "../middleware/multer.js";

const router = Router();

// grazinamas visu postu sarasas
router.get('/', async (req, res) =>{
    try {
        res.json(await Post.find().populate('author', ['user_name', 'photo']));
    } catch {
        res.status(500).json('ivyko klaida')
    }
});

// naujo iraso sukurimas
router.post('/', upload.single('photo'), async (req, res) => {
   if(req.file) 
   req.body.photo = req.file.filename;
   
   try{
     await Post.create(req.body)
        res.json('irasas sekmingai issaugotas')
   } catch{
        res.status(500).json('ivyko klaida')
   }
})

export default router;
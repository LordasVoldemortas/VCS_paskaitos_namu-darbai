import { Router } from "express";
import Comment from '../model/comment.js'

const router = Router();

// komentaru kurie priklauso postui susigrazinimas

router.get('/:post_id', async (req, res) => {
    try {
        const data = await Comment.find({ post: req.params.post_id })
                                  .populate('author', ['user_name', 'photo']);
        console.log(data);
        res.json(data);
    } catch {
        res.status(500).json('Įvyko klaida');
    }
});

// naujo komentaro sukurimas
router.post('/', async (req, res) => {
   try{
     await Comment.create(req.body)
        res.json('irasas sekmingai issaugotas')
   } catch{
        res.status(500).json('ivyko klaida')
   }
})

// komentaro istrinimasd
router.delete('/:id', async (req, res) => {
    try {
        await Comment.deleteOne({ _id: req.params.id })
        res.json('komentaras sekmingai pasalintas')
    } catch {
        es.status(500).json('ivyko klaida')
    }
})
export default router;
import { Router } from 'express'
import { rm } from 'node:fs/promises';
import Post from '../model/post.js'
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const router = Router()

router.get('/', auth, async (req, res) => {
    try {
        res.json(await Post
                    .find()
                    .populate('author', ['name', 'last_name'])
                    .populate('status_name'))
                    
    } catch(e) {
        console.log(e);
        res.status(500).json('ivyko klaida')
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        res.json(
            await Post.findById(req.params.id));
    } catch(e) {
        console.log(e)
        res.status(500).json('ivyko klaida')
    }
})



router.post('/', auth, upload.single('photo'), async (req, res) => {
    console.log(req.body);
    if (req.file)
        req.body.photo = req.file.filename;

    try {
        // Patikrinimas, ar egzistuoja projektas su tokiu pačiu svarstymo diena
        // const existingProject = await Post.findOne({ resolution_date: req.body.resolution_date });
        // if (existingProject) {
        //     return res.status(400).json('Negalima pridėti naujo projekto, nes jau yra projektas su tokiu pačiu svarstymo diena.');
        // }

        // Sukuriamas naujas projektas, jei nėra jokių konfliktų
        await Post.create(req.body)
        res.json('Įrašas sėkmingai išsaugotas');
    } catch(e) {
        console.error(e);
        res.status(500).json('Įvyko klaida');
    }
})

router.put('/:id', auth, upload.single('photo'), async (req, res) => {

    if (req.file) {
        const newPost = await Post.findById(req.params.id)
        if (newPost.photo) {
            await rm('./uploads/' + newPost.photo);
        }
        req.body.photo = req.file.filename;
    }

    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.send(req.body);
});

router.delete('/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.json('Įrašas sėkmingai ištrintas');
    } catch {
        res.status(500).json('ivyko klaida')
    }
})

export default router;
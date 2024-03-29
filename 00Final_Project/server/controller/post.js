import { Router } from 'express'
import { rm } from 'node:fs/promises';
import Post from '../model/post.js'
import upload from '../middleware/multer.js'

const router = Router()

router.get('/', async (req, res) => {
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

router.get('/:id', async (req, res) => {
    try {
        res.json(
            await Post.findById(req.params.id));
    } catch(e) {
        console.log(e)
        res.status(500).json('ivyko klaida')
    }
})


router.post('/', upload.single('photo'), async (req, res) => {
    console.log(req.body);
    if (req.file)
        req.body.photo = req.file.filename;

    try {
        await Post.create(req.body)
        res.json('irasas sekmingai issaugotas')
    } catch(e) {
        console.log(e);
        res.status(500).json('ivyko klaida')
    }
})


router.put('/:id', upload.single('photo'), async (req, res) => {

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
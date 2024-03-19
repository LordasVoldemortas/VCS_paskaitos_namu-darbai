import { Router } from 'express'
import Post from "../model/post.js"
import User from '../model/user.js';

const router = Router();

// Sukurti naują įrašą
router.post('/', async (req, res) => {
    await Post.create( {...req.body, create_at: Date.now()})
    res.send('naujas irasas')
})

// Peržiūrėti pasirinktą įrašą
router.get('/:id', async (req, res) => {
    res.send(await Post.findById(req.params.id))
})

// Atnaujinti pasirinktą įrašą
router.put('/:id', async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, req.body)
    res.send('irasas atnaujintas')
})

// Ištrinti norimą įrašą
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
    res.send('istrinta')
})

// Peržiūrėti visus įrašus
router.get('/', async (req, res) => {
    res.send(await Post.find());
});

// Susigrąžinti visų įrašų kiekį kolekcijoje
router.get('/', async (req, res) => {
    const obj = await Post.find();
    res.send({count: obj.length})
});

// router.get('/', async (req, res) => {
//     const obj = await Post.find();
//     res.send({count: obj.length})
// });

// res.send({count: await Post.countDocuments()})

export default router
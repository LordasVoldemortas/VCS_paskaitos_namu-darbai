import { Router } from 'express'
import User from '../model/user.js'
import upload from '../middleware/multer.js';

const router = Router();

router.get('/users', async (req, res) => {
    // visu irasu grazinimas
    res.send(await User.find());
});

router.get('/users/:id', async (req, res) => {
    // vieno iraso paemimas
    // norint paimt parametro reiksme : req.params
    res.send(await User.findById(req.params.id))
})

router.post('/users/new', upload.single('photo'), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    if(req.file) req.body.photo = req.file.filename;
    // naujo vartotojo sukurimas
    const newPost = await User.create(req.body)
    res.send(newPost);
})

// iraso atnaujinimas
router.put('/users/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)

    res.send('irasas sekmingai atnaujintas')
})

// iraso istrynimas
router.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id)

    res.send('Irasas sekmingai istrintas')
})

export default router;
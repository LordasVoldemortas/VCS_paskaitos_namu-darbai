import { Router } from 'express'
import User from '../model/user.js'

const router = Router();

router.get('/', async (req, res) => {
    // visu irasu grazinimas
    res.send(await User.find());
});

router.get('/:id', async (req, res) => {
    // vieno iraso paemimas
    // norint paimt parametro reiksme : req.params
    res.send(await User.findById(req.params.id))
})

router.post('/', async (req, res) => {
    // naujo vartotojo sukurimas

    await User.create(req.body)

    res.send('irasas issaugotas')
})

// iraso atnaujinimas
router.put('/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)

    res.send('irasas sekmingai atnaujintas')
})

// iraso istrynimas
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id)

    res.send('Irasas sekmingai istrintas')
})

export default router;
import { Router } from 'express'
import User from '../model/user.js'
import cors from 'cors';
const router = Router()

router.get('/', async (req, res) => {
    try {
        res.json(await User.find())
    } catch {
        res.status(500).json('ivyko klaida')
    }
})

router.get('/:id', async (req, res) => {
    try {
        res.json(
            await User.findById(req.params.id));
    }catch {
        res.status(500).json('ivyko klaida')
    }
})


router.post('/register', async (req, res) => {
    console.log(req.body)
    try{
        // req.body.password = await bcrypt.hash(req.body.password, 10)
        await User.create(req.body)
        res.json('vartotojas sekmingai sukurtas')
    } catch(e) {
        console.log(e);
        res.status(500).json('registruojant vartotoja ivyko klaida')
    }
});

router.post('/login', async (req, res) => {
    // console.log(req.body)
    try{
        const data = await User.findOne({ email: req.body.email });
        if(!data)
            return res.status(401).json('neteisingas el. pasto adresas');
        
        res.json(data)
        // if(!await bcrypt.compare(req.body.password, data.password))
        //     return res.status(401).json('neteisingas slaptazodis')
    } catch {
        res.status(500).json('prisijungiant ivyko klaida')
    }
})

export default router
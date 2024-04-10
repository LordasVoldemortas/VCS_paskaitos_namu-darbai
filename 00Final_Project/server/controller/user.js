import { Router } from 'express'
import User from '../model/user.js'
import cors from 'cors';
import bcrypt from 'bcrypt';
import auth from '../middleware/auth.js'

const router = Router();

router.get('/check-auth', auth, (req, res) => {
    res.status(200).json(req.session.user)
})

router.get('/', auth, async (req, res) => {
    try {
        res.json(await User.find())
    } catch {
        res.status(500).json('ivyko klaida')
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        res.json(
            await User.findById(req.params.id));
    }catch {
        res.status(500).json('ivyko klaida')
    }
})

router.put('/:id', auth, async (req, res) => {
    try {
        res.json(
            await User.findById(req.params.id));
    }catch {
        res.status(500).json('ivyko klaida')
    }
}) 

router.delete('/:id', auth, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json('Vartotojas sėkmingai ištrintas');
    } catch {
        res.status(500).json('ivyko klaida')
    }
})

router.post('/register', auth, async (req, res) => {
    console.log(req.body)
    
    try{
        const usersCount = await User.countDocuments();
        if (usersCount >= 141) {
            return res.status(403).send('Virsytas vartotoju limitas');
        }
        // const newUser = req.body.user_name;
        // registeredUsers.push(newUser);

        req.body.password = await bcrypt.hash(req.body.password, 10)
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
        
        // res.json(data)
        if(!await bcrypt.compare(req.body.password, data.password)) 
            return res.status(401).json('Neteisingas slaptažodis');

        req.session.user = {
            _id: data._id,
            name: data.name,
            last_name: data.last_name,
            email: data.email,
            chairman: data.chairman
        }

        // issiunciame vartotojo duomenis
        res.json(req.session.user);
    } catch {
        res.status(500).json('prisijungiant ivyko klaida')
    }


})

export default router
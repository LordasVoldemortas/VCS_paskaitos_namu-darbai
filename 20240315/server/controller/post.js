import { Router } from 'express'
import Post from '../model/post.js';
import upload from '../middleware/multer.js'
import { rm } from 'node:fs/promises';

const router = Router();

router.get('/total-count', async (req, res) => {
    const obj = await Post.find();
    res.send({count: obj.length})
});

//Iraso paemimas
router.get('/:id' , async (req, res) => {
     //Norint paimti parametro reiksme: req.params
    const viewCount = await Post.findById(req.params.id);
    viewCount.view_count += 1;

    await Post.findByIdAndUpdate(req.params.id, viewCount);
    
    // res.send(await Post.findById(req.params.id));
    res.send(viewCount);
    // res.send(viewCount);
});

// Visu irasu grazinimas
router.get('/',async  (req, res) => {

  res.send(await Post.find());
});

//Naujo vartotojo sukurimas
router.post('/',upload.single('photo'), async (req, res) => {

    req.body.photo = req.file?.filename;
    
    req.body.created_at = new Date();
    const result = await Post.create( {...req.body, create_at: Date.now()});
    
    res.send({ message: "Įrašas sukurtas", result });
});

//Iraso atnaujinimas
router.put('/:id',upload.single('photo'), async (req, res) => {

    if(req.file) {
        const oldPost = await Post.findById(req.params.id);
        if(oldPost.photo) {
            await rm('./uploads/' + oldPost.photo);
        }
        req.body.photo = req.file.filename;
    }

     await Post.findByIdAndUpdate(req.params.id, req.body);

    //  const updatedPost = await PostModel.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.send(req.body);
});

//Iraso istrinimas
router.delete('/:id',upload.single('photo'), async (req, res) => {

    req.body.photo = req.file.filename;

    await Post.findByIdAndDelete(req.params.id);
    res.send( req.body);
});



export default router;


// import { Router } from 'express'
// import Post from "../model/post.js"
// import User from '../model/user.js';
// import { rm } from 'node:fs/promises';

// const router = Router();

// // Sukurti naują įrašą
// router.post('/', async (req, res) => {
//     await Post.create( {...req.body, create_at: Date.now()})
//     res.send('naujas irasas')
// })

// // Peržiūrėti pasirinktą įrašą
// router.get('/:id', async (req, res) => {
//     res.send(await Post.findById(req.params.id))
// })

// // Atnaujinti pasirinktą įrašą
// router.put('/:id', async (req, res) => {
//     await Post.findByIdAndUpdate(req.params.id, req.body)
//     res.send('irasas atnaujintas')
// })

// // Ištrinti norimą įrašą
// router.delete('/:id', async (req, res) => {
//     await Post.findByIdAndDelete(req.params.id)
//     res.send('istrinta')
// })

// // Peržiūrėti visus įrašus
// router.get('/', async (req, res) => {
//     res.send(await Post.find());
// });

// // Susigrąžinti visų įrašų kiekį kolekcijoje
// router.get('/', async (req, res) => {
//     const obj = await Post.find();
//     res.send({count: obj.length})
// });

// // router.get('/', async (req, res) => {
// //     const obj = await Post.find();
// //     res.send({count: obj.length})
// // });

// // res.send({count: await Post.countDocuments()})

// export default router
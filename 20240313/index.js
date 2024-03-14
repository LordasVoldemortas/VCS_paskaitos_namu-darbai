import express from 'express';
import mongoose from 'mongoose';
import user from './controller/user.js';
import post from './controller/post.js'

const app = express();

app.use(express.urlencoded( {
    extended: true
}));

app.use('/users/', user);
app.use('/posts/', post);

// Prisijungimas prie mongodb duomenų bazės pavadinimu: pirma_duombaze
await mongoose.connect('mongodb://localhost:27017/pirma_duombaze');

// MVC:
// Model - Atsakingas už informacijos paėmimą iš duomenų bazės
// View  - Atsakingas už iš controlerio gautos informacijos atvaizdavimą
// Controller - Atsakingas už modelio informacijos apdorojimą

app.listen(3000);
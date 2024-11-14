import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path'

import Cafe from './models/cafe.js';
import Gym from './models/gym.js';
import Park from './models/park.js';
import Spa from './models/spa.js';

const DB_URL = 'mongodb+srv://developer_andrew:Variable2311@thenextstep.t6qek.mongodb.net/the_next_step';
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // обслуговує файли з папки 'public'
app.use(cors()); // дозвіл на запити з усіх доменів

// основний маршрут для завантаження HTML
app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + 'public', 'index.html');
});


app.get('/posts/:type', async (req, res) => {
    const { type } = req.params;

    let Model;

    switch (type.toLowerCase()) {
        case 'cafe': {
            Model = Cafe;
            break;
        }
        case 'gym': {
            Model = Gym;
            break;
        }
        case 'park': {
            Model = Park;
            break;
        }
        case 'spa': {
            Model = Spa;
            break;
        }
        default: 
            return res.status(400).json('Invalid type of data table');
    }

    try {
        const posts = await Model.find();
        res.json(posts); // return data in json format
    }
    catch (error) {
        console.error('--------> (API) Error fetching posts from', type, ':', error.message);
        res.status(500).json('Error fetching places');
    }
});

async function runAPI() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {
            console.log(`------> Server started on port ${PORT}`)
        });
    }
    catch (error) {
        console.error('------> error in runAPI()', error.message);
    }
}

runAPI();
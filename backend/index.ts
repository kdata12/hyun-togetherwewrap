import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

app.get('/api', (req, res) => {
    res.status(200).json({
        data: "Together we wrap!"
    })
})

const port = 8000;

app.listen(8000, () => {
    console.log(`Server started: http://localhost:${port}/`);
}); 

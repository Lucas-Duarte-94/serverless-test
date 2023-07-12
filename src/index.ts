import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.json({ message: "hello world serverless." });
})

app.get("/test/url", (req, res) => {
    return res.json({ message: "endpoint test." })
})

app.listen(3333);
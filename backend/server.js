const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"; // Selected Model
const API_KEY = process.env.HF_API_KEY; // Use your API Key

app.get("/test", async (req, res) => {
    try {
      res.status(200).json({ summary: "Hello World" });
    } catch (error) {
        console.error("Summarization error:", error);
        res.status(500).json({ error: "Summarization failed" });
    }
});



app.post("/summarize", async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) return res.status(400).json({ error: "Text is required" });

        const headers = { "Authorization": `Bearer ${API_KEY}` };
        const response = await axios.post(API_URL, { inputs: text }, { headers });

        res.json({ summary: response.data[0].summary_text });
    } catch (error) {
        console.error("Summarization error:", error);
        res.status(500).json({ error: "Summarization failed" });
    }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));

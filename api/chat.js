// /api/chat.js
import Groq from "groq-sdk/index.mjs";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, // SERVER-SIDE ONLY
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { message } = req.body;

  try {
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        { role: "system", content: "You are Dr. Derma, a friendly dermatologist." },
        { role: "user", content: message },
      ],
    });

    res.status(200).json(completion);
  } catch (err) {
    res.status(500).json({ error: "Error connecting to Groq API" });
  }
}

import { useState } from "react";
import Groq from "groq-sdk/index.mjs";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // personal project
});

export default function SkincareAnalyzer() {
  const [productName, setProductName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const analyzeProduct = async () => {
    if (!ingredients.trim()) return;

    setLoading(true);
    setResult("");

    const prompt = `
You are an expert skincare formulation analyst.

Product Name: ${productName || "Not provided"}
Ingredients: ${ingredients}

Analyze strictly based on ingredients.

Return in this format:

🔍 PRODUCT ANALYSIS

1️⃣ Skin Types Suitability
2️⃣ Key Beneficial Ingredients
3️⃣ Potential Irritants or Concerns
4️⃣ Who Should Avoid This Product
5️⃣ Overall Formulation Quality
6️⃣ Final Honest Opinion

Do NOT give medical diagnosis.
End with a disclaimer.
`;

    try {
      const completion = await groq.chat.completions.create({
        model: "openai/gpt-oss-20b",
        messages: [
          {
            role: "system",
            content:
              "You are Dr. Derma, a friendly skincare formulation analyst. Be honest, neutral, and science-based.",
          },
          { role: "user", content: prompt },
        ],
      });

      setResult(
        completion.choices[0]?.message?.content || "No response received."
      );
    } catch {
      setResult("Something went wrong while analyzing the product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT SIDE — INPUT / INFO */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <h2 className="text-3xl font-bold text-blue-600">
            🧴 AI Skincare Analyzer
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Paste a skincare product’s ingredient list and get a
            science-based analysis on skin type suitability, benefits,
            and possible concerns.
          </p>

          <input
            type="text"
            placeholder="Product Name (optional)"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <textarea
            rows="7"
            placeholder="Paste full ingredient list here..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <button
            onClick={analyzeProduct}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Product"}
          </button>

          <p className="text-xs text-gray-400">
            AI-generated analysis for educational purposes only.
          </p>
        </div>

        {/* RIGHT SIDE — OUTPUT */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            📊 Analysis Result
          </h3>

          <div className="flex-1 overflow-y-auto border border-gray-200 rounded-xl p-4 bg-blue-50 whitespace-pre-wrap text-sm text-gray-800">
            {loading && "Analyzing product formulation..."}
            {!loading && !result && (
              <span className="text-gray-400">
                The analysis will appear here once you submit ingredients.
              </span>
            )}
            {result}
          </div>

          <p className="mt-3 text-xs text-gray-400">
            Not a substitute for professional dermatological advice.
          </p>
        </div>

      </div>
    </section>
  );
}

import { useState, useRef, useEffect } from "react";
import Groq from "groq-sdk/index.mjs";
import { Send } from "lucide-react";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

function DermatologistChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [autoScroll, setAutoScroll] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll only when user sends
  useEffect(() => {
    if (autoScroll) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setAutoScroll(false);
    }
  }, [messages, autoScroll]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);
    setAutoScroll(true);

    try {
      const completion = await groq.chat.completions.create({
        model: "openai/gpt-oss-20b",
        messages: [
          { role: "system", content: "You are Dr. Derma, a friendly dermatologist." },
          { role: "user", content: input },
        ],
      });

      const botMessage =
        completion.choices[0]?.message?.content || "Sorry, I couldn't respond.";
      setMessages((prev) => [...prev, { sender: "bot", text: botMessage }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error connecting to Groq API" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="chat" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Left Side - GlowCare Info */}
        <div className="flex flex-col justify-center text-gray-800 space-y-4">
          <h1 className="text-4xl font-bold text-blue-600">GlowCare</h1>
          <p className="text-lg leading-relaxed">
            GlowCare is your trusted partner in skincare.  
            Ask <span className="font-semibold text-blue-500">Dr. Derma</span> 
            anything about skin health, treatments, or daily care tips.  
            Get professional advice instantly.
          </p>
          <p className="italic text-gray-600">
            “Healthy skin, happy you — with GlowCare.”
          </p>

          {/* Additional Text Sections */}
          <div className="mt-4 space-y-3">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-700">
              🌿 Personalized skincare tips for your skin type.
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-green-700">
              💡 Learn about the latest treatments and products.
            </div>
            <div className="bg-purple-50 p-3 rounded-lg text-purple-700">
              🛡️ Protect your skin with dermatologist-approved routines.
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
              🕒 Daily care reminders and preventive tips.
            </div>
            <div className="bg-pink-50 p-3 rounded-lg text-pink-700">
              💖 Boost your confidence with healthy glowing skin.
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            GlowCare combines AI technology with professional dermatology expertise to deliver accurate and reliable skincare advice — anytime, anywhere.
          </p>
        </div>

        {/* Right Side - Chat Box */}
        <div className="bg-white shadow-xl rounded-2xl border border-gray-200 flex flex-col h-[600px]">
          <div className="p-4 border-b border-gray-200 bg-blue-600 text-white rounded-t-2xl">
            <h2 className="text-xl font-semibold">Dr. Derma Chatbox</h2>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-lg bg-gray-200 text-gray-500">
                  Typing...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Responsive Input Area */}
          <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-2">
            <input
              type="text"
              className="flex-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="mt-2 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition disabled:opacity-50"
            >
              <Send size={18} />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DermatologistChat;  
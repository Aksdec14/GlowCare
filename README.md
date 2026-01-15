# GlowCare — AI Skincare Chat Assistant

A responsive web application that provides users with personalized, science-backed skincare advice using an AI-powered chatbot.

---

## 📖 Table of Contents

- [About](#about)
- [Features](#features)
- [AI Skincare Product Analyzer](#ai-skincare-product-analyzer)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🖼️ WEBSITE UI

📂 Tools and Libraries

✓ React.js for structure
✓ Tailwind CSS for styling and responsiveness
✓ Framer Motion (optional) for animations
✓ React Hook Form (optional) for better input handling
✓ Heroicons or SVGs for decorative icons

<img width="1440" height="781" alt="Screenshot 2025-09-11 at 12 14 25 AM" src="https://github.com/user-attachments/assets/af078f77-a136-4ae1-bd5f-2d90396a3988" />
<img width="1440" height="782" alt="Screenshot 2025-09-11 at 12 14 46 AM" src="https://github.com/user-attachments/assets/a78be6e8-cae1-41aa-a559-27403988f834" />
<img width="1440" height="777" alt="Screenshot 2025-09-11 at 12 15 09 AM" src="https://github.com/user-attachments/assets/09835b7b-5715-4996-a82a-e2450497e6ae" />
<img width="1440" height="775" alt="Screenshot 2025-09-11 at 12 15 32 AM" src="https://github.com/user-attachments/assets/d4604d62-d4f8-47f9-8635-0113557beb63" />

---

## 📖 About

GlowCare is a web-based skincare chatbot that helps users find personalized, science-backed skin care advice instantly. The application is designed to be fast, intuitive, and responsive across all devices. Users can interact with an AI-powered assistant to receive tailored recommendations and solutions to common skin concerns.

---

## ✨ Features

- ✅ AI-driven skincare advice chatbot  
- ✅ Real-time interaction with typing animation  
- ✅ Clean, modern, and responsive UI for mobile and desktop  
- ✅ Smooth transitions and animations  
- ✅ Personalized responses based on user input  
- ✅ AI-powered skincare product ingredient analyzer
- ✅ Easy integration with a backend API  
- ✅ Secure and fast communication  
- ✅ Configurable environment variables  

---

## 🧴 AI Skincare Product Analyzer

The **AI Skincare Product Analyzer** is an interactive feature that allows users to analyze skincare products based on their ingredient list using artificial intelligence.

Users can enter a product name (optional) and paste the full list of ingredients. The system then generates a science-based, neutral analysis covering skin type suitability, key benefits, potential concerns, and overall formulation quality.

This feature is designed to help users better understand skincare formulations without relying on marketing claims.

### ✨ Key Capabilities

- 🧪 Ingredient-based skincare analysis
- 🧑‍⚕️ Dermatologist-style explanations using AI
- 🧴 Skin type suitability (oily, dry, sensitive, acne-prone, etc.)
- ⚠️ Identification of potential irritants or allergens
- 📊 Overall formulation quality assessment
- 🖥️ Clean, responsive UI with a scrollable results panel

### 🛠️ How It Works

1. The user enters a product name (optional) and pastes the ingredient list.
2. The frontend sends the input to the Groq LLM using a secure prompt.
3. The AI analyzes the formulation based on cosmetic science knowledge.
4. A structured analysis is returned and displayed in a dedicated results panel.

### ⚙️ Tech Stack

- **React** – Component-based UI
- **Tailwind CSS** – Styling and responsive layout
- **Groq LLM API** – High-speed AI inference
- **Vite** – Frontend build tooling

### ⚠️ Disclaimer

This feature provides AI-generated educational insights only. It does not offer medical diagnosis, treatment, or professional dermatological advice. Users are encouraged to consult a qualified dermatologist for medical concerns.

### 🔐 Security Note

For demonstration purposes in this personal project, the Groq API is accessed directly from the frontend. In production environments, API calls should be routed through a secure backend to protect API keys.

---

## 🛠 Tech Stack

**Frontend:**
- React.js for building interactive UI components  
- Tailwind CSS for styling and responsive design  
- JavaScript ES6+ for modern programming patterns  

**Backend (optional, depending on implementation):**
- Node.js / Express.js  
- REST API for communication between client and server  

**Tools:**
- Vite for fast development builds  
- npm/yarn for dependency management  

**Deployment:**
- Render, or Vercel for hosting the frontend and backend

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) version 16 or later  
- npm or yarn  
- Access to the backend API endpoint  

---

### ✅ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aksdec14/GlowCare
   cd Frontend
   npm i
   npm run dev
   cd NewChatApi
   npm i 
   npm start
   ```

2. Create a `.env` file in the root directory and add your API endpoint:
   ```
   VITE_API_URL=https://your-api-url.com
   ```

---

## 📖 Usage

1. Enter your skincare-related question in the input field at the bottom of the chat.
2. Press Enter or click the Send button to submit.
3. The AI assistant will respond with personalized skincare advice.
4. Use the **AI Product Analyzer** to analyze ingredient lists of skincare products.
5. Interact freely and ask follow-up questions.
6. Follow the suggestions provided for healthier and glowing skin.

---

## ✅ Live Preview

[https://glow-care-tcmk.vercel.app/](https://glow-care-tcmk.vercel.app/)

---

## 📁 Folder Structure

```
GlowCare/
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── NewChatApi/
│   ├── routes/
│   └── package.json
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file in your project root:

```
VITE_API_URL=your-backend-api-url
GROQ_API_KEY=your-groq-api-key
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 📧 Contact

For questions or feedback, reach out via GitHub or open an issue in the repository.

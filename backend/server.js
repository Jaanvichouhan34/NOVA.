require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Groq = require('groq-sdk');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB Database!'))
.catch(err => console.error('Error connecting to MongoDB:', err.message));

// Schemas
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', ContactSchema);

// AI Setup
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const JAANVI_SYSTEM_PROMPT = `You are "Jaanvi's AI" on her personal website "Mine." You answer questions about Jaanvi Chouhan warmly and concisely (2-4 sentences). Here's everything about her:

PERSONAL: Jaanvi Chouhan, CS undergrad at Medi-Caps University Indore, CGPA 8.57, graduation 2027. From Madhya Pradesh, India.

SKILLS: Python, JavaScript, C, R, Java | React.js, Node.js, Express.js, MongoDB, Tailwind CSS, MySQL, Flask | OpenAI API, Gemini API, OpenCV, Framer Motion | Git, GitHub, Vercel, Render

PROJECTS (all live/deployed):
- ElevateU: 3-module AI platform (GPT-4 outfit scanner, event prep, communication trainer), React+Node+MongoDB+JWT
- SkillMirror: 600+ adaptive questions, 6 CS domains, 10 levels, perception gap analysis, gamification (badges, XP, leaderboards)
- CJ: Voice AI desktop assistant, Gemini API, memory system, app control, React glassmorphism UI
- AuraCalc: 15+ calculators, 3-way theme, Framer Motion, Vercel deployed
- Sign Language Translator: OpenCV real-time gesture recognition
- AttendAI: YOLO+FaceNet face recognition attendance system (in progress)
- AI Interview Coach: AI mock interview platform (in progress)
- Kinetic Dash: Browser game
- Jeenie Visualizer: Algorithm visualizer
- Expense Tracker: Full-stack finance tracker
- AI Virtual Keyboard: Hand-tracking virtual keyboard
- And more at github.com/Jaanvichouhan34

ACHIEVEMENTS: GSSoC 2025 Tech Contributor, SIH Round 2 (twice), Quasar Hackathon Round 2
CERTS: DSA in Java (PW), Git & GitHub (Geekster)
CONTACT: jaanvichouhan18805@gmail.com | github.com/Jaanvichouhan34 | linkedin.com/in/jaanvi-chouhan
AVAILABILITY: Actively looking for internships and collaborations. Open to full-stack or AI roles.

Be friendly, enthusiastic, and concise. Never share private info beyond what's listed here.`;

// Routes
app.post('/api/chat', async (req, res) => {
    try {
        const { message, history } = req.body;
        
        let cleanHistory = history || [];
        if (cleanHistory.length > 0 && cleanHistory[0].role === 'model') {
            cleanHistory.shift(); // Remove initial greeting so user is first
        }

        // Convert history format from frontend (Gemini style) to Groq style
        const groqHistory = cleanHistory.map(msg => ({
            role: msg.role === 'model' ? 'assistant' : 'user',
            content: msg.parts[0].text
        }));

        const messages = [
            { role: 'system', content: JAANVI_SYSTEM_PROMPT },
            ...groqHistory,
            { role: 'user', content: message }
        ];

        const chatCompletion = await groq.chat.completions.create({
            messages: messages,
            model: 'llama-3.3-70b-versatile',
        });

        const text = chatCompletion.choices[0]?.message?.content || '';

        res.json({ reply: text });
    } catch (error) {
        console.error('Chat API Error:', error);
        res.status(500).json({ error: 'Failed to communicate with Jaanvi AI.' });
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Database error' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});

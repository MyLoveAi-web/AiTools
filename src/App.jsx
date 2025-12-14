import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import TextGenerator from './pages/tools/TextGenerator'
import ImageGenerator from './pages/tools/ImageGenerator'
import CodeAssistant from './pages/tools/CodeAssistant'
import ChatBot from './pages/tools/ChatBot'
import Translator from './pages/tools/Translator'
import Summarizer from './pages/tools/Summarizer'
import TextToSpeech from './pages/tools/TextToSpeech'
import ImageEnhancer from './pages/tools/ImageEnhancer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/text-generator" element={<TextGenerator />} />
            <Route path="/image-generator" element={<ImageGenerator />} />
            <Route path="/code-assistant" element={<CodeAssistant />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/translator" element={<Translator />} />
            <Route path="/summarizer" element={<Summarizer />} />
            <Route path="/text-to-speech" element={<TextToSpeech />} />
            <Route path="/image-enhancer" element={<ImageEnhancer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

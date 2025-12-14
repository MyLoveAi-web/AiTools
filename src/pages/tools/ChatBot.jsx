import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { id: Date.now(), text: input, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate API call
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: `I understand you said: "${userMessage.text}". This is a placeholder response. In a real implementation, this would connect to a chat API like OpenAI GPT, Anthropic Claude, or similar to provide intelligent, contextual responses.`,
        sender: 'bot'
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block w-20 h-20 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-4xl mb-4">
            💬
          </div>
          <h1 className="text-4xl font-bold mb-2">AI Chat Bot</h1>
          <p className="text-gray-600">Chat with AI for answers and assistance</p>
        </div>

        {/* Chat Container */}
        <div className="card p-0 overflow-hidden">
          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 bg-gray-50 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none resize-none"
                rows="2"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="btn-primary self-end disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setInput("What can you help me with?")}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
          >
            What can you do?
          </button>
          <button
            onClick={() => setInput("Explain artificial intelligence")}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
          >
            Explain AI
          </button>
          <button
            onClick={() => {
              setMessages([{ id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", sender: 'bot' }])
              setInput('')
            }}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
          >
            Clear Chat
          </button>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ChatBot

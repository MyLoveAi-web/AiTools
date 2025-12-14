import { useState } from 'react'
import { Link } from 'react-router-dom'

const CodeAssistant = () => {
  const [code, setCode] = useState('')
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleAsk = async () => {
    if (!question.trim()) return
    
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setResponse(`Based on your question: "${question}"\n\nHere's a helpful response:\n\nThis is a placeholder response. In a real implementation, this would connect to a code AI API (like OpenAI Codex, GitHub Copilot API, or similar) to provide actual code suggestions, explanations, or fixes based on your code and question.`)
      setIsProcessing(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block w-20 h-20 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-4xl mb-4">
            💻
          </div>
          <h1 className="text-4xl font-bold mb-2">AI Code Assistant</h1>
          <p className="text-gray-600">Get AI-powered code suggestions and fixes</p>
        </div>

        {/* Main Card */}
        <div className="card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Code Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Code (Optional)
              </label>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste your code here..."
                className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none resize-none font-mono text-sm"
              />
            </div>

            {/* Right Column - Question and Response */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ask a Question
              </label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="E.g., How can I optimize this code? What's wrong with this function?"
                className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none resize-none mb-4"
              />
              
              <button
                onClick={handleAsk}
                disabled={isProcessing || !question.trim()}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              >
                {isProcessing ? 'Processing...' : 'Get Help'}
              </button>

              {response && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    AI Response
                  </label>
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 min-h-32 max-h-64 overflow-y-auto">
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans">{response}</pre>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <button
              onClick={() => {
                setCode('')
                setQuestion('')
                setResponse('')
              }}
              className="btn-secondary"
            >
              Clear All
            </button>
            {response && (
              <button
                onClick={() => navigator.clipboard.writeText(response)}
                className="btn-secondary"
              >
                Copy Response
              </button>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card text-center">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold mb-1">Code Analysis</h3>
            <p className="text-sm text-gray-600">Get detailed code reviews</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="font-semibold mb-1">Optimization</h3>
            <p className="text-sm text-gray-600">Improve performance</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">🐛</div>
            <h3 className="font-semibold mb-1">Bug Fixes</h3>
            <p className="text-sm text-gray-600">Find and fix errors</p>
          </div>
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

export default CodeAssistant

import { useState } from 'react'
import { Link } from 'react-router-dom'

const TextGenerator = () => {
  const [prompt, setPrompt] = useState('')
  const [generatedText, setGeneratedText] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setGeneratedText(`Generated text based on: "${prompt}"\n\nThis is a placeholder response. In a real implementation, this would connect to an AI API like OpenAI, Anthropic, or similar to generate actual text content. The generated text would be contextually relevant to your prompt and provide meaningful content.`)
      setIsGenerating(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-4xl mb-4">
            ✍️
          </div>
          <h1 className="text-4xl font-bold mb-2">AI Text Generator</h1>
          <p className="text-gray-600">Generate high-quality text content using AI</p>
        </div>

        {/* Main Card */}
        <div className="card">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter your prompt or topic
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., Write a blog post about artificial intelligence..."
              className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none resize-none"
            />
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Generating...' : 'Generate Text'}
            </button>
            <button
              onClick={() => {
                setPrompt('')
                setGeneratedText('')
              }}
              className="btn-secondary"
            >
              Clear
            </button>
          </div>

          {generatedText && (
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Generated Text
              </label>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 min-h-32">
                <p className="text-gray-800 whitespace-pre-wrap">{generatedText}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => navigator.clipboard.writeText(generatedText)}
                  className="btn-secondary text-sm py-2 px-4"
                >
                  Copy Text
                </button>
                <button
                  onClick={() => {
                    const blob = new Blob([generatedText], { type: 'text/plain' })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = 'generated-text.txt'
                    a.click()
                  }}
                  className="btn-secondary text-sm py-2 px-4"
                >
                  Download
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold mb-1">Fast Generation</h3>
            <p className="text-sm text-gray-600">Get results in seconds</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold mb-1">High Quality</h3>
            <p className="text-sm text-gray-600">AI-powered content</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-semibold mb-1">100% Free</h3>
            <p className="text-sm text-gray-600">No credit card required</p>
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

export default TextGenerator

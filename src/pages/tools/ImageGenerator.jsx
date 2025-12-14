import { useState } from 'react'
import { Link } from 'react-router-dom'

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('')
  const [generatedImage, setGeneratedImage] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    // Simulate API call - in production, this would call an image generation API
    setTimeout(() => {
      // Placeholder image URL - in production, this would be the generated image
      setGeneratedImage('https://via.placeholder.com/512x512/6366f1/ffffff?text=Generated+Image')
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-4xl mb-4">
            🎨
          </div>
          <h1 className="text-4xl font-bold mb-2">AI Image Generator</h1>
          <p className="text-gray-600">Create stunning images from text descriptions</p>
        </div>

        {/* Main Card */}
        <div className="card">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Describe the image you want to create
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., A serene sunset over mountains with a lake reflection..."
              className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none resize-none"
            />
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Generating Image...' : 'Generate Image'}
            </button>
            <button
              onClick={() => {
                setPrompt('')
                setGeneratedImage(null)
              }}
              className="btn-secondary"
            >
              Clear
            </button>
          </div>

          {isGenerating && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          )}

          {generatedImage && !isGenerating && (
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Generated Image
              </label>
              <div className="bg-gray-100 border-2 border-gray-200 rounded-lg p-4 flex items-center justify-center">
                <img
                  src={generatedImage}
                  alt="Generated"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href={generatedImage}
                  download="generated-image.png"
                  className="btn-primary text-sm py-2 px-4"
                >
                  Download Image
                </a>
                <button
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = generatedImage
                    link.target = '_blank'
                    link.click()
                  }}
                  className="btn-secondary text-sm py-2 px-4"
                >
                  Open in New Tab
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="mt-8 card bg-primary-50 border-primary-200">
          <h3 className="font-semibold mb-2 text-primary-900">💡 Tips for Better Results</h3>
          <ul className="text-sm text-primary-800 space-y-1">
            <li>• Be specific about style, colors, and composition</li>
            <li>• Include details about lighting and mood</li>
            <li>• Mention artistic style if desired (realistic, abstract, etc.)</li>
          </ul>
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

export default ImageGenerator

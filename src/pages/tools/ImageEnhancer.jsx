import { useState } from 'react'
import { Link } from 'react-router-dom'

const ImageEnhancer = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [isEnhancing, setIsEnhancing] = useState(false)
  const [enhancementLevel, setEnhancementLevel] = useState('medium')

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
      setEnhancedImage(null)
    }
  }

  const handleEnhance = async () => {
    if (!selectedFile) return
    
    setIsEnhancing(true)
    // Simulate API call
    setTimeout(() => {
      // In production, this would call an image enhancement API
      setEnhancedImage(preview) // Placeholder - would be enhanced image URL
      setIsEnhancing(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-4xl mb-4">
            ✨
          </div>
          <h1 className="text-4xl font-bold mb-2">AI Image Enhancer</h1>
          <p className="text-gray-600">Enhance and upscale your images with AI</p>
        </div>

        {/* Main Card */}
        <div className="card">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enhancement Level
            </label>
            <select
              value={enhancementLevel}
              onChange={(e) => setEnhancementLevel(e.target.value)}
              className="w-full md:w-auto p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none mb-4"
            >
              <option value="low">Low Enhancement</option>
              <option value="medium">Medium Enhancement</option>
              <option value="high">High Enhancement</option>
              <option value="upscale">Upscale 2x</option>
            </select>
          </div>

          {/* File Upload */}
          {!preview && (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-primary-500 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="text-4xl mb-4">📸</div>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  Click to upload an image
                </p>
                <p className="text-sm text-gray-500">
                  PNG, JPG, WEBP up to 10MB
                </p>
              </label>
            </div>
          )}

          {/* Image Preview and Enhanced */}
          {preview && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Original Image
                </label>
                <div className="bg-gray-100 border-2 border-gray-200 rounded-lg p-4 flex items-center justify-center">
                  <img
                    src={preview}
                    alt="Original"
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <button
                  onClick={() => {
                    setSelectedFile(null)
                    setPreview(null)
                    setEnhancedImage(null)
                  }}
                  className="mt-2 w-full btn-secondary text-sm py-2"
                >
                  Change Image
                </button>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Enhanced Image
                </label>
                <div className="bg-gray-100 border-2 border-gray-200 rounded-lg p-4 flex items-center justify-center min-h-[200px]">
                  {isEnhancing ? (
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Enhancing image...</p>
                    </div>
                  ) : enhancedImage ? (
                    <img
                      src={enhancedImage}
                      alt="Enhanced"
                      className="max-w-full h-auto rounded-lg shadow-md"
                    />
                  ) : (
                    <p className="text-gray-500">Enhanced image will appear here</p>
                  )}
                </div>
                {enhancedImage && !isEnhancing && (
                  <a
                    href={enhancedImage}
                    download="enhanced-image.png"
                    className="mt-2 w-full btn-primary text-sm py-2 block text-center"
                  >
                    Download Enhanced Image
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Enhance Button */}
          {preview && !enhancedImage && !isEnhancing && (
            <button
              onClick={handleEnhance}
              className="btn-primary w-full"
            >
              ✨ Enhance Image
            </button>
          )}
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card text-center">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold mb-1">Quality Enhancement</h3>
            <p className="text-sm text-gray-600">Improve image clarity</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold mb-1">Upscaling</h3>
            <p className="text-sm text-gray-600">Increase resolution</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">🎨</div>
            <h3 className="font-semibold mb-1">AI Powered</h3>
            <p className="text-sm text-gray-600">Advanced algorithms</p>
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 card bg-blue-50 border-blue-200">
          <p className="text-sm text-blue-800">
            💡 <strong>Note:</strong> This is a placeholder interface. In production, you would integrate with image enhancement APIs like Topaz Labs, Real-ESRGAN, or similar services for actual image enhancement and upscaling.
          </p>
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

export default ImageEnhancer

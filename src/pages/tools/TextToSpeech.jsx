import { useState } from 'react'
import { Link } from 'react-router-dom'

const TextToSpeech = () => {
  const [text, setText] = useState('')
  const [voice, setVoice] = useState('en-US')
  const [isPlaying, setIsPlaying] = useState(false)

  const voices = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'en-GB', name: 'English (UK)' },
    { code: 'es-ES', name: 'Spanish' },
    { code: 'fr-FR', name: 'French' },
    { code: 'de-DE', name: 'German' },
    { code: 'it-IT', name: 'Italian' },
    { code: 'pt-BR', name: 'Portuguese' },
    { code: 'ja-JP', name: 'Japanese' },
    { code: 'zh-CN', name: 'Chinese' }
  ]

  const handlePlay = () => {
    if (!text.trim()) return

    // Use browser's built-in speech synthesis
    if ('speechSynthesis' in window) {
      setIsPlaying(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = voice
      utterance.rate = 1.0
      utterance.pitch = 1.0
      utterance.volume = 1.0
      
      utterance.onend = () => {
        setIsPlaying(false)
      }
      
      utterance.onerror = () => {
        setIsPlaying(false)
      }
      
      speechSynthesis.speak(utterance)
    } else {
      alert('Your browser does not support text-to-speech. Please use a modern browser.')
    }
  }

  const handleStop = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel()
      setIsPlaying(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block w-20 h-20 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-4xl mb-4">
            🔊
          </div>
          <h1 className="text-4xl font-bold mb-2">Text to Speech</h1>
          <p className="text-gray-600">Convert text into natural-sounding speech</p>
        </div>

        {/* Main Card */}
        <div className="card">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-gray-700">
                Enter text to convert
              </label>
              <select
                value={voice}
                onChange={(e) => setVoice(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg text-sm focus:border-primary-500 focus:outline-none"
              >
                {voices.map(v => (
                  <option key={v.code} value={v.code}>{v.name}</option>
                ))}
              </select>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste the text you want to convert to speech..."
              className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none resize-none"
            />
            <p className="text-xs text-gray-500 mt-2">{text.length} characters</p>
          </div>

          <div className="flex gap-4">
            {!isPlaying ? (
              <button
                onClick={handlePlay}
                disabled={!text.trim()}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🔊 Play Speech
              </button>
            ) : (
              <button
                onClick={handleStop}
                className="btn-primary flex-1 bg-red-600 hover:bg-red-700"
              >
                ⏹ Stop
              </button>
            )}
            <button
              onClick={() => {
                setText('')
                handleStop()
              }}
              className="btn-secondary"
            >
              Clear
            </button>
          </div>

          {/* Info */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              💡 <strong>Tip:</strong> This tool uses your browser's built-in text-to-speech. For production use, you would integrate with APIs like Google Cloud Text-to-Speech, Amazon Polly, or Azure Speech Services for higher quality voices.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card text-center">
            <div className="text-2xl mb-2">🌍</div>
            <h3 className="font-semibold mb-1">Multiple Languages</h3>
            <p className="text-sm text-gray-600">Support for many languages</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">🎵</div>
            <h3 className="font-semibold mb-1">Natural Voices</h3>
            <p className="text-sm text-gray-600">High-quality speech synthesis</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold mb-1">Instant Playback</h3>
            <p className="text-sm text-gray-600">Hear your text immediately</p>
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

export default TextToSpeech

import { useState } from 'react'
import { Link } from 'react-router-dom'

const Translator = () => {
  const [text, setText] = useState('')
  const [fromLang, setFromLang] = useState('auto')
  const [toLang, setToLang] = useState('en')
  const [translatedText, setTranslatedText] = useState('')
  const [isTranslating, setIsTranslating] = useState(false)

  const languages = [
    { code: 'auto', name: 'Auto-detect' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ko', name: 'Korean' },
    { code: 'ar', name: 'Arabic' }
  ]

  const handleTranslate = async () => {
    if (!text.trim()) return
    
    setIsTranslating(true)
    // Simulate API call
    setTimeout(() => {
      setTranslatedText(`[Translated from ${fromLang === 'auto' ? 'detected language' : languages.find(l => l.code === fromLang)?.name} to ${languages.find(l => l.code === toLang)?.name}]\n\n${text}\n\nThis is a placeholder translation. In a real implementation, this would connect to a translation API like Google Translate API, DeepL, or similar to provide accurate translations.`)
      setIsTranslating(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block w-20 h-20 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-4xl mb-4">
            🌐
          </div>
          <h1 className="text-4xl font-bold mb-2">AI Translator</h1>
          <p className="text-gray-600">Translate text between multiple languages</p>
        </div>

        {/* Main Card */}
        <div className="card">
          {/* Language Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                From Language
              </label>
              <select
                value={fromLang}
                onChange={(e) => setFromLang(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                To Language
              </label>
              <select
                value={toLang}
                onChange={(e) => setToLang(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
              >
                {languages.filter(l => l.code !== 'auto').map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Text Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Original Text
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to translate..."
                className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Translated Text
              </label>
              <div className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg bg-gray-50 overflow-y-auto">
                {isTranslating ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                  </div>
                ) : (
                  <p className="text-gray-800 whitespace-pre-wrap">{translatedText || 'Translation will appear here...'}</p>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={handleTranslate}
              disabled={isTranslating || !text.trim()}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isTranslating ? 'Translating...' : 'Translate'}
            </button>
            <button
              onClick={() => {
                setText('')
                setTranslatedText('')
              }}
              className="btn-secondary"
            >
              Clear
            </button>
            {translatedText && (
              <button
                onClick={() => navigator.clipboard.writeText(translatedText)}
                className="btn-secondary"
              >
                Copy Translation
              </button>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card text-center">
            <div className="text-2xl mb-2">🌍</div>
            <h3 className="font-semibold mb-1">100+ Languages</h3>
            <p className="text-sm text-gray-600">Support for major languages</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold mb-1">Instant Translation</h3>
            <p className="text-sm text-gray-600">Fast and accurate results</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold mb-1">Context Aware</h3>
            <p className="text-sm text-gray-600">Understands context</p>
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

export default Translator

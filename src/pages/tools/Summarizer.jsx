import { useState } from 'react'
import { Link } from 'react-router-dom'

const Summarizer = () => {
  const [text, setText] = useState('')
  const [summary, setSummary] = useState('')
  const [isSummarizing, setIsSummarizing] = useState(false)
  const [summaryLength, setSummaryLength] = useState('medium')

  const handleSummarize = async () => {
    if (!text.trim()) return
    
    setIsSummarizing(true)
    // Simulate API call
    setTimeout(() => {
      const lengthMap = {
        short: 'Brief summary',
        medium: 'Moderate summary',
        long: 'Detailed summary'
      }
      setSummary(`${lengthMap[summaryLength]}:\n\nThis is a placeholder summary. In a real implementation, this would use an AI summarization API to analyze the text and extract key points, main ideas, and important information based on the selected length preference.`)
      setIsSummarizing(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block w-20 h-20 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-4xl mb-4">
            📝
          </div>
          <h1 className="text-4xl font-bold mb-2">AI Text Summarizer</h1>
          <p className="text-gray-600">Summarize long texts into key points</p>
        </div>

        {/* Main Card */}
        <div className="card">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-gray-700">
                Enter text to summarize
              </label>
              <select
                value={summaryLength}
                onChange={(e) => setSummaryLength(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg text-sm focus:border-primary-500 focus:outline-none"
              >
                <option value="short">Short Summary</option>
                <option value="medium">Medium Summary</option>
                <option value="long">Long Summary</option>
              </select>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste or type the text you want to summarize..."
              className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none resize-none"
            />
            <p className="text-xs text-gray-500 mt-2">{text.length} characters</p>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={handleSummarize}
              disabled={isSummarizing || !text.trim()}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSummarizing ? 'Summarizing...' : 'Summarize Text'}
            </button>
            <button
              onClick={() => {
                setText('')
                setSummary('')
              }}
              className="btn-secondary"
            >
              Clear
            </button>
          </div>

          {summary && (
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Summary
              </label>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 min-h-32">
                <p className="text-gray-800 whitespace-pre-wrap">{summary}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => navigator.clipboard.writeText(summary)}
                  className="btn-secondary text-sm py-2 px-4"
                >
                  Copy Summary
                </button>
                <button
                  onClick={() => {
                    const blob = new Blob([summary], { type: 'text/plain' })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = 'summary.txt'
                    a.click()
                  }}
                  className="btn-secondary text-sm py-2 px-4"
                >
                  Download Summary
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card text-center">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold mb-1">Key Points</h3>
            <p className="text-sm text-gray-600">Extract main ideas</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold mb-1">Fast Processing</h3>
            <p className="text-sm text-gray-600">Quick summarization</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold mb-1">Custom Length</h3>
            <p className="text-sm text-gray-600">Choose summary size</p>
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

export default Summarizer

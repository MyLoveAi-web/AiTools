import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="text-xl font-bold text-white">WeLoveAI.cloud</span>
            </div>
            <p className="text-sm">
              Free AI tools for everyone. Transform your workflow with powerful AI capabilities.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/text-generator" className="hover:text-primary-400 transition-colors">Text Generator</Link></li>
              <li><Link to="/image-generator" className="hover:text-primary-400 transition-colors">Image Generator</Link></li>
              <li><Link to="/code-assistant" className="hover:text-primary-400 transition-colors">Code Assistant</Link></li>
              <li><Link to="/chatbot" className="hover:text-primary-400 transition-colors">Chat Bot</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">More Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/translator" className="hover:text-primary-400 transition-colors">Translator</Link></li>
              <li><Link to="/summarizer" className="hover:text-primary-400 transition-colors">Summarizer</Link></li>
              <li><Link to="/text-to-speech" className="hover:text-primary-400 transition-colors">Text to Speech</Link></li>
              <li><Link to="/image-enhancer" className="hover:text-primary-400 transition-colors">Image Enhancer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 WeLoveAI.cloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

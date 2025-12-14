import { Link } from 'react-router-dom'

const Home = () => {
  const tools = [
    {
      id: 1,
      name: 'Text Generator',
      description: 'Generate high-quality text content using AI',
      icon: '✍️',
      path: '/text-generator',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Image Generator',
      description: 'Create stunning images from text descriptions',
      icon: '🎨',
      path: '/image-generator',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      name: 'Code Assistant',
      description: 'Get AI-powered code suggestions and fixes',
      icon: '💻',
      path: '/code-assistant',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      name: 'Chat Bot',
      description: 'Chat with AI for answers and assistance',
      icon: '💬',
      path: '/chatbot',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 5,
      name: 'Translator',
      description: 'Translate text between multiple languages',
      icon: '🌐',
      path: '/translator',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 6,
      name: 'Summarizer',
      description: 'Summarize long texts into key points',
      icon: '📝',
      path: '/summarizer',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 7,
      name: 'Text to Speech',
      description: 'Convert text into natural-sounding speech',
      icon: '🔊',
      path: '/text-to-speech',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 8,
      name: 'Image Enhancer',
      description: 'Enhance and upscale your images with AI',
      icon: '✨',
      path: '/image-enhancer',
      color: 'from-cyan-500 to-cyan-600'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Free AI Tools for Everyone
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Transform your workflow with powerful AI capabilities. All tools are free, fast, and easy to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/text-generator" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Get Started Free
            </Link>
            <a href="#tools" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
              Explore Tools
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">Get results in seconds with our optimized AI models</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">100% Free</h3>
              <p className="text-gray-600">All tools are completely free with no hidden costs</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">No Sign Up</h3>
              <p className="text-gray-600">Start using tools immediately without registration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">All AI Tools</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our collection of powerful AI tools designed to make your work easier and more efficient.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                to={tool.path}
                className="tool-card group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tool.description}
                </p>
                <div className="mt-4 text-primary-600 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-200">
                  Use Tool
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of users who are already using our AI tools
          </p>
          <Link to="/text-generator" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Try It Now - It's Free!
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

# WeLoveAI.cloud

A full-fledged AI tools platform similar to ILovepdf.com, built with React. Access powerful AI tools for text generation, image creation, code assistance, translation, and more - all in one place.

## Features

- 🚀 **8 Powerful AI Tools**
  - Text Generator - Generate high-quality text content
  - Image Generator - Create images from text descriptions
  - Code Assistant - Get AI-powered code suggestions
  - Chat Bot - Interactive AI conversations
  - Translator - Translate between multiple languages
  - Summarizer - Summarize long texts into key points
  - Text to Speech - Convert text to natural speech
  - Image Enhancer - Enhance and upscale images

- ✨ **Modern UI/UX**
  - Clean, responsive design inspired by ILovepdf.com
  - Beautiful gradient colors and smooth animations
  - Mobile-friendly interface
  - Fast and intuitive navigation

- 🔒 **100% Free**
  - No sign-up required
  - No credit card needed
  - All tools accessible immediately

## Tech Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weloveai-cloud
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
weloveai-cloud/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx    # Navigation header
│   │   └── Footer.jsx    # Site footer
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Landing page
│   │   └── tools/        # Individual tool pages
│   │       ├── TextGenerator.jsx
│   │       ├── ImageGenerator.jsx
│   │       ├── CodeAssistant.jsx
│   │       ├── ChatBot.jsx
│   │       ├── Translator.jsx
│   │       ├── Summarizer.jsx
│   │       ├── TextToSpeech.jsx
│   │       └── ImageEnhancer.jsx
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## Customization

### Adding New Tools

1. Create a new component in `src/pages/tools/`
2. Add a route in `src/App.jsx`
3. Add the tool card to `src/pages/Home.jsx`
4. Update the footer links in `src/components/Footer.jsx`

### Styling

The project uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Custom CSS classes and utilities

### API Integration

Currently, the tools use placeholder responses. To integrate real AI APIs:

1. Set up API keys in environment variables
2. Create API service files in `src/services/`
3. Update tool components to call real APIs
4. Add error handling and loading states

Example API services to integrate:
- **Text Generation**: OpenAI GPT, Anthropic Claude
- **Image Generation**: DALL-E, Midjourney API, Stable Diffusion
- **Code**: GitHub Copilot API, OpenAI Codex
- **Translation**: Google Translate API, DeepL API
- **Text-to-Speech**: Google Cloud TTS, Amazon Polly, Azure Speech

## Deployment

### Deploy to VPS (Hostinger)

For detailed deployment instructions, see:
- **[QUICK_DEPLOY.md](./QUICK_DEPLOY.md)** - Quick start guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete deployment guide

**Quick Steps:**
1. Upload files to VPS: `/var/www/weloveai.cloud`
2. Install Node.js and Nginx
3. Run `npm install && npm run build`
4. Configure Nginx with provided `nginx.conf`
5. Set up SSL with Let's Encrypt

**VPS Details:**
- IP: `62.72.12.45`
- Domain: `weloveai.cloud`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- Design inspired by [ILovepdf.com](https://www.ilovepdf.com/)
- Built with modern web technologies for optimal performance

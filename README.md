# AI Content Generator

A powerful Next.js application that leverages Google's Gemini AI to generate various types of content including blog posts, YouTube descriptions, social media content, and code assistance. Built with modern web technologies and featuring user authentication, usage tracking, and a rich text editor.

## 🚀 Features

### Content Generation Templates
- **Blog Tools**: Blog titles, content generation, topic ideas
- **YouTube Tools**: SEO-optimized titles, descriptions, tags
- **Social Media**: Instagram posts, hashtags, post ideas
- **Writing Assistant**: Text improvement, grammar checking, plagiarism-free rewriting
- **Coding Tools**: Code generation, explanation, bug detection
- **Marketing**: Taglines, product descriptions
- **Text Enhancement**: Emoji addition, content rewriting

### Core Functionality
- **AI-Powered Generation**: Uses Google Gemini 1.5 Flash model
- **User Authentication**: Secure login/signup with Clerk
- **Usage Tracking**: Monitor content generation credits (10,000 limit)
- **Content History**: View and manage previously generated content
- **Rich Text Editor**: Advanced editing with Toast UI Editor
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Database Integration**: PostgreSQL with Drizzle ORM

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.3.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **Toast UI React Editor** - Rich text editing

### Backend & Database
- **Neon Database** - Serverless PostgreSQL
- **Drizzle ORM** - Type-safe database toolkit
- **Google Gemini AI** - Content generation

### Authentication & Middleware
- **Clerk** - User authentication and management
- **Next.js Middleware** - Route protection

### Development Tools
- **Turbopack** - Fast bundler for development
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
ai-content-generator/
├── app/
│   ├── (auth)/                 # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (data)/
│   │   └── Templates.tsx       # Content generation templates
│   ├── dashboard/              # Main application dashboard
│   │   ├── _components/        # Dashboard components
│   │   ├── content/[template-slug]/  # Dynamic content generation
│   │   ├── history/            # Content history
│   │   ├── billing/            # Usage and billing
│   │   └── settings/           # User settings
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── components/ui/              # Reusable UI components
├── utils/
│   ├── AiModals.tsx           # Google Gemini AI configuration
│   ├── db.tsx                 # Database connection
│   └── schema.tsx             # Database schema
├── (context)/                 # React context providers
├── public/                    # Static assets
└── middleware.ts              # Route protection
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database (Neon recommended)
- Google AI API key
- Clerk account for authentication

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL=your_neon_database_url

# Google AI
NEXT_PUBLIC_GOOGLE_GEMNI_API_KEY=your_google_ai_api_key

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd ai-content-generator
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up the database**
```bash
npm run db:push
```

4. **Start development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## 🎯 Usage Guide

### Getting Started
1. **Sign Up/Login**: Create an account or login using Clerk authentication
2. **Choose Template**: Select from 20+ content generation templates
3. **Fill Form**: Provide required information for content generation
4. **Generate Content**: AI processes your input and generates content
5. **Edit & Export**: Use the rich text editor to refine your content

### Content Templates

#### Blog Content
- **Blog Title Generator**: Generate catchy blog titles based on niche and outline
- **Blog Content Generator**: Create full blog posts from topics and outlines
- **Blog Topic Ideas**: Get trending topic suggestions for your niche

#### YouTube Optimization
- **SEO Title Generator**: Create optimized YouTube titles
- **Description Generator**: Generate engaging video descriptions with emojis
- **Tags Generator**: Get relevant tags for better discoverability

#### Social Media
- **Instagram Post Generator**: Create engaging Instagram content
- **Hashtag Generator**: Generate trending hashtags
- **Post Ideas**: Get creative post suggestions

#### Writing Tools
- **Text Improver**: Enhance writing quality and grammar
- **Article Rewriter**: Create plagiarism-free content
- **Grammar Checker**: Fix grammatical errors

#### Coding Assistance
- **Code Generator**: Generate code in any programming language
- **Code Explainer**: Understand complex code snippets
- **Bug Detector**: Identify and fix code issues

## 💡 Demo Example

### Blog Title Generation
**Input:**
- Niche: "Web Development"
- Outline: "Modern JavaScript frameworks and their benefits"

**Generated Output:**
- 🚀 5 Modern JavaScript Frameworks That Will Transform Your Development Workflow
- ⚡ The Ultimate Guide to Choosing the Right JavaScript Framework in 2024
- 🔥 Why These JavaScript Frameworks Are Dominating the Web Development Scene
- 💻 From React to Vue: A Developer's Journey Through Modern JS Frameworks
- 🎯 JavaScript Frameworks Showdown: Performance, Features, and Real-World Applications

### Code Generation Example
**Input:**
- Description: "Create a Python function to calculate factorial using recursion"

**Generated Output:**
```python
def factorial(n):
    """
    Calculate factorial of a number using recursion
    
    Args:
        n (int): Non-negative integer
    
    Returns:
        int: Factorial of n
    """
    # Base case
    if n == 0 or n == 1:
        return 1
    
    # Recursive case
    return n * factorial(n - 1)

# Example usage
print(factorial(5))  # Output: 120
```

## 📊 Database Schema

```sql
-- AI Output Storage
CREATE TABLE aiOutput (
  id SERIAL PRIMARY KEY,
  formData VARCHAR(255),
  aiResponse TEXT,
  templateSlug VARCHAR(255) NOT NULL,
  createdBy VARCHAR(255),
  createdAt VARCHAR(255)
);
```

## 🔒 Security Features

- **Route Protection**: Dashboard routes protected by Clerk middleware
- **User Authentication**: Secure login/signup with email verification
- **API Key Security**: Environment variables for sensitive data
- **Input Validation**: Form validation and sanitization
- **Usage Limits**: Credit-based system to prevent abuse

## 📈 Usage Tracking

- **Credit System**: 10,000 free generations per user
- **Usage Monitoring**: Real-time tracking of content generation
- **History Management**: View and manage generated content
- **Billing Integration**: Ready for premium plan implementation

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push database schema
npm run db:studio    # Open Drizzle Studio
```

## 🐛 Troubleshooting

### Common Issues

**Database Connection Error**
- Verify DATABASE_URL in environment variables
- Check Neon database status and connection string

**AI Generation Not Working**
- Confirm GOOGLE_GEMNI_API_KEY is valid
- Check API quota and billing status

**Authentication Issues**
- Verify Clerk keys are correctly set
- Check Clerk dashboard for configuration

**Build Errors**
- Clear `.next` folder and rebuild
- Update dependencies to latest versions

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powerful content generation
- Clerk for seamless authentication
- Neon for serverless PostgreSQL
- Toast UI for rich text editing
- Tailwind CSS for beautiful styling

---

**Built with ❤️ using Next.js and AI**
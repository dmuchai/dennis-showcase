# Dennis Muchai - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full-Stack Web Developer. Built with React, TypeScript, Tailwind CSS, and designed for deployment on Lovable.dev.

## 🚀 Live Demo

Visit the live portfolio: [dennis-portfolio.lovable.app](https://dennis-portfolio.lovable.app)

## 👨‍💻 About

I'm Dennis Muchai, a Full-Stack Web Developer and ALX Software Engineering Program graduate. I specialize in building modern, scalable web applications using technologies like React, Supabase, TypeScript, and more.

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Lovable.dev
- **Backend** (when connected): Supabase

## 📁 Project Structure

```
src/
├── components/
│   ├── Portfolio/
│   │   ├── Hero.tsx          # Landing section with intro
│   │   ├── Projects.tsx      # Project showcase
│   │   ├── About.tsx         # About me & skills
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Navigation.tsx    # Top navigation
│   │   └── Footer.tsx        # Footer section
│   └── ui/                   # Reusable UI components
├── assets/                   # Images and static files
└── pages/
    └── Index.tsx             # Main page layout
```

## 🎨 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark Mode Toggle**: Light/dark theme switching
- **Smooth Scrolling**: Navigation with smooth scroll effects
- **Modern UI**: Clean, professional design with animations
- **SEO Optimized**: Proper meta tags and structured content
- **Contact Form**: Ready for Supabase integration

## 🔧 Setup & Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## 📝 Customization Guide

### Updating Personal Information

1. **Hero Section** (`src/components/Portfolio/Hero.tsx`):
   - Update name, title, and description
   - Replace social media links
   - Update profile photo path

2. **Projects Section** (`src/components/Portfolio/Projects.tsx`):
   - Modify the `projects` array with your own projects
   - Update GitHub and live demo URLs
   - Add/remove tech stack items

3. **About Section** (`src/components/Portfolio/About.tsx`):
   - Update bio and experience highlights
   - Modify skills categories and items
   - Customize experience timeline

4. **Contact Information** (`src/components/Portfolio/Contact.tsx`):
   - Update email, phone, and location
   - Modify contact form fields if needed

### Adding New Projects

In `src/components/Portfolio/Projects.tsx`, add new project objects to the `projects` array:

```typescript
{
  title: "Your Project Name",
  description: "Brief description of your project",
  techStack: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/username/project",
  liveUrl: "https://your-project.com",
  image: "🚀" // Emoji or image path
}
```

### Supabase Integration

To enable the contact form with database storage:

1. Connect your Lovable project to Supabase using the green Supabase button
2. The contact form will automatically store submissions in your Supabase database
3. Update the form submission logic in `Contact.tsx` once connected

### Styling Customization

- **Colors**: Modify color scheme in `src/index.css` (CSS variables)
- **Fonts**: Update font families in Tailwind config
- **Animations**: Customize transitions and animations in component files

## 🚀 Deployment

This project is optimized for deployment on Lovable.dev:

1. Click the "Publish" button in the Lovable editor
2. Your site will be available at `your-project.lovable.app`
3. Connect a custom domain in Project Settings if desired

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Features

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Optimized bundle sizes
- **Fast Navigation**: Smooth scroll and optimized animations
- **SEO Ready**: Meta tags, proper heading structure

## 📧 Contact Form Backend

The contact form is ready for Supabase integration. Once connected:

- Form submissions will be stored in a Supabase table
- Email notifications can be set up via Supabase Edge Functions
- Form validation and error handling included

## 🔒 Security

- Form validation on both client and server side (when Supabase connected)
- Secure handling of sensitive data
- Protected API endpoints (when backend connected)

## 📈 Future Enhancements

- [ ] Blog section integration
- [ ] Project filtering and search
- [ ] Animation improvements
- [ ] Performance monitoring
- [ ] Analytics integration

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Report bugs or issues
- Suggest improvements
- Use as a template for your own portfolio

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, TypeScript, and Lovable.dev**

For questions or collaboration opportunities, feel free to [contact me](mailto:dennis@example.com)!
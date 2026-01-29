# Portfolio - Igor Stojanov

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/igorstojanov/deploys)

## 🚀 Live Demo
**[View Portfolio](https://igorstojanov.netlify.app/)**

## 👨‍💻 About

Hi there! I'm Igor Stojanov, a Backend & Web3 Developer specializing in Python, FastAPI, AWS serverless architectures, and blockchain technologies. This is my personal portfolio website showcasing my work, skills, and experience.

## ✨ Features

- **Responsive Design** - Works seamlessly on all devices
- **Smooth Animations** - Elegant transitions and hover effects
- **Working Contact Form** - Get in touch directly through the website
- **SEO Optimized** - Proper meta tags and structured data
- **Accessible** - WCAG compliant with keyboard navigation
- **Fast Loading** - Optimized images with lazy loading
- **Clean Code** - Modern, maintainable SCSS and JavaScript

## 🛠️ Technologies Used

### Frontend
- HTML5
- SCSS/CSS3
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins)

### Tools & Services
- Sass (CSS preprocessor)
- EmailJS (Contact form)
- Netlify (Hosting)
- Git & GitHub (Version control)

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/igor-stojanov/Igor-Stojanov-Portfolio.git
cd Igor-Stojanov-Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Compile SCSS**
```bash
npm run sass
```

4. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 📝 NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run sass` | Compile SCSS to CSS once |
| `npm run sass:watch` | Watch and compile SCSS on changes |
| `npm run sass:build` | Compile and minify SCSS for production |
| `npm run serve` | Start local development server |
| `npm run dev` | Watch SCSS and run server simultaneously |
| `npm run build` | Build for production |
| `npm run validate` | Validate HTML |
| `npm run lighthouse` | Run Lighthouse performance audit |

## 🔧 Configuration

### Contact Form Setup

The contact form uses EmailJS. To set it up:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Get your credentials (Public Key, Service ID, Template ID)
4. Add EmailJS SDK before `</body>` in `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
5. Update credentials in `js/app.js`:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
const response = await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData
);
```

### Customize Content

- **Personal Info**: Edit directly in `index.html`
- **Colors**: Modify CSS variables in `css/styles.scss`
- **Skills**: Update progress bar values in `css/styles.scss`
- **Projects**: Add/edit project cards in `index.html`

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── styles.scss        # Main SCSS file
│   ├── _media.scss        # Responsive breakpoints
│   └── styles.css         # Compiled CSS (generated)
├── js/
│   └── app.js            # JavaScript functionality
├── img/                   # Images and project screenshots
├── assets/
│   └── CV-Igor-Stojanov.pdf  # Resume/CV
├── package.json           # NPM configuration
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🎨 Customization Guide

### Change Theme Colors

Edit CSS variables in `css/styles.scss`:
```scss
:root {
    --color-primary: #191d2b;
    --color-secondary: #27AE60;  // Change this for accent color
    --color-white: #FFFFFF;
    // ... other colors
}
```

### Add New Project

Add a new portfolio item in `index.html`:
```html
<div class="portfolio-item">
    <div class="image">
        <img src="img/your-project.png" alt="Project Name" loading="lazy" />
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Brief description</p>
        <div class="tech-stack">
            <span class="tech-badge">Tech1</span>
            <span class="tech-badge">Tech2</span>
        </div>
    </div>
    <div class="hover-items">
        <h3>Project Name</h3>
        <div class="icons">
            <a href="github-url" class="icon">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
</div>
```

### Update Skills

1. Add skill in HTML (`index.html`):
```html
<div class="progress-bar">
    <p class="prog-title">New Skill</p>
    <div class="progress-con">
        <span class="prog-text">85%</span>
        <div class="progress">
            <span class="new-skill"></span>
        </div>
    </div>
</div>
```

2. Add CSS in `css/styles.scss`:
```scss
.new-skill { width: 85%; }
```

## 🚀 Deployment

### Deploy to Netlify

1. **Via Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

2. **Via GitHub (Recommended)**
- Push code to GitHub
- Go to [Netlify](https://www.netlify.com/)
- New site from Git
- Connect repository
- Build command: `npm run build`
- Publish directory: `.`
- Deploy!

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Enable GitHub Pages in repository settings
2. Select branch and folder
3. Save and wait for deployment

## ✅ Testing

### Before Deployment Checklist

- [ ] All images load properly
- [ ] Contact form submits successfully
- [ ] All links work correctly
- [ ] Responsive on all screen sizes
- [ ] No console errors
- [ ] Navigation works smoothly
- [ ] CV downloads correctly
- [ ] Tested on multiple browsers
- [ ] SEO meta tags are correct
- [ ] Performance score > 90

### Validation Tools

- **HTML**: [W3C Validator](https://validator.w3.org/)
- **CSS**: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- **Accessibility**: [WAVE](https://wave.webaim.org/)
- **SEO**: [Metatags.io](https://metatags.io/)
- **Performance**: [PageSpeed Insights](https://pagespeed.web.dev/)

## 📊 Performance

Current scores (as of latest build):
- **Performance**: 98/100
- **Accessibility**: 100/100
- **Best Practices**: 100/100
- **SEO**: 100/100

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Igor Stojanov - [@_Stojanov_Igor](https://twitter.com/_Stojanov_Igor) - stojanovi.vs@gmail.com

Project Link: [https://github.com/igor-stojanov/Igor-Stojanov-Portfolio](https://github.com/igor-stojanov/Igor-Stojanov-Portfolio)

Website: [https://igorstojanov.netlify.app/](https://igorstojanov.netlify.app/)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Netlify for hosting
- EmailJS for contact form service
- The web development community for inspiration

---

**⭐ If you like this portfolio, please give it a star on GitHub!**

Made with ❤️ by Igor Stojanov
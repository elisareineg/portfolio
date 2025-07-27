# Elisa Goncalves - Portfolio

A beautiful React portfolio website featuring a starry pink gradient background, animated floating skill logos, and a functional contact form.

## 🚀 Features

- **Responsive Design** - Works on all devices
- **Animated Background** - Starry night sky with gradient
- **Floating Skill Logos** - Orbiting technology icons
- **Contact Form** - Email functionality with Express.js backend
- **Professional Sections** - Experience, Projects, Extracurriculars
- **Modern UI** - Pink gradient theme with smooth animations

## 🛠️ Technologies Used

- **Frontend**: React.js, CSS3
- **Backend**: Express.js, Node.js
- **Email**: Nodemailer with Gmail SMTP
- **Animations**: CSS keyframes and transforms

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/elisareineg/portfolio-1.git
   cd portfolio-1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```
   This starts both the React app (port 3000) and Express server (port 3001).

## 🔧 Email Setup

To enable the contact form functionality:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account Settings → Security → 2-Step Verification
   - Click "App passwords" → Generate new app password
   - Select "Mail" and copy the 16-character password
3. **Add to .env file**:
   ```
   SMTP_PASS=your-16-character-app-password
   ```

## 🎨 Customization

- **Colors**: Update CSS variables in `src/App.css`
- **Content**: Modify sections in `src/App.js`
- **Skills**: Add/remove skill logos in the floating animation
- **Projects**: Update project screenshots and descriptions

## 📱 Usage

- **Home**: Hero section with animated skill logos
- **About**: Profile photo and skills section
- **Experience**: Work history in card format
- **Projects**: Portfolio projects with screenshots
- **Extracurriculars**: Club and organization involvement
- **Contact**: Functional email form

## 🔒 Security

- Environment variables are properly ignored by `.gitignore`
- No sensitive data is committed to the repository
- Email credentials are stored securely in `.env` file

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Contact**: elisareine.a.goncalves@gmail.com  
**LinkedIn**: [Elisa Goncalves](https://linkedin.com/in/elisa-goncalves-079713285)  
**GitHub**: [elisareineg](https://github.com/elisareineg)

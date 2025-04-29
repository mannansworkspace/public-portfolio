# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, TypeScript, Tailwind CSS, and Three.js. Features a stunning 3D animated background, smooth transitions, and a clean, professional design.

## 🌟 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **3D Background**: Interactive 3D scene using Three.js
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Dark Theme**: Eye-friendly dark mode with professional color scheme
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Ready**: Built-in SEO optimization with Next.js

### Key Sections
- Dynamic Hero section with 3D animation
- Services showcase
- Project portfolio with modal views
- Professional experience timeline
- Skills and technologies
- Education history
- Contact information

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Icons**: Font Awesome & Devicons
- **Fonts**: Geist Sans & Geist Mono

## 🚀 Performance Features

- Image optimization with next/image
- Lazy loading components
- Responsive images with proper sizing
- Optimized 3D rendering
- Smooth page transitions
- Efficient component rendering

## 📱 Responsive Design

- Mobile-first approach
- Responsive navigation with animated sidebar
- Adaptive layouts for different screen sizes
- Touch-friendly interactions
- Optimized media display

## 🎨 Design Features

- Custom animated background
- Smooth scrolling
- Professional color scheme
- Modern typography with Geist font family
- Consistent spacing and layout
- Interactive UI elements

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Run the development server:
   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── navigation/   # Navigation components
│   ├── sections/     # Page sections
│   ├── projects/     # Project related components
│   └── three/        # Three.js components
├── types/           # TypeScript type definitions
└── styles/          # Global styles
public/
├── images/          # Image assets
│   ├── projects/    # Project images
│   │   └── [project-name]/ # Project-specific images
│   └── profile.webp # Profile picture
data/                # Content data files
```

## 📝 Data Configuration

1. Update the data files in the `data` directory:
   ```
   data/
   ├── personal-info.ts    # Your personal information
   ├── projects.ts         # Project details and media
   ├── experience.ts       # Work experience
   ├── education.ts        # Educational background
   ├── services.ts         # Services you offer
   └── skills.ts          # Skills and technologies
   ```

2. Add images to the `public/images` directory:
   - Profile picture: `public/images/profile.webp`
   - Project images: `public/images/projects/[project-name]/*.webp`
   
Example project image structure:
```
public/images/projects/
├── project-1/
│   ├── preview1.webp
│   ├── preview2.webp
│   └── preview3.webp
└── project-2/
    ├── preview1.webp
    └── preview2.webp
```

3. Image requirements:
   - Use `.webp` format for better performance
   - Recommended profile picture size: 400x400px
   - Recommended project image size: 1920x1080px
   - Keep image file sizes under 500KB

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Create a Vercel account at [vercel.com](https://vercel.com)

2. Install Vercel CLI:
   ```bash
   yarn global add vercel
   ```

3. Login to Vercel:
   ```bash
   vercel login
   ```

4. Deploy:
   ```bash
   vercel
   ```

5. For production deployment:
   ```bash
   vercel --prod
   ```

Alternatively, you can deploy directly from the Vercel dashboard:

1. Push your code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

### Environment Variables

If you're using any environment variables:

1. Create a `.env.local` file locally
2. Add your environment variables to Vercel:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add your variables

## 🔍 SEO

- Meta tags optimization
- Semantic HTML structure
- Optimized for social sharing
- Fast loading times
- Mobile-friendly design

## 📱 Mobile Optimization

- Responsive images
- Touch-friendly navigation
- Optimized 3D rendering for mobile
- Adaptive layouts
- Performance optimizations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

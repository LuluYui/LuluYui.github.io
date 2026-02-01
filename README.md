# Personal Portfolio Website

Welcome to the repository for my personal portfolio website. This project serves as a comprehensive digital resume, showcasing my professional experience, education, skills, and detailed project case studies. It is designed to be a fast, responsive, and visually engaging way to present my background to potential employers and collaborators.

## 🚀 Overview

This application is a Single Page Application (SPA) built with modern web technologies. It dynamically renders content, including parsing Markdown files for project descriptions, to provide a seamless browsing experience.

## 🛠️ Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vitejs.dev/) - Ensuring fast development and optimized builds.
- **Language:** TypeScript & JavaScript (JSX)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - For utility-first, responsive design.
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Content Rendering:** `react-markdown` & `remark-gfm` - Used to render project case studies directly from Markdown files.

## 📂 Project Structure

The codebase is organized as follows:

```
/
├── public/                 # Static assets
│   ├── images/             # Profile pictures and background images
│   ├── svgs/               # Icons for skills and social links
│   └── projects/           # Markdown files containing project details
│       └── ...             # e.g., WaterDebris.md
├── src/                    # Source code
│   ├── assets/             # Bundled assets (fonts)
│   ├── components/         # (Implicit in current structure)
│   ├── About.jsx           # About Me section
│   ├── App.jsx             # Main application layout and routing
│   ├── Education.jsx       # Education history display
│   ├── ExperienceTimeline.jsx # Interactive timeline of work experience
│   ├── Header.jsx          # Navigation header
│   ├── HomePage.jsx        # Landing page
│   ├── Projects.jsx        # Grid view of projects
│   ├── ProjectDetail.jsx   # Dynamic view for individual project markdown files
│   ├── Skills.jsx          # Skill icons grid
│   └── main.tsx            # Application entry point
├── package.json            # Dependencies and scripts
└── ...config files         # Vite, TypeScript, ESLint configurations
```

### Key Components

- **Project System:** Projects are stored as Markdown files in `public/projects/`. The `ProjectDetail` component fetches these files and renders them, allowing for easy content updates without code changes.
- **Experience Timeline:** A visual representation of my professional history.
- **Responsive Design:** The layout adjusts automatically for mobile, tablet, and desktop screens using Tailwind CSS.

## 💻 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd portfolio-Chris
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173` (or similar).

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

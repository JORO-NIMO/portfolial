About Page Deliverables

Included files (editable):
- `about.html` — responsive HTML version you can open directly in a browser.
- `styles.css` — styles used by `about.html`.
- `src/About.jsx` — reusable React component (props: `data`) and example structure.
- `src/About.css` — component styles for the React version.

How to preview the HTML (Windows PowerShell):

```powershell
# open the HTML in your default browser
Start-Process -FilePath "E:/portifolio/about.html"
```

How to use the React component (quick):
1. Create a React app or add to an existing project.
2. Copy `src/About.jsx` and `src/About.css` into your `src/` folder.
3. Import and render with a `data` prop, e.g.: 

```jsx
import About from './About';

const data = {
  name: 'Your Full Name',
  title: 'Senior Software Engineer',
  mission: 'Build tech that empowers people.',
  bio: 'Short bio here...',
  skills: ['React', 'Node.js', 'AWS'],
  projects: [
    { title: 'MentorBridge', description: '...', tech: 'React, Node', status: 'Active', link: 'https://example.com' }
  ],
  contact: { email: 'your.email@example.com', linkedin: 'https://www.linkedin.com/in/your-profile' }
};

function App(){
  return <About data={data} />;
}
```

Generating a printable PDF:
- Use your browser print-to-PDF on `about.html` and choose "Save as PDF".
- For a styled one-page CV PDF, open `about.html`, adjust print settings (scale, margins) and export.

Next steps I can do for you (pick any):
- Convert this to a ready-to-run single-page React app (with `package.json`).
- Produce a one-page printable PDF export (I can generate HTML optimized for print and layout guidance).
- Commit these to git and create a zip bundle.

Notes:
- Replace all placeholders (emails, links, numbers, names) with your real data.
- If you want a different color palette or typography, tell me and I will update the CSS.

How to run the Create React App starter (quick):

1. Open PowerShell in the project folder `E:/portifolio`.
2. Install dependencies:

```powershell
npm install
```

3. Start the development server:

```powershell
npm start
```

This runs the app at `http://localhost:3000` by default. Edit files in `src/` and the page will hot-reload.

Notes on Windows: If you prefer using `yarn`, run `yarn` then `yarn start` instead.

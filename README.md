# Website Generator

A community-driven **visual website builder** built with React and Tailwind CSS.

The project is currently a **work in progress**. The goal is to evolve it into a browser-based website editor where developers can experiment with visual editing, layouts, components, pages, styling, previewing, and exporting.

> **This project is open for development. Fork it, build on it, and send a pull request.**

## 🚀 Project Status

This is an early-stage project and should be considered a **development playground / foundation**, not a production-ready website builder.

The current UI is inspired by the workflow of visual design tools:

- Top toolbar
- Left pages/layers panel
- Central editing viewport
- Right-side inspector/actions panel
- Tailwind CSS styling
- React component-based architecture

A lot of functionality is intentionally incomplete. That is where contributors come in.

## 🛠 Tech Stack

- **React 18**
- **JavaScript**
- **Tailwind CSS 3**
- **Create React App**
- **React Testing Library**

## 📦 Getting Started

### 1. Fork the repository

Fork this repository from GitHub:

https://github.com/arashmhdzx/website-Generator

Then clone **your fork**:

```bash
git clone https://github.com/YOUR_USERNAME/website-Generator.git
cd website-Generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

## 🔀 Contribution Workflow

Please use the standard fork → branch → pull request workflow.

### Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

For example:

```bash
git checkout -b feature/element-dragging
```

### Make your changes

Keep changes focused. Avoid mixing unrelated refactors with a feature or bug fix.

### Test your changes

Run:

```bash
npm test
```

And verify that the production build still works:

```bash
npm run build
```

### Commit your changes

Use a clear commit message:

```bash
git add .
git commit -m "feat: add element dragging"
```

### Push your branch

```bash
git push origin feature/element-dragging
```

### Open a Pull Request

Open a Pull Request from your fork into the `master` branch of this repository.

In your PR description, explain:

- What you changed
- Why you changed it
- How it works
- How you tested it
- Any known limitations

## 🧭 What Can You Build?

There is no requirement to wait for an assigned task. If you see an area that can be improved, you can work on it.

Some possible directions:

### Editor / Canvas

- Drag-and-drop elements
- Element selection
- Resize handles
- Move elements around the canvas
- Multi-selection
- Keyboard shortcuts
- Zoom and pan
- Undo / redo
- Copy / paste
- Alignment guides

### Pages

- Create pages
- Rename pages
- Delete pages
- Duplicate pages
- Page navigation
- Page-specific settings

### Components

- Text blocks
- Images
- Buttons
- Containers
- Cards
- Forms
- Navigation bars
- Reusable components

### Styling

- Typography controls
- Colors
- Spacing
- Borders
- Shadows
- Responsive breakpoints
- Flexbox / Grid controls
- Custom CSS

### Preview & Export

- Live preview
- Responsive preview
- Export generated HTML/CSS
- Export React components
- Static site generation

### Developer Experience

- Improve component architecture
- Add TypeScript
- Add tests
- Improve state management
- Improve accessibility
- Improve performance
- Improve project structure
- Add CI/CD

## 📁 Project Structure

```
src/
├── components/
│   ├── side-panels/
│   │   ├── leftPanel.jsx
│   │   └── rightPanel.jsx
│   └── toolbar/
│       └── toolbar.jsx
├── core/
│   └── viewport.jsx
├── layouts/
│   └── layout.jsx
├── styles/
│   ├── app.css
│   └── index.css
├── App.js
└── index.js
```

The architecture is intentionally small at this stage. As the editor becomes more capable, contributors are encouraged to keep the codebase modular and avoid putting editor logic directly into large components.

## 💡 Contribution Guidelines

Before starting a large change:

1. Check existing Issues and Pull Requests.
2. If the idea is substantial, open an Issue first.
3. Keep each PR focused on one problem or feature.
4. Prefer reusable components over duplicated UI.
5. Keep editor state separate from presentation where practical.
6. Add tests when introducing non-trivial behavior.
7. Make sure `npm test` and `npm run build` pass before opening a PR.

For small fixes, you can submit a PR directly.

## 🎯 Long-Term Goal

The long-term goal is to turn this project into a **real open-source visual website builder**.

The project can grow from the current UI foundation into a system with:

```
Visual Editor
      ↓
Document / Component Model
      ↓
Editor State
      ↓
Responsive Layout Engine
      ↓
Preview
      ↓
Export
```

There is intentionally no single prescribed implementation. Different approaches can be proposed, tested, and discussed through Issues and Pull Requests.

## 🤝 Contributing

If you want to experiment with the project:

**Fork → Build → Test → Pull Request**

You do not need permission to start working on an idea. Open an Issue when discussion or coordination would be useful.

Useful contributions include features, bug fixes, refactors, tests, documentation, accessibility improvements, performance improvements, and architectural proposals.

## 📄 License

No open-source license has been specified for this repository yet.

Until a license is added, please do not assume that the code has unrestricted reuse or redistribution rights.

# 3dProfile

Interactive personal portfolio with:

- Three.js GLTF hero scene
- Animated left wordmark + right action rail
- Bottom-sheet About panel
- Bottom-sheet Projects panel with horizontal card rail

## Tech Stack

- React 18
- React Router 6
- Framer Motion
- Three.js + GLTFLoader
- Create React App
- gh-pages deployment

## Project Structure

```text
src/
  App.js
  App.css
  constants/
    index.js
  components/
    Footer.js
    Footer.css
    GLTFViewer.js
    HomeWordmark.js
    HomeWordmark.css
    home/
      HomeBottomBar.js
      AboutSheet.js
      ProjectsSheet.js
  pages/
    HomePage.js
    HomePage.css
public/
  CNAME
  iam_software_dev.JPG
```

## Run Locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `build` first and then publishes `build/` to `gh-pages`.

## Custom Domain

Custom domain is preserved by keeping this file in source control:

- `public/CNAME` -> `www.iamtawfik.com`

Make sure GitHub Pages is configured to serve from:

- Branch: `gh-pages`
- Folder: `/ (root)`

## Notes

- Home route is the only route used in the current architecture.
- About and Projects are intentionally implemented as bottom sheets on home.
- Project content is driven from `src/constants/index.js`.

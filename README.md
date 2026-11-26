# mallo3.github.io

Personal site of Soumallya Hazra — built with React 19 + Vite.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Edit content

All text, experience, skills, work cards and social links live in [`src/content.js`](src/content.js).
The portrait is `src/assets/portrait.jpg`.

## Deploy

```bash
npm run custom-deploy   # builds, then publishes ./build to the `master` branch
```

`public/` is copied as-is into the build (`ads.txt`, `404.html`, favicon, manifest).
`404.html` redirects old routes like `/about` and `/contact` to the matching section on the one-page site.

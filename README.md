# Amirhossein Rahmani — GitHub Pages Portfolio

A clean, dark, responsive personal portfolio built with plain HTML, CSS and JavaScript.

## Quick setup

1. Create a GitHub repository named exactly:
   `YOUR_GITHUB_USERNAME.github.io`
2. Upload all files/folders from this project.
3. In GitHub open:
   **Settings → Pages → Build and deployment → Deploy from a branch → main → / (root) → Save**
4. Open:
   `https://YOUR_GITHUB_USERNAME.github.io`

## Edit your profile photo

Replace:

`assets/images/profile.jpg`

with your own image and keep the same filename.

If you use another filename, edit the image path in `index.html`.

## Add / remove videos

Put your video files in:

`assets/videos/`

Then open `script.js` and edit the `videos` array:

```js
const videos = [
  {
    file: "assets/videos/sleep-monitor.mp4",
    title: "Sleep Monitoring System",
    description: "Real-time signal monitoring demo"
  }
];
```

To remove a video, delete its entry from the array and optionally delete the video file.

## Change skills

Edit the `skills` array near the top of `script.js`.

## Change contact information

Open `index.html` and edit the email, LinkedIn and GitHub links in the Contact section.

## Offline editing

You can edit everything locally without internet:

- HTML: `index.html`
- Design: `style.css`
- Skills/videos: `script.js`
- Photo: `assets/images/profile.jpg`
- Videos: `assets/videos/`

Open `index.html` directly in a browser to preview most changes offline.

After editing, upload/push the changed files to GitHub and GitHub Pages will update the website.

## Important

Do not upload confidential company source code, private datasets, credentials, internal screenshots, or proprietary information.

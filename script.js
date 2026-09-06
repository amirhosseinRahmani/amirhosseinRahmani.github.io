// ===============================
// PORTFOLIO CONTENT — EDIT HERE
// ===============================

// 1) Skills: change/add/remove items freely.
// icon can be an emoji, abbreviation, or simple text.
const skills = [
  { name: "Python", icon: "Py" },
  { name: "PyTorch", icon: "PT" },
  { name: "TensorFlow", icon: "TF" },
  { name: "Keras", icon: "K" },
  { name: "LSTM", icon: "L" },
  { name: "CNN", icon: "C" },
  { name: "Machine Learning", icon: "ML" },
  { name: "Deep Learning", icon: "DL" },
  { name: "LLMs", icon: "AI" },
  { name: "AI Agents", icon: "AG" },
  { name: "NLP", icon: "NLP" },
  { name: "NumPy", icon: "Np" },
  { name: "Pandas", icon: "Pd" },
  { name: "Signal Processing", icon: "SP" },
  { name: "PyQt / PyQt6", icon: "Qt" },
  { name: "Django", icon: "Dj" },
  { name: "REST APIs", icon: "API" },
  { name: "Oracle", icon: "DB" },
  { name: "PostgreSQL", icon: "PG" },
  { name: "SQL", icon: "SQL" },
  { name: "Redis", icon: "R" },
  { name: "Git / GitHub", icon: "GH" },
  { name: "Docker", icon: "DK" },
  { name: "HTML / CSS / JS", icon: "WEB" }
];

// 2) Videos:
// Put video files in: assets/videos/
// Example: { file: "assets/videos/sleep-monitor.mp4", title: "Sleep Monitoring System", description: "Real-time signal monitoring demo" }
const videos = [
  // { file: "assets/videos/your-video.mp4", title: "Your Project", description: "Short description" },
];

// ===============================
// DO NOT NEED TO EDIT BELOW
// ===============================

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = skills.map(skill => `
    <div class="skill">
      <div class="skill-icon">${skill.icon}</div>
      <span>${skill.name}</span>
    </div>
  `).join("");
}

function renderVideos() {
  const grid = document.getElementById("videoGrid");
  if (!videos.length) {
    grid.innerHTML = `
      <div class="video-card" style="grid-column:1/-1">
        <div class="video-info">
          
          
        </div>
      </div>`;
    return;
  }
  grid.innerHTML = videos.map(video => `
    <article class="video-card">
      <video controls preload="metadata">
        <source src="${video.file}" type="video/mp4">
        Your browser does not support video playback.
      </video>
      <div class="video-info">
        <h3>${video.title}</h3>
        <p>${video.description || ""}</p>
      </div>
    </article>
  `).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderSkills();
renderVideos();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.08 });

document.querySelectorAll("section, .hero-copy, .hero-visual").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

const rotatingText = document.getElementById("rotating-text");
const currentYear = document.getElementById("current-year");
const revealTargets = document.querySelectorAll(".panel, .hero-copy, .hero-visual");

const learningTopics = [
  "HTML / CSS",
  "Responsive Design",
  "JavaScript",
  "UI Animation"
];

let currentTopicIndex = 0;

if (rotatingText) {
  window.setInterval(() => {
    currentTopicIndex = (currentTopicIndex + 1) % learningTopics.length;
    rotatingText.textContent = learningTopics[currentTopicIndex];
  }, 2200);
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

revealTargets.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16
  }
);

revealTargets.forEach((element) => {
  observer.observe(element);
});

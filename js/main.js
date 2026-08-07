// AUTO SHIFT LP main.js — 必要最小限のJS

document.addEventListener("DOMContentLoaded", () => {
  // fade-up アニメーション
  const targets = document.querySelectorAll(".fade-up");
  if ("IntersectionObserver" in window && targets.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => io.observe(t));
  } else {
    targets.forEach((t) => t.classList.add("in-view"));
  }
});

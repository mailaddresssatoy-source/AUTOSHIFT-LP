// AUTO SHIFT LP main.js — 必要最小限のJS

// ★★★ Googleフォーム等のデモ予約URLを用意したら、下のURLを差し替えてください ★★★
const FORM_URL = "";

document.addEventListener("DOMContentLoaded", () => {
  // フォームURL制御:未設定の間はページ内 #contact-form へスムーススクロール
  const hasForm = FORM_URL.trim().length > 0;
  document.querySelectorAll(".js-cta").forEach((el) => {
    if (hasForm) {
      el.setAttribute("href", FORM_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

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

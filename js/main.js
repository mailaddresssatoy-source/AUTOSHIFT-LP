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

  // お問い合わせフォーム：送信完了（iframe再読み込み）でページ上部へ戻る
  const contactFrame = document.querySelector(".contact-form-frame");
  if (contactFrame) {
    let loadCount = 0;
    contactFrame.addEventListener("load", () => {
      loadCount++;
      // 1回目は初期表示のロードなので無視し、2回目以降（送信後の遷移）でスクロール
      if (loadCount > 1) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }
});

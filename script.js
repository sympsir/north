document.addEventListener("DOMContentLoaded", () => {
  const newspaper = document.querySelector(".newspaper");
  const video = document.querySelector(".media-box video");

  // Memicu seluruh animasi teks & media di detik yang sama
  requestAnimationFrame(() => {
    setTimeout(() => {
      newspaper.classList.add("is-loaded");
    }, 80);
  });

  // Memastikan video otomatis diputar di browser mobile
  if (video) {
    video.muted = true;
    video.play().catch(() => {
      // Fallback jika browser menahan autoplay hingga ada sentuhan pertama
      document.addEventListener("touchstart", () => video.play(), { once: true });
    });
  }
});

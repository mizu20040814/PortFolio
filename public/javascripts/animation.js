document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".custom-borderline");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-border");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  targets.forEach((el) => observer.observe(el));
});

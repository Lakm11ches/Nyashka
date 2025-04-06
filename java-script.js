  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("mainContent");

    setTimeout(() => {
      preloader.classList.add("hidden");
      content.style.display = "flex";

      setTimeout(() => {
        content.classList.add("move-up");
        document.querySelectorAll(".section").forEach((sec, i) => {
          setTimeout(() => sec.classList.add("visible"), 500 + i * 300);
        });
      }, 1000);
    }, 2000);
  });
  
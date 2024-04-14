const homeButton = document.getElementById("home");

homeButton.addEventListener("click", function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    const easing = t => t<.5 ? 2*t*t : -1 + (4-2*t)*t;
    const start = Date.now();
    const duration = 500;

    const animate = () => {
      const now = Date.now();
      const time = Math.min(1, (now - start) / duration);
      const easedTime = easing(time);
      window.scrollTo(0, scrollTop * (1 - easedTime));
      if (time < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }
});
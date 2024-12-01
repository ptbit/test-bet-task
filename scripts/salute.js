document.addEventListener('DOMContentLoaded', () => {
  const salutes = document.querySelectorAll('.salute');

  salutes.forEach((salute) => {
    gsap.set(salute, { opacity: 0, scale: 0 });

    const getRandomOffset = () => {
      const viewportWidth = window.innerWidth;

      const offset = Math.round(viewportWidth * 0.1);
      return gsap.utils.random(-offset, offset);
    };

    const animateSalute = () => {
      const randomDelay = gsap.utils.random(2, 10);
      const randomX = getRandomOffset();
      const randomY = getRandomOffset();

      const randomDuration = gsap.utils.random(1.5, 3.5);

      const timeline = gsap.timeline({
        onComplete: () => {
          gsap.delayedCall(randomDelay, animateSalute);
        },
      });

      timeline
        .fromTo(
          salute,
          {
            x: randomX,
            y: randomY,
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: randomDuration,
            ease: 'power1.inOut',
          }
        )
        .to(salute, {
          opacity: 0,
          duration: 0.3,
        });
    };

    const randomInitialDelay = gsap.utils.random(0, 3);
    gsap.delayedCall(randomInitialDelay, animateSalute);
  });
});

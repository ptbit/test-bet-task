document.addEventListener('DOMContentLoaded', () => {
  const salutes = document.querySelectorAll('.salute');

  salutes.forEach((salute) => {
    // Початково ховаємо всі салюти
    gsap.set(salute, { opacity: 0, scale: 0 });

    const animateSalute = () => {
      const randomDelay = gsap.utils.random(2, 7); // Випадкова затримка між циклами
      const randomX = gsap.utils.random(-200, 200); // Випадкове зміщення по X
      const randomY = gsap.utils.random(-200, 200); // Випадкове зміщення по Y

      // Випадкова тривалість анімації від 1,5 до 3,5 секунд
      const randomDuration = gsap.utils.random(1.5, 3.5);

      // Анімація для кожного салюту
      const timeline = gsap.timeline({
        onComplete: () => {
          // Після завершення поточної анімації запускаємо її знову через випадкову затримку
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
            duration: randomDuration, // Випадкова тривалість анімації
            ease: 'power1.inOut',
          }
        )
        .to(salute, {
          opacity: 0,
          duration: 0.3,
        });
    };

    // Запускаємо анімацію з випадковою стартовою затримкою для кожного салюту
    const randomInitialDelay = gsap.utils.random(0, 3); // Випадкова стартова затримка
    gsap.delayedCall(randomInitialDelay, animateSalute);
  });
});

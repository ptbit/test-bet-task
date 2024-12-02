document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.koala', {
    x: '-100%',
    duration: 1.5,
    delay: 1,
    ease: 'power1.inOut',
    onComplete: () => {
      setTimeout(() => {
        gsap.to('.koala', {
          x: '5%',
          duration: 1,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
          repeatDelay: 10,
        });
      }, 5000);
    },
  });
});

document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.koala', {
    x: '-100%',
    duration: 1.5,
    delay: 1,
    ease: 'power1.inOut',
  });
});

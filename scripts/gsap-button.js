document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.details__button button');
  const borders = {
    top: document.querySelector('.border-top'),
    right: document.querySelector('.border-right'),
    bottom: document.querySelector('.border-bottom'),
    left: document.querySelector('.border-left'),
  };

  let timeline;

  button.addEventListener('mouseenter', () => {
    if (timeline) timeline.kill(); 

    timeline = gsap.timeline();

    timeline.to(borders.top, {
      width: '100%',
      duration: 0.3,
      ease: 'power1.inOut',
    });

    timeline.to(borders.right, {
      height: '100%',
      duration: 0.3,
      ease: 'power1.inOut',
    });

    timeline.to(borders.bottom, {
      width: '100%',
      duration: 0.3,
      ease: 'power1.inOut',
    });

    timeline.to(borders.left, {
      height: '100%',
      duration: 0.3,
      ease: 'power1.inOut',
    });
  });

  button.addEventListener('mouseleave', () => {
    if (timeline) timeline.kill();

    const reverseTimeline = gsap.timeline();

    reverseTimeline.to(borders.left, {
      height: '0%',
      duration: 0.3,
      ease: 'power1.inOut',
    });

    reverseTimeline.to(borders.bottom, {
      width: '0%',
      duration: 0.3,
      ease: 'power1.inOut',
    });

    reverseTimeline.to(borders.right, {
      height: '0%',
      duration: 0.3,
      ease: 'power1.inOut',
    });

    reverseTimeline.to(borders.top, {
      width: '0%',
      duration: 0.3,
      ease: 'power1.inOut',
    });
  });
});

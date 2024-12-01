document.addEventListener('DOMContentLoaded', () => {
  const snowContainer = document.querySelector('.snow');
  const spawnInterval = 10;

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.top = `-${size + Math.random() * 20}px`;

    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * duration;
    snowflake.style.animation = `fall ${duration}s linear ${delay}s`;

    snowContainer.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), (duration + delay) * 1000);
  }

  setInterval(() => {
    createSnowflake();
  }, spawnInterval);
});

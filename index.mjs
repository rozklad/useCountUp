import { ref } from 'vue';

function useCountUp(initialValue, targetValue, step, interval) {
  const current = ref(initialValue);
  const increment = () => {
    current.value += step;
  };
  const isValidCountUp = () => current.value !== targetValue || current.value < targetValue;
  let counter;
  const start = () => {
    reset();
    if (!isValidCountUp()) {
      return false;
    }
    counter = setInterval(() => {
      increment();
      if (current.value === targetValue) {
        clearInterval(counter);
      }
    }, interval);
    return true;
  };
  const reset = () => {
    current.value = initialValue;
    if (counter) {
      clearInterval(counter);
    }
  };
  start();
  return { current, start, reset };
}

export { useCountUp };

import { ref } from 'vue';

export function useCountUp(
  initialValue: number,
  targetValue: number,
  step: number,
  interval: number,
) {
  const current = ref(initialValue);

  const increment = () => {
    current.value += step;
  };

  const isValidCountUp = (): boolean =>
    current.value !== targetValue || current.value < targetValue;

  let counter: ReturnType<typeof setInterval> | undefined;

  const start = (): boolean => {
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

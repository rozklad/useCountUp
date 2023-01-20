import { describe, expect, test } from '@jest/globals';

import { useCountUp } from './index';

describe('useCountUp', () => {
  test('initialValue is 0 when set to 0', () => {
    const { current, reset } = useCountUp(0, 404, 1, 1000);
    expect(current.value).toBe(0);
    reset();
  });

  test('initialValue is 5 when set to 5', () => {
    const { current, reset } = useCountUp(5, 25, 1, 1000);
    expect(current.value).toBe(5);
    reset();
  });
});

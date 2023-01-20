import { describe, expect, test } from '@jest/globals';

import { useFilesizeHuman } from './index';

describe('useFilesizeHuman', () => {
  test('0 bytes is 0 B', () => {
    expect(useFilesizeHuman(0)).toBe('0 B');
  });

  test('0 bytes is 0 B', () => {
    expect(useFilesizeHuman(0, true)).toBe('0 B');
  });

  test('1 bytes is 1 B', () => {
    expect(useFilesizeHuman(1)).toBe('1 B');
  });

  test('1 bytes is 1 B', () => {
    expect(useFilesizeHuman(1, true)).toBe('1 B');
  });

  test('1023 bytes is 1023 B', () => {
    expect(useFilesizeHuman(1023)).toBe('1023 B');
  });

  test('1024 bytes is 1.0 KiB', () => {
    expect(useFilesizeHuman(1024)).toBe('1.0 KiB');
  });

  test('1024 bytes is 1.0 kB', () => {
    expect(useFilesizeHuman(1024, true)).toBe('1.0 kB');
  });

  test('1048576 bytes is 1.0 MiB', () => {
    expect(useFilesizeHuman(1048576)).toBe('1.0 MiB');
  });

  test('1048576 bytes is 1.0 MB', () => {
    expect(useFilesizeHuman(1048576, true)).toBe('1.0 MB');
  });

  test('1073741824 bytes is 1.0 GiB', () => {
    expect(useFilesizeHuman(1073741824)).toBe('1.0 GiB');
  });

  test('1073741824 bytes is 1.1 GB', () => {
    expect(useFilesizeHuman(1073741824, true)).toBe('1.1 GB');
  });

  test('1099511627776 bytes is 1.0 TiB', () => {
    expect(useFilesizeHuman(1099511627776)).toBe('1.0 TiB');
  });

  test('1099511627776 bytes is 1.1 TB', () => {
    expect(useFilesizeHuman(1099511627776, true)).toBe('1.1 TB');
  });

  test('1125899906842624 bytes is 1.0 PiB', () => {
    expect(useFilesizeHuman(1125899906842624)).toBe('1.0 PiB');
  });

  test('1125899906842624 bytes is 1.1 PB', () => {
    expect(useFilesizeHuman(1125899906842624, true)).toBe('1.1 PB');
  });

  test('1152921504606846976 bytes is 1.0 EiB', () => {
    expect(useFilesizeHuman(1152921504606846976)).toBe('1.0 EiB');
  });

  test('1152921504606846976 bytes is 1.2 EB', () => {
    expect(useFilesizeHuman(1152921504606846976, true)).toBe('1.2 EB');
  });

  test('12582912 bytes is 12.0 MiB', () => {
    expect(useFilesizeHuman(12582912)).toBe('12.0 MiB');
  });

  test('12582912 bytes is 12.6 MB', () => {
    expect(useFilesizeHuman(12582912, true)).toBe('12.6 MB');
  });

  test('3221225472 bytes is 3.0 GiB', () => {
    expect(useFilesizeHuman(3221225472)).toBe('3.0 GiB');
  });

  test('3221225472 bytes is 3.2 GB', () => {
    expect(useFilesizeHuman(3221225472, true)).toBe('3.2 GB');
  });
});

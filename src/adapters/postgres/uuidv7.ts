import { randomBytes } from 'node:crypto';

const hex = (bytes: Uint8Array) => [...bytes].map((byte) => byte.toString(16).padStart(2, '0')).join('');

/** Generates a RFC 9562 UUIDv7 without making the database an ID authority. */
export const uuidv7 = (): string => {
  const bytes = randomBytes(16);
  const milliseconds = Date.now();
  bytes[0] = (milliseconds / 2 ** 40) & 0xff;
  bytes[1] = (milliseconds / 2 ** 32) & 0xff;
  bytes[2] = (milliseconds / 2 ** 24) & 0xff;
  bytes[3] = (milliseconds / 2 ** 16) & 0xff;
  bytes[4] = (milliseconds / 2 ** 8) & 0xff;
  bytes[5] = milliseconds & 0xff;
  bytes[6] = (bytes[6] & 0x0f) | 0x70;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const value = hex(bytes);
  return `${value.slice(0, 8)}-${value.slice(8, 12)}-${value.slice(12, 16)}-${value.slice(16, 20)}-${value.slice(20)}`;
};

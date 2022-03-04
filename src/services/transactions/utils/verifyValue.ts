export default function verifyValue(value: number) {
  if (!value) throw new Error('value is required');
  if (typeof value !== 'number') throw new Error('value must be a number');
  if (value <= 0) throw new Error('value must be greater than 0');
}

export default function verifyDescription(description: string) {
  if (!description) throw new Error('description is required');
  if (typeof description !== 'string') throw new Error('description must be a string');
  if (description.length < 3) throw new Error('description must be at least 3 characters long');
}

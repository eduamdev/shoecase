export const colors = [
  { _id: '5b21ca3eeb7f6fbccd471818', name: 'Black' },
  { _id: '5b21ca3eeb7f6fbccd471814', name: 'White' },
  { _id: '5b21ca3eeb7f6fbccd471820', name: 'red' }
];

export function getColors() {
  return colors.filter(c => c);
}

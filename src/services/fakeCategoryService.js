export const categories = [
  { _id: '5b21ca3eeb7f6fbccd471515', name: 'Boots' },
  { _id: '5b21ca3eeb7f6fbccd477412', name: 'Sneakers' },
  { _id: '5b21ca3eeb7f6fbccd472561', name: 'Flip-flops' },
  { _id: '5b21ca3eeb7f6fbccd472569', name: 'Heels' }
];

export function getCategories() {
  return categories.filter(c => c);
}

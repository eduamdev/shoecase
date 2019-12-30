export const categories = [
  { _id: '5b21ca3eeb7f6fbccd471515', name: 'Boots' },
  { _id: '5b21ca3eeb7f6fbccd477412', name: 'Sneakers' },
  { _id: '5b21ca3eeb7f6fbccd472561', name: 'Flip-flops' },
  { _id: '5b21ca3eeb7f6fbccd472335', name: 'Heels' },
  { _id: '5b21ca3eeb7f6fbccd472570', name: 'Oxford' },
  { _id: '5b21ca3eeb7f6fbccd472554', name: 'Loafers' }
];

export function getCategories() {
  return categories.filter(c => c);
}

export const categories = [
  { _id: '5b21ca3eeb7f6fbccd471515', name: 'Sport' },
  { _id: '5b21ca3eeb7f6fbccd477412', name: 'Casual' },
  { _id: '5b21ca3eeb7f6fbccd472561', name: 'Formal' }
];

export function getGenres() {
  return categories.filter(g => g);
}

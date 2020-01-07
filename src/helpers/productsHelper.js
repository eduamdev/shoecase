import { ArrayUtils } from '../utils';

function filterList(q, list, key) {
  function escapeRegExp(s) {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  const words = q
    .split(/\s+/g)
    .map(s => s.trim())
    .filter(s => !!s);
  const hasTrailingSpace = q.endsWith(' ');
  const searchRegex = new RegExp(
    words
      .map((word, i) => {
        if (i + 1 === words.length && !hasTrailingSpace) {
          // The last word - ok with the word being "startswith"-like
          return `(?=.*\\b${escapeRegExp(word)})`;
        } else {
          // Not the last word - expect the whole word exactly
          return `(?=.*\\b${escapeRegExp(word)}\\b)`;
        }
      })
      .join('') + '.+',
    'gi'
  );
  return list.filter(item => {
    return searchRegex.test(item[key]);
  });
}

function filterBy(key, value, products) {
  switch (key) {
    case 'name':
      return (
        filterList(value, products, key) ||
        products.filter(p => p.sku === value)
      );
    case 'sku':
      return products.filter(p => p.sku === value);
    case 'genre':
      return products.filter(p => p.genre === value);

    default:
      return [];
  }
}

export function filterProducts(key, value, products) {
  switch (key) {
    case 'search':
      const filteredByName = filterBy('name', value, products);
      const filteredBySku = filterBy('sku', value, products);

      const filteredBySearch = ArrayUtils.isArrayEmpty(filteredByName)
        ? filteredBySku
        : filteredByName;

      return ArrayUtils.isArrayEmpty(filteredBySearch)
        ? null
        : filteredBySearch;
    case 'genre':
      const filteredByGenre = filterBy('genre', value, products);

      return ArrayUtils.isArrayEmpty(filteredByGenre) ? null : filteredByGenre;
    default:
      return null;
  }
}

import * as categoryAPI from './fakeCategoryService';
import * as colorAPI from './fakeColorService';

const products = [
  {
    _id: '5b21ca3eeb7f6fbccd471815',
    sku: '1A586V',
    price: 2470,
    name: 'calla rose',
    slug: 'calla-rose',
    description:
      "Crafted from black calf leather and patent Monogram canvas, the Janet ankle boot features a sharp, slim shape and a shifted-back stiletto heel. One of the statements of Louis Vuitton's Spring-Summer 2019 collection, this assertive, feminine style is complemented by angular buckles and an LV-engraved closure in silver-tone metal.",
    features: [
      'Calf Leather and Patent Monogram Canvas',
      'Black',
      'Leather Outsole',
      'Made in Italy'
    ],
    category: {
      _id: '5b21ca3eeb7f6fbccd472561',
      name: 'Formal'
    },
    genre: 'women',
    color: {
      _id: '5b21ca3eeb7f6fbccd471818',
      name: 'Black'
    },
    featured: true
  },
  {
    _id: '5b21ca3eeb7f6fbccd471816',
    sku: '4A476X',
    price: 150,
    name: 'batcombe lord',
    slug: 'batcombe-lord',
    description: 'Mens Boots Black Warmlined Leather',
    features: [
      'Leather and Patent Monogram Canvas',
      'Brown',
      'Leather Outsole',
      'Made in Spain'
    ],
    category: {
      _id: '5b21ca3eeb7f6fbccd472561',
      name: 'Formal'
    },
    genre: 'men',
    color: {
      _id: '5b21ca3eeb7f6fbccd471820',
      name: 'Brown'
    },
    featured: false
  },
  {
    _id: '5b21ca3eeb7f6fbccd471817',
    sku: 'FA389C',
    price: 120,
    name: 'mila myth',
    slug: 'mila-myth',
    description: 'Womens Boots Dark Brown Suede',
    features: ['Calf Leather', 'Brown', 'Leather Outsole', 'Made in Rome'],
    category: {
      _id: '5b21ca3eeb7f6fbccd472561',
      name: 'Formal'
    },
    genre: 'women',
    color: {
      _id: '5b21ca3eeb7f6fbccd471820',
      name: 'Brown'
    },
    featured: true
  }
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find(m => m._id === id);
}

export function getProductBySlug(slug) {
  return products.find(m => m.slug === slug);
}

export function saveProduct(product) {
  let productInDb = products.find(m => m._id === product._id) || {};
  productInDb.name = product.name;
  productInDb.category = categoryAPI.categories.find(
    g => g._id === product.categoryId
  );
  productInDb.color = colorAPI.colors.find(g => g._id === product.colorId);

  if (!productInDb._id) {
    productInDb._id = Date.now().toString();
    products.push(productInDb);
  }

  return productInDb;
}

export function deleteProduct(id) {
  let productInDb = products.find(m => m._id === id);
  products.splice(products.indexOf(productInDb), 1);
  return productInDb;
}

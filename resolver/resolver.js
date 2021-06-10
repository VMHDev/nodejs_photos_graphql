/*
 ** 02 - File định nghĩa các truy vấn GraphQL
 */

const categories = [
  {
    id: '1',
    name: 'Car',
  },
  {
    id: '2',
    name: 'Animal',
  },
  {
    id: '3',
    name: 'Plant',
  },
];

const photos = [
  {
    id: '1',
    path: 'https://picsum.photos/id/532/300/300',
    title:
      'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    desc: 'Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.',
    is_public: false,
    category: '1',
  },
  {
    id: '2',
    path: 'https://picsum.photos/id/532/300/300',
    title:
      'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    desc: 'Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.',
    is_public: false,
    category: '1',
  },
  {
    id: '3',
    path: 'https://picsum.photos/id/532/300/300',
    title:
      'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    desc: 'Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.',
    is_public: false,
    category: '1',
  },
];

const resolvers = {
  Query: {
    categories: () => categories,
    category: (parent, args) =>
      categories.find((category) => category.id === args.id),
    photos: () => photos,
    photo: (parent, args) => photos.find((photo) => photo.id === args.id),
  },
  Photo: {
    category: (parent, args) =>
      categories.find((category) => category.id === parent.category),
  },
};

module.exports = resolvers;

const URLSlug = (words) => (
  words
    .replace(/\s+/g, '-')
    .toLowerCase()
);

export default URLSlug;

const initials = (name = '') => (
  name
    .split(' ')
    .map(word => `${word.charAt(0).toUpperCase()}.`)
    .join('')
);

export default initials;

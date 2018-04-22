import test from 'ava';
import URLSlug from './URLSlug';

test('URL slugs are created from strings', t => {
  t.is(URLSlug('hello world'), 'hello-world');
});

test('Uppercase letters are converted to lower case', t => {
  t.is(URLSlug('HeLLo WorLD'), 'hello-world');
});

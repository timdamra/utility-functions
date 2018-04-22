import test from 'ava';
import initials from './initials';

test('initials are created from strings', t => {
  t.is(initials('Hello World'), 'H.W.');
});

import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно - первая буква не стала большой!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно - не выдала пустую строку!');
}

if (capitalize('cat') !== 'cat') {
  throw new Error('Функция работает неверно - первая буква не стала большой!');
}

console.log('Все тесты пройдены!');


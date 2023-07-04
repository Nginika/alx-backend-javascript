export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  let catWord = '';
  set.forEach((word) => {
    if (typeof word === 'string' && word.startsWith(startString)) {
      catWord += (catWord ? '-' : '') + word.replace(startString, '');
    }
  });
  return catWord;
}

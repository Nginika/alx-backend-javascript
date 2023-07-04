export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let catWord = '';
  set.forEach((word) => {
    if (word.startsWith(startString)) {
      catWord += (catWord ? '-' : '') + word.replace(startString, '');
    }
  });
  return catWord;
}

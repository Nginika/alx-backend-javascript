export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // disable line
    const task = true;
    // disable line
    const task2 = false;
  }

  return [task, task2];
}

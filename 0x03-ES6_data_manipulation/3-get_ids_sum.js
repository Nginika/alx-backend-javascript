export default function getStudentIdsSum(students) {
  const idno = students.map(({ id }) => id);
  const sum = idno.reduce((total, amount) => total + amount);
  return sum;
}

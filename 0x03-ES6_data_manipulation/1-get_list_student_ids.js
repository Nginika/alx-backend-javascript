export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const idno = students.map(({ id }) => id);
  return idno;
}

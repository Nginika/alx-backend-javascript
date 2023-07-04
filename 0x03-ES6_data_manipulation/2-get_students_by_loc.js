export default function getStudentsByLocation(students, city) {
  const cityStudents = students.filter((student) => student.location === city);
  return cityStudents;
}

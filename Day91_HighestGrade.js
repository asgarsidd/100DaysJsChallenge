function getHighestGrade(students) {
  // 🎓 Find the highest grade among all students and subjects
  let highestGrade = 0; // 🏆 Initialize highest grade

  for (const student of students) {
    // 👩‍🎓👨‍🎓 Loop through each student
    for (const grade of student.grades) {
      // 📚 Loop through each subject grade
      highestGrade = Math.max(highestGrade, grade.grade); // 🔝 Update highest grade if current grade is higher
    }
  }

  return highestGrade; // 🎉 Return the highest grade found
}

const students = [
  {
    name: "John", // 👦 Student name
    grades: [
      { subject: "Math", grade: 90 }, // 🧮 Math grade
      { subject: "Science", grade: 85 }, // 🔬 Science grade
      { subject: "English", grade: 95 }, // 📖 English grade
    ],
  },
  {
    name: "Jane", // 👧 Student name
    grades: [
      { subject: "Math", grade: 80 },
      { subject: "Science", grade: 90 },
      { subject: "English", grade: 85 },
    ],
  },
  {
    name: "Bob", // 👦 Student name
    grades: [
      { subject: "Math", grade: 95 },
      { subject: "Science", grade: 80 },
      { subject: "English", grade: 90 },
    ],
  },
];

const highestGrade = getHighestGrade(students); // 🚀 Call the function
console.log(highestGrade); // 📊 Output: 95 (highest grade among all students and subjects)

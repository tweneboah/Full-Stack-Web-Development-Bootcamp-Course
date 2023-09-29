// let's create a complex example that demonstrates the use of `insertBefore` to manage a list of students based on their grades. In this example, we'll keep the list sorted based on the grade of each student. As new students are added, they will be inserted in the correct position to maintain the sorted list.

// Function to add a new student
function addStudent(name, grade) {
  //Create a new div element to hold the student info
  const studentEl = document.createElement("div");
  //add css to it
  studentEl.className = "student";

  //Create a text node containing the student name and grade
  const studentTextNode = document.createTextNode(`${name}: ${grade}`);
  //Append the text node to the div element
  console.log(studentTextNode);
  studentEl.appendChild(studentTextNode);

  //select the container
  const containerEl = document.getElementById("studentList");
  let beforeNode = null;

  //Loop through existing students to find the correct position for the new student
  for (const child of containerEl.children) {
    const childGrade = parseInt(child.textContent.split(":")[1]);
    if (grade < childGrade) {
      beforeNode = child;
      break;
    }
  }
  //insert the new student in the correct position
  containerEl.insertBefore(studentEl, beforeNode);
  console.log(containerEl.children);
}

addStudent("Emma", 90);
addStudent("Alice", 70);
addStudent("Ben", 84);
addStudent("Tweneboah", 100);

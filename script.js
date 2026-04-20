let student = [
  { name: "", score:"" }
  
];


function getInput() {
  const name = document.getElementById('nameInput').value.trim();
  const score = parseInt(document.getElementById('scoreInput').value);
  return { name, score };
}

function render(data = student) {
  const display = document.getElementById("display");
  display.innerHTML = "<h3>Student List:</h3>";
  data.forEach((s, index) => {
    const div = document.createElement("div");
    div.className = "student-item";
    div.innerHTML = `<span>${index}. <strong>${s.name}</strong></span>
    <span class="${s.score >= 50 ? "passed" : "failed"}">Score: ${s.score}</span>`;
    display.appendChild(div);
  });
}

function addEnd() {
  const newStudent = getInput();
  if (newStudent.name && !isNaN(newStudent.score)) {
    student.push(newStudent);
    render();
  }
}

function removeLast() {
  student.pop();
  render();
}

function removeFirst() {
  student.shift();
  render();
}

function addStart() {
  const newStudent = getInput();
  if (newStudent.name && !isNaN(newStudent.score)) {
    student.unshift(newStudent);
    render();
  }
}

function showPassed() {
  const passed = student.filter((s) => s.score >= 50);
  render(passed);
}

function bonusPoint() {
  student = student.map((s) => ({ ...s, score: s.score + 5 }));
  render();
}

function findStudent() {
  const name = document.getElementById('nameInput').value.trim();
  const found = student.find(s => s.name.toLowerCase() === name.toLowerCase());
  alert(found ? "Student exists!" : "Does not exist.");
}

function removeByIndex() {
  const index = parseInt(document.getElementById('indexInput').value);
  if (!isNaN(index) && index >= 0 && index < student.length) {
    student.splice(index, 1);
    render();
  }
}

function copyTop() {
  const topTwo = student.slice(0, 2);
  render(topTwo);
}

function findIndex() {
  const name = document.getElementById('nameInput').value.trim();
  const index = student.map(s => s.name.toLowerCase()).indexOf(name.toLowerCase());
  alert(index !== -1 ? `Index is: ${index}` : "Not found");
}
function editStudent(){
  let index=prompt("Enter the student index you want to edit(0,1,2.....):");
}

if(index!==null&& index> student.length){

  let newName=prompt("Enter the new name for" + students[index] + ":");

  if(newName!==null && newName.trim()!==""){
    student[index]=newName;
    displayStudent("updated successfully")
  }
  
  
}else{
  alert("invalid index or cancelled.");
}


render();
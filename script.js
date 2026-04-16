let student = [
  { name: "Ifeanyi Okafor", score: 55 },
  { name: "Chidubem Nwosu", score: 40 },
  { name: "Babatunde Abiola", score: 55 },
  { name: "Temitope Ogunsola", score: 72 },
  { name: "Akinyemi Adeyemi", score: 68 },
  { name: "Musa Hassan", score: 64 },
  { name: "Sani Ahmed", score: 39 },
  { name: "Aberi Yusuf", score: 68 },
  { name: "Oluwasegun Adebayo", score: 55 },
  { name: "Obioma Okeke", score: 40 },
  { name: "Ayodeji Tinubu", score: 20 },
  { name: "Abubakar Danjuma", score: 15 },
  { name: "Maureen Okechukwu", score: 74 },
  { name: "Sanni Hassan", score: 80 },
  { name: "Oluwatobi David", score: 90 },
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

render();
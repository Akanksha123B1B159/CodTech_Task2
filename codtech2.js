let lessonsCompleted = 0;
let quizScore = 0;

function showSection(sectionId) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active-section");
  });
  document.getElementById(sectionId).classList.add("active-section");

  if (sectionId === "video") {
    lessonsCompleted++;
    document.getElementById("lessonCount").textContent = lessonsCompleted;
  }
}

function submitQuiz() {
  const answer = document.querySelector('#quiz input').value.trim().toLowerCase();
  if (answer.includes("markup")) {
    alert("Correct!");
    quizScore++;
  } else {
    alert("Try again!");
  }
  document.getElementById("quizScore").textContent = quizScore;
}

function checkAnswer() {
    const answer = document.getElementById("answer").value.trim();
    const result = document.getElementById("result");

    if (answer === "449") {
      result.style.color = "#79ff9f";
      result.innerHTML = "Bravo ! C'est la bonne réponse.";
      setTimeout(() => {
        window.location.href = "../3/index.html";
      }, 1000);
    } else if (answer === "") {
      result.style.color = "#ffbaba";
      result.innerHTML = "Entre un nombre avant de valider.";
    } else {
      result.style.color = "#ff7676";
      result.innerHTML = "Mauvaise réponse, réfléchis bien...";
    }
  }
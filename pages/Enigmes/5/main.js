document.getElementById("answer").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const input = this.value.trim();
    if (input === "AHJGS901IQSKJ19SQ4HQAO") {
      window.location.href = "../6/index.html";
    } else {
      alert("Mauvaise réponse, essayez encore.");
    }
  }
});
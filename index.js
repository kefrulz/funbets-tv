(function () {
  function showCursor() {
    document.documentElement.classList.remove("tv-mode");
    var style = document.getElementById("funbets-tizenbrew-cursor");
    if (!style) {
      style = document.createElement("style");
      style.id = "funbets-tizenbrew-cursor";
      style.textContent = "html,html *{cursor:auto!important}button,a,[role=button],input,.game-card{cursor:pointer!important}";
      (document.head || document.documentElement).appendChild(style);
    }
  }

  try {
    localStorage.setItem("funbetsRemoteMode", "0");
    showCursor();
    document.addEventListener("DOMContentLoaded", showCursor, { once: true });
    setTimeout(showCursor, 500);
    setTimeout(showCursor, 1500);
  } catch (error) {}
}());

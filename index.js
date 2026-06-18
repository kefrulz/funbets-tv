(function () {
  try {
    localStorage.setItem("funbetsRemoteMode", "0");
    document.documentElement.classList.remove("tv-mode");
  } catch (error) {}
}());

(function () {
  try {
    localStorage.setItem("funbetsRemoteMode", "1");
    document.documentElement.classList.add("tv-mode");
  } catch (error) {}
}());

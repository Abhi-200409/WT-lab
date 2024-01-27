window.onload = function() {
    var storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.body.setAttribute("theme", storedTheme);
        }
    };
  
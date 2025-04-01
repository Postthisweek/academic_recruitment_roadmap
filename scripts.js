document.addEventListener("DOMContentLoaded", () => {
    // Enable collapsible sections
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach(button => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
    });
  
    // Screen reader-friendly focus handling
    document.querySelectorAll("a, button").forEach(element => {
      element.addEventListener("focus", () => {
        element.style.outline = "2px solid rgb(214, 173, 234)";
      });
      element.addEventListener("blur", () => {
        element.style.outline = "none";
      });
    });
  });
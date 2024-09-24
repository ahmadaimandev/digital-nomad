document.querySelectorAll('.accordion-question').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active class
        button.classList.toggle('active');

        // Toggle panel visibility
        const panel = button.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
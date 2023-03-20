function transitionUp() {
    let reveals = document.querySelectorAll(".transitionedUp");
    for (let i = 0; i < reveals.length; i++)
    {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", transitionUp);

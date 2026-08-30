// ================= HERO SCROLL =================

function scrollToProfile() {

    document.getElementById("profile").scrollIntoView({
        behavior: "smooth"
    });

}


// ================= SCROLL REVEAL =================

const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


fades.forEach((element) => {

    observer.observe(element);

});

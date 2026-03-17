// ==================== STARFIELD WARP EFFECT ====================
const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
const speed = 0.5; // Star speed

function initStars() {
    stars = [];
    for (let i = 0; i < 400; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width
        });
    }
}

function animateStars() {
    ctx.fillStyle = "#050b14";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        // Move star closer
        star.z -= speed * 5;

        // Reset if passed screen
        if (star.z <= 0) {
            star.z = canvas.width;
            star.x = Math.random() * canvas.width;
            star.y = Math.random() * canvas.height;
        }

        // Calculate 3D perspective
        const x = (star.x - canvas.width / 2) * (canvas.width / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (canvas.width / star.z) + canvas.height / 2;
        const size = (canvas.width / star.z) * 1.5;

        // Draw star
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 255, 255, " + (1 - star.z / canvas.width) + ")";
        ctx.arc(x, y, size > 0 ? size : 0, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animateStars);
}

initStars();
animateStars();

// Resize Handler
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
});

// ==================== ROCKET PRELOADER ====================
const preloader = document.getElementById("preloader");
const barFill = document.querySelector(".bar-fill");

let progress = 0;
const loaderInterval = setInterval(() => {
    progress += Math.random() * 5;
    if (progress >= 100) {
        progress = 100;
        clearInterval(loaderInterval);
        
        // Hide Loader
        setTimeout(() => {
            preloader.style.transition = "opacity 0.8s ease";
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
                initAOS();
            }, 800);
        }, 500);
    }
    barFill.style.width = progress + "%";
}, 50);

// ==================== TYPEWRITER ====================
function initTypewriter() {
    const textEl = document.getElementById("typewriter");
    if(!textEl) return;
    const phrases = ["CLOUD AUTOMATION", "DEVOPS ENGINEERING", "INFRASTRUCTURE AS CODE"];
    let i = 0;
    let j = 0;
    let isDeleting = false;

    function loop() {
        const current = phrases[i];
        if (isDeleting) {
            textEl.innerHTML = current.substring(0, j-1);
            j--;
        } else {
            textEl.innerHTML = current.substring(0, j+1);
            j++;
        }

        if (!isDeleting && j === current.length) {
            isDeleting = true;
            setTimeout(loop, 2000);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % phrases.length;
            setTimeout(loop, 200);
        } else {
            setTimeout(loop, isDeleting ? 50 : 100);
        }
    }
    loop();
}
window.addEventListener("DOMContentLoaded", initTypewriter);

// ==================== SCROLL NAV HIGHLIGHT ====================
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 250) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href").includes(current)) {
            li.classList.add("active");
        }
    });
});

// ==================== INIT AOS & TILT ====================
function initAOS() {
    if (window.AOS) AOS.init({ duration: 1000, once: true });
}

if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3
    });
}

// ==================== CUSTOM CURSOR ====================
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursorDot.style.left = `${x}px`;
    cursorDot.style.top = `${y}px`;

    cursorOutline.animate(
        { left: `${x}px`, top: `${y}px` },
        { duration: 150, fill: "forwards" }
    );
});
// ==================== CONTACT FORM API ====================

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", async function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

try{

const response = await fetch("http://localhost:3004/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:name,
email:email,
message:message
})

});

const data = await response.json();

alert(data.status);

contactForm.reset();

}catch(err){

alert("Error sending message");

}

});

}
const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(e){
e.preventDefault();

status.innerHTML = "🚀 Message Sent Successfully!";
status.style.opacity = "1";

setTimeout(()=>{
status.style.opacity="0";
},3000);

form.reset();
});
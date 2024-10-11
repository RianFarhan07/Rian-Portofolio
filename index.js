const projectsDatabase = [
  {
    id: 1,
    title: "Kelompro App",
    description:
      "Aplikasi Manajemen Kerja Kelompok Mobile Android menggunakan bahasa Kotlin",
    category: "android",
    image: "images/kelompro.png",
    techLogos: ["svg/kotlin.svg", "svg/firebase.svg"],
  },
  {
    id: 2,
    title: "Mobile Learning",
    description: "Aplikasi Mobile Learning Android di SMAN 4 Jeneponto",
    category: "android",
    image: "images/MobileLearning.png",
    techLogos: ["svg/kotlin.svg", "svg/firebase.svg"],
  },
  {
    id: 3,
    title: "Kost Hunt",
    description: "Aplikasi Pencari dan mengiklankan Kost",
    category: "android",
    image: "images/kostHunt.png",
    techLogos: ["svg/kotlin.svg", "svg/firebase.svg"],
  },
  {
    id: 4,
    title: "Quiz App",
    description: "Aplikasi kuis",
    category: "android",
    image: "images/kuisApp.png",
    techLogos: ["svg/kotlin.svg", "svg/firebase.svg"],
  },
  {
    id: 5,
    title: "Project Management",
    description: "Aplikasi Manajemen kerja seperti Trello",
    category: "android",
    image: "images/ProjeManaj.png",
    techLogos: ["svg/kotlin.svg", "svg/firebase.svg"],
  },
  {
    id: 6,
    title: "Buku Tamu Disnaker",
    description:
      "Aplikasi pencatat tamu di dinas ketenagakerjaan kota Makassar",
    category: "android",
    image: "images/buku-tamu-disnaker.png",
    techLogos: ["svg/kotlin.svg", "svg/firebase.svg"],
  },
  {
    id: 7,
    title: "ShopeeKWApp",
    description: "Aplikasi online marketplace",
    category: "android",
    image: "images/ShopeeKW.png",
    techLogos: ["svg/kotlin.svg", "svg/firebase.svg"],
  },
  {
    id: 8,
    title: "PortoRian",
    description: "Website Portofolio",
    category: "web",
    image: "images/ss1.png",
    techLogos: ["svg/html.svg", "svg/bootstrap.svg", "svg/javascript.svg"],
  },
  {
    id: 9,
    title: "WhatShouldICookToday",
    description: "Web untuk menampilkan recipe random untuk dimasak hari ini",
    category: "web",
    image: "images/cook.png",
    techLogos: [
      "svg/html.svg",
      "svg/css1.svg",
      "svg/javascript.svg",
      "svg/express-js.svg",
    ],
  },
  {
    id: 10,
    title: "BookReview",
    description: "Web untuk mereview buku yang telah dibaca ",
    category: "web",
    image: "images/book.png",
    techLogos: [
      "svg/html.svg",
      "svg/css.svg",
      "svg/javascript.svg",
      "svg/express-js.svg",
      "svg/node-js.svg",
    ],
  },
  {
    id: 11,
    title: "IndonesiaTravelWeb",
    description: "Web untuk menandai kota yang telah dikunjungi di indonesia",
    category: "web",
    image: "images/indonesia.png",
    techLogos: [
      "svg/html.svg",
      "svg/css1.svg",
      "svg/javascript.svg",
      "svg/express-js.svg",
      "svg/node-js.svg",
    ],
  },
];

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Typing effect for the tagline
const tagline = "Android and Web Developer";
const taglineElement = document.querySelector("#Home p.lead");
let i = 0;

function typeWriter() {
  if (i < tagline.length) {
    taglineElement.innerHTML += tagline.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener("load", typeWriter);

// Project filter

function handleScroll() {
  const navbar = document.querySelector(".navbar");
  const scrollOffset = 50; // Sesuaikan nilai ini jika perlu

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }

  // Menyesuaikan scroll untuk link navigasi
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        scrollOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
}

function createProjectElement(project) {
  const techLogos = (project.techLogos || [])
    .map((logo, index) => {
      let logoHtml = "";
      if (logo.endsWith(".svg")) {
        // For SVG files
        logoHtml = `<img src="${logo}" alt="Technology ${
          index + 1
        }" class="tech-logo me-1" style="width: 36px; height: 36px;">`;
      } else if (logo.startsWith("images/")) {
        // For image logos
        logoHtml = `<img src="${logo}" alt="Technology ${
          index + 1
        }" class="tech-logo me-1" style="width: 36px; height: 36px;">`;
      } else {
        // For inline SVG logos (if any)
        logoHtml = `<svg class="tech-logo me-1" width="36" height="36"><use xlink:href="#${logo}-logo"/></svg>`;
      }
      return `<div class="tech-logo-wrapper">${logoHtml}</div>`;
    })
    .join("");

  return `
    <div class="col project-item" data-category="${project.category}">
        <div class="card h-100 shadow-sm project-card">
            <img src="${project.image}" class="card-img-top" alt="${project.title}" height="200" style="object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
            </div>
            <div class="card-footer bg-transparent border-top-0 d-flex justify-content-center align-items-center pb-3">
                <div class="tech-logos d-flex flex-wrap justify-content-center">
                    ${techLogos}
                </div>
            </div>
        </div>
    </div>
  `;
}

// Fungsi untuk merender proyek
function renderProjects(projects) {
  const projectContainer = document.querySelector("#project .row");
  projectContainer.innerHTML = projects.map(createProjectElement).join("");
}

// Fungsi untuk menginisialisasi filter
function initializeFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterBtns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");

      if (filter === "all") {
        renderProjects(projectsDatabase);
      } else {
        const filteredProjects = projectsDatabase.filter(
          (project) => project.category === filter
        );
        renderProjects(filteredProjects);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderProjects(projectsDatabase);
  initializeFilter();
  handleScroll();
});

// Menambahkan event listener untuk scroll
window.addEventListener("scroll", handleScroll);

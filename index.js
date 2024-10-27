// Project Database
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
    description: "Web untuk mereview buku yang telah dibaca",
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
  {
    id: 12,
    title: "RylixHub App",
    description:
      "Aplikasi untuk mengunggah foto dan video tempat-tempat indah di seluruh dunia",
    category: "android",
    image: "images/RylixHub.png",
    techLogos: ["svg/kotlin.svg", "svg/firebase.svg"],
  },
  {
    id: 13,
    title: "Ngobrol App",
    description: "Aplikasi untuk ngobrol bersama orang baru",
    category: "android",
    image: "images/ngobrolApp.png",
    techLogos: ["svg/kotlin.svg", "svg/firebase.svg"],
  },
];

// Project Functions
function createProjectElement(project) {
  return `
    <div class="col-md-6 col-lg-4 project-item" data-aos="fade-up">
      <div class="card project-card h-100">
        <div class="card-img-wrapper">
          <img src="${project.image}" class="card-img-top" alt="${
    project.title
  }">
          <div class="tech-stack">
            ${project.techLogos
              .map(
                (logo) =>
                  `<img src="${logo}" alt="technology" class="tech-logo">`
              )
              .join("")}
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text text-muted">${project.description}</p>
        </div>
      </div>
    </div>
  `;
}

function renderProjects(projects) {
  const container = document.getElementById("project-grid");
  if (!container) return;

  container.innerHTML = "";
  projects.forEach((project) => {
    const element = createProjectElement(project);
    container.insertAdjacentHTML("beforeend", element);
  });
}

function filterProjects(category) {
  const projects =
    category === "all"
      ? projectsDatabase
      : projectsDatabase.filter((project) => project.category === category);

  const container = document.getElementById("project-grid");
  if (!container) return;

  // Fade out existing projects
  const existingProjects = container.querySelectorAll(".project-item");
  existingProjects.forEach((project) => {
    project.style.opacity = "0";
    project.style.transform = "translateY(20px)";
  });

  // Short delay before showing new projects
  setTimeout(() => {
    container.innerHTML = "";
    projects.forEach((project) => {
      const element = createProjectElement(project);
      container.insertAdjacentHTML("beforeend", element);
    });

    // Trigger AOS refresh for new elements
    AOS.refresh();

    // Show new projects with fade in
    const newProjects = container.querySelectorAll(".project-item");
    newProjects.forEach((project) => {
      project.style.opacity = "1";
      project.style.transform = "translateY(0)";
      project.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    });
  }, 300);
}

function initializeFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");
      // Filter projects
      filterProjects(button.getAttribute("data-filter"));
    });
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Navbar Scroll Effect
function handleScroll() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
}

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Initialize Typed.js
document.addEventListener("DOMContentLoaded", function () {
  // Initialize typed.js
  const typed = new Typed("#typed-text", {
    strings: [
      "Android Developer",
      "Web Developer",
      "UI/UX Designer",
      "Mobile Developer",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    autoInsertCss: true,
    backDelay: 1500,
    startDelay: 100,
    fadeOut: false,
    fadeOutDelay: 500,
    loopCount: false,
    onBegin: (self) => {
      const element = document.getElementById("typed-text");
      if (element) {
        element.style.opacity = "1";
        element.style.visibility = "visible";
      }
    },
    onStringTyped: function (arrayPos, self) {
      self.options.backDelay = 1500;
    },
  });

  // Initialize projects
  renderProjects(projectsDatabase);
  initializeFilter();

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);
});

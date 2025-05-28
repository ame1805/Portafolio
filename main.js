document.addEventListener("DOMContentLoaded", () => {
  // Datos de proyectos (sin imágenes)
  const projects = [
    {
      id: 1,
      title: "Sistema de inventario",
      category: "app",
      description: "Sitio web responsivo con JavaScript y CSS",
      technologies: ["CSS", "JavaScript"],
      details:
        "Una aplicación de inventario para una tienda donde se podian registrar ventas y agregar productos a un carrito de compras, con inicio de sesión y la posibilidad de exportar cada venta en PDF.",
    },
    {
      id: 2,
      title: "Sistema web de Gestión de pensiones",
      category: "web",
      description: "Sistema de gestión con PHP y MySQL",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      details:
        "Un sistema completo de gestión pensiones hecho en PHP y MySQL que permite al usuario realizar el registro de pensiones o matriculas en la unidad de postgrado.",
    },
    {
      id: 3,
      title: "Mi portafolio web",
      category: "web",
      description: "Es el presente portafolio",
      technologies: ["HTML", "CSS", "JavaScript","PHP"],
      details:
        "Es un portafolio de presentación donde se incluye apartados como clases, proyectos, habilidades, contacto y bibliografia.",
    },
  ]

  // Datos de cuadernos
  const weeksData = [
    {
      week: 1,
      title: "Fundamentos de las tecnologías web",
      codeLink: "https://github.com/ame1805/VISUALSTUDIOCODE.git",
      topics: [
        "Instalación del entorno: Visual Studio Code",
        "Explicación Frontend - Backend",
      ],
      exercises: [
        "Creación del primer archivo en Visual Studio Code",
      ],
      reflection:
        "En esta primera semana aprendí los fundamentos de las tecnologías web, asi mismo se menciono el uso de las tecnologías y la diferencia entre frontend y backend, esto me permitirá tener una visión inicial del curso asi como una introducción.",
      },
    {
      week: 2,
      title: "Lenguaje Marcado de Hipertexto HTML",
      codeLink: "https://github.com/ame1805/Emmet.git",
      topics: ["Estructura de una página con HTML","Etiquetas principales", "Sintaxis Emmet"],
      exercises: [
        "Creación de una página sencilla", 
        "Uso de las abreviaturas Emmet"
      ],
      reflection:
        "El desarrollo de este tema fue muy importante debido a que conocer la correcta estructura de una página es muy importante para comenzar con el desarrollo web, tambien conocer las abreviaturas Emmet que hacen el trabajo más simplificado, todo esto será usado para la contrucción de mis páginas web a futuro.",
    },
    {
      week: 3,
      title: "Exposición sobre HTML básico y avanzado",
      codeLink: "https://github.com/ame1805/HTML-BASICO.git",
      topics: ["Definición de HTML", "Etiquetas principales", "Formularios básicos", "HTML semántico"],
      exercises: [
        "Ejercicios básicos sobre la creación de una página con header, main, footer", "Construcción de formularios básicos",
      ],
      reflection:
        "Logre profundizar el tema de HTML, con los ejercicios y las practicas que se dieron, esto me ayuda mucho ya que adquiero conocimiento no solo teórico sino tambien práctico para cuando desarrolle páginas web más complejas.",
    },
    {
      week: 4,
      title: "Exposición sobre CSS básico y avanzado y práctica grupal",
      codeLink: "https://github.com/ame1805/CSS.git",
      topics: ["Selectores", "Modelo de caja, colores y fondos, posicionamiento", "Pseudo Clases y elementos", "Transiciones y animaciones"],
      exercises: ["Darle colores y espaciados personalizados a una página"],
      reflection:
        "Los conceptos de CSS los aplique para darle más estilo y de cierta manera más vida a la página web ya que sin esto todo se miraría muy estático, tambien ayuda a mejorar la experiencia del usuario en la parte visual.",
    },
    {
      week: 5,
      title: "Exposición sobre Boostrap y Tailwind CSS",
      codeLink: "https://github.com/ame1805/TAILWIND-BOOTSTRAP.git",
      topics: ["Conceptos de clases utilitarias", "Diseño responsivo, personalizacion de colores, espaciado, flexbox y grid", "Dark mode y variantes de estado", "Animaciones y efectos", "Integración con frameworks"],
      exercises: ["Creación de una página web con tarjetas de Bootstrap"],
      reflection:
        "Aprender a usar este framework resulta muy efectivo a la hora de realizar una página ya que ayuda en la elaboración de botones asi como muchas otras cosas, ya teniendo un estilo definido que nos permite la agilización al momento de realizar el proyecto.",
    },
    {
      week: 6,
      title: "Exposición sobre JavaScript, clase de React y Vite",
      codeLink: "https://github.com/ame1805/JAVASCRIPT.git",
      topics: ["Definición de JavaScript", "Variables, operadores, condicionales, bucles, funciones", "Uso de DOM", "Eventos y manejadores, JSON, uso de consola y depuración"],
      exercises: ["Creación de scripts", "Implementación de botones con eventos"],
      reflection:
        "Esta semana fue muy productiva debido a que conocí el funcionamiento detras de toda las interacciones que se ven en una página y todo es debido a usar código en JavaScript que lo hace mas fluido y dinamico.",
    },
    {
      week: 7,
      title: "Uso de React y Vite",
      codeLink: "https://github.com/ame1805/REACT-VITE.git",
      topics: [
        "",
        "Creación de proyecto con Vite",
        "Los componentes de React",
        "Uso de props, estados y eventos",
      ],
      exercises: [
        "Primer sitio web funcional",
      ],
      reflection:
        "El usar React se hace un poco complicado y a la vez desafiante pero con uno buenos resultados al aplicarlo bien, este tema me logró interesar bastante y a su vez ponerme nuevos desafios para lograr el entendimiento y aplicación de React",
    },
  ]

  const bibliographyData = [
    {
      title: "HTML BÁSICO",
      description: "Documentación básica sobre HTML y sus elementos.",
      type: "Documentación",
      url: "HTML-BASICO.pdf",
    },
    {
      title: "HTML AVANZADO",
      description: "Documentación avanzada sobre HTML y sus elementos.",
      type: "Documentación",
      url: "HTML-AVANZADO.pdf",
    },
    {
      title: "JavaScript",
      description: "Documentación moderna de JavaScript desde lo básico hasta lo avanzado.",
      type: "Documentación",
      url: "JAVASCRIPT.pdf",
    },
    {
      title: "CSS BASICO",
      description: "Dcoumentación de CSS básica para familiarizarse con el entorno y sus principales funciones",
      type: "Documentación",
      url: "CSS-AVANZADO.pdf",
    },
    {
      title: "CSS AVANZADO",
      description: "Dcoumentación de CSS avanzado para el mejor manejo de estilos dentro de una página",
      type: "Documentación",
      url: "CSS-AVANZADO.pdf",
    },
    {
      title: "CSS CON BOOTSTRAP",
      description: "Uso de CSS con Bootstrap, se muestra el uso, las ventajas y ejercicios prácticos",
      type: "Documentación",
      url: "CSS-BOOTSTRAP.pdf",
    },
    {
      title: "TAILWIND CSS",
      description: "Uso de Tailwind con CSS que acelera el diseño web con clases utilitarias listas para usar",
      type: "Documentación",
      url: "Tailwind-CSS.pdf",
    },
  ]

  // Cargar proyectos (sin imágenes)
  function loadProjects(category = "all") {
    const projectsGrid = document.querySelector(".projects-grid")
    projectsGrid.innerHTML = ""

    const filteredProjects = category === "all" ? projects : projects.filter((project) => project.category === category)

    filteredProjects.forEach((project) => {
      const projectElement = document.createElement("div")
      projectElement.className = "project-item"
      projectElement.setAttribute("data-id", project.id)

      projectElement.innerHTML = `
      <div class="project-info" style="padding: 30px;">
        <h3>${project.title}</h3>
        <div class="project-category">${getCategoryName(project.category)}</div>
        <p class="project-description">${project.description}</p>
        <div class="project-technologies" style="margin: 15px 0;">
          ${project.technologies.map((tech) => `<span class="skill-tag">${tech}</span>`).join("")}
        </div>
        <p style="color: var(--gray-color); font-size: 0.9rem; margin-bottom: 20px;">${project.details}</p>
      </div>
    `

      projectsGrid.appendChild(projectElement)
    })
  }

  // Cargar cuadernos
  function loadNotebooks() {
    loadWeeks()
    loadBibliography()
  }

  // Cargar semanas
  function loadWeeks() {
    const weeksContainer = document.querySelector(".weeks-container")
    weeksContainer.innerHTML = ""

    weeksData.forEach((week) => {
      const weekElement = document.createElement("div")
      weekElement.className = "week-card"

      weekElement.innerHTML = `
    <div class="week-header">
      <h3>Semana ${week.week}</h3>
      <p>${week.title}</p>
    </div>
    <div class="week-content">
      <div class="week-section">
        <h4><i class="fas fa-book"></i>Temas Aprendidos</h4>
        <ul>
          ${week.topics.map((topic) => `<li>${topic}</li>`).join("")}
        </ul>
      </div>
      
      <div class="week-section">
        <h4><i class="fas fa-tasks"></i>Ejercicios</h4>
        <ul>
          ${week.exercises.map((exercise) => `<li>${exercise}</li>`).join("")}
        </ul>
      </div>
      
      <div class="week-section">
        <h4><i class="fas fa-lightbulb"></i>Reflexión</h4>
        <div class="reflection-text">${week.reflection}</div>
      </div>

      <div class="week-links" style="text-align: center;">
        <a href="${week.codeLink}" target="_blank"><i class="fab fa-github"></i> Código</a>
      </div>
    </div>
  `

      weeksContainer.appendChild(weekElement)
    })
  }

  // Cargar bibliografía
  function loadBibliography() {
    const bibliographyList = document.querySelector(".bibliography-list")
    bibliographyList.innerHTML = ""

    bibliographyData.forEach((item) => {
      const bibElement = document.createElement("div")
      bibElement.className = "bibliography-item"

      bibElement.innerHTML = `
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <span class="source-type">${item.type}</span>
      <br><br>
      <a href="${item.url}" target="_blank" class="source-link">Ver recurso <i class="fas fa-external-link-alt"></i></a>
    `

      bibliographyList.appendChild(bibElement)
    })
  }

  // Manejar tabs de cuadernos
  function initNotebookTabs() {
    const tabs = document.querySelectorAll(".notebook-tab")
    const contents = document.querySelectorAll(".tab-content")

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const targetTab = this.getAttribute("data-tab")

        // Remover clase active de todos los tabs y contenidos
        tabs.forEach((t) => t.classList.remove("active"))
        contents.forEach((c) => c.classList.remove("active"))

        // Agregar clase active al tab clickeado y su contenido
        this.classList.add("active")
        document.getElementById(targetTab).classList.add("active")
      })
    })
  }

  // Obtener nombre de categoría
  function getCategoryName(category) {
    const categories = {
      web: "Desarrollo Web",
      app: "Aplicaciones",
    }
    return categories[category] || category
  }

  // Mostrar detalles del proyecto
  function showProjectDetails(project) {
    const modal = document.getElementById("project-modal")
    const modalContent = document.getElementById("modal-content")

    let imagesHTML = ""
    project.details.images.forEach((image) => {
      imagesHTML += `<img src="${image}" alt="${project.title}" style="width: 100%; margin-bottom: 15px; border-radius: 8px;">`
    })

    let technologiesHTML = ""
    project.details.technologies.forEach((tech) => {
      technologiesHTML += `<span class="skill-tag">${tech}</span>`
    })

    modalContent.innerHTML = `
            <h2 style="font-size: 2rem; margin-bottom: 15px;">${project.title}</h2>
            <div class="project-category" style="margin-bottom: 20px;">${getCategoryName(project.category)}</div>
            
            <div style="margin-bottom: 30px;">
                ${imagesHTML}
            </div>
            
            <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Descripción</h3>
            <p style="margin-bottom: 20px;">${project.details.fullDescription}</p>
            
            <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Tecnologías</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
                ${technologiesHTML}
            </div>
            
            <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Desafíos</h3>
            <p style="margin-bottom: 20px;">${project.details.challenges}</p>
            
            <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Soluciones</h3>
            <p style="margin-bottom: 30px;">${project.details.solutions}</p>
            
            <div style="display: flex; gap: 15px;">
                <a href="${project.demoLink}" target="_blank" class="btn btn-primary">Ver Demo</a>
                <a href="${project.codeLink}" target="_blank" class="btn btn-secondary">Ver Código</a>
            </div>
        `

    modal.style.display = "block"

    // Cerrar modal
    document.querySelector(".close-modal").addEventListener("click", () => {
      modal.style.display = "none"
    })

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none"
      }
    })
  }

  // Cargar proyectos iniciales
  loadProjects()

  // Filtrar proyectos
  const filterButtons = document.querySelectorAll(".filter-btn")
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-filter")

      // Actualizar botón activo
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Cargar proyectos filtrados
      loadProjects(category)
    })
  })

  // Navegación móvil
  const mobileMenu = document.getElementById("mobile-menu")
  const navMenu = document.querySelector(".nav-menu")

  mobileMenu.addEventListener("click", function () {
    this.classList.toggle("active")
    navMenu.classList.toggle("active")

    // Animar barras del menú
    const bars = this.querySelectorAll(".bar")
    if (this.classList.contains("active")) {
      bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)"
      bars[1].style.opacity = "0"
      bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)"
    } else {
      bars[0].style.transform = "none"
      bars[1].style.opacity = "1"
      bars[2].style.transform = "none"
    }
  })

  // Cerrar menú móvil al hacer clic en un enlace
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      mobileMenu.classList.remove("active")

      const bars = mobileMenu.querySelectorAll(".bar")
      bars[0].style.transform = "none"
      bars[1].style.opacity = "1"
      bars[2].style.transform = "none"
    })
  })

  // Header scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Animación de barras de habilidades
  const skillLevels = document.querySelectorAll(".skill-level")

  const observerOptions = {
    threshold: 0.5,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.style.width
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  skillLevels.forEach((level) => {
    observer.observe(level)
  })

  // Formulario de contacto
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Aquí normalmente enviarías los datos al servidor con AJAX
      // Para este ejemplo, simularemos una respuesta exitosa

      const formData = new FormData(this)
      const submitButton = this.querySelector('button[type="submit"]')

      // Cambiar texto del botón y deshabilitarlo
      submitButton.textContent = "Enviando..."
      submitButton.disabled = true

      // Simular envío
      setTimeout(() => {
        // Crear mensaje de éxito
        const successMessage = document.createElement("div")
        successMessage.className = "alert-success"
        successMessage.style.padding = "15px"
        successMessage.style.backgroundColor = "#d1e7dd"
        successMessage.style.color = "#0f5132"
        successMessage.style.borderRadius = "8px"
        successMessage.style.marginTop = "20px"
        successMessage.textContent = "¡Mensaje enviado con éxito! Te responderé lo antes posible."

        // Insertar mensaje después del formulario
        contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling)

        // Resetear formulario
        contactForm.reset()

        // Restaurar botón
        submitButton.textContent = "Enviar Mensaje"
        submitButton.disabled = false

        // Eliminar mensaje después de 5 segundos
        setTimeout(() => {
          successMessage.remove()
        }, 5000)
      }, 1500)
    })
  }

  // Botón de descarga de CV
const downloadCvButton = document.getElementById("download-cv");
if (downloadCvButton) {
  downloadCvButton.addEventListener("click", (e) => {
    e.preventDefault();

    // URL directa del archivo CV
    const cvUrl = "pdfs/CV.pdf"; // reemplaza con la ruta real

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Isidro-Yaranga-Piero-CV.pdf"; // nombre con el que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}


  // Inicializar cuadernos
  loadNotebooks()
  initNotebookTabs()

  // Remove the initContactTypewriterEffect function entirely

  // Simplify the about section observer to just handle basic animations
  const aboutSection = document.querySelector("#sobre-mi")
  if (aboutSection) {
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Simple fade in effect for the about section
            entry.target.style.opacity = "1"
            aboutObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    aboutObserver.observe(aboutSection)
  }
})

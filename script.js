/*

 ~ Credits By Aokyra ID
 Saluran WhatsApp: https://www.whatsapp.com/channel/0029VbARtDPGpLHPdJIvI73a

 Note: join channel diatas biar dapat informasi source code website dan belajar bersama

 # Open jasa pembuatan website shop, portofolio, dll (hanya menerima html, css, js)
 Harga? murah banget!, langsung chat admin di deskripsi saluran

*/

document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })

  // Close mobile menu when clicking on a nav link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
    })
  })

  // Header scroll effect
  const header = document.querySelector("header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Typewriter effect
  const typewriterElement = document.getElementById("typewriter-text")
  const phrases = ["Web Developer", "UI/UX Designer", "Creative Thinker"]
  let phraseIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typingSpeed = 100

  function typeWriter() {
    const currentPhrase = phrases[phraseIndex]

    if (isDeleting) {
      // Remove a character
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1)
      charIndex--
      typingSpeed = 50 // Faster when deleting
    } else {
      // Add a character
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1)
      charIndex++
      typingSpeed = 100 // Normal speed when typing
    }

    // If word is complete
    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at the end
      isDeleting = true
      typingSpeed = 1500 // Pause before deleting
    }
    // If deletion is complete
    else if (isDeleting && charIndex === 0) {
      isDeleting = false
      // Move to next phrase
      phraseIndex = (phraseIndex + 1) % phrases.length
      typingSpeed = 500 // Pause before typing next word
    }

    setTimeout(typeWriter, typingSpeed)
  }

  // Start the typewriter effect
  setTimeout(typeWriter, 1000)

  // Animate skill bars when they come into view
  const skillLevels = document.querySelectorAll(".skill-level")

  function animateSkillBars() {
    skillLevels.forEach((skill) => {
      const level = skill.getAttribute("data-level")
      skill.style.width = level
    })
  }

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll(".section")

  function revealOnScroll() {
    const windowHeight = window.innerHeight

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("reveal", "active")

        // If it's the skills section, animate the skill bars
        if (element.id === "skills") {
          animateSkillBars()
        }
      }
    })
  }

  // Initial check on page load
  revealOnScroll()

  // Check on scroll
  window.addEventListener("scroll", revealOnScroll)

  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  const formMessage = document.querySelector(".form-message")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Show loading state
    const submitBtn = document.querySelector(".submit-btn")
    submitBtn.classList.add("loading")

    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
      // Hide loading state
      submitBtn.classList.remove("loading")

      // Show success message
      formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`
      formMessage.classList.add("success")

      // Reset form
      contactForm.reset()

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.remove("success")
        formMessage.textContent = ""
      }, 5000)
    }, 1500)
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})

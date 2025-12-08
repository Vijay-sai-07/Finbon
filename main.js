const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const contactForm = document.getElementById('contactForm');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    hamburger.classList.remove('active');
    navMenu.classList.remove('active');

    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// contactForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//   alert('Thank you for your message! We will get back to you soon.');
//   this.reset();
// });

    const contentData = {
        '1': {
            title: 'Construction',
            img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmTJpfqpQ2fF6lvytQD9VMJMDkjYZMe1a2OYpiX2TCtXU2Y6YbNPseAKoOSfcejg9OYk&usqp=CAU",
            points: [
                "At Finbon, we specialize in delivering end-to-end construction solutions for residential, commercial, and industrial projects. From foundation to finishing, we combine innovative techniques with premium materials to ensure every structure reflects quality, safety, and sustainability. Our experienced team works closely with clients, architects, and consultants to turn visions into lasting realities.",
                "With a focus on on-time delivery and budget-friendly execution, we ensure that every project is managed with precision. Whether it’s building a high-rise complex, a factory unit, or a luxury residence, Finbon’s commitment to excellence and attention to detail guarantees results that stand the test of time."
            ]
        },
        '2': {
            title: 'Demolition',
            img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmTJpfqpQ2fF6lvytQD9VMJMDkjYZMe1a2OYpiX2TCtXU2Y6YbNPseAKoOSfcejg9OYk&usqp=CAU",
            points: [
                "Finbon offers safe, efficient, and environmentally responsible demolition services tailored to projects of any size. Our expert team uses advanced equipment and proven techniques to handle everything from selective interior dismantling to full-scale structural demolitions. Safety is our top priority, and every project is carried out in compliance with industry regulations and environmental standards.We also focus on waste management and recycling, ensuring debris is handled responsibly to minimize environmental impact. Whether preparing a site for redevelopment or removing aging structures, Finbon ensures a smooth, secure, and timely demolition process."
            ]
        },
        '3': {
            title: 'Project Management Consultancy',
            img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmTJpfqpQ2fF6lvytQD9VMJMDkjYZMe1a2OYpiX2TCtXU2Y6YbNPseAKoOSfcejg9OYk&usqp=CAU",
            points: [
                "Our Project Management Consultancy (PMC) services are designed to ensure every project is executed seamlessly from start to finish. We handle planning, scheduling, cost estimation, quality assurance, and risk management to keep your project on track. With a client-centric approach, we provide transparent communication and real-time updates, enabling informed decision-making at every stage.",
                "By combining technical expertise with proven management strategies, Finbon ensures that projects are completed on time, within budget, and to the highest quality standards. Whether for large infrastructure projects or bespoke developments, our PMC solutions provide you with the confidence that your vision is in expert hands."
            ]
        },
        '4': {
            title: 'Building Information Modeling',
            img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmTJpfqpQ2fF6lvytQD9VMJMDkjYZMe1a2OYpiX2TCtXU2Y6YbNPseAKoOSfcejg9OYk&usqp=CAU",
            points: [
                "Finbon leverages the power of Building Information Modeling (BIM) to transform how projects are planned, designed, and executed. Our advanced 3D modeling solutions allow for precise visualization, improved collaboration among stakeholders, and seamless coordination of architectural, structural, and MEP systems.By adopting BIM, we help clients reduce errors, cut costs, and enhance efficiency throughout the project lifecycle. From pre-construction design optimization to facility management, our BIM solutions ensure every project benefits from data-driven decision-making and improved productivity."
            ]
        },
        '5': {
            title: 'Approval Assistance',
            img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmTJpfqpQ2fF6lvytQD9VMJMDkjYZMe1a2OYpiX2TCtXU2Y6YbNPseAKoOSfcejg9OYk&usqp=CAU",
            points: [
                "Navigating the complex landscape of government and regulatory approvals can delay projects and increase costs if not handled efficiently. At Finbon, we simplify this process by managing the entire approval journey for our clients. Our team ensures compliance with local building codes, zoning laws, and environmental regulations to secure the necessary clearances quickly and efficiently.",
                "With our in-depth understanding of municipal processes and regulatory frameworks, we help eliminate roadblocks and keep your project moving forward. From initial documentation to final permits, Finbon ensures a smooth, hassle-free approval experience."
            ]
        }
    }

    // for new div opening in side for services

    const sidebar = document.getElementById('sidebar')
    const overlay = document.getElementById('overlay')
    const backButton = document.getElementById('backButton')
    const sidebarContent = document.getElementById('sidebarContent')
    const cards = document.querySelectorAll('.numbered-divs')
    const navbar = document.getElementById('navbar')

    function openSidebar(cardId) {
        const content = contentData[cardId]

        sidebarContent.innerHTML = `
        <img  class ="sidebar-img" src=${content.img_link}>
        <h2 class ="sidebar-title">${content.title}</h2>
        ${content.points.map(point => `<p class="sidebar-p">${point}</p>`).join('')}
  `
        sidebar.classList.add('active')
        overlay.classList.add('active')
        document.body.classList.add('no-scroll')   
        navbar.classList.add('blurr');
    }

    function closeSidebar() {
        sidebar.classList.remove('active')
        overlay.classList.remove('active')
        document.body.classList.remove('no-scroll')
                navbar.classList.remove('blurr');

    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            console.log("ajgd")
            const cardId = card.getAttribute('data-id')
            openSidebar(cardId)
        })
    })

    backButton.addEventListener('click', closeSidebar)

    overlay.addEventListener('click', closeSidebar)

    //our team-------------------------------------------------------------------

    const grid = document.getElementById('teamGrid');
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(b=>b.addEventListener('click', ()=>{
      buttons.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      const f = b.getAttribute('data-filter');
      document.querySelectorAll('.card').forEach(card=>{
        card.style.display = (f === 'all' || card.getAttribute('data-type') === f) ? 'flex' : 'none';
      });
    }));

    // modal
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalRole = document.getElementById('modalRole');
    const modalBio = document.getElementById('modalBio');
    const closeBtn = document.getElementById('closeBtn');

    function openModalFromCard(card){
      const nameData = card.getAttribute('data-name') || card.querySelector('.name').innerText;
      modalTitle.innerText = nameData.split(' - ')[0];
      modalRole.innerText = (nameData.split(' - ')[1] || card.querySelector('.role').innerText);
      modalBio.innerText = (nameData.split(' - ')[2] || 'Experienced. Mission‑driven.I Love Buildings');
      modal.style.display = 'flex';
      // accessible focus
      closeBtn.focus();
    }

    document.querySelectorAll('.card').forEach(card=>{
      card.addEventListener('click', ()=> openModalFromCard(card));
      card.addEventListener('keydown', e=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModalFromCard(card);} });
    });

    closeBtn.addEventListener('click', ()=> modal.style.display = 'none');
    modal.addEventListener('click', e=>{ if(e.target === modal) modal.style.display = 'none'; });

    // small enhancement: auto-generate avatar initials from name text if empty
    document.querySelectorAll('.avatar').forEach((av, idx)=>{
      if(!av.innerText.trim()){
        const name = document.querySelectorAll('.name')[idx]?.innerText || '';
        const initials = name.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase();
        av.innerText = initials || 'T';
      }
    });


//Logo belt code
let logoScrollers = {};
function initiateLogoScroller(container = document) {
  const rows = container.querySelectorAll(".logo-scroller-row");

  rows.forEach(row => {
    // Kill any existing animation for this row
    if (logoScrollers[row]) {
      logoScrollers[row].kill();
      delete logoScrollers[row];
    }

    const rowItems = Array.from(row.children);
    let rowWidth = row.scrollWidth;
    const containerWidth = window.innerWidth;

    // Prevent duplicate cloning
    if (!row.dataset.cloned) {
      let totalWidth = rowWidth;

      // Clone logos until the total width is at least twice the viewport width
      while (totalWidth < containerWidth * 2) {
        rowItems.forEach(item => {
          const clone = item.cloneNode(true);
          row.appendChild(clone);
          totalWidth += item.offsetWidth;
        });
      }

      rowWidth = row.scrollWidth; // Update rowWidth after cloning
      row.dataset.cloned = "true";
    }

    // Reset row position to start
    gsap.set(row, { x: 0 });

    // Calculate speed dynamically to maintain consistency
    let baseSpeed = 20;
    let duration = (rowWidth / containerWidth) * baseSpeed;

    if (window.innerWidth < 768) {
      duration *= 1.5; // Slow it down for mobile
    }

    // GSAP Infinite Scrolling
    const tl = gsap.timeline({ repeat: -1, ease: "none" });

    tl.to(row, {
      x: `-${rowWidth / 2}px`, // Move by half the total width
      duration: duration,
      ease: "none",
      onComplete: function () {
        gsap.set(row, { x: 0 }); // Reset position to loop seamlessly
      }
    });

    // Store the timeline for future cleanup
    logoScrollers[row] = tl;

    // Pause and resume on hover/touch
    row.addEventListener("mouseenter", () => tl.pause());
    row.addEventListener("mouseleave", () => tl.resume());
    row.addEventListener("touchstart", () => tl.pause());
    row.addEventListener("touchend", () => tl.resume());
  });
}

// Initialize on page load
initiateLogoScroller(document);

// Re-initiate in AJAX overlay
function loadNewContentViaAjax() {
  setTimeout(() => {
    const ajaxContainer = document.querySelector(".ajax-overlay");
    if (ajaxContainer) {
      initiateLogoScroller(ajaxContainer);
    }
  }, 1000);
}

    

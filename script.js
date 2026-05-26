// logic Animation hero section
window.addEventListener('load', ()=>{
  document.querySelectorAll('.hero-content-hidden').forEach(heroContent => {
     heroContent.classList.add("hero-content-show")
  });
})


// logic Animation benefits items

let benefitItemsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("benefit-item-show");
      }
    });
  },
  {
    root: null,
    threshold: 0.2,
  },
);

document.querySelectorAll('.benefit-item').forEach(
    (el)=>{
        benefitItemsObserver.observe(el)
    }
)

// logic Animation section title

let sectionsTitleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("sections-title-show");
      }
    });
  },
  {
    root: null,
    threshold: 0.2,
  },
);

document.querySelectorAll('.sections-title-hidden').forEach(
    (el)=>{
        sectionsTitleObserver.observe(el)
    }
)

// logic Animation testimonial cards

let testimonialCardsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("card-show");
      }
    });
  },
  {
    root: null,
    threshold: 0.2,
  },
);

document.querySelectorAll('.card').forEach(
    (el)=>{
        testimonialCardsObserver.observe(el)
    }
)


// logic Animation aboutParagraphs

let aboutParagraphsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("paragraphs-show");
      }
    });
  },
  {
    root: null,
    threshold: 0.2,
  },
);

aboutParagraphsObserver.observe(document.querySelector('.paragraphs'))

// logic Animation aboutStats

let aboutStatsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("stats-show");
      }
    });
  },
  {
    root: null,
    threshold: 0.2,
  },
);

aboutStatsObserver.observe(document.querySelector('.stats-hidden'))
    


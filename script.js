
function createObserver(selector, classToAdd, options = { root: null, threshold: 0.2 }) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(classToAdd);
            observer.unobserve(entry.target);
          }
        });
      }, options);

      document.querySelectorAll(selector).forEach((el) => {
        if (el) observer.observe(el);
      });
    }


     createObserver('.hero-content-hidden', 'hero-content-show', { threshold: 0.05 });
    createObserver('.benefit-item', 'benefit-item-show');
    createObserver('.sections-title-hidden', 'sections-title-show');
    createObserver('.card', 'card-show');
    createObserver('.paragraphs', 'paragraphs-show');
    createObserver('.stats-hidden', 'stats-show');


let form = document.querySelectorAll('#form');
let submitButton = document.querySelectorAll('#submit-btn');

let isSubmitting = false;
    
form.forEach(formElement => {
  formElement.addEventListener('submit', function(e) {
    if (isSubmitting) {
      e.preventDefault();
      return;
    }
  isSubmitting = true;
  submitButton.forEach(btn => {
    btn.disabled = isSubmitting;
    btn.innerText = 'Envoi en cours...';
  })
  setTimeout(() => {
    form.forEach(formElement => {
      formElement.reset();
    });
    isSubmitting = false;
    submitButton.forEach(btn => {
      btn.disabled = isSubmitting;
      btn.innerText = 'je veux mon stage';
    });
  },5000)

})
})
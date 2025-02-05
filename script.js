const scriptURL = 'https://script.google.com/macros/s/AKfycbyXAT5mD82ma8awxHLfxhL9IFaLivj4l6K5QiGOjIM13ysnDxq9R_fQjjK_ZWeTQcR3/exec';
const form = document.forms['contact-form'];
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Actualizare stare buton
    submitButton.innerHTML = `<span class="spinner"></span> Se trimite...`;
    submitButton.disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert("Mulțumim pentru completare! Veți primi un email cu informațiile necesare.");
        window.location.reload();
    })
    .catch(error => {
        console.error('Eroare:', error.message);
        alert("A apărut o eroare. Vă rugăm încercați din nou.");
        submitButton.innerHTML = 'Trimite Cerere';
        submitButton.disabled = false;
    });
});
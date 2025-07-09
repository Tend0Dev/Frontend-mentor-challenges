const submitBtn = document.querySelector('#submit-btn');
const ratingCard = document.querySelector('#rating');
const thankYouCard = document.querySelector('#thank-you');
const ciclesBtn = document.querySelectorAll('.circle');
const score = document.querySelector('#score');




ciclesBtn.forEach(button => {
    button.addEventListener('click', (e) => {

        // resetea los estilos
        ciclesBtn.forEach(button => {
            button.classList.remove('bg-Grey-500');
            button.classList.remove('text-White');
        })

        // cambia los estilos del circulo al presionarse
        button.classList.add('bg-Grey-500');
        button.classList.add('text-White');

        // agrega el valor seleccionado al span
        score.innerHTML= e.target.innerText

        // permitir presionar boton
        submitBtn.addEventListener('click', () => {
            ratingCard.classList.add('hidden')
            thankYouCard.classList.remove('hidden')
            
           });
    })
})

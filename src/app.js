let counter = 13;
const cards = document.getElementById('contenedor');
const counterElement = document.getElementById('counterElement');

cards.addEventListener("click", (e) => {
   if(e.target.closest(".timetable__card")){
      e.target.closest(".timetable__card").classList.toggle("red");
   }

   if(e.target.closest(".red")) {
      counterElement.textContent = --counter;
   } else if (e.target.closest(".timetable__card")) {
      counterElement.textContent = ++counter;
   }
})
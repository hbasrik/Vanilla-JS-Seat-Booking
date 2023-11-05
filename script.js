const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')


let ticketPrice= movieSelect.value;


function setMovieData(movieIndex,moviePrice) {

    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);

}

function updateSelectedCount () {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');


    const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

   localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

    const selectedSeatsCount = selectedSeats.length; 

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount*ticketPrice
}

container.addEventListener('click', (e) => {
   if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount();
        
   }
})
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

//console.log( typeof ticketPrice);
function updateSelectedcount(){
    const selectedSeats = document.querySelectorAll('.row.seat.selected')
    console.log(selectedSeats);
}

container.addEventListener('click',(e)=>{
    //console.log(e.target);

    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        //console.log(e.target);
        e.target.classList.toggle('selected');
    }

    updateSelectedcount();
});
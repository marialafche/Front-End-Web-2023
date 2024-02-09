window.addEventListener('load', ()=>{
    const orederIn = document.getElementsByClassName("order-option-btn")[0]
    .addEventListener('click', ()=>{
        location.href = '../html/order.html'
    });

    const makeReservation = document.getElementsByClassName("reserve-option-btn")[0]
    .addEventListener('click', ()=>{
        location.href = '../html/reservation.html'
    });
});
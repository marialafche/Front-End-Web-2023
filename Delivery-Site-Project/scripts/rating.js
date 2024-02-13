const allStar = document.querySelectorAll('.rating .star')

allStar.forEach((item, index) => {
    item.addEventListener('click', function(){
        allStar.forEach(i => {
            i.classList.replace('bxs-star', 'bx-star')
        })
        for(let i=0; i<allStar.length; i++){
            if(i <= index){
                allStar[i].classList.replace('bx-star', 'bxs-star')
            }
        }
    })
})
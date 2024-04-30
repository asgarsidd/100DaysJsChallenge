const tabs = document.querySelector('.tabs');
const gallary = document.querySelectorAll('.images')
tabs.addEventListener('click',(event) =>{
    console.log(event.target.dataset.category);
    if(event.target.dataset.category !== undefined){
        filterSearch(event.target.dataset.category)
    }
    
})

const filterSearch = (value) => {
    gallary.forEach((currEle)=>{
        console.log(currEle.dataset.category);
        if(currEle.dataset.category === value){
            currEle.style.display = "block";
        }else if(value === "all"){
            currEle.style.display = "block"
        }
        else {
            currEle.style.display = "none";
        }
    })
}
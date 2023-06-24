
let searchQuery = "random";
let pageIndex = 1;


// const titre =document.querySelector(".titre")
// titre.addEventListener('click', reload)
// function reload (){
//     document.location.onload()
// }
    
const overlay = document.querySelector(".overlay")
const imgContainer = document.querySelector(".imgContainer")
const closeIcon = document.querySelector(".close")
const btnUp = document.querySelector(".btnUp")

let imgData;




async function getImg(){
    if (!searchQuery) {
        return;
      }  

    try{
         
        const imgUrl = await fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=60&query=${searchQuery}&client_id=zw6D3vWEJ2c9Pg4bWw-uNKM79Ybkau5B1MCQ8HhLXpU`)
        const jsonData = await imgUrl.json()
        console.log(searchQuery)
        imgData = jsonData.results
        console.log(imgData)
        createImg(imgData)
        

    }
    catch(error){
        console.log(error)
    }

    }
    
    

function createImg(data){


            imgContainer.innerHTML = "";
            data.forEach(img => {
            let image = document.createElement("div")
            image.className = ("imageBox")
            let imgBase = img.urls
            image.innerHTML = `
            <img src="${imgBase.regular}" class= "image">
            `
            
            imgContainer.appendChild(image)
            const images = document.querySelectorAll(".imageBox")
            // const breakP = document.querySelector(".breakP")
            const breakObserver = new IntersectionObserver(imgObserv,{rootMargin: "-15%"} )
            
            
            images.forEach(img => {
                breakObserver.observe(img)
            });
            
        
        const overlay = document.querySelector(".overlay")
            function imgObserv (entries){
                entries.forEach(entry=>{
                    if(entry.isIntersecting){
                        console.log(entry.target)
                        entry.target.classList.add("imgActiv")
                    }
                })
                }
            
            

            const ModalContainer = document.querySelector(".ModalContainer")
            
            images.forEach(img => {
                img.addEventListener("click", imgFull)
            });
            function imgFull(event){
                console.log(event.target)
                const imgSrc = event.target.getAttribute("src")
                console.log(imgSrc)
                console.log(imgSrc)
                overlay.classList.add("modalActiv")
                ModalContainer.classList.add("modalActiv")
                ModalContainer.innerHTML = `
                <img src="${imgSrc}" class= "imageFull">
                `
            }
            
            
            closeIcon.addEventListener("click", imgOff)

            function imgOff (){
                ModalContainer.classList.remove("modalActiv")
                overlay.classList.remove("modalActiv");
            }


            const filtre0 = document.querySelector("#filtre0")
            filtre0.addEventListener('click', applyFiltre0 )
            function applyFiltre0(){
                ModalContainer.classList.remove("filtre1")
                ModalContainer.classList.remove("filtre2")
                ModalContainer.classList.remove("filtre3")
                ModalContainer.classList.remove("filtre4")
                ModalContainer.classList.remove("filtre5")
            }

            const filtre1 = document.querySelector("#filtre1")
            filtre1.addEventListener('click', applyFiltre1 )
            function applyFiltre1(){
                ModalContainer.classList.add("filtre1")
                ModalContainer.classList.remove("filtre2")
                ModalContainer.classList.remove("filtre3")
                ModalContainer.classList.remove("filtre4")
                ModalContainer.classList.remove("filtre5")
            }

            const filtre2 = document.querySelector("#filtre2")
            filtre2.addEventListener('click', applyFiltre2 )
            function applyFiltre2(){
                ModalContainer.classList.add("filtre2")
                ModalContainer.classList.remove("filtre1")
                ModalContainer.classList.remove("filtre3")
                ModalContainer.classList.remove("filtre4")
                ModalContainer.classList.remove("filtre5")
            }
            const filtre3 = document.querySelector("#filtre3")
            filtre3.addEventListener('click', applyFiltre3 )
            function applyFiltre3(){
                ModalContainer.classList.add("filtre3")
                ModalContainer.classList.remove("filtre1")
                ModalContainer.classList.remove("filtre2")
                ModalContainer.classList.remove("filtre4")
                ModalContainer.classList.remove("filtre5")
            }
            const filtre4 = document.querySelector("#filtre4")
            filtre4.addEventListener('click', applyFiltre4 )
            function applyFiltre4(){
                ModalContainer.classList.add("filtre4")
                ModalContainer.classList.remove("filtre1")
                ModalContainer.classList.remove("filtre3")
                ModalContainer.classList.remove("filtre2")
                ModalContainer.classList.remove("filtre5")
            }
                

            const filtre5 = document.querySelector("#filtre5")
            filtre5.addEventListener('click', applyFiltre5 )
            function applyFiltre5(){
                ModalContainer.classList.add("filtre5")
                ModalContainer.classList.remove("filtre1")
                ModalContainer.classList.remove("filtre3")
                ModalContainer.classList.remove("filtre4")
                ModalContainer.classList.remove("filtre2")
            }

            const menuEdit = document.querySelector(".menuEdit")
            const filtreBtn = document.querySelectorAll(".filtre")
            
            menuEdit.addEventListener("click", showFiltre)
            let isActiv = false;
            
            function showFiltre (){
                if(!isActiv){
                    
                   filtreBtn.forEach(btn => {
                    btn.classList.add("filtrePop")
                    menuEdit.classList.add("menuEditAcitv")
                    isActiv = true
                    
                    

                }); 
                }
                else{
                    filtreBtn.forEach(btn => {
                        btn.classList.remove("filtrePop")
                        menuEdit.classList.remove("menuEditAcitv")
                        isActiv = false
                } ) 
            }
               
                
            }
            
            })


            
        }
            
            
   const lightIcon = document.querySelector(".lightMode i") 
   const body = document.querySelector("body")  
   const main = document.querySelector("main")
   const titre =document.querySelector(".titre")
   const label = document.querySelector("label")
//    const editIcons  = document.querySelectorAll(".editIcon i")
   const editIcon  = document.querySelectorAll(".editIcon")
   const h1 = document.querySelector(".h1")
   
   lightIcon.addEventListener("click", lightSwitch)
   function lightSwitch(){
    overlay.classList.toggle("bgLight")
    body.classList.toggle("bgLight")
    main.classList.toggle("bgLight")
    h1.classList.toggle("fontLight")
    lightIcon.classList.toggle("fontLight")
    label.classList.toggle("fontLight")
    closeIcon.classList.toggle("fontLight")
    editIcon.forEach(icon => {
        icon.classList.add("fontLight")
    });
    // editIcon.classList.toggle("fontDark")
    btnUp.classList.toggle("fontLight")  


   }

       
 const inputSearch = document.querySelector("#inputSearch")
        inputSearch.addEventListener('input', searchImg)




function searchImg (e){
            e.preventDefault()
            searchQuery = inputSearch.value;
            setTimeout(() => {
                getImg()
            }, 1000);
        
      }




btnUp.addEventListener("click", scrollTop)

function scrollTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const observUp = new IntersectionObserver(upShow, { threshold:1})
observUp.observe(titre)
function upShow(entries){
    entries.forEach(entry => {
        
        if(entry.isIntersecting){
            console.log(entry)
            btnUp.classList.remove("imgActiv")
        }
        else{
            btnUp.classList.add("imgActiv")
            
        }
    });

}


h1.addEventListener("click", ()=>location.reload())


const infiniteMarker = document.querySelector(".infinite-marker")
const observScroll = new IntersectionObserver(scrollInfinite, {rootMargin: "50%"})

observScroll.observe(infiniteMarker)

function scrollInfinite (entries){
    if(window.scrollY > window.innerHeight && entries[0].isIntersecting) {
        pageIndex++;
        getImg()
   
}
}

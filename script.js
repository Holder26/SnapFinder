const promise1 = new Promise((resolve, reject) =>{

    resolve("les donnees sont arrivee")
    //reject('erreur')
})

promise1.then((value) =>{
    console.log(value); // les donnees sont arrivee
}).catch(()=>{
    console.log("il y a eu une erreur")// erreur
})


async function foo(){
    
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('action effectuée'),1000)
    })

    let resultat = await p1;
    console.log(resultat)
}

foo()
let x =document.getElementById('search')
let sample = document.getElementById('sample')

x.addEventListener('keyup', e =>{
    if(e.key==='Enter'){
   let searchElement= e.target.value
   searchuser(searchElement);
    }
})

 async function searchuser(searchvalue){
     let url = "https://api.covid19api.com/country";
     let data = await window.fetch(`${url}/${searchvalue}`);
     let JSON = await data.json();
     let updated = JSON.length-1;
     console.log(updated);
     let{Country,CountryCode,Deaths,Recovered,Date,Confirmed,Active}=JSON[updated];
     sample.innerHTML = `
     <main class="fetch">
     <div class='fetch1'>
        <p class='fetch2'>${Country} <i class="fas fa-share-alt"></i></p>

        <div class="fetch3"> 
            <p>CountryCode:<br>${CountryCode}</p>
            <p>Deaths: <br> ${Deaths}</p>
            <p>Recovered: <br> ${Recovered}</p>
        </div>
        <div class="fetch3">
        <p>DATE: <br> ${Date}</p>
        <p>CONFIRMED: <br> ${Confirmed}</p>
        <p>ACTIVE: <br>${Active}</p>
        </div>
        
     </div>
     </main>` 
 }
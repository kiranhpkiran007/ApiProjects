let searchInput = document.getElementById('search');
let templete = document.getElementById('templete');
searchInput.addEventListener('keyup',e =>{
    if(e.key==='Enter'){
        let searchText = e.target.value;
        searchGitUser(searchText);
    }
})

// search
let btn = document.getElementById('btn')

btn.addEventListener('click',e=>{
    window.SpeechRecognition = window.webkitSpeechRecognition;
    let speech = new SpeechRecognition();
    speech.addEventListener('result',e=>{
        let text = e.results[0][0].transcript;
        let finalword = searchInput.value = text;
        searchGitUser(finalword)
    })
    speech.start();
});


async function searchGitUser(searchValue){
    let URL = 'https://api.github.com/users';
    let DATA = await window.fetch(`${URL}/${searchValue}`);
    let JSON = await DATA.json();
    let {login ,avatar_url,html_url,company,location,bio} = JSON;

templete.innerHTML =`
<main>
    <div>
    <img src =${avatar_url} alt = ${login}/>
    <h2>User name:${login}</h2>
    <h3>Company name:${company}</h3>
    <h4>Place name:${location}</h4>
    <h4>About them:${bio}</h4>
    </div>
</main>
`}
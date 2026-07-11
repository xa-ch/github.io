let current="zh-CN";


async function loadLanguage(){


const response =
await fetch(
`locales/${current}.json`
);


const data =
await response.json();



document
.querySelectorAll("[data-i18n]")
.forEach(el=>{


let keys =
el.dataset.i18n.split(".");


let value=data;


keys.forEach(k=>{

value=value[k];

});


el.innerText=value;


});


}



document
.getElementById("language")
.onclick=()=>{


current =
current==="zh-CN"
?
"en-US"
:
"zh-CN";


loadLanguage();


document
.getElementById("language")
.innerText =
current==="zh-CN"
?
"EN"
:
"中文";


}



loadLanguage();

const API_kEY="fca_live_FN81uwUCQw17NfSC3dOyePZOxGh0ToYHb65biwC2"
const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const dps = document.querySelectorAll(".drop select");
const btn=document.querySelector("form button");
const fromcur=document.querySelector(".from select");
const tocur=document.querySelector(".to select")
for (let select of dps){
    for (curcode in contlist){
        let newop=document.createElement("Option");
        newop.innerText=curcode;
        newop.value=curcode
        if (select.name==="from" && curcode==="USD"){
            newop.selected="selected"
        }
        else if (select.name==="to" && curcode==="INR"){
            newop.selected="selected"
        }
        select.append(newop);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });

}
const updateFlag =(element) =>{
    let curcode= element.value;
    let contcode=contlist[curcode];
    let newsrc= `https://flagsapi.com/${contcode}/flat/64.png`
    let img =element.parentElement.querySelector("img");
    img.src=newsrc;
};

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    console.log(amtval);
    if(amtval==="" ||amtval<1){
        amtval=1;
        amount.value="1";
    }
    const URL = `${BASE_URL}?apikey=${API_kEY}&base_currency=${fromcur.value}&currencies=${tocur.value}`;


    let response=await fetch(URL);
    let data=await response.json();
    console.log(data)
});
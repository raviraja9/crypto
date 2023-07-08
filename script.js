
const form=document.querySelector("#searchbox")
const divtag=document.querySelector("#root")
let cointype;
let result;
let jsonfile;
let coinprice=0



form.addEventListener('submit',(event)=>{
    event.preventDefault()
    cointype=form.elements.cointype.value;

    cryptoAPI()
    setInterval(cryptoAPI,1000)
})


const cryptoAPI = async() =>{
    result= await fetch(`https://api.coinstats.app/public/v1/coins/${cointype}?currency=USD`)
    jsonfile= await result.json()
    console.log(jsonfile);
    const time = new Date().toLocaleTimeString();
  
    
    divtag.innerHTML=`<div>
    <table class="box">
       <tr>
         <td class="headerbox"><h3 class="name">Properties</h3></td>
         <td class="headerbox"><h3 class="name">values</h3></td>
       </tr>
       <tr>
       <td class="headerbox"><p class="name">Price</p></td>
       <td class="headerbox"><p class="name">${jsonfile.coin.price}</p></td>
       </tr>
       <tr>
       <td class="headerbox"><p class="name">Volume</p></td>
       <td class="headerbox"><p class="name">${jsonfile.coin.volume}</p></td>
       </tr>
       <tr>
       <td class="headerbox"><p class="name">Price change in 1hr</p></td>
       <td class="headerbox"><p class="name">${jsonfile.coin.priceChange1h}</p></td>
       </tr>
       <tr>
       <td class="headerbox"><p class="name">Time</p></td>
       <td class="headerbox"><p class="name">${time}</p></td>
       </tr>
    
    </table>
    
    </div>`
}




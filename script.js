let c=0;
let f=false;
let imgelement=document.getElementById("poke-img");
let h2tag=document.getElementById("h2tag");

fetchpokemons();

 async function fetchpokemons() {
    try{
        const pokemonname=document.getElementById("input").value.toLowerCase();
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);

        if(!response.ok)
        {
            throw new Error("Could not fetch Resource");
        }
        const data= await response.json();
        console.log(data);
        const pokemonsprite= data.sprites.front_default;
        imgelement.src=pokemonsprite;
        f=true;
    }
    
    catch(error){
        console.error(error);
    }
}
function catchpokemons(){
    if(f)
    {
        c+=1;
        imgelement.src="pokemonlogo.jpg";
        h2tag.textContent=`Pokemon's Caught : ${c}`;
        f=false;
    }
}


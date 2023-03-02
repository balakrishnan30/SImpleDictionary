const inputE1 = document.getElementById("input")
const infoTextE1 = document.getElementById("info-text");
const meaningContainerE1 =document.getElementById("meaning-container")
const titE1 = document.getElementById("title")
const meanE1 = document.getElementById("meaning")
const audioE1 = document.getElementById("audio")

async function fetchAPI(word)
{
    try
    {
        infoTextE1.style.display = "block";
        meaningContainerE1.style.display = "none";
        infoTextE1.innerHTML = `Searching...`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result  = await fetch(url).then((res)=>res.json());

        if(result.title)
        {
            meaningContainerE1.style.display = "block";
            infoTextE1.style.display = "none";
            titE1.innerText = word;
            meanE1.innerText = "N/A";
            audioE1.style.display = "none";
        }
        else
        {
            infoTextE1.style.display = "none";
            meaningContainerE1.style.display = "block";
            audioE1.style.display = "inline-flex"
            titE1.innerText = result[0].word;
            meanE1.innerText = result[0].meanings[0].definitions[0].definition;
            audioE1.src = result[0].phonetics[0].audio;
        }
    }

    catch(error)
    {
        console.log(error);
        infoTextE1.innerText="Error Occured"
    }
}

inputE1.addEventListener("keyup",(e)=>
{
    if(e.target.value && e.key === "Enter")
    {
        fetchAPI(e.target.value)
    }
})
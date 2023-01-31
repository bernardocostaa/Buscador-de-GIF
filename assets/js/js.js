
const input = document.querySelector('#btn-text')

const debounce = (callback) => {
  let timeout;
	return (argument) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(argument), 800);
  };
};
const debouncedOnInput = debounce(pegarTexto);

function pegarTexto(){
  carregarGifs(input.value)
  }
input.addEventListener('input',debouncedOnInput)



async function carregarGifs(text){
  let linkGif = await fetch(`https://g.tenor.com/v1/search?q=${text}&key=LIVDSRZULELA`)
  let json = await linkGif.json()
  let htmlGif = ''
  

  json.results.forEach((item)=>{
    htmlGif += `
    <div class="col-md-4">
      <div class="gifs">
        <img class="img-fluid" src="${item.media[0].gif.url}" alt="">
      </div>
  </div>`
  })
  const gifCard = document.querySelector('.gif')
  gifCard.innerHTML = htmlGif
}



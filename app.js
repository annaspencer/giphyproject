

async function getGifByTerm(term){
     try{
        const res = await axios.get(
            'http://api.giphy.com/v1/gifs/search', 
            { params: { api_key:'D6chJZRyXvucKGxadtFjvLTdZUNmN4Y1', q:{term} } 
        });
        let randomIdx = Math.floor(Math.random() * 25);
        let randGif = res.data.data[randomIdx].images.fixed_height.url;
        let postGif = document.createElement('div');
        postGif.innerHTML= (`<img src="${randGif}"  height= "250" width ="250">`);
        document.getElementById("gifcollection").appendChild(postGif);
        
    } catch (e){
        alert("Term not valid. Try a different search.")
    }
};



const form = document.querySelector('#form');
form.addEventListener("submit", function(e){
    const input = document.querySelector('#gif');
    e.preventDefault();
    getGifByTerm(input.value);
    input.value = ' ';
});

let clear = document.getElementById('clear-box');
  clear.addEventListener('click', function(){
    window.location.reload(false);
  });

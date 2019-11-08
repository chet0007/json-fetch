let url = "https://picsum.photos/v2/list?limit=10";
//this is the endpoint URL that generates our  data.
fetch(url)
  .then(function(response) {
    return response.json();
  })


  .then( data => {
   

    data.forEach(pic => {
        let img = document.createElement("img");
  
        img.alt = pic.author;

        let dwnldLink = pic.download_url.replace(pic.height, '300').replace(pic.width, '400');
      
        img.src = dwnldLink;
        
        document.body.appendChild(img);
        console.log(pic);
    })
    console.log(data);
  })


  .catch(function(err) {
    console.log(err);
  });
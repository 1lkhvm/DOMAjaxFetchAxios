var filmm = document.getElementById("film")
fetch('https://api.tvmaze.com/shows')
.then(res => res.json())
.then(data => data.forEach(element => {
    var div = document.createElement("div")
   div.innerHTML=(`<div class="filmm" style="width: 400px;container">
   <img id="image" src="${element.image.medium}" class="film-img-top" style="width:200px;container" ylealt="">
        <div class="film-body" style="width:200px;container">
            <h id="aa" class="film-title">${element.name}</h2>
                <p class="film-text">${element.type}</p>
            <a href="${element.url}" class="btn btn-primary" style="width:200px;container">Go somewhere</a>
    </div>
</div>`)
filmm.appendChild(div).style.display ="inline-block"

//ortalaya bilmedim:(
}))

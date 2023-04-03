let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');

function search() {
  if (searchInput.value) {
    const API = `http://www.omdbapi.com/?s=${searchInput.value}&apikey=5b739529`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET',API,true)
    xhr.send()
    xhr.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
        let result = JSON.parse(this.responseText)
        console.log(result.Search)  // result.Search[0].Poster
        let row;
        for (let i = 0; i < result.Search.length; i++) {
          row += `
            <div class="col-md-3">
              <div class="card bg-dark text-light">
                <img src="${result.Search[i].Poster}" class="card-img-top" alt="poster">
                <div class="card-body">
                  <div class="d-flex">
                  <h5 class="card-title">${result.Search[i].Title}</h5>
                  </div>
                  <a href="#" class="btn btn-primary">More Details</a>
                </div>
              </div>
            </div>
          `
          document.querySelector(".row").innerHTML = row
        }
      }
    }
  }
}

searchBtn.addEventListener('click',search)





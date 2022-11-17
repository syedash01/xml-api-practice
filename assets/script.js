const container = document.querySelector(".container");
console.log(container);

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/nepal");
request.send();

// to get response

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  const htmlData = `
  <article class="card">
          <div class="card-body">
             <img src="${data.flags.png}" alt="" class="card-body-img"/>
             <h1 class="card-body-title">
              ${data.name.common}<span> </span>
            </h1>
             <p class="card-body-text"> capital : ${data.capital}</p>
          </div>
          <div class="card-footer">
            <div class="card-footer-social">
              <h3>${data.languages.nep}</h3>
              <p>Native Language</p>
            </div>
            <div class="card-footer-social">
              <h3> ${data.population}</h3>
              <p>Population</p>
            </div>
            <div class="card-footer-social">
            <h3>${data.demonyms.eng.f}</h3>
              <p>Demonym</p>
            </div>
          </div>
        </article>
  `;

  container.insertAdjacentHTML("afterbegin", htmlData);
});

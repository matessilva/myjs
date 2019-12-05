(function (win, doc) {
  //Endpoint via axios

  (async () => {
    var fot = document.querySelector("#campImg");
    var response = await axios.get("https://raw.githubusercontent.com/matessilva/apii/master/assets/JS/api.json");
    /* var caminho = JSON.parse('response') */
    var caminho = response.data.results;
    console.log(caminho);
    var corp = doc.querySelector("#Corpo")
    caminho.forEach(function (item) {

      // Criando com as classes
      var retorna = document.createElement("div");
      retorna.setAttribute('class', 'retorno-api');
      var image = document.createElement("div");
      image.setAttribute('class', 'fot');
      var foto = document.createElement("img");
      var corpoDesc = document.createElement("div");
      corpoDesc.setAttribute('class', 'corpo-desc');
      var nomeDesc = document.createElement("div");
      nomeDesc.setAttribute('class', 'nome-desc');
      var nome = document.createElement("h3");
      var descri = document.createElement("span");
      var config1 = document.createElement("div");
      config1.setAttribute('class', 'config-1');
      var motor = document.createElement("P");
      var cambio = document.createElement("P");
      var etanol = document.createElement("P");
      var config2 = document.createElement("div");
      config2.setAttribute('class', 'config-1');
      var gasolina = document.createElement("P");
      var Kim = document.createElement("P");
      var Co2 = document.createElement("P");


      descri.innerHTML = "Esse carro é monstro de mais, se você pegar ele ganha de cara um brinde da helokit e um abarbie vem logo pegar esse caro, não deixe a oportunidade passart u dguri defove beargjakl"
      foto.src = "car-log.jpg";
      nome.innerHTML = item.modelo;
      motor.innerHTML = item.motor;
      cambio.innerHTML = item.cambio;
      etanol.innerHTML = item.Etanol;
      gasolina.innerHTML = item.gasolina;
      Kim.innerHTML = item.MjKm;
      Co2.innerHTML = item.CO2;


      image.appendChild(foto);
      nomeDesc.appendChild(nome);
      nomeDesc.appendChild(descri);

      config1.appendChild(motor);
      config1.appendChild(cambio);
      config1.appendChild(etanol);
      config2.appendChild(gasolina);
      config2.appendChild(Kim);
      config2.appendChild(Co2);

      corpoDesc.appendChild(nomeDesc);
      corpoDesc.appendChild(config1);
      corpoDesc.appendChild(config2);

      retorna.appendChild(image);
      retorna.appendChild(corpoDesc);


      doc.querySelector("#Corpo").appendChild(retorna);

    })
    /*  mail.innerHTML = response.data.results["0"].email;
     name.innerHTML =
       response.data.results["0"].name.first +
       " " +
       response.data.results["0"].name.last;
     fot.src = response.data.results["0"].picture.large; */
  })();


})(window, document);

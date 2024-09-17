 // Tempo manual do vídeo (em milissegundos). Por exemplo, 2 minutos = 120000 ms.
 const videoDuration = 840000; // Defina o tempo correto aqui.

 // Função para mostrar as seções após o vídeo
 function showSections() {
     document.getElementById("slide").style.display = "block";
     document.getElementById("aprender").style.display = "block";
     document.getElementById("modulos").style.display = "block";
     document.getElementById("praquem").style.display = "block";
     document.getElementById("depoimentos").style.display = "block";
     document.getElementById("plano").style.display = "block";
     document.getElementById("especialista").style.display = "block";
     document.getElementById("faq").style.display = "block";
     document.getElementById("footer").style.display = "block";
     document.getElementById("author").style.display = "block";
 }

  // Função para incrementar o contador de pessoas
  function incrementarContador() {
    const spanContador = document.getElementById("contadorPessoas");
    let contador = parseInt(spanContador.innerText);

    // Incrementa o contador até atingir 1000
    const intervalo = setInterval(() => {
        if (contador < 1000) {
            contador++;
            spanContador.innerText = contador;
        } else {
            clearInterval(intervalo); // Para quando atingir 1000
        }
    }, 3879); // A cada 3.879 milissegundos
}

 // Executar a função após o tempo determinado
 setTimeout(showSections, videoDuration);

 incrementarContador();
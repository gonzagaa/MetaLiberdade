 // Tempo manual do vídeo (em milissegundos). Por exemplo, 2 minutos = 120000 ms.
 const videoDuration = 900000; // Defina o tempo correto aqui.

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

 // Executar a função após o tempo determinado
 setTimeout(showSections, videoDuration);
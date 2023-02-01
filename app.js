const som1 = document.getElementById("musicapiso");
var cont = 0; 

function chamapiso(){

    

   

    
    cont
   

setInterval(carregabarra, 1000); 

    document.getElementById('musicapiso').play();
    document.getElementById('musicacnco').pause();
    document.getElementById('musicachino').pause();
    document.getElementById('fotocapa').src = "https://akamai.sscdn.co/uploadfile/letras/albuns/a/7/9/3/1048161616430606.jpg";
    document.getElementById('cantor').innerHTML = "Piso 21";
    document.getElementById('musica').innerHTML = "Tan bonita"


    let data = new Date(null);
    data.setSeconds(som1.duration);
    let duracao = data.toISOString().substr(12, 8);
    alert("O som tem duração " + duracao);
    document.getElementById('finalsom').innerHTML = duracao;
   
}

function carregabarra () {
    
    var valor = 0.4484304932735426; 
    
   var m = valor*cont; 

    cont++; 
    

    if(m<=100){



    document.getElementById( 'barra' ).style.width = m + "%";

    }




} 



function chamacnco(){

    document.getElementById('musicacnco').play();
    document.getElementById('musicapiso').pause();
    document.getElementById('musicachino').pause();
    document.getElementById('fotocapa').src = "https://images.genius.com/5bd18146238fcf849a82ae138e6e2b29.1000x1000x1.png";
    document.getElementById('cantor').innerHTML = "CNCO";
    document.getElementById('musica').innerHTML = "Estrella"

}

function chamamevoy(){

    document.getElementById('musicacnco').pause();
    document.getElementById('musicapiso').pause();
    document.getElementById('musicachino').play();
    document.getElementById('fotocapa').src = "              https://i.discogs.com/5rcz4arFTK4gOIQ5344BwOJX0KP9s2npWzeocjXjDEs/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkwMTg4/NDAtMTQ3MzM2MjQ3/NS05OTAwLmpwZWc.jpeg";
    document.getElementById('cantor').innerHTML = "Chino y Nacho";
    document.getElementById('musica').innerHTML = "Me voy enamorando"

}
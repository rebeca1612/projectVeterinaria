// video pequeño

function ejecutar(div,videoID) {
    var video = document.getElementById(videoID).src;
    //adicionar el autoplay URL
    document.getElementById(videoID).src = video+'&autoplay=1'; 
    document.getElementById(div).style.display = 'block';
}

function ocultar(div,video) {
    var video = document.getElementById(video).src;
    //remover el autoplay URL
    var cleaned = video.replace('&autoplay=1',''); 
    document.getElementById(video).src = cleaned;
    document.getElementById(div).style.display = 'none';
}
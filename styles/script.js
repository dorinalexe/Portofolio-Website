const funko= document.getElementById('funkoMe');
document.onscroll = (event) => {
    funko.style.top= '350px'
}

const dubai= document.getElementById('dubai'),
      porec= document.getElementById('porec'),
      gaziantep= document.getElementById('gaziantep'),
      guadalajara= document.getElementById('guadalajara'),
      zadar= document.getElementById('zadar'),
      txtDubai= document.getElementById('txtDubai'),
      txtPorec=document.getElementById('txtPorec'),
      txtGaziantep=document.getElementById('txtGaziantep'),
      txtGuadalajara=document.getElementById('txtGuadalajara'),
      txtZadar=document.getElementById('txtZadar');

let dubaiCount=0, porecCount=0, gazCount=0, gdjCount=0, zadarCount=0;

txtPorec.onclick = (event) => {
        if (porecCount===0) {
            porec.style.width='300px';
            porecCount=1;
        } else {
            porec.style.width='0px';
            porecCount=0;
        }
}

txtGaziantep.onclick = (event) => {
    if (gazCount===0) {
        gaziantep.style.width='300px';
        gazCount=1;
    } else {
        gaziantep.style.width='0px';
        gazCount=0;
    }
}

txtGuadalajara.onclick = (event) => {
    if (gdjCount===0) {
        guadalajara.style.width='300px';
        gdjCount=1;
    } else {
        guadalajara.style.width='0px';
        gdjCount=0;
    }
}

txtZadar.onclick = (event) => {
    if (zadarCount===0) {
        zadar.style.width='300px';
        zadarCount=1;
    } else {
        zadar.style.width='0px';
        zadarCount=0;
    }
}

txtDubai.onclick = (event) => {
    if (dubaiCount===0) {
        dubai.style.width='300px';
        dubaiCount=1;
    } else {
        dubai.style.width='0px';
        dubaiCount=0;
    }
}


const pozaPisici= document.getElementById('pozaPisici'), 
       surpriza=document.getElementById('surprise'),
       pisici= document.getElementById('pisici');


surprise.onclick = (event) => {
    pisici.style.display= 'block';
    pozaPisici.style.width = '400px';
    surprise.style.display= 'none'
}

let timer= document.getElementById('timer');

function autoRefresh() {
    timer.innerHTML=Math.floor((Date.now() - 1721477590000)/1000);
}

setInterval('autoRefresh()', 1000);

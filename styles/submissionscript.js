const funko=document.getElementById('funko');
let y=0;

funko.onclick= (event) => {
    if (y===0) {
        funko.style.transform= 'rotate(360deg)';
        y=1;
    } else {funko.style.transform= 'rotate(-360deg)';
        y=0;
    }
}
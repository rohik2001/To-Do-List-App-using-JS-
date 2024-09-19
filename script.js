document.getElementById('additembtn').addEventListener('click', function (){
    const iteminput = document.getElementById('iteminput');
    const itemlist = document.getElementById('itemlist');
    const newitem = document.createElement('li');

    newitem.textContent=iteminput.value;
    if(iteminput.value !==  '' ) {
        itemlist.appendChild(newitem);
        iteminput.value = ''; // clear input after adding
    }
});
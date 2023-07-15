document.getElementById('textplace').style.display = 'none';
function getval(){  
    const salary=document.getElementById('salary').value
    document.getElementById('textplace').innerHTML=' Essential '+ salary*.5 + '<br>'+'Life styles '+salary*.3 +'<br>'+ 'Savings  '+salary*.2
    document.getElementById('textplace').style.display = 'block';
}


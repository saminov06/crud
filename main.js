function yarat(){
    var inp1 =document.getElementById('inp1');
    var inp2 =document.getElementById('inp2');
    var inp3 =document.getElementById('inp3');
    var inp4 =document.getElementById('inp4');
    var inp5 =document.getElementById('inp5');
    var tbody =document.getElementById("tbody")
    var btn =document.createElement('button')
    var btn1 =document.createElement('button')

    btn.innerText ="edit"
    btn.style.width ="100px"
    btn.style.height ="30px"
    btn.style.backgroundColor ="orange"

    btn1.innerText ="delete"
    btn1.style.width ="100px"
    btn1.style.height ="30px"
    btn1.style.backgroundColor ="crimson"


    var tr =document.createElement('tr');
    var td =document.createElement('td');
    var td1 =document.createElement('td');
    var td2=document.createElement('td');
    var td3=document.createElement('td');
    var td4=document.createElement('td');
     var td5=document.createElement('td');
    


    td.innerText = inp1.value;
    td1.innerText = inp2.value;
    td2.innerText = inp3.value;
    td3.innerText = inp4.value;
    td4.innerText = inp5.value;
    td5.appendChild(btn);
    

    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
   
    td5.appendChild(btn1);

    tr.appendChild(td5);
    tbody.appendChild(tr)
}

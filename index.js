// alert("hello");
var tab=document.getElementsByTagName("tbody")[0];
var i=document.querySelectorAll('tr').length;
document.querySelector(".add").addEventListener("click",()=>{
    var element1=`
    <td><h3>subject${i}</h3></td>
    <td><input type="number" value="0"class="in"/></td>
    <td><select name="grade" class="grad">
        <option value="10">O</option>
        <option value="9">A+</option>
        <option value="8">A</option>
        <option value="7">B+</option>
        <option value="6">B</option>
      </select></td>`;
      var divElement = document.createElement('tr');
      divElement.innerHTML=element1;
      tab.appendChild(divElement);
    i++;
})
document.querySelector(".remove").addEventListener("click",()=>{
    var divElement1 = document.querySelectorAll('tr');
    var val=divElement1.length;
    divElement1[val-1].remove()
    i--;
})
document.querySelector("#calc").addEventListener("click",(e)=>{
    var cre=document.querySelectorAll(".in").length;
    var totalcredit=0;
    var total=0;

    sub=[];
    grad=[];
    for(var j=0;j<cre;j++){

        var subjectValues=parseFloat(document.querySelectorAll(".in")[j].value);
        var gra=document.querySelectorAll(".grad")[j].value;
        
        
        sub.push(subjectValues);
        grad.push(gra);
        total=total+sub[j]*grad[j];
        totalcredit=totalcredit+sub[j];

        // console.log(sub);
        // console.log(gra);
    }
var result=(total/totalcredit).toFixed(4);

    // console.log(cre);
   document.getElementById('res').textContent=result;
e.preventDefault();

})
//Cgpa code



var k=document.querySelectorAll('.kv').length;
document.querySelector('.ad').addEventListener("click",()=>{
    var add1=`<h3 class="align kv">Sem${k+1}</h3>
    <input type="number" value="0" class="align inp"/>`
    var app=document.querySelector(".contain");
   var ele=document.createElement('div');
   ele.classList.add('main');
ele.innerHTML=add1;
app.appendChild(ele);
k++
})
document.querySelector(".rem").addEventListener("click",()=>{
    var divElement2 = document.querySelectorAll('.main');
    var val=divElement2.length;
    divElement2[val-1].remove()
    k--;
    
})
document.querySelector("#cal").addEventListener("click",(e)=>{
    var cre=document.querySelectorAll(".inp").length;
    
var tot=0;
 a =[];
for(var l=0;l<cre;l++){
    var sem=parseFloat(document.querySelectorAll(".inp")[l].value);
    
    a.push(sem);
    tot=tot+a[l];
   
}
var result=(tot/cre).toFixed(2);
document.getElementById('re').textContent=result;
})
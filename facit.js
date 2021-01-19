add=document.getElementById('add');
add.addEventListener("click",()=>{
   sname=document.getElementById('storename').value;
   pro_key=document.getElementById('pkey').value;
    s_id=document.getElementById('stid').value;
   inv_status=document.getElementById('invoiceid').value;
if(localStorage.getItem('itemsjson')==null)
{
SetInformation=[];
SetInformation.push([snsme,pro_key,s_id,inv_status]);
localStorage.setItem('itemsjson', JSON.stringify(SetInformation));

}
else{
    Setinformationstr=localStorage.getItem('itemsjson');
    SetInformation=JSON.parse(Setinformationstr);
    SetInformation.push([snsme,pro_key,s_id,inv_status]);
    localStorage.setItem('itemsjson', JSON.stringify(SetInformation));
}

let tablebody=document.getElementById("tablebody");
let str="";
SetInformation.forEach((element,index)=> {
    str +=
    `<tr>
    <th scope="row">${index}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td>${element[2]}</td>
    <td>${element[3]}</td>
    <td><button class="btn btn-sm btn-primary">Delete</button></td>
  </tr>`;
});
tablebody.innerHTML=str;



})
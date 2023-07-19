var web = document.getElementById("web");

var urlName = document.getElementById("urlName");


var webSearch = document.getElementById("webSearch");

var websiteList = [];

if(localStorage.getItem('website')==null){
    websiteList=[];
}else{
    websiteList=JSON.parse(localStorage.getItem('website'));
    display();
}


function createWebsite() {
    var website = {
        webName: web.value,
        url: urlName.value
    }

    
        if(verify(websiteList,web.value)===true){
            if(nameVal()===true){
        
    
                websiteList.push(website);
                localStorage.setItem('website',JSON.stringify(websiteList))
               
                display();
            
                web.value="";
                urlName.value="";
            
                console.log(website)
                console.log(websiteList)
            
            }else{
                var nameRegex = /^\w{3,}(\s+\w+)*$/;
                var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
            
            var address=web.value;
            var urlReg=urlName.value
                if(nameRegex.test(address)){
                    alert('your URL must start with https OR www OR any word + . + the rest of the doman like .com')   
                
            }else if(urlRegex.test(urlReg)){
            
                   alert('your WEB NAME  must start with minimum 3 w Or word charachters ')
            }else{
                alert('UnKnown Error PLS Try Again')
            }
                
            }
        }else{
            alert("this web site already Saved");
          
        }
    

    
       
    


}
   



function display() {
    var trs = ``
    for (var i = 0; i < websiteList.length; i++) {
        trs += ` <tr>
        <td>${i + 1}</td>
        <td>${websiteList[i].webName}</td>

        <td ><button  id="btn1" class="btn my-3 border  " onclick="visit(${i})"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td> 
        <td ><button id="btn2" class="btn my-3 border " onclick="delet(${i})"><i class="fa-sharp fa-solid fa-trash"></i>Delete</button></td>  

        </tr>`

    }

    document.getElementById('tableBody').innerHTML = trs;
}


function delet(index) {
    websiteList.splice(index, 1);
if(localStorage.getItem('website')==null){
    localStorage.clear();
}else{
    localStorage.setItem('website',JSON.stringify(websiteList))
    
}
display();
}


function searchWebsite() {
    var trs = ``
    for (var i = 0; i < websiteList.length; i++) {
        if (websiteList[i].webName.includes(webSearch.value)) {
            var pr = document.getElementById("webSearch").value.trim();
            var re = new RegExp(pr);
            trs += `
     
        <tr>
        <td>${i + 1}</td>
        <td>${websiteList[i].webName.replace(re,`<span>${pr}</span>`)}</td>
        <td ><button id="btn1" class="btn my-3 border  " onclick="visit(${i})"><i class="fa-solid fa-eye pe-2 "></i>Visit</button></td> 
        <td ><button id="btn2" class="btn my-3 border " onclick="delet(${i})"><i class="fa-sharp fa-solid fa-trash"></i>Delete</button></td>  

        </tr>`
        }
    }

    document.getElementById('tableBody').innerHTML = trs;
}





function nameVal(){
    var nameRegex = /^\w{3,}(\s+\w+)*$/;
    var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

var address=web.value;
var urlReg=urlName.value
    if(nameRegex.test(address)&&urlRegex.test(urlReg)){
        return true;
    }else{
        return false;
    }
}



    function verify() {
        const webTitl = websiteList.find((user) => user.webName === web.value);
        const webUrl = websiteList.find((user) => user.url === urlName.value);

    if (webTitl) {
    console.log("title is in the array!");
    return false
    } else if(webUrl){
  console.log("title is  in the array.");
    return false
    }else {
      console.log("title is not in the array.");
        return true
        }

}

function visit(index){
    
var site=websiteList[index].url;

window.location.href =site;

}

    
    


console.log(websiteList);

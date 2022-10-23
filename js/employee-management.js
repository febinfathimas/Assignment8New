/*eslint-env browser*/
//global
{var employeeList,arraylen=5;
    employeeList = [["Sally Smith","Quality Manager",2334],
                    ["James Roy","Resource Manager",5632],
                    ["Hurley Jackson","Technician",7643],
                    ["Mike Morey","Stock Manager",8658],
                    ["Mark Martin","VP Sales",7906]];
                      
                   
}
//helper function    
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

//delete button function
var empDelete=function (e) {
    "use strict";
    
   if(!e.target.classList.contains("btndelete")){return;}
    else {
    var btn=e.target;
    var index=btn.closest("tr").rowIndex;
    //window.alert(index);
    employeeList.splice(index-1,1);
    empTable();
   // btn.closest("tr").remove();
    }
};

//add button function
var empAdd = function () {
    "use strict";
    var name, title, extension,len,newhtml;
      
    name = $("empName").value;
    title = $("empTitle").value;
    extension=$("empExtension").value;
    var message1=$("msg1");
    var message2=$("msg2");
    var message3=$("msg3");
     
   
    if(name===""){message1.innerHTML = "Enter the Employee Name";}
    else if(title===""){message2.innerHTML = "Enter the Title";
                        message1.innerHTML = " ";}
    else if(extension===""){message3.innerHTML = "Enter the Extension";
                            message2.innerHTML = " ";
                            message1.innerHTML = " ";}
    else{ 
        if(Number.isFinite(parseInt(extension))){
        employeeList.push([name,title,extension]);
        empTable();
        //hide the red error messages
        message1.innerHTML = " ";
        message2.innerHTML = " ";
        message3.innerHTML = " ";
        //Resetting the textboxes after add function
        $("empName").value=" ";
        $("empTitle").value=" ";
        $("empExtension").value=" ";}
        else{message3.innerHTML="Enter values:Extension number";}
       }     
   
};

//Displaying the table from array and the count of employees
var empTable= function(){
    "use strict";
    var html="";
    $("empHeader").innerHTML="Showing "+ employeeList.length + " employees";
   var html = html + "<tr><th>Name</th><th>Title</th><th>Extension</th><th>&nbsp;</th></tr>";

    for (var i=0; i<employeeList.length; i+=1) {
       html = html + "<tr><td>" + employeeList[i][0] + "</td><td>" + employeeList[i][1] + "</td><td>" + employeeList[i][2] + "</td><td><button class=btndelete>Delete</button></td></tr>";
        }
    $("employeeDetails").innerHTML = html;
};

//load function and event listeners
window.addEventListener("load", function () {
    "use strict";
    
    var delPoint =document.querySelector ('table');
    delPoint.addEventListener("click",empDelete);   
    $("addButton").addEventListener("click", empAdd);
    empTable();
    $("empName").focus();
           
});  
   
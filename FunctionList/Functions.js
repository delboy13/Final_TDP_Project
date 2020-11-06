window.onload = () => {loadEmployeeTable()};
//Loads the table rendering on Index.html using up to date records ()\session storage ###############
function loadEmployeeTable() {   
    var test = JSON.parse(sessionStorage.getItem("currentRecords"));
    const tableBody = document.getElementById('data');
    let dataHTML = '';

// Converts the array into a string and places into the variable dataHTML.
    for (let i of test){         
        dataHTML +=
       `<tr>
            <td >${i.ninumber.toUpperCase()}</td>
            <td >${i.fullname}</td>
            <td >${i.phone}</td>
            <td >${i.address}</td>
            <td >${i.department}</td>
            
            <td><button id="${i.ninumber}" onclick="edit(this)">Edit</button></td>
            <td><button data-ninumber="${i.ninumber}" id="delete${i.ninumber}" onclick="DeleteMe(this)">Delete</button></td>
        </tr>`;
        }
        tableBody.innerHTML = dataHTML;
        
};
//######################################################################################################################

// Setting the sessionStorage memory to hold up to date records##########################
let records =[
    {ninumber: 'Zs0540039A', fullname:'John Smith', phone:'07738484843',address:'123 ElLiot Hill',department:'IT'},
        {ninumber: 'Zs0512569B', fullname:'Jane Oscar-smith', phone:'0709090390',address:'167 ElLiot Hill',department:'HR'},
        {ninumber: 'po8055655E', fullname:'Sarah Oscar', phone:'0089967644',address:'17 Poi Hill',department:'Security'},
        {ninumber: 'Zs05439A', fullname:'John Smith', phone:'07738484843',address:'123 ElLiot Hill',department:'IT'},
        {ninumber: 'Zs05565529B', fullname:'Jane Oscar-smith', phone:'0789965444',address:'167 ElLiot Hill',department:'HR'},
        {ninumber: 'pE805569E', fullname:'Sarah Oscar', phone:'0089967644',address:'17 Poi Hill',department:'Security'}
    ];
        
var currentRecords = 
    JSON.parse(sessionStorage.getItem("currentRecords"));
        if(currentRecords == null){
            sessionStorage.setItem("currentRecords", JSON.stringify(records));
        };
        
//#######################################################################################

// SEARCH FUNCTION CREATED TO SEARCH TABLE USING NI Number!#############
function myFunction() {

    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
            
// Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
            if (td) {
                txtValue = td.textContent || td.innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                  } else {
                    tr[i].style.display = "none";
                  }
                }
              }
            };
//############################################################################            



// Sends the value of ID via the URL when moving to page##########
function edit(movePage){
    document.location="Edit.html?id="+movePage.id;  
};
// ###################################################


// ADDING ##############################################################################################################
function addperson(){
 //Pulls down the uptodate records in sessionstorage('currentRecords') 
//& sets variable getrecords to value of currentrecords. 
var getRecords = JSON.parse(sessionStorage.getItem("currentRecords"));
                
//From AddPerson.html --> Set each const to the value found inside getElementById() -- AddPerson.html
        const ninumber1 = document.getElementById('1').value;
        const fullname1 = document.getElementById('2').value;
        const phone1 = document.getElementById('3').value;
        const address1 = document.getElementById('4').value;
        const department1 = document.getElementById('5').value;               
                
//Validation to see if text boxes are empty strings
                    if (ninumber1 == ""){
                        alert("Missing NI Number");
                    }else{
                        if (fullname1 == ""){
                            alert("Missing Name");
                        }else {
                            if (phone1 == ""){
                                alert("Missing Number");
                            }else{
                                if(address1 == ""){
                                alert("Missing Address");
                            }else {
                                if (department1 == ""){
                                    alert("Missing department");
                                }else {
                    getRecords.push({ninumber:ninumber1, fullname:fullname1,phone:phone1,address:address1,department:department1});
                    document.location="Index.html";
                    sessionStorage.setItem("currentRecords", JSON.stringify(getRecords));
                                    }
                                }
                            }
                        }
                    }
                };            
                
//################################################################################
// UPDATING ##########################################################################
function update(){
    var getRecords = JSON.parse(sessionStorage.getItem("currentRecords"));
                                
    let ninumber1 = document.getElementById('NI').value;
    let fullname1 = document.getElementById('Name').value;
    let phone1 = document.getElementById('Phone').value;
    let address1 = document.getElementById('Address').value;
    let department1 = document.getElementById('Dept').value;
                                
                                    if (ninumber1 == ""){
                                        alert("Missing NI Number");
                                    }else{
                                        if (fullname1 == ""){
                                            alert("Missing Name");
                                        }else {
                                            if (phone1 == ""){
                                                alert("Missing Number");
                                            }else{
                                                if(address1 == ""){
                                                alert("Missing Address");
                                            }else {
                                                if (department1 == ""){
                                                    alert("Missing department");
                                                }else {
//finds index  
        var result =  findWithAttr(getRecords, "ninumber", ninumber1);
        getRecords[result].fullname =fullname1;
        getRecords[result].phone =phone1;
        getRecords[result].address =address1;
        getRecords[result].department =department1;
        sessionStorage.setItem("currentRecords", JSON.stringify(getRecords));
        document.location="Index.html";
               }
           }
        }
        }
    }
  };
//Finds Index number of object in Array with attribute and value
function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
            }
        }
    return -1;
};
//##############################################################################################

//DELETING ######################################################################################                            
function DeleteMe(button){
    var buttonData = button.getAttribute("data-ninumber");
    window.confirm("Are you sure you want to Delete Employee? No Take backs!!!!");                                
//add name to query box
    var getRecords = JSON.parse(sessionStorage.getItem("currentRecords"));
    var indexResult = findWithAttr(getRecords,"ninumber",buttonData);
    getRecords.splice(indexResult,1);
    sessionStorage.setItem('currentRecords', JSON.stringify(getRecords));
    document.location.reload();  
    };
//#######################################################################################################
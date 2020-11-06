window.onload = () => {loadEmployeeTable()};

// Sets the sessionStorage memory to hold records #DOES NOT CHANGE RECORDS
let records =[
    {ninumber: 'Zs0540039A', fullname:'John Smith', phone:'07738484843',address:'123 ElLiot Hill',department:'IT'},
    {ninumber: 'Zs0512569B', fullname:'Jane Oscar-smith', phone:'0709090390',address:'167 ElLiot Hill',department:'HR'},
    {ninumber: 'po8055655E', fullname:'Sarah Oscar', phone:'0089967644',address:'17 Poi Hill',department:'Security'},
    {ninumber: 'Zs05439A', fullname:'John Smith', phone:'07738484843',address:'123 ElLiot Hill',department:'IT'},
    {ninumber: 'Zs05565529B', fullname:'Jane Oscar-smith', phone:'0789965444',address:'167 ElLiot Hill',department:'HR'},
    {ninumber: 'po805569E', fullname:'Sarah Oscar', phone:'0089967644',address:'17 Poi Hill',department:'Security'}
];

var currentRecords = 
    JSON.parse(sessionStorage.getItem("currentRecords"));
        if(currentRecords == null){
        sessionStorage.setItem("currentRecords", JSON.stringify(records));
        };

        //##########################################
// Sends the value of ID via the URL when moving to page
function edit(dwarf){
    document.location="Edit.html?id="+dwarf.id;  
    };
// ###################################################
function loadEmployeeTable() {   
    var test = JSON.parse(sessionStorage.getItem("currentRecords"));
    const tableBody = document.getElementById('data');
    let dataHTML = '';

// Converts the array into a string and places into the variable dataHTML.
    for (let i of test){         
        dataHTML +=
       `<tr>
            <td >${i.ninumber}</td>
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

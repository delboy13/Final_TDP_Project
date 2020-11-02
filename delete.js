

function deleteperson(){
    JSON.parse(sessionStorage.getItem("currentRecords"));
    erased = [];
    (sessionStorage.setItem("currentRecords",JSON.stringify(erased) ))
    // records = [];
    dataHTML = erased;
    // document.getElementById('data').innerHTML = dataHTML;
document.location='Index.html';
};

// function DeleteMe(){
//     var Records = JSON.parse(sessionStorage.getItem("currentRecords"));
//     Records[1]={};
//     sessionStorage.setItem('currentRecords', JSON.stringify(Records))
//     // if (true){
//     //     findinArray;
//     //     deleteinArray;
//     //     sessionStorage.setItem('currentRecords', JSON.stringify(Records))
// };

// ###################################################
// onlclick delete kknow which one clicked id eg
// alert is this correct - confirmatipon box?
// in box are  you sure delete this person
// pass data from onlick to populate box
// if yes => find person in array
// delete person in array
// refresh table
//#############################################





// function DeleteMe(){
//     var Records = JSON.parse(sessionStorage.getItem("currentRecords"));
//     Records[1]={};
//     sessionStorage.setItem('currentRecords', JSON.stringify(Records))
//     // if (true){
//     //     findinArray;
//     //     deleteinArray;
//     //     sessionStorage.setItem('currentRecords', JSON.stringify(Records))
// };




// //######################/
// function edit(dwarf)
//     {
//     document.location="Index.html?id="+dwarf.id;  
//     };
// //######################Gets ID VALUE OF OBJECT this?
// var id;
// function URLQueury(){
    
//     const urlParams = new URLSearchParams(window.location.search);
//     id = urlParams.get('id');
// };
// //######################//######################
// function DeleteMe(){
//     var getRecords = JSON.parse(sessionStorage.getItem("currentRecords"));
  


// //finds index  
//               var result =  findWithAttr(getRecords, "ninumber", ninumber);
//               getRecords.splice(result,1);
//               sessionStorage.setItem('currentRecords', JSON.stringify(getRecords));


// //######################//######################




function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
            };
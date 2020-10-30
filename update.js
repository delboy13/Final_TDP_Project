
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
                    //   getRecords.push({ninumber:ninumber1, fullname:fullname1,phone:phone1,address:address1,department:department1});
                    //finds index  
                var result =  findWithAttr(getRecords, "ninumber", ninumber1);
                getRecords[result].fullname =fullname1;
                getRecords[result].phone =phone1;
                getRecords[result].address =address1;
                getRecords[result].department =department1;
                      sessionStorage.setItem("currentRecords", JSON.stringify(getRecords));
                      // console.log(sessionStorage.setItem("currentRecords", JSON.stringify(getRecords)));
                      document.location="Index.html";
                      // alert("WORKING");
                  }
              }
          }
      }
  }

  }
  function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
};


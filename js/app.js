  var interval;
  document.getElementById("start").addEventListener("click", function(){
    //var mydata = JSON.parse(TABLE_DATA);
   
    interval = window.setInterval(function(){
        addRows();
      }, 1000);
  });

  document.getElementById("stop").addEventListener("click", function(){
    clearInterval(interval);
   
});

function deleteRow(tableRef){
    if(tableRef.getElementsByTagName("tr").length > 0){
        for(var j = 0; j< TABLE_DATA.length; j++){
            console.log(tableRef.deleteRow(j))
            //tableRef.deleteRow(j);
        }
    }
    
}

function addRows(){

    var tableRef = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    deleteRow(tableRef);
    
    var randArray = [];

    while(randArray.length < TABLE_DATA.length){ 
        var random_index = Math.floor(Math.random() * TABLE_DATA.length);
        if(randArray.indexOf(random_index) === -1){ console.log(randArray.length);
            randArray.push(random_index);
             // Insert a row in the table at the last row
        var newRow   = tableRef.insertRow();

        // Insert a cell in the row at index 0
        var newCell  = newRow.insertCell(0);
   
        // Append a text node to the cell
        var newText  = document.createTextNode(TABLE_DATA[random_index]["id"]);
        newCell.appendChild(newText);

        // Insert a cell in the row at index 0
        var newCell  = newRow.insertCell(1);
   
        // Append a text node to the cell
        var newText  = document.createTextNode(preventXSS(TABLE_DATA[random_index]["thumbnailUrl"]));
        newCell.appendChild(newText);


        // Insert a cell in the row at index 0
        var newCell  = newRow.insertCell(2);
   
        // Append a text node to the cell
        var newText  = document.createTextNode(preventXSS(TABLE_DATA[random_index]["name"]));
        newCell.appendChild(newText);


        // Insert a cell in the row at index 0
        var newCell  = newRow.insertCell(3);
   
        // Append a text node to the cell
        var newText  = document.createTextNode(TABLE_DATA[random_index]["price"]);
        newCell.appendChild(newText);
        }

        
    }

    
}

function preventXSS(str){

   var regex = /(<([^>]+)>)/ig
    result = str.replace(regex, "");
    return result;
}
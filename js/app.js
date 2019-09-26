class RandomDataDisplay{

    constructor(timeinterval, tableRefVal){
        this.timeinterval = timeinterval;
        this.intervalObject = null;
        this.tableRef = document.getElementById(tableRefVal).getElementsByTagName('tbody')[0];
        this.randArray = [];
    }

    addRandomRows(){
        this.intervalObject = window.setInterval(()=>{
            this.randArray = this.suffleArray(TABLE_DATA); 
            this.addRows(this.tableRef, this.randArray);
        },  this.timeinterval);
    }

    addRows(tableObject, array){
        this.deleteRows();      
        array.forEach(function(val){ 
            // Insert a row in the table at the last row
            let newRow   = tableObject.insertRow();
    
            // Insert a cell in the row at index 0
            let newCell  = newRow.insertCell(0);
       
            // Append a text node to the cell
            let newText  = document.createTextNode(val.id);
            newCell.appendChild(newText);
            // Insert a cell in the row at index 1
            newCell  = newRow.insertCell(1);
       
            // Append a text node to the cell
            newText  = document.createTextNode(val.name);
            newCell.appendChild(newText);
        
            // Insert a cell in the row at index 2
            newCell  = newRow.insertCell(2);
       
            // Append a text node to the cell
            newText  = document.createTextNode(val.thumbnailUrl);
            newCell.appendChild(newText);
        
            // Insert a cell in the row at index 3
            newCell  = newRow.insertCell(3);
       
            // Append a text node to the cell
            newText  = document.createTextNode(val.price);
            newCell.appendChild(newText);
    
         }); 
    }

    deleteRows(){
        this.tableRef.innerHTML='';
    }

    stopDataChange(){
        clearInterval(this.intervalObject);
    }

    suffleArray(array){
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
        }

        sortData(){
            this.randArray = TABLE_DATA.sort(function(a, b){
                if(a.price == b.price){
                    return a.id-b.id
                }else{
                    return b.price-a.price
                }                
            });

            this.addRows(this.tableRef,this.randArray);
        }
    }
    let timeintervalObj;
    let randomDataObject = new RandomDataDisplay(1000, 'dataTable');
    document.getElementById("start").addEventListener("click", () => {
        randomDataObject.addRandomRows();
      });

      document.getElementById("stop").addEventListener("click", () =>{
        randomDataObject.stopDataChange();
       
    });

    document.getElementById("sort").addEventListener("click", () =>{
        randomDataObject.sortData();
       
    });
    
    
// declare all the needs variables that will be going to used
let arr = []
const nestedArr = []
const sb = document.getElementById("sbmt"); //get the button by getElementByID


//add an event listener for the sb which is the submit button
sb.addEventListener("click", function(event){
    event.preventDefault(); //to prevent restarting 

    //get the users input for the 4 fields needed ot be filled 
    let food = document.forms["myForm"]["foodname"].value;
    let desc = document.forms["myForm"]["description"].value;
    let img = document.forms["myForm"]["imageURL"].value;
    let rank = document.forms["myForm"]["rank"].value;

    //check if all are empty, if yes, alert a prompt message
    if (food == "" || desc == "" || img == "" || rank == "") {
      alert("All fields in the form must be filled out");
    //   check = 0
      return false;
    }

    
    //get the middle by document.getElementById
    const middle = document.getElementById("middle");


    

    //used an array to push the rank value users input
    nestedArr.push(parseInt(rank));
    nestedArr.sort(function(a,b) { return a - b; }); //sort the array para madali nalang kapag nag-insert and to order the cards
    console.log(nestedArr) 

    //if there is still no element in the middle, simply add 
    if(middle.childElementCount == 0){
        //create elements that are needed
        const newDiv = document.createElement("div");
        const f = document.createElement("h3");
        const d = document.createElement("p");
        const i = document.createElement("p");
        //const r = document.createElement("h4");
        const b = document.createElement("button")

        //create TextNOde
        const newcol = document.createTextNode(food);
        const newcol2 = document.createTextNode(desc);
        const newcol3 = document.createTextNode(`Image URL: ${img}`);
        //const newcol4 = document.createTextNode(rank);
        b.innerHTML = "Delete"

        //then append those textnode to the corresponding elements
        f.appendChild(newcol)
        d.appendChild(newcol2)
        i.appendChild(newcol3)
        //r.appendChild(newcol4)
        
        //append all the other elements to the newDidv
        newDiv.append(f,d,i, b)
        //then simply append newDiv to the middle
        middle.appendChild(newDiv);
        //add an eventlistener for delete button that whenever it is clicked then removeChild 'yung newDiv sa middle
        b.addEventListener("click", function(){
            middle.removeChild(newDiv)
        })
    }else{
        let cur_index = 0; //initialize a variable na gagamitin for indexing

         //create elements that are needed
        const newDiv = document.createElement("div");
        const f = document.createElement("h3");
        const d = document.createElement("p");
        const i = document.createElement("p");
       // const r = document.createElement("h4");
        const b = document.createElement("button")

        //create TextNOde
        const newcol = document.createTextNode(food);
        const newcol2 = document.createTextNode(desc);
        const newcol3 = document.createTextNode(`Image URL: ${img}`);
        //const newcol4 = document.createTextNode(rank);
        b.innerHTML = "Delete"
        
         //then append those textnode to the corresponding elements
        f.appendChild(newcol)
        d.appendChild(newcol2)
        i.appendChild(newcol3)
        //r.appendChild(newcol4)

        //append all the other elements to the newDidv
        newDiv.append(f,d,i,b)

        //check kung pang-ilan sa mga cards na nandoon ilalagay 'yung bago using while loop
        while(rank > parseInt(nestedArr[cur_index])){
            if(rank < nestedArr[cur_index]){
                break;
            }
            cur_index ++;
        }
        console.log(cur_index)
        //if sa dulo ilalagay 'yung newcard then appendChild
        if(cur_index+1 == nestedArr.length){
            middle.appendChild(newDiv);

             //add an eventlistener for delete button that whenever it is clicked then removeChild 'yung newDiv sa middle
            b.addEventListener("click", function(){
                middle.removeChild(newDiv)
            })
        }else{//else, insertBEofre doon sa child ni middle with cur_index as index
            middle.insertBefore(newDiv, middle.children[cur_index]);
            
             //add an eventlistener for delete button that whenever it is clicked then removeChild 'yung newDiv sa middle
            b.addEventListener("click", function(){
                middle.removeChild(newDiv)
            })
        }
    }
        
    }
)



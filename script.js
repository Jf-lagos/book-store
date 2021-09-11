     

function Book (title, author, pages){
    this.title = title,
    this.author = author,
    this.pages = pages 

}
   
        let myLibrary = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addBookToLibrary = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let book = {
                title: document.getElementById('title').value,
                author: document.getElementById('author').value,
                pages: document.getElementById('pages').value,
                
            }
            myLibrary.push(book);

            // to clear the form for the next entries
            document.querySelector('form').reset();

            //for display purposes only
            console.log('added' , {myLibrary} );
            /* let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(myLibrary, '\t', 2); */
            
            //loops through myLibrary array then display
            const livre = myLibrary.map(item => {
               return `<div class="item">${item.title}<button onclick="document.body.remove(this)">supp</button></div>`              
            });
            document.getElementById('display').innerHTML = livre;

            //document.body.innerHTML = livre;

   
            //Faire en sorte de ne supprimer que la div en question et pas tout le body.
            
            console.log(livre);


            //saving to localStorage
            localStorage.setItem('MyMovieList', JSON.stringify(myLibrary) );
        }
            document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addBookToLibrary);
        });

        //Show form
        var theButton = document.getElementById('button');
        theButton.onclick = function() { 
        document.getElementById('form').style.display='block';   
        }

        

       
//`<div class="item">${item.title}<button onclick="document.body.remove(this)">supp</button></div>`




//https://www.youtube.com/watch?v=NxVCq4p0Kb0
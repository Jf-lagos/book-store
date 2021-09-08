
        let myLibrary = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addBookToLibrary = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let book = {
                title: document.getElementById('title').value,
                year: document.getElementById('author').value,
                pages: document.getElementById('pages').value,
                
            }
            myLibrary.push(book);

            // to clear the form for the next entries
            document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {myLibrary} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(myLibrary, '\t', 2);

            //saving to localStorage
            localStorage.setItem('MyMovieList', JSON.stringify(myLibrary) );
        }
            document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addBookToLibrary);
        });






//https://www.youtube.com/watch?v=NxVCq4p0Kb0
﻿﻿function handleSubmit () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;


    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname);
    localStorage.setItem("EMAIL", email); */
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("SURNAME", surname);
     sessionStorage.setItem("EMAIL", email);


    return;
}

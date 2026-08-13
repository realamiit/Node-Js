const form = document.querySelector('form');  // jb form submit hota hai, to ye fnction chlta hai 

form.addEventListener('submit', function(e) {
    e.preventDefault();  // jo bhi defaullt behavior hota hai usko rokta hai normaly form submit hote hii page relode ho jata hai lekin hme abhi ye nhi chahiye jb chahiye hm hta dege yha se abhi server bana na baki hai n is liye 

    // const name = document.querySelector('input[name="name"]').value;  // ye nya selector style hai input me agr user namer daal rha hai to input ji ska attribut "name haia ya email ya password " hai to hmara HTML khud hi smjh jayega  
    // const email = document.querySelector('input[name="email"]').value;
    // const message = document.querySelector('textarea[name="message"]').value;  // .value us input[] me user ne kya type kiya vo text ko nikalta hai  

    if (name === '') {   // Agr user ne kuch nhi likha too
        alert('Please enter your name!');   // Browser ka inbuild poppop message box aayega 
        return; // function ko yhi rok dega  aage email, message cheak nhi krta 
    }

    if (email === ''){
        alert('Enter your valid email!');
        return;
    }

    if (message === ''){
        alert("Type here your massagg!");
        return;
    }

    alert('Form submitted successfully! (Backend connected commitn soon)');
});
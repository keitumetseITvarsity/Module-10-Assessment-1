document.getElementById("getData").addEventListener("click", getData);

document.getElementById("getList").addEventListener("click", getList);

document.getElementById("submitForm").addEventListener("click", submitForm);


function getData() {
    

    //Fetches data from a server
    fetch('https://mysite.itvarsity.org/api/fetch/get-data/')
        .then(
            //receive the response object and convert it to text then output the text on the screen
            //lambda function {annonymous}
            function(response){
                return response.text();
            })
            .then(function(data){
                document.getElementById("message").innerHTML = data;
            })
}


function getList() {

    fetch("https://mysite.itvarsity.org/api/fetch/get-list/")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            var output = "<h1>Posts</h1>";

            for(i = 0; i < data.length; i++) {
                output += `
                    <ul>
                        <li><h2>${data[i][0]}</h2></li>
                        <li><b>${data[i][1]}</b></li>
                        <li>${data[i][2]}</li>
                    </ul>
                `;
            }
            document.getElementById("posts").innerHTML = output;
        })
}


function submitForm(e) {

    if(e){
        e.preventDefault();
    }
    

    form = new FormData(document.querySelector("#myForm"));

    fetch('https://mysite.itvarsity.org/api/fetch/send-data/', {
        method: 'POST',
        headers: {'Accept': 'application/json, */*'},
        body: form
    })
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        document.getElementById("greeting").innerHTML = data;
    })
}

/*
    Asynchronous
        ::is when a section of code runs 
        separately from the main application thread 

    HTTP Request
        ::A packet of information that one computer 
        sends to another computer to communicate something

    Promise
        ::A placeholder object that will produce a value 
        sometime in the future.
        The value will either be a resolved value, or an error

    The fetch API is a JavaScript API for making asynchronous 
    HTTP requests in the browser to fetch resources from the server.
    The Fetch API uses Promises.


        Fetch
        /   \
    Then    Cathch - catches the error
      |
    Then


*/
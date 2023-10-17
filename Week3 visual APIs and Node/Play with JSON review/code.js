console.log("Yes, I am working")

const filename="";

//fetch API call ( a promise)
fetch(filename)
    //hanndle the response and convert from json
    .then(response=>response.json())
    //handle the js object that we get back
    .then(handleData)

function handleData(receivedData){
    //1. console.log the received data
    //2.a step through each course and console.log the course title
    //2.b step through each course and console.log the course title and total enrolled students
    //3. create an html element with 2b and insert into the DOM
}
    
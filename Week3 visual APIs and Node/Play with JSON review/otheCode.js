console.log("Yes, I am working")


//fetch API call ( a promise)
fetch('computing-courses.json')
    //hanndle the response and convert from json
    .then(response=>response.json())
    //handle the js object that we get back
    .then(handleData)

function handleData(courseData){
    // console.log(courseData)
    let coursesDiv=document.getElementById('course-data')
    courseData.courses.forEach(function(course){
        let studentCount=0;
        course.enrollments.forEach(function(level){
            studentCount+=level.students
        })
        let courseName=document.createElement('p')
        courseName.innerText=course.course+" "+studentCount
        coursesDiv.appendChild(courseName)
    })
}
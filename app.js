const express=require("express");
const app=express();
courseList=[
        {
            "courseTitle":"angular",
            "courseDescription":"app",
            "courseDuration":"6h",
            "courseDate":"15/07/20",
            "courseVenue":"cnc",


        },

        {
            "courseTitle":"full stack",
            "courseDescription":"app",
            "courseDuration":"9h",
            "courseDate":"18/07/20",
            "courseVenue":"cnc",


        },

        {
            "courseTitle":"mean stack",
            "courseDescription":"app",
            "courseDuration":"6h",
            "courseDate":"22/07/20",
            "courseVenue":"cnc",


        }






        


]
app.get('/getcourses',function(req,res){
    res.send(courseList);

})
app.post('/addcourse',function(req,res){
    console.log(req.body)
    courseList.push(req.body);
    res.send(courseList);
})
app.listen(3000);

const express=require("express");
const CourseData=require('./src/model/CourseData');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// courseList=[
//         {
//             "courseTitle":"angular",
//             "courseDescription":"app",
//             "courseDuration":"6h",
//             "courseDate":"15/07/20",
//             "courseVenue":"cnc",


//         },

//         {
//             "courseTitle":"full stack",
//             "courseDescription":"app",
//             "courseDuration":"9h",
//             "courseDate":"18/07/20",
//             "courseVenue":"cnc",


//         },

//         {
//             "courseTitle":"mean stack",
//             "courseDescription":"app",
//             "courseDuration":"6h",
//             "courseDate":"22/07/20",
//             "courseVenue":"cnc",


//         }






        


// ]
// app.get('/getcourses',function(req,res){
//     res.send(courseList);

// });

// app.post('/addcourse',function(req,res){
//     console.log(req.body)
//     courseList.push(req.body);
//     res.send(courseList);
// })

app.get('/getcourses',function(req,res){
 
    CourseData.find().then(function(courses){
        console.log(courses);
        res.send(courses);
    })
})
app.post('/addcourse',function(req,res){
    var item={
        courseTitle:req.body.courseTitle,
        courseDescription:req.body.courseDescription,
        courseVenue:req.body.courseVenue,
        courseDuration:req.body.courseDuration,
        courseDate:req.body.courseDate
    }
    var course=CourseData(item);
    course.save();

    CourseData.find()
    .then(function(course){
        res.send(course);
    })


})







app.listen(3000);


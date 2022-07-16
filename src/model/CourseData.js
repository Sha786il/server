const mongoose=require ("mongoose");
mongoose.connect('mongodb+srv://Shaheen:SHA78600@cluster0.rnh26c2.mongodb.net/CourseDB?retryWrites=true&w=majority')
const Schema=mongoose.Schema;
const CourseSchema=new Schema({

    courseTitle:String,
    courseDescription:String,
    courseDuration:String,
    courseDate:String,
    courseVenue:String});
    var CourseData=mongoose.model("courseset",CourseSchema);
    module.exports=CourseData;
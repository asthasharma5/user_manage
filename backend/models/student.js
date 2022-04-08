import mongoose from 'mongoose';


const studentSchema= mongoose.Schema({
    //regNo:Number,
    studentName:String,
    email:String,
    phoneNumber:Number
    //grade:String,
    //section:{
      //  type:String,
       // default:'A'
  //  }
    
});

const student = mongoose.model('student',studentSchema);

export default student;
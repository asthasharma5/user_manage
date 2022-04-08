
import StudentData from '../models/student.js';

 export const getStudents= async (req,res)=>{
    try {
        const allStudents= await  StudentData.find();
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({message:error.message})
        
    }
}
export const createStudent=async (req,res)=>{
    const student=req.body;
    const newstudent= new  StudentData(student);
    try {
        await newstudent.save();
        res.status(201).json(newstudent);
    } catch (error) {
        res.status(409).json({message:error.message})
        
    }
}

export const deleteStudent= async (req,res)=>{
    const id=req.params.id;
    
    try {
      await StudentData.findByIdAndRemove(id).exec();
      res.send('Successfully Deleted!');  
    } catch (error) {
     console.log(error);   
        
    }
}
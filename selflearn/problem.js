const studentDatabase = ["Fasal","Pathu","Fathi","Basim","Pathu"]

const findStudent = (arrayData,studentName) =>{
    for(let i =0;i<arrayData.length;i++){
        if(arrayData[i]===studentName){
             console.log(studentName);
             
            
        }
    }
}

findStudent(studentDatabase,"Pathu")
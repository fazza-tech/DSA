const studentDatabase = ["Fasal","Pathu","Fathi","Basim","Pathu"]

const findStudent = (arrayData,studentName) =>{
    for(let i =0;i<arrayData.length;i++){
        if(arrayData[i]===studentName){
             console.log(studentName);
             
            
        }
    }
}

findStudent(studentDatabase,"Pathu")


const groceries = ["milk","bread","eggs","flour","choose","sugar"]


const searchForItem = (item) => {
    for(let i =0;i<groceries.length;i++){
        if(groceries[i] === item){
            console.log(`found ${item}`);
        }
    }
}

searchForItem('eggs')
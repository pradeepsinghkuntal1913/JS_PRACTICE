const form = document.querySelector('form')

//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault() // prevents the default action associated with a specific event from occurring(mtlb ki apne app khi submit nhi ho jaye hum jb click kre tb submit ho)
    
    const height = parseInt(document.querySelector('#height').value)//value is use for takin input of number 
    const weight = parseInt(document.querySelector('#weight').value)
    const reusults =document.querySelector('#results') //convert string into int by using parseInt


    if(height=='' || height < 0 || isNaN(height)){//not a number
            reusults.innerHTML = 'Please give a valid height' //we use innerHTML when we add value 
    } else if(weight=='' || weight < 0 || isNaN(weight)){//not a number
            reusults.innerHTML = 'Please give a valid weight' //we use innerHTML when we add value 
    } else {
       const bmi =  (weight / ((height*height)/10000)).toFixed(2)//after decimal there is only 2 dewccimal number.
    //    category depends on the bmi not directly on the weight 

       let status = "";
       if(bmi < 18.6){
       status = "Under Weight"   
    } else if(bmi >= 18.6 && bmi <= 24.9){
        status = 'Normal Range';
    } else{
        status = 'Overweight';
        
    }
    // show the result
       reusults.innerHTML = `<span>BMI: ${bmi} -${status}</span>`;

    }

    

});
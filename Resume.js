const n = 'kaleb bridges'
console.log('Name:' + n.toUpperCase());
console.log('Career: Line Cook')
console.log('Description: Loving, Caring, Selfless')
console.log('My Interests: \nBasketball \nRunning \nCookings \nBoxing')
console.log('My Previous Experience:')
displayPosition('KwangSung', 'Machine Operator', 'operate machine producing glove box')
displayPosition('Willow Point Country Club', 'dishwasher & Prep', 'make sure dishes were clean and prep was finished')
displayPosition('Olive Garden', 'line cook', 'cook food according to line build')
console.log('My Skill: ')
displaySkill('Listening', false)
displaySkill('Sewing', true)
displaySkill('Baking', true)
displaySkill('Javascript', false)
displaySkill('HTML & CSS', false)
displaySkill('Spanish', true)

function displayPosition(company_name, job_title , desript){


    console.log(company_name + ' ' + job_title + ' ' + desript);
}

function displaySkill(skill_name, True_False){

if (True_False== true){
    console.log('BAM: '+ skill_name );
}else {
        console.log(skill_name)
    
}
}

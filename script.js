
function addbtn(){
    let name=  document.getElementById('na');
    let Num = name.value
    let Name =  document.getElementById('Name');
    Name.innerHTML =  Num;
    if(Num === ''){
        alert('Please enter your name.....')
       }
       name.value= ''

    let father=  document.getElementById('fa');
    let father1 = father.value
    let Father =  document.getElementById('Father');
    Father.innerHTML = father1;
    if(father1 === ''){
        alert('Please enter your father name.....')
       }
       father.value=''
    
    let roll=  document.getElementById('ro');
    let roll1 = roll.value
    let Roll =  document.getElementById('Roll');
    Roll.innerHTML = roll1;
    if(roll1 === ''){
        alert('Please enter your roll no.....')
       }
       roll.value=''
    
    let clas =  document.getElementById('cl');
    let class1 = clas.value
    let Class =  document.getElementById('Class');
    Class.innerHTML = class1;
    if(class1 === ''){
        alert('Please enter your class.....')
       }
       clas.value=''
    
     let school=  document.getElementById('sc');
     let school1 = school.value
     let School =  document.getElementById('School');
     School.innerHTML = school1;
     if(school1 === ''){
        alert('Please enter your school name.....')
       }
       school.value=''

     let time=  document.getElementById('da');
     let time1 = time.value
     let Date =  document.getElementById('Date');
     Date.innerHTML = time1;
     if(time1 === ''){
        alert('Please enter your date of birth.....')
       }
       time.value=''
    
     
     let mobile =  document.getElementById('mo');
     let mobile1 = mobile.value
     let Mobile =  document.getElementById('Mobile');
     Mobile.innerText =mobile1;
     if(mobile1 === ''){
        alert('Please enter your mobile no.....')
       }
       mobile.value=''


     let male=  document.getElementById('male');
     let male1 = male.value
     let Gen =  document.getElementById('Gen');
     Gen.innerHTML = male1;
     male.value=''

}

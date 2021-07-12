const btn = document.getElementById('submit');
const clgname=document.getElementById('collegename');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const accomodation = document.getElementById('accomodation');
const no_std = document.getElementById('no_std');
const no_days = document.getElementById('no_days');

btn.addEventListener('click',function(){
    let clgnameValue = clgname.value.trim();
    let emailValue=email.value.trim();
    let contactValue=contact.value.trim();
    let acmValue=accomodation.value; 
    
    if(acmValue !== "yes"){
        if(clgnameValue === '' || emailValue === '' || contactValue === '')
        alert("please fill in all the fields");
        else{
            validation();
        }
    }
    else if(acmValue === 'yes'){
        let no_stdValue=no_std.value.trim();
        let no_daysValue=no_days.value.trim();
            validation();
      
    }
    
})

function visible(){
    document.querySelector('.hideField').style.display="block";
}

function hide(){
    document.querySelector('.hideField').style.display="none";
}

function validation(){
    if(!isMobileValid()){
        alert("Mobile number should accept only ten digits");
    }
    if(!isEmailValid()){
        alert("Atleast 5 alphabet and 2 numeric!");
    }
    if(!isCollegeNameValid())
        alert("Collegename invalid");

    if(isCollegeNameValid() && isEmailValid() && isMobileValid())
        alert("Successfully submited!");
}


function isCollegeNameValid(){
    let clgnameValue = clgname.value.trim();
    if(clgnameValue.match(/^(?=.*(college|institution)).*/))
        return true;
    else
        return false;
}
function isEmailValid(){
    let emailValue = email.value.trim();
    if(emailValue.match(/^([A-z]{5,}[0-9]{2,})\w*/)){
        return true;
    }   
    else
        return false;
}
function isMobileValid(){
    let contactValue = contact.value.trim();
    if(contactValue.match(/^[0-9]{10}/)){
        return true;
    }   
    else
        return false;
}

function showAlert()
    {
     
       
            var collegename = document.getElementById("collegename").value;
            var email = document.getElementById("email").value;
            var contact = document.getElementById("contact").value;
            
            var nos = document.getElementById("no_std").value;
            var nod = document.getElementById("no_days").value;
            
            document.write("\n");
            document.write("<br>College name: "+collegename);
            document.write("\n");
            document.write("<br>Email: "+email);
            document.write("\n");
            document.write("<br>Contact: "+contact);
            document.write("\n");
            
            if(nos !="" && nod !="")
            {
                document.write("<br>No of student: "+nos);
                document.write("\n");
                document.write("<br>No of days: "+nod);
            }
            else
            {
                document.write("<br>No of student: NO");
                document.write("<br>No of days: NO ");
            }
            
    }
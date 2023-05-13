let check=false;
let num1,num2,operator='';
let count=false;



function display(id){
    
    if(!(isNaN(id.innerHTML)))
    {   
        if(!count || operator!=''){
            document.getElementById('answerBar').innerHTML='';
            count=true;
            operator='';
        }
    
        document.getElementById('answerBar').innerHTML+=id.innerHTML;
    }
    else{
        if(!check){
            num1=document.getElementById('answerBar').innerHTML;
            num1=Number(num1);
            console.log(num1);
            check=true;
        }
        document.getElementById('answerBar').innerHTML=id.innerHTML; 
        op=document.getElementById('answerBar').innerHTML;
        operator=op;
        count=false;
    }

}

function perform()
{
    num2=Number(document.getElementById('answerBar').innerHTML);
    if(op==='+')
    {
        
    document.getElementById("answerBar").innerHTML =num1+num2;
    }
    else if(op==='-')
    {
        document.getElementById("answerBar").innerHTML =num1-num2;
    }
    else if(op==='X')
    {
        document.getElementById("answerBar").innerHTML =num1*num2;
    }
    else if(op==='/')
    {
        document.getElementById("answerBar").innerHTML =num1/num2;
    }
    check=false;
    num1=0;num2=0;
    operator='';count=false;op='';
}

function clearBar()
{
    check=false;
    num1=0;
    num2=0;
    document.getElementById("answerBar").innerHTML=0;
    operator='';count=false;op='';

}


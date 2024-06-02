let disp="";
let num=[];
let op;

function print(){
    document.getElementById("screen").innerHTML=disp;
}

function push(input){
    if(input=='C'){
        disp="";
    }
    else if(input=='+' || input=='-' || input=='x' || input=='/'){
        if(num.length==1)
            num[0]=eval(num[0]+op+disp);
        else
            num[num.length]=parseFloat(disp);
        disp="";
        op=input;
    }
    else if(input=='='){
        if(!op){

        }
        else{
            num[num.length]=parseFloat(disp);
            if(op=='+'){
                disp=eval('num[0]+num[1]');
            }
            else if(op=='-'){
                disp=eval('num[0]-num[1]');
            }
            else if(op=='x'){
                disp=eval('num[0]*num[1]');
            }
            else{
                disp=eval('num[0]/num[1]');
            }
        }
    }
    else{
        disp+=input;
    }
    print();
}
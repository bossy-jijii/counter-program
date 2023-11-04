   /* let firstname="Hajar";
    let age=19;
    let student= true;
    window.alert("i love you hajar);
    console.log(firstname);
    console.log(age);
    console.log(student);

    document.getElementById("p1").innerHTML= "Helloooo "+firstname;
    document.getElementById("p2").innerHTML= "you are "+age+" years old";
    document.getElementById("p3").innerHTML= "Enrolled: "+student;*/
    /*let username=window.prompt("what's your full name?");
    alert("hello "+username+" welcome to coding world ");
    console.log(username);*/

   // let username;
    /*document.getElementById("mybutton").onclick=function(){
        username=document.getElementById("mytext").value;
        console.log(username);
    document.getElementById("mylabel").innerHTML= "helloo "+username;
    }*/
   let count=0;
    document.getElementById("decreasebtn").onclick=function(){
    count-=1;
    document.getElementById("countlabel").innerHTML=count;
    }
    document.getElementById("resetbtn").onclick=function(){
        count=0;
        document.getElementById("countlabel").innerHTML=count;}



    document.getElementById("increasebtn").onclick=function(){
        count+=1;
        document.getElementById("countlabel").innerHTML=count;
    }


function othername() {
    
    var val1 = $('#function1').val();
    var val2 = $('#function2').val();
    // var fun2= $('#function2').val();
    // var funl = [fun1,fun2];
    // fun1 = document.getElementById("function1").value;
   
    // fun2 = document.getElementById("function2").value;
    // console.log(fun1);
    // alert(input);
    val1="set1 "+val1;  
    $.ajax("/msg", {
        method: "post",
        data: val1
    });
    val2="set2 "+val2;   
    $.ajax("/msg", {
        method: "post",
        data: val2
    });
    
}
function Function1() { 
    $.ajax("/msg", {
        method: "post",
        data: "fun1 "
    });
    
}function Function2() { 
    $.ajax("/msg", {
        method: "post",
        data: "fun2 "
    });
    
}

// console.log(fun1);

// $("#fun2").append(fun2);
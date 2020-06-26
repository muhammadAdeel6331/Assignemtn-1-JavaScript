function getNumber(num){
    
    var resul = document.getElementById("result");
    var hist = document.getElementById("history");
    hist.value += num
    resul.value += num;
}
function clearResult(){
    var res = document.getElementById("result");
    var his = document.getElementById("history")
    res.value = ""
    his.value = ""
}
 function calculation(){
      var his = document.getElementById("history")
      var res = document.getElementById("result")
      res.value = eval(his.value)
 }
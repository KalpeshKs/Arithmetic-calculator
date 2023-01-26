btn.onclick = () => {
    result = document.getElementById('demo').value;
    console.log(result)
    if (result === "addition") {
      x = document.getElementById('first').value;
      a = parseFloat(x);
      y = document.getElementById('second').value;
      b = parseFloat(y);
      document.getElementById("result").innerHTML = a + b;
    }
    else if (result === "Subtraction") {
      x = document.getElementById('first').value;
      a = parseFloat(x);
      y = document.getElementById('second').value;
      b = parseFloat(y);
      document.getElementById("result").innerHTML = a - b;
    }
    else if (result === "Multiply") {
      x = document.getElementById('first').value;
      a = parseFloat(x);
      y = document.getElementById('second').value;
      b = parseFloat(y);
      document.getElementById("result").innerHTML = a * b;
    } else if (result === "Divide") {
      x = document.getElementById('first').value;
      a = parseFloat(x);
      y = document.getElementById('second').value;
      b = parseFloat(y);
      document.getElementById("result").innerHTML = a / b;
    }
    } 
    reset.onclick=()=>{
      document.getElementById("first").value="";
      document.getElementById("second").value="";
    }

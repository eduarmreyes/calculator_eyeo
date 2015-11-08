(function(){
	document.addEventListener("DOMContentLoaded", function() {
		var sResult = document.getElementById("s_result");
		sResult.value = 0;
		// Adding event to buttons
		var oButtons = document.getElementsByTagName("button");
		for (var i = 0; i < oButtons.length; i++) {
			if (oButtons[i].innerText === "=") {
				oButtons[i].addEventListener("click", calculate);
			} else {
				oButtons[i].addEventListener("click", function() {
					switch(this.innerText){
						case "+/-":
							document.getElementById("s_result").value = eval(document.getElementById("s_result").value * -1);
							break;
						case "C":
							document.getElementById("s_result").value = "";
							break;
						default:
							if (document.getElementById("s_result").value === "0") {
								document.getElementById("s_result").value = "";
							}
							document.getElementById("s_result").value += this.innerText;
							break;
					}
				});
			}
		}
	});
	function calculate () {
		var sCalculate = document.getElementById("s_result").value;
		var aExponent = sCalculate.split("E");
		if (aExponent.length > 1) {
			sCalculate = Math.pow(eval(aExponent[0]), eval(aExponent[1]));
		}
		sResult = eval(sCalculate);
		if (isNaN(sResult)) {
			sResult = "Syntax error";
		}
		document.getElementById("s_result").value = sResult;
	}
})();

(function(){
	document.addEventListener("DOMContentLoaded", function() {
		var sResult = document.getElementById("s_result");
		sResult.value = 0;
		// Adding event to keypress enter
		document.addEventListener("keypress", function(e) {
			if (e.keyCode === 13) {
				fnCalculate();
			}
		});
		// Adding event to buttons
		var oButtons = document.getElementsByTagName("button");
		for (var i = 0; i < oButtons.length; i++) {
			if (oButtons[i].innerText === "=" || oButtons[i].textContent === "=") {
				oButtons[i].addEventListener("click", fnCalculate);
			} else {
				oButtons[i].addEventListener("click", function() {
					var sTest = (typeof this.innerText !== "undefined") ? this.innerText : this.textContent;
					debugger;
					switch(sTest){
						case "+/-":
							sResult.value = eval(sResult.value * -1);
							break;
						case "C":
							sResult.value = "";
							break;
						default:
							debugger;
							if (sResult.value === "0") {
								sResult.value = "";
							}
							sResult.value += sTest;
							break;
					}
				});
			}
		}
	});
	var fnCalculate = function () {
		var sCalculate = document.getElementById("s_result");
		var aExponent = sCalculate.value.split("E");
		if (aExponent.length > 1) {
			sCalculate.value = Math.pow(eval(aExponent[0]), eval(aExponent[1]));
		}
		sResult = eval(sCalculate.value);
		if (isNaN(sResult)) {
			sResult = "Syntax error";
		}
		sCalculate.value = sResult;
	}
})();

function validate(){
	let total = document.querySelectorAll(".quiz ul").length;
	let checked = document.querySelectorAll(".quiz input:checked");
	let count = 0;
	Array.prototype.forEach.call(checked, function(node){
		if(node.classList.contains("ans")){
			count++;
			node.parentElement.parentElement.classList.add("correct");
			Array.prototype.forEach.call(
				node.parentElement.parentElement.parentElement.querySelectorAll("li.wrong"),
				function(wrong){
					wrong.classList.remove("wrong");
				}
			);
		} else {
			node.parentElement.parentElement.classList.add("wrong");
			Array.prototype.forEach.call(
				node.parentElement.parentElement.parentElement.querySelectorAll("li.correct"),
				function(crkt){
					crkt.classList.remove("correct");
				}
			);
		}
	});
	document.getElementById('output').innerHTML = count + " of " + total;
}
document.querySelectorAll("input[type='radio']").forEach(function (input){
	input.checked = false;
});
document.querySelector("#form").addEventListener("submit", (e) => {
	e.preventDefault();
	
	var user = document.getElementsByName("user")[0].value;
	var password = document.getElementsByName("password")[0].value;

	// console.log(user);
	// console.log(password);

	const json = {
		"user": user,
		"password": password
	};
	console.log(json);
})
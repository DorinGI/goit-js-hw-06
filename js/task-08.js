const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;
	if (email.value === "" || password.value === "") {
		alert("Toate campurile trebuie completate!");
	} else {
		const formElements = {
			email: email.value,
			password: password.value,
		};

		console.log(formElements);
	}
	event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);

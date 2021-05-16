document.getElementById("nav-button").addEventListener("click", () => {
	document.querySelector("nav ul").classList.toggle("opened");
});

firebase.auth().onAuthStateChanged(user => {
	const element = document.querySelector("nav div#profile");

	if(user) {
		element.innerHTML = `<img src="./static/images/placeholder.jpg" alt="Profile picture" />
		<label>اسم المستخدم</label>
		<a class="button"><i class="fas fa-cog"></i></a>`;
	}
	else {
		element.innerHTML = `<a class="login" href="login.html">تسجيل الدخول</a>`;
	}
});
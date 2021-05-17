document.getElementById("nav-button").addEventListener("click", () => {
	document.querySelector("nav ul").classList.toggle("opened");
});

firebase.auth().onAuthStateChanged( async user => {
	const element = document.querySelector("nav div#profile");
	const userService = new UserService();

	if(user) {
		let src;
		try {
			const URL = await userService.getProfilePicture(user.uid);
	
			src = URL;
		}
		finally {
			element.innerHTML = `<a href="profile.html"><img src="${src}" alt="Profile picture" /></a>`;
		}
	}
	else {
		element.innerHTML = `<a class="login" href="login.html">تسجيل الدخول</a>`;
	}
});
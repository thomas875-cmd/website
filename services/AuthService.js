class AuthService {

	async signUpEmail(username, email, password, passwordConfirm) {
		if(username.length == 0 ||
		email.length == 0 ||
		password.length == 0 ||
		passwordConfirm == 0) {
			
			throw new Error("الرجاء كتابة جميع الخانات");
		}
		else if(password != passwordConfirm) {
			throw new Error("كلمات المرور غير متطابقة");
		}
		else {
			try {
				const userCredentials = await firebase.auth().createUserWithEmailAndPassword(email, password);

				await firebase.firestore().collection("users").doc(userCredentials.user.uid).set({
					username: username
				});

			}
			catch(error) {
				if(error.code == "auth/email-already-in-use") {
					throw new Error("هذا البريد الالكتروني مستخدم في حساب اخر");
				}
				else if(error.code == "auth/invalid-email") {
					throw new Error("هذا البريد الالكتروني خاطئ");
				}
				else if(error.code == "auth/weak-password") {
					throw new Error("كلمة المرور ضعيفة");
				}
				else {
					throw new Error("حدث خطأ");
				}
			}
		}
	}

}
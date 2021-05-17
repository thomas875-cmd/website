class UserService {

	async getUsername(uid) {
		
		let username;

		try {

			const document = await firebase.firestore().collection("users").doc(uid).get();

			username = document.get("username");

		}
		catch(error) {
			throw new Error("حدث خطأ اثناء الحصول على الإسم");
		}
		finally {
			return username;

		}

	}

	async getProfilePicture(uid) {
		let URL = "./static/images/profile.jpg";

		try {

			const directory = firebase.storage().ref("users/" + uid);
			const image = directory.child("profile.png")

			const link = await image.getDownloadURL();

			URL = link;
		}
		finally {
			return URL;

		}
	}

}
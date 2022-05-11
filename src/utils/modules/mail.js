const mailFormatIsValid = (mail) => {
const stringfyMail = mail.toString();
	const mailFormat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(mailFormat.test(stringfyMail)){
		return true;
	}
	return false;
}

export {
	mailFormatIsValid
}

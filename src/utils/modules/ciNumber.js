const CI_PHONE_NUMBER_LENGTH = 10

const ciPhoneNumberFormatIsValide = (phoneNumber) => {
    const phoneNumberStringfy = phoneNumber.toString()
    const phoneNumberLength = phoneNumberStringfy.length
    if (phoneNumberLength != CI_PHONE_NUMBER_LENGTH) {
        return false
    } else {
        return true
    }
}


export {
    ciPhoneNumberFormatIsValide
} 

export const FormValidation = (email, password, username) => {

    const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const paswordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)


    if (!emailValidation) return 'Email ID is not valid'
    if (!paswordValidation) return 'Password is not valid'



    return null

}
export const FormValidation = (email, password, username) => {

    const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)


    if (!emailValidation) return 'Email ID is not valid'



    return null

}
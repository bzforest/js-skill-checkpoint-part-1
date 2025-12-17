// Question #3
let userPassword = "ssswnalWadqQ";

function checkPasswordStrength (password) {
    let status = "";
    let count = 0

    for (let i = 0; i < password.length; i++) {
        console.log(password[i]);
        count = password.length
        console.log(count);
        if (count > 10) {
            status = "Strong"
        } else if (count >= 6 && count <= 10) {
            status = ""
        } else if (count < 6) {
            status = "Weak"
        }
    }

    return status
}

console.log(checkPasswordStrength(userPassword));

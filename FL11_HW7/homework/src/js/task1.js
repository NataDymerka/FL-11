// Verifying user rights.
let email = window.prompt('Please, enter your email', 'email@google.com');
let minMailLenght = 6;
let password;
if (email === '' || email === null) { //Login checking
    alert('Canceled');
} else if (email.length < minMailLenght) {
    alert('I don\'t know any emails having name length less than 6 symbol\'s');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    password = window.prompt('Please, enter your password', 'password');
} else {
    alert('I don\'t know you');
}
let userMail = 'user@gmail.com';
let admMail = 'admin@gmail.com';
let userPas = 'UserPass';
let admPas = 'AdminPass';
// Comparing login/password pairs
let User = email === userMail && password === userPas;
let Admin = email === admMail && password === admPas;
// Password checking
if (password === '' || password === null) {
    alert('Canceled');
} else if (!User && !Admin) {
    alert('Wrong password');
}
let oldPas;
let newPas;
let minPassLength = 5;
// Changing password when it is verified
if (User || Admin) { //options, when changing is possible
    if (confirm('Do you want to change your password?')) {
        oldPas = prompt('Please, enter your old password');
        if (oldPas === userPas && User || oldPas === admPas && Admin) {
            newPas = prompt('Please, enter your new password');
            if (newPas.length < minPassLength) {
                alert('It\'s too short password. Sorry.');
            } else {
                if (prompt('Please, repeat your new password') === newPas) {
                    alert('You have successfully changed your password.');
                    if (User) {           
                        userPas = newPas;
                    }
                    if (Admin) {
                        admPas = newPas;
                    }
                } else {
                    alert('You wrote the wrong password.');
                }
            }
        } else {
            alert('Wrong password');
        }
    } else {
        alert('You have failed the change');
    }
}
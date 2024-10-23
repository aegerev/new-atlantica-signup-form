export function authorizeEmail(email) {
    let res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase);
}

export function checkPassword(input) {
    const pw = /^[A-Za-z]\w{7,14}$/;
    if(input.match(pw)) {
        return true;
    }
    return false;
}


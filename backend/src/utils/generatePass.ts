export function generatePass(){

    let password
    const caracteres = '!@#$ABCD@FGHIJKL!#*.MN0294OPQRSTUVWXYZabcde%&fghijklmnopq192rstuvwxyz0123456!89';
    for (var i = 0; i < 8; i++) {
        if(!password){
            password = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }else{
            password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
    }

    return password
}
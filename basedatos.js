//Tabla usuario con una sola fila
const usuario = {
    nombre: "Mariano",
    apellidos: "Romero Quintana", 
    dirección: "C/ Sor Prat de Looret, 15, 26001"
};


console.log(usuario);

//tabla de usuarios con mas de una fila
const usuarios = [{
    nombre: "Mariano",
    apellidos: "Romero Quintana", 
    dirección: "C/ Sor Prat de Looret, 15, 26001"
},
{
    nombre: "Antonio",
    apellidos: "García Aguilar", 
    dirección: "C/ Vilnius, 5, 25668"
}];

console.log(usuarios);

//console.log(usuarios[0]); hace referencia al primer valor que se ha escrito
//si escribiésemos 1 en lugar de 0, reproduciría el segundo, en este caso, console.log(usuarios)

const usuarioConTarjeta = {
    nombre: "Antonio",
    apellidos: "Moreira Cansado",
    dirección: "Avd. Maria de los Dolores",
    tarjetas: [{
        titular: "Manolo Bombo",
        tarjeta: "111 2222 3333 4444",
        caducidad: "0427",
        baja: 0,
        fechaBaja: ""
    },{
        titular: "Perico Palotes",
        tarjeta: "111 2222 3333 4444",
        caducidad: "0225",
        baja: 0,
        fechaBaja: "10/10/2023"
    }]
}


//Mostrar todos los datos de usuario y tarjetas
console.log(usuarioConTarjeta)
//Mostrar todas las tarjetas del usuario
console.log(usuarioConTarjeta.tarjetas);
//mostrar la primera de las tarjetas del usuario
console.log(usuarioConTarjeta.tarjetas[0]);

//Tabla de usuarios asociados
const usuariosConTarjeta = {
    nombre: "Antonio",
    apellidos: "Moreira Cansado",
    dirección: "Avd. Maria de los Dolores",
    tarjetas: [{
        titular: "Manolo Bombo",
        tarjeta: "111 2222 3333 4444",
        caducidad: "0427",
        baja: 0,
        fechaBaja: ""
    },{
        titular: "Perico Palotes",
        tarjeta: "111 2222 3333 4444",
        caducidad: "0225",
        baja: 0,
        fechaBaja: "10/10/2023"
    }]
}
    console.log(usuariosConTarjeta[0].tarjetas);

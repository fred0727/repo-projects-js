// const type = "Perro"
// const age = 1
// const typemascota = type.toLowerCase()
//   const arraytypes = ['perro', 'gato', 'ave']
//   const enunciados = [
//     "Los cachorros necesitan pequeñas y frecuentes sesiones de juego",
//     "Los perros a esta edad necesitan caminatas diarias y sesiones de juego",
//     "Los perros viejos necesitan caminatas más cortas",
//     "Los gatitos necesitan frecuentes sesiones de juego",
//     "Los gatos a esta edad necesitan jugar diariamente",
//     "Los gatos viejos necesitan sesiones de juego más cortas",
//     "Las aves jóvenes necesitan mucho espacio para volar",
//     "Las aves necesitan jugar diariamente y un lugar para volar",
//     "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar",
//   ]
//   let concattypeage
//   if (age < 1) {
//     concattypeage = typemascota + 1
//   } else if (age >= 1 && age < 8) {
//     concattypeage = typemascota +  2
//   } else {
//     concattypeage = typemascota + 3
//   }

//   const verificarexiste = arraytypes.some(type => type == typemascota)

//   if (verificarexiste) {
//     switch (concattypeage) {
//         case "perro1":
//             return enunciados[0]
//         case "perro2":
//             return enunciados[1]
//         case "perro3":
//             return enunciados[2]
//     }
//   } else {
//     return "Tipo de mascota inválida"
//   }


// Tu código aquí 👈
let texto = ""
let espacios = "" 
for (let i = 1; i <= size; i++){
  carac = espacios.repeat(size - i) + character.repeat(i)
  texto += carac+"\n"
} 
console.log(texto);

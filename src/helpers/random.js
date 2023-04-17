//? esta funcion debe retornar un numero del 1 al 126 que representa una dimension
export const getRandomDimension = () => {
  return Math.floor(Math.random() * 126) + 1
}


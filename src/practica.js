
export default function practica(str) {
let translation = str
 // si la palabra termina en ar se le quitan dos caracteres
 if(str.toLowerCase().endsWith('ar')){
   translation = str.slice(0,-2)
 }
 // si la palabra inicia con "z" se le añade "p" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }
  // si la palabra tiene mas de "10" letras se debe partir a la mitad y unir con un "-"
  const length = translation.length
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length /2))
    const secondHalf = translation.slice(Math.round(length /2))
    translation = `${firstHalf} - ${secondHalf}`
  }
  // si la palabra original es un palindromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando masyuculas y minusculas
  const reverse =(str) => str.split('').reverse().join('')
  let minMay = (str) => {
    const length = str.length
    let translation = ''
    let capitalize = true
     for (let i = 0; i < length; i++) {
       const char = str.charAt(i)
       translation += capitalize ? char.toUpperCase() : char.toLowerCase()
       capitalize = !capitalize
     }
  return  translation;
  }
  if (str == reverse(str)) {
    return minMay(str)
  }
  return translation;
}

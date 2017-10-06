# practica

Practica es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online

## Description of language

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Install

```
npm install practica
```

## Use

```
import practica from 'practica'

practica("Programar") // Program
practica("Zorro") // Zorrope
practica("Zarpar") // Zarppe
practica("abecedario") // abece-dario
practica("sometemos") // SoMeTeMoS
```

## Credits
- [Jean Pierre](https://www.facebook.com/JePiGiArOr)

## License

[MIT](https://opensource.org/licenses/MIT)

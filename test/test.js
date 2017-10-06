const expect = require('chai').expect
const practica = require('..').default

describe('#practica', function() {
  it('Si la palabra termina con "ar", se le quitan esas dos letras', function() {
    const translation = practica("Programar")
    expect(translation).to.equal("Program")
  })
  it('Si la palabra inicia con Z, se le añade "pe" al final', function() {
    const translation = practica("Zorro")
    const translation2 = practica("Zarpar")
    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })
  it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function() {
    const translation = practica("abecedario")
    expect(translation).to.equal("abece - dario")
  })
  it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function() {
    const translation = practica("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })
})

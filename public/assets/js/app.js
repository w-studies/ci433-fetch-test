const inputCidade = document.querySelector('input#cidade')
console.log('inputCidade :>> ', inputCidade)
inputCidade.oninput = async ({ target }) => {
  const searchTerm = target.value
  if (searchTerm.length < 3) return

  const request = await fetch(`home/search?cidade=${searchTerm}`, { method: 'get' })

  const response = await request.json()

  inputCidade.nextElementSibling.innerHTML = JSON.stringify({ response }, 2, null)
}

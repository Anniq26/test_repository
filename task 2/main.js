const root= document.body

// div
const wrapper= document.createElement('div')
wrapper.classList.add('card')

// h1
const h2 = document.createElement('h2')
h2.innerText = 'Gandalf'

// a

const link = document.createElement('a')
link.href = '#'
link.textContent = 'Go to profile'

// button
const button = document.createElement('button')
button.classList.add('btn')
button.innerText = 'Submit'


wrapper.append(h2, button, link)
root.appendChild(wrapper)

const root= document.body

// div
const wrapper= document.createElement('div')
wrapper.classList.add('wrapper')

// h1
const h1 = document.createElement('h1')
h1.classList.add('text')
h1.innerText = 'welcome to our website'

// button
const button = document.createElement('button')
button.classList.add('btn')
button.innerText = 'Submit'

wrapper.append(h1, button)
root.appendChild(wrapper)



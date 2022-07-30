let div1 = $('<div>Hello World</div>');
let div2 = $("<div>What's Next?</div>");
let divButtons = $("<div>Buttons</div>");
let ol1 = $("<ol>Favorite Animals</ol>");
let li1 = $("<li>Dog</li>")
let submitButton = $('<button type="submit">Submit</button>')
let userInput = $('<input id="userInput" type="text" autocomplete="off">')

let body = $('body')

body.append(div1)

body.append(div2)
body.append(divButtons)

divButtons.append(userInput)
divButtons.append(submitButton)


div2.append(ol1)

ol1.append(li1)

div1.on('click', () => {
    alert('Hello World')
})

submitButton.on('click', (e) => {
    e.preventDefault()
    alert(userInput.value)
})


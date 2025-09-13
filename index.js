console.log(Handlebars)

const userTamplate = document.querySelector('#user-template');

console.log(userTamplate.innerHTML)

var template = Handlebars.compile(userTamplate.innerHTML);

console.log(template)

const userData = {
  name: "John Smith",
  email: "john@example.com",
};

const markup = template(userData)

console.log(markup);



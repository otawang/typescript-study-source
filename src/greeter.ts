interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = {firstName: 'asdasdsad', lastName: 'aaaa'};

document.body.innerHTML = greeter(user);
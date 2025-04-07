// source => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

const data = [
    {
        id: 1,
        email: 'toto@gmail.com',
        password: 'toto12'
    },
    {
        id: 2,
        email: 'JohnDoe@outlook.com',
        password: 'password'
    },
    {
        id: 3,
        email: 'test@gmail.com',
        password: 'test1234'
    },
    {
        id: 4,
        email: 'titi@sfr.fr',
        password: 'titidu12'
    }
];

// filtre en fonction de la fin de l'adresse email
function filterData(data, email) {
    let newData = [];
    const user = data.filter(user => {
        user.email.endsWith(email);   
    })   
    newData.push(user);
    return newData; 
}

const test = filterData(data, 'outlook.com');
console.log(test);

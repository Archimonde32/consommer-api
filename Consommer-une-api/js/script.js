

let nb = 12;
let url = 'https://reqres.in/api/users?per_page=' + nb;

fetch('https://reqres.in/api/users?per_page=' + nb)
    .then(response => response.json())
    .then(data => {
        const users = data.data;

        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');

            const name = document.createElement('h2');
            name.textContent = `${user.first_name}`;

            const email = document.createElement('p');
            email.textContent = user.email;

            const avatar = document.createElement('img');
            avatar.src = user.avatar;
            avatar.alt = `${user.first_name}`;

            card.appendChild(name);
            card.appendChild(email);
            card.appendChild(avatar);

            const cardsContainer = document.getElementById('root');
            cardsContainer.appendChild(card);
        });


    })
    .catch(error => console.log(error));
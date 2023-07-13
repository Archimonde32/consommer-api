// window.onload = function() {
// let functionGET =async function (url){
//     const requestGET = new Request(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     });
// const res = await fetch(requestGET);
// console.log(res);
// let liste = [];
// if(!res){
//     console.log('error');
// }else{
//     if(res.ok){
//         let value = await res.json();
//         console.log(value);
//         liste =value.data;
//         console.log(liste);
//     }
// }
// return liste;
// }

// }



let nb = 12;

fetch('https://reqres.in/api/users?per_page=' + nb)
    .then(response => response.json())
    .then(data => {
        const users = data.data;

        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.addEventListener('click', () => openModal(user));

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

function openModal(user) {
    const modalOverlay = document.getElementById('modal-overlay');
    const modal = createModal(user);
    modalOverlay.style.display = 'block';
    modal.style.display = 'block';

    const closeModalBtn = modal.querySelector('.modal-close');
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });
}

function createModal(user) {
    const modalId = `modal-${user.id}`;
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', modalId);

    modal.innerHTML = `
        <span class="modal-close">&times;</span>
        <h2>${user.first_name}</h2>
        <img src="${user.avatar}" alt="${user.first_name}">
        <p>Email: ${user.email}</p>
        <p>Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem at harum, modi optio deserunt nobis.</p>
        `;

    document.body.appendChild(modal);
    return modal;
}
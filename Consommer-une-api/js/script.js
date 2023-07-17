window.onload = function() {
    
    
    
    let nb = 12;

fetch('https://reqres.in/api/users?per_page=' + nb,{ method: 'GET' })
    .then(response => {
        const headers = new Headers();

        var requestOptions = {
            method: "GET",
            headers: headers,
            redirect: "follow"
        };
        
        console.log('Données Hearders ',headers);

        // Continuer à traiter la réponse
        return response.json();

    })
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

}




document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    // criar um novo item
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const titleDiv = document.createElement('div');
    titleDiv.innerHTML = `<h2>${title}</h2>`;

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    contentDiv.innerHTML = `
        <div><strong>Descrição:</strong></div>
        <div>${description}</div>
        <div><strong>Imagem:</strong></div>
        <img src="${image}" alt="${title}" style="max-width: 100%; height: auto;">
    `;

    const button = document.createElement('button');
    button.textContent = 'Visualizar';
    button.addEventListener('click', function() {
        contentDiv.style.display = contentDiv.style.display === 'none' ? 'block' : 'none';
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    deleteButton.addEventListener('click', function() {
        itemDiv.remove(); // remove o item da lista
    });


    itemDiv.appendChild(titleDiv);
    itemDiv.appendChild(button);
    itemDiv.appendChild(deleteButton);
    itemDiv.appendChild(contentDiv);
    document.getElementById('list').appendChild(itemDiv);


    document.getElementById('itemForm').reset();
});

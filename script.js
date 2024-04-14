let draggedCard;

function dragStart(event) {
    draggedCard = event.target;
    event.dataTransfer.setData('text/plain', null);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const column = event.currentTarget;
    column.appendChild(draggedCard);
}

const columns = document.querySelectorAll('.column');
columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('drop', drop);
});
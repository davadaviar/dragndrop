const fill = document.querySelector('.filled');
const empties = document.querySelectorAll('.empty');

// for loop empties
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragleave);
    empty.addEventListener('drop', drop);
}

// eventlistener
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// drag functions
function dragStart() {
   this.className += ' hold';
   setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    this.className = 'filled'
}

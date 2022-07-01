const fill = document.querySelector('.filled');
const empties = document.querySelectorAll('.empty');

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

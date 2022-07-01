const fill = document.querySelector('.filled');
const empties = document.querySelectorAll('.empty');

// for loop empties
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
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

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'box-item';
}

function dragDrop() {
    this.className = 'box-item';
    this.append(fill);
}

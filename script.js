document.querySelector('.addTask > button').addEventListener('click', addList);
document.querySelector('input').addEventListener('keyup', (e) => {
    (e.keyCode === 13 ? addList(e) : null);
})

function addList(e) {
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.className = "fa fa-check";
    checkBtn.style.color = "limegreen"

    delBtn.className = "fa fa-trash";
    delBtn.style.color = "Red";



    if (input.value !== '') {
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
    });
}
const ol = document.querySelector('ol');
const addBtn = document.querySelector('.btn');
const enterKeyCode = 13;
const inputField = document.querySelector('#input-text');
const stringsAmount = 10; //maximum number of list items
let liAmount = ol.children; //quantity of list items
let dragItem = null; //show the element to drag

addBtn.addEventListener('click', addNewString);
inputField.addEventListener('input', btnActive);
inputField.addEventListener('keyup', btnActive);

addBtn.disabled = true;

//add list items from a local storage
createItemFromLocalStorage();

//list item adding button activaton
function btnActive() {
    if (inputField.value === '') {
        addBtn.disabled = true;
    } else if
        (event.keyCode === enterKeyCode) {
        event.preventDefault();
        addBtn.click();
        inputField.value = '';

    } else {
        addBtn.disabled = false;
        addBtn.classList.add('active');
    }
}

function addEventHandlers(el) {
    addDoneCallback(el);
    addRemoveCallback(el);
    addEditCallback(el);
    addDnDHandlers(el);
}
//adding new action
function addNewString() {
    if (inputField.value !== '') {
        let item = createLi(inputField.value);
        if (liAmount.length < stringsAmount) {
            addBtn.disabled = false;
            addBtn.classList.add('active');
        } else {
            createAlert();
        }
        addEventHandlers(item);
        //to cleaar and disactive the input field
        inputField.value = '';
        addBtn.disabled = true;
        addBtn.classList.remove('active');

        addToLocalStorage();
    }
}
//creat notification if the max number of strings is reached
function createAlert() {
    const note = document.createElement('p');
    const addAction = document.querySelector('.add_action');
    addAction.before(note);
    note.classList.add('note');
    note.textContent = 'Maximum item per list are created!'
    inputField.setAttribute('disabled', 'true');
    addBtn.disabled = true;
    addBtn.classList.remove('active');
}

function createLi(str) {
    let item = document.createElement('li');
    ol.append(item);
    let itemString = `<span><i class='material-icons'>crop_din</i><i class='material-icons'>done</i> 
    <span class='itemValue'>${str}</span>
    <i class='material-icons edit'>edit</i></span>
    <i class='material-icons delete'>delete</i>`;
    item.insertAdjacentHTML('beforeend', itemString);
    return item;
}
// add done action
function addDoneCallback(item) {
    let textbox = item.firstElementChild;
    let checkboxIcon = textbox.firstElementChild;
    checkboxIcon.addEventListener('click', done);
    let doneIcon = checkboxIcon.nextElementSibling;
    doneIcon.addEventListener('click', done);

    function done() {
        doneIcon.classList.toggle('done');
    }
}
// editing action
function addEditCallback(item) {
    let textbox = item.firstElementChild;
    let editIcon = textbox.lastElementChild;
    editIcon.addEventListener('click', createEditField);

    function createEditField() {
        textbox.hidden = true;
        let editField = document.createElement('input');
        editField.setAttribute('id', 'input-edit');

        let saveIcon = document.createElement('i');
        saveIcon.innerHTML = 'save';
        saveIcon.classList.add('material-icons');
        saveIcon.classList.add('save');

        let editSpan = document.createElement('span');
        editSpan.prepend(editField);
        editSpan.append(saveIcon);
        item.prepend(editSpan);

        addSaveCallback(item);
    }
}
function addSaveCallback(item) {
    let saveIcon = item.querySelector('.save');
    saveIcon.addEventListener('click', saveEdition);

}
function saveEdition(e) {
    let editSpan = e.target.parentNode;
    let textbox = editSpan.nextElementSibling;
    let item = e.target.parentNode.parentNode;
    let itemValue = item.querySelector('.itemValue');
    let editedValue = item.querySelector('#input-edit').value;
    textbox.hidden = false;
    itemValue.innerHTML = editedValue;
    item.removeChild(editSpan);
    localStorage.removeItem('items');
    addToLocalStorage();
}

// deleting action
function addRemoveCallback(item) {
    let removeIcon = item.lastElementChild;
    removeIcon.addEventListener('click', removeItem);
}
function removeItem() {
    if (liAmount.length === stringsAmount) {
        const root = document.getElementById('root');
        const note = root.querySelector('.note');
        root.removeChild(note);
        //input field and button activation
        inputField.disabled = false;
        addBtn.disabled = false;
        addBtn.classList.add('active');
    }
    ol.removeChild(this.parentNode);
    localStorage.removeItem('items');
    addToLocalStorage();
}

//drug and drop action
function addDnDHandlers(item) {
    item.draggable = 'true';
    item.addEventListener('dragstart', dragStartHandler);
    item.addEventListener('drop', dropHandler);
    item.addEventListener('dragover', dragOverHandler);
}
function dragOverHandler(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}
function dragStartHandler(e) {
    dragItem = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
}
function dropHandler(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragItem !== this) {
        this.parentNode.removeChild(dragItem);
        let dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin', dropHTML);
        let dropItem = this.previousSibling;
        addEventHandlers(dropItem);
    }
    return false;
}
//local storage action
function addToLocalStorage() {
    let list = [];
    ol.childNodes.forEach(el => {
        list.push(el.querySelector('.itemValue').innerHTML);
    });
    let string = list.join(';;');
    if (string === '') {
        localStorage.removeItem('items');
    } else {
        localStorage.setItem('items', string);
    }
}
function createItemFromLocalStorage() {
    if (localStorage.getItem('items') === null) { //if local storege is empty, example of a list item is created
        let example = createLi('catch the cat');
        addEventHandlers(example);
    } else {
        let string = localStorage.getItem('items').split(';;');
        string.forEach(el => {
            let item = createLi(el);
            addDoneCallback(item);
            addRemoveCallback(item);
            addEditCallback(item);
            addDnDHandlers(item);
        })
        if (liAmount.length === stringsAmount) {
            createAlert();
        }
    }
}
const elemArray = [];
const idArray = [];
const stringNumber = 10;
function getFreeId() {
    for (let i = 0; i < stringNumber; i++) {
        if (!idArray.includes(i)) {
            idArray.push(i);
            return i;
        }
    }
    return alert('Max item per list is 10');
}
class ElemData {
    constructor(str) {
        this.str = str;
        this.done = 0;
        this.id = getFreeId();
    }
}
function editName(id) {
    for (let i = 0; i < elemArray.length; i++) {
        if (elemArray[i].id === id) {
            elemArray[i].str = document.getElementById('input-text').value;
        }
    }
    reDraw();
}
function delElem(id) {
    for (let i = 0; i < elemArray.length; i++) {
        if (elemArray[i].id === id) {
            elemArray.splice(i, 1);
        }
    }
    idArray.splice(idArray.indexOf(id), 1);
    reDraw();
}
function createElem() {
    let text = document.getElementById('input-text').value;
    let el = new ElemData(text);
    elemArray.push(el);
    reDraw();
}
function reDraw() {
    document.
        getElementsByClassName('list')[0].
        getElementsByTagName('OL')[0].innerHTML = '';
    for (let i = 0; i < elemArray.length; i++) {
        fillElem(elemArray[i]);
    }
    console.log(document.getElementsByClassName('list')[0].innerHTML);
}
function fillElem(elem) {
    let list = document.getElementsByClassName('list')[0].getElementsByTagName('OL')[0];
    let node = document.createElement('LI');
    let myId = 'li' + elem.id;
    node.setAttribute('class', myId);
    let node1 = document.createElement('DIV');
    node1.setAttribute('class', 'check-box');
    let node2 = document.createElement('I');
    node2.setAttribute('class', 'material-icons square');
    let node3 = document.createTextNode('crop_square');
    let node4 = document.createElement('span');
    let node5 = document.createTextNode(elem.str);
    let node6 = document.createElement('I');
    node6.setAttribute('class', 'material-icons');
    node6.setAttribute('onclick', 'editName(' + elem.id + ')');
    let node7 = document.createTextNode('create');
    node6.appendChild(node7);
    node4.appendChild(node5);
    node2.appendChild(node3);
    node1.appendChild(node2);
    node1.appendChild(node4);
    node1.appendChild(node6);
    let node8 = document.createElement('I');
    node8.setAttribute('class', 'material-icons delete');
    node8.setAttribute('onclick', 'delElem(' + elem.id + ')');
    let node9 = document.createTextNode('delete');
    node8.appendChild(node9);
    node.appendChild(node1);
    node.appendChild(node8);
    list.appendChild(node);
}
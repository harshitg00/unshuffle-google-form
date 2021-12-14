var ques = document.querySelectorAll('div.freebirdFormviewerViewItemList > div.freebirdFormviewerViewNumberedItemContainer')
var wrap = document.querySelector('div.freebirdFormviewerViewItemList')
wrap.innerHTML = "";
var arr = new Array();
for(let i = 0; i < ques.length; i++) {
    arr[i] = ques[i];
}
arr.sort(function(a, b) {
  return a.innerHTML == b.innerHTML
    ? 0
    : (a.innerHTML > b.innerHTML ? 1 : -1);
});
for(let i = 0; i < ques.length; i++) {
    wrap.appendChild(arr[i]);
}

const questions = document.getElementsByClassName('freebirdFormviewerComponentsQuestionBaseTitle');
for(let i = 0; i < questions.length; i++) {
    questions[i].innerText = (i+1) + ": "+ questions[i].innerText;
}

const formGroup = document.querySelector('#innerForm');

fetch('api/questions')
  .then((response) => response.json())
  .then((questions) => {
    console.log(questions);
    renderQuestion(questions[0]);
  });

function renderQuestion(question) {
  const wrapper = document.createElement('div');
  const h4 = document.createElement('h4');
  const id = document.createElement('span');
  const title = document.createElement('span');

  id.id = 'qid';
  title.id = 'question';

  wrapper.appendChild(h4);
  h4.appendChild(id);
  h4.appendChild(title);

  question.options.forEach((answer) => {
    const answerElement = renderQuestionOption(answer);
    wrapper.appendChild(answerElement);
  });

  formGroup.innerHTML = '';
  formGroup.appendChild(wrapper);
}

function renderQuestionOption(option) {
  const div = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const display = document.createElement('span');
  
  div.classList.add('form-check', 'option-block');
  label.classList.add('form-check-label');
  input.type = 'radio';
  input.classList.add('form-check-input');
  input.name = "option";
  input.id = 'qa';
  input.value = 'foo';
  display.id = 'optionval';
  display.innerText = option;
  
  div.appendChild(label);
  label.appendChild(input);
  label.appendChild(display);

  return div;
}
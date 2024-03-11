function applyRedBorder(element) {
    var contentElemen = document.querySelector('.subcontainer_input_'+element);
    contentElemen.classList.add('red_border');
    var labelElement = document.querySelector('.label_subcontainer_input_'+element);
    labelElement.classList.remove('red_label');
    var inputElemen = document.querySelector('.input_'+element);
    inputElemen.classList.add('red_text');
}

function removeRedBorder(element) {
    var contentElemen = document.querySelector('.subcontainer_input_'+element);
    contentElemen.classList.remove('red_border');
    var labelElement = document.querySelector('.label_subcontainer_input_'+element);
    labelElement.classList.add('red_label');
    var inputElement = document.querySelector('.input_'+element);
    inputElement.classList.remove('red_text');
}

function addImportantWarning(element) {
    var contentElement = document.querySelector('.text_important_warning_'+element);
    contentElement.classList.remove('concealment');
}

function removeImportantWarning(element) {
    var contentElement = document.querySelector('.text_important_warning_'+element);
    contentElement.classList.add('concealment');
}
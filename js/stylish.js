const validateInput = field => {
  if (!field.value) {
    return;
  }

  const parent = field.parentNode;
  parent.classList.remove('invalid');

  const validation = parent.querySelector('.validation');
  if (!validation) {
    return;
  }

  validation.value = '';
};

const setField = (id, value) => {
  const field = document.getElementById(id);
  field.value = value;
  field.parentNode.querySelector('label').classList.add('dirty');
};

// const invalidateInput = (id, message) => {
//   const parent = $(id).parent();
//   parent.addClass('invalid');

//   if (parent.children('.validation').length) {
//     parent.children('.validation').html(message);
//   } else {
//     parent.append(`<span class="validation">${message}</span>`);
//   }
// };

(() => {
  const fields = document.querySelectorAll('input');
  console.log(fields);
  fields.forEach(field => {
    validateInput(field);

    field.addEventListener('change', e => {
      const field = e.currentTarget;
      validateInput(field);

      const label = field.parentNode.querySelector('label');

      if (field.value) {
        label.classList.add('dirty');
      } else {
        label.classList.remove('dirty');
      }
    });
  });
})();

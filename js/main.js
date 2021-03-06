$(function () {
  $('#menu-list [href]').each(function () {
    if (this.href == window.location.href) {
      $(this).addClass('underline');
    }
  });

  $('#menu-button').click(function () {
    $('#menu-list').toggleClass('navbar__list--open');
  });

  $('#name-error').hide();
  let nameError = true;
  $('#name').keyup(() => {
    validateName();
  });

  const validateName = () => {
    let name = $('#name').val();
    if (name === '') {
      $('#name-error').show();
      nameError = false;
      return false;
    } else {
      $('#name-error').hide();
    }
  };

  $('#email-error').hide();
  let emailError = true;
  $('#email').keyup(() => {
    validateEmail();
  });

  const validateEmail = () => {
    let email = $('#email').val();
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (email === '') {
      $('#email-error').show();
      emailError = false;
      return false;
    } else if (regex.test(email) === false) {
      $('#email-error').show();
      emailError = false;
      return false;
    } else {
      $('#email-error').hide();
    }
  };

  $('#submit').on('click', (element) => {
    validateName();
    validateEmail();
    if (nameError === true && emailError === true) {
      return true;
    } else {
      return false;
    }
  });
});

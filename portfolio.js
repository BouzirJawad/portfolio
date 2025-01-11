//for testing

  $(document).ready(function () {
    const backToTop = $("#backToTop");

    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        backToTop.fadeIn();
      } else {
        backToTop.fadeOut();
      }
    });

    backToTop.click(function () {
      $("html, body").animate({ scrollTop: 0 }, 100);
      return false; 
    });

    $("#myProjectsButton").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#myProjectsSection").offset().top,
        },
        200
      );
    });

    $(".myContactMeButton").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#myContactMeSection").offset().top,
        },
        200
      );
    });

    new Typed ('.typing1', {
      strings : ['Bouzir', 'Jawad', 'JUUBUU'],
      typeSpeed : 60,
      backSpeed : 30,
      loop : true
    });

    new Typed ('.typing2', {
      strings : ['Bouzir Jawad','JUUBUU', 'Jawad Bouzir'],
      typeSpeed : 60,
      backSpeed : 30,
      loop : true
    });

    new Typed ('.typing3', {
      strings : ['you have any quetions?','go ahead contact me'],
      typeSpeed : 60,
      backSpeed : 30,
      loop : true
    });



    // Handle form submission
    $('form.needs-validation').on('submit', function (event) {
      // Check if form is valid
      if (this.checkValidity() === false) {
        event.preventDefault(); // Prevent form submission
        event.stopPropagation(); // Stop further event bubbling
        $(this).addClass('was-validated'); // Add Bootstrap's validation class
      } else {
        alert('Form submitted successfully!');
      }
    });

    // Optionally, remove validation styling on input change
    $('form.needs-validation .form-control').on('input', function () {
      $(this).removeClass('is-invalid is-valid'); // Remove previous validation classes
      if (this.checkValidity()) {
        $(this).addClass('is-valid'); // Add valid class if input is valid
      } else {
        $(this).addClass('is-invalid'); // Add invalid class if input is invalid
      }
    });
  });

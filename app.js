
$('.loc').hover(
  function(){
    $(this).html("<strong>Location:</strong> Your house?!");
  },
  function() {
    $(this).html("<strong>Location:</strong> Austin Adoption Center");
});

// Adds a pet to the page with user input on button click
$('#add-pet').on('click', function() {
  // Grab info from the form
  var $name = $('#pet-name');
  var $species = $('#pet-species');
  var $notes = $('#pet-notes');

  //Assemble the HTML of our new element with the above variables
  var $newPet = $(
      '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name.val() +
      '</p><p><strong>Species:</strong> ' + $species.val() +
      '</p><p><strong>Notes:</strong> ' + $notes.val() +
      '</p><span class="close">&times;</span></div></section>'
    );

  // Attach the new element to the page
  $('#posted-pets').append($newPet);

  // Reset form fields
  $name.val("");
  $species.val("Dog");
  $notes.val("");
});

// Puppy images fade in
$('img').css('display', 'none').fadeIn(1600);


$('.card').on('click', function() {
  $(this).toggleClass('selected');
});

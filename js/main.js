(function($){

  // Keep track of where we are in the story
  var counter = 0;

  // Story contains all the actions that bring the slides to life
  // It contains the narrative in both directions: forward and reverse.
  // - feel free to explain to me how this could be accomplished with only one array
  // - or to avoid eval?
  var story = {
    'forward': [

      // Slide 1
      "scrollTo('#s1'); ",

      // Slide 2
      "scrollTo('#s2'); ",

      // Slide 3
      "scrollTo('#s3'); ",

      // Slide 4
      "scrollTo('#s4'); ",
      "$('#s4 .slinky').toggleClass('hide'); ",
      "$('#s4 .slinky').toggleClass('half'); ",
      "$('#s4 p.slinky-desc').toggleClass('hide'); "+
      "$('#s4 p.intro').toggleClass('dim'); ",
      "$('#s4 .slinky').toggleClass('move half full'); ",

      // the beginning
      "scrollTo('#die-undliche-gesichte'); "

    ],
    'reverse': [

      // Slide 1
      "",

      // Slide 2
      "scrollTo('#s1'); ",

      // Slide 3
      "scrollTo('#s2'); ",

      // Slide 4
      "scrollTo('#s3'); ",
      "$('#s4 .slinky').toggleClass('hide'); ",
      "$('#s4 .slinky').toggleClass('half'); ",
      "$('#s4 p.slinky-desc').toggleClass('hide'); "+
      "$('#s4 p.intro').toggleClass('dim'); ",
      "$('#s4 .slinky').toggleClass('move half full'); ",

      // the beginning
      "scrollTo('#s4'); "

    ]
  };

  // Set up the arrow keys to progress through the story
  $(document).keyup(function(e) {
    // counter is incremented differently depending on direction
    // so that the two arrays with forward/reverse steps can be
    // kept in sync and maintained in the most sane fashion.
    if (e.keyCode == 37) { storyBack(); }
    if (e.keyCode == 39) { storyNext(); }
  });

  // Set up touch nav to progress through the story
  $('.touch nav .back').bind('touchstart', function() { storyBack(); });
  $('.touch nav .next').bind('touchstart', function() { storyNext(); });

  /**
   * Advances story one step
   */
  function storyNext() {
    eval(story.forward[++counter]);
  }

  /**
   * Advances story *back* one step
   */
  function storyBack() {
    eval(story.reverse[counter--]);
  }

  /**
   * Scrolls to a particular anchor
   */
  function scrollTo(target){
    var element = $(target);
    $('html,body').animate({scrollTop: element.offset().top - 25}, 'fast');
  }

})(jQuery);

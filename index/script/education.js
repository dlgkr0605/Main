  $(function () {
    const photoList = [
      'img/교육/education1.jpg',
      'img/교육/education2.jpg',
      'img/교육/education3.jpg',
      'img/교육/education4.jpg'
    ];
    let current = 0;

    $('.slide-arrow').on('click', function (e) {
      e.preventDefault();
      current = (current + 1) % photoList.length;
      $('#main-edu-image').attr('src', photoList[current]);
    });
  });
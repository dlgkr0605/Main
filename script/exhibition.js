$(function () {
  const $scroll = $('.exh-scroll');
  const scrollAmount = 320;

  // 버튼 이동
  $('.scroll-btn.next').on('click', function () {
    $scroll.animate({ scrollLeft: $scroll.scrollLeft() + scrollAmount }, 300);
  });

  $('.scroll-btn.prev').on('click', function () {
    $scroll.animate({ scrollLeft: $scroll.scrollLeft() - scrollAmount }, 300);
  });

  // 드래그 이동
  let isDragging = false;
  let startX, scrollLeft;

  $scroll.on('mousedown', function (e) {
    isDragging = true;
    startX = e.pageX - $scroll.offset().left;
    scrollLeft = $scroll.scrollLeft();
    $scroll.addClass('dragging');
  });

  $(document).on('mouseup', function () {
    isDragging = false;
    $scroll.removeClass('dragging');
  });

  $scroll.on('mousemove', function (e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - $scroll.offset().left;
    const walk = (x - startX) * 1.5;
    $scroll.scrollLeft(scrollLeft - walk);
  });

  $scroll.on('mouseleave', function () {
    isDragging = false;
    $scroll.removeClass('dragging');
  });
});


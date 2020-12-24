$(document).ready(function () {
  // Section One
  $(".menu-button").click(() => {
    $("header").toggleClass("active-header");
    $(".burger-menu").toggleClass("toggle");
  });

  //   All Section
  $(".slick-carousel-main").slick({
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  //   Section Two
  let init = 1;

  const changeImage = () => {
    if (init === 1) {
      $(".initiative--1 img").css("animation", "appearImage 0.5s ease-out");
      $(".initiative--2 img").css("animation", "appearImage 0.5s ease-out");
      setTimeout(() => {
        $(".initiative--1 img").attr(
          "src",
          "./assets/images/initiative_two.png"
        );
        $(".initiative--2 img").attr(
          "src",
          "./assets/images/initiative_one.png"
        );
        $(".initiative--1 img").css("animation", "");
        $(".initiative--2 img").css("animation", "");
      }, 200);
      init = 2;
    } else {
      $(".initiative--1 img").css("animation", "appearImage 0.5s ease-out");
      $(".initiative--2 img").css("animation", "appearImage 0.5s ease-out");
      setTimeout(() => {
        $(".initiative--1 img").attr(
          "src",
          "./assets/images/initiative_one.png"
        );
        $(".initiative--2 img").attr(
          "src",
          "./assets/images/initiative_two.png"
        );
        $(".initiative--1 img").css("animation", "");
        $(".initiative--2 img").css("animation", "");
      }, 200);
      init = 1;
    }
  };

  $(".car-in .button-car button").click(() => {
    changeImage();
  });

  //   Section Three
  let index = 1;

  const showSlide = (n) => {
    const slides = $(".content");

    if (n > slides.length) {
      index = 1;
    }
    if (n < 1) {
      index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[index - 1].style.display = "block";
  };

  showSlide(index);

  $("#section-three .next").click(() => {
    showSlide((index += -1));
  });
  $("#section-three .prev").click(() => {
    showSlide((index += 1));
  });
});

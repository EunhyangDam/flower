$(() => {
  /** 웹디자인실기C2 */
  const c2 = {
    init() {
      this.header();
      this.section1();
      this.section2();
      this.modal();
    },
    header() {
      function menuOpen(_this) {
        $(".main-btn").removeClass("on");
        $(".sub").stop().slideUp(150);
        _this.addClass("on");
        _this.next().stop().slideDown(300);
      }
      $(".main-btn").on({
        mouseenter() {
          menuOpen($(this));
        },
        focusin() {
          menuOpen($(this));
        },
      });
      $("#gnb").on({
        mouseleave() {
          $(".main-btn").removeClass("on");
          $(".sub").stop().slideUp(300);
        },
      });
    },
    section1() {
      cnt = -1;
      function mainSlide() {
        if (cnt >= 3) {
          cnt = 0;
        }
        $(".slide").css({
          zIndex: 1,
          opacity: 1,
        });
        $(".slide").eq(cnt).css({ zIndex: 3 }).animate({ opacity: 0 }, 1000);
        $(".slide")
          .eq(cnt + 1 >= 3 ? 0 : cnt + 1)
          .css({ zIndex: 2 });
      }
      function countUp() {
        cnt++;
        mainSlide();
        console.log(cnt);
        console.log(cnt + 1 >= 3 ? 0 : cnt + 1);
      }
      setInterval(countUp, 3000);
    },
    section2() {
      $(".modal-open").on({
        click() {
          $(".modal").addClass("on");
        },
      });
    },
    modal() {
      $(".modal-close").on({
        click() {
          $(".modal").removeClass("on");
        },
      });
    },
  };
  c2.init();
});

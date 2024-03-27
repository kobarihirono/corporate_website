const previousWidth = $(window).width();

function changeIcon() {
  const currentWidth = $(window).width();
  const image = $("#js-responsive-icon");

  // 640pxを跨ぐときだけ画像を変更する
  if (
    (previousWidth < 640 && currentWidth >= 640) ||
    (previousWidth >= 640 && currentWidth < 640)
  ) {
    if (currentWidth < 640) {
      image.attr("src", "/assets/img/icon/sns-btn_sp.png");
    } else {
      image.attr("src", "/assets/img/icon/sns-btn_pc.png");
    }
  }

  previousWidth = currentWidth;
}

$(document).ready(changeIcon);
$(window).resize(changeIcon);
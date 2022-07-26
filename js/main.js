$(function () {
  let mobileCode = window.matchMedia("all and (max-width: 767px)")
  let webCode = window.matchMedia("all and (min-width: 768px)")
  if (mobileCode.matches) {
    mobile()
  } else if (webCode.matches) {
    web()
  }
  //첫 디바이스로 진입 시 각 사이즈에 맞는 반응형 코드 적용

  ////////////////////////////----------------공용 코드 시작----------------////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  $(".search_btn").on("click", function () {
    $(".control_search").slideDown().css("display", "flex")
  })
  $(".search_close_btn").on("click", function () {
    $(this).parent().slideUp()
  })
  // header 검색창 on/off

  $(".top_btn").on("click", function (e) {
    e.preventDefault()
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    )
  })
  //scrollTop

  $(window).on("scroll", function () {
    let height = $(".main_visual").height()
    let scr = $(window).scrollTop()

    if (scr + 100 >= height) {
      $(".header").addClass("header_bg")
      $(".top_btn").fadeIn()
    } else {
      $(".header").removeClass("header_bg")
      $(".top_btn").fadeOut()
    }
    // header 스크롤 fixed & 탑버튼

    let height02 = height + $(".header").height()
    let height03 = height02 + $(".collection .col").height()
    let height04 = height03 + $(".collection .col").height()

    if (scr + 300 >= height04) {
      $(".col03 .text_side").addClass("text_move")
      setTimeout(function () {
        $(".col03 .img_middle").addClass("middle_move")
      }, 300)
      setTimeout(function () {
        $(".col03 .img_small").addClass("small_move")
      }, 600)
    } else if (scr + 400 >= height03) {
      $(".col02 .text_side").addClass("text_move")
      setTimeout(function () {
        $(".col02 .img_middle").addClass("middle_move")
      }, 300)
      setTimeout(function () {
        $(".col02 .img_small").addClass("small_move")
      }, 600)
    } else if (scr + 500 >= height02) {
      $(".col01 .text_side").addClass("text_move")
      setTimeout(function () {
        $(".col01 .img_middle").addClass("middle_move")
      }, 300)
      setTimeout(function () {
        $(".col01 .img_small").addClass("small_move")
      }, 600)
    } else {
      $(".col .img_middle").removeClass("middle_move")
      $(".col .img_small").removeClass("small_move")
      $(".col .text_side").removeClass("text_move")
    }
    // collection 요소 스크롤 값에 따른 애니메이션

    if (scr >= 4100) {
      $(".news .news_item01").addClass("news_move")
      setTimeout(function () {
        $(".news .news_item02").addClass("news_move")
      }, 200)
      setTimeout(function () {
        $(".news .news_item").addClass("news_move")
      }, 400)
    } else {
      $(".news .news_item").removeClass("news_move")
    }
    // news 요소 스크롤 값에 따른 애니메이션

    if (scr >= 5600) {
      $(".find_of_retailer .img_side").addClass("find_of_retailer_move")
      setTimeout(function () {
        $(".find_of_retailer .txt_side").addClass("find_of_retailer_move")
      }, 400)
    } else {
      $(".find_of_retailer .txt_side").removeClass("find_of_retailer_move")
      $(".find_of_retailer .img_side").removeClass("find_of_retailer_move")
    }
    // find_of_retailer 요소 스크롤 값에 따른 애니메이션
  })

  let video = $(".video")
  video.YTPlayer({
    videoURL: "https://youtu.be/jkFZh_2lk1c",
    containment: ".main_visual",
    useOnMobile: true,
    autoPlay: true,
    mute: true,
    showControls: false,
    playOnlyIfVisible: false,
    stopMovieOnBlur: false,
    startAt: 0,
    stopAt: 60,
    loop: false,
  })
  //유튜브 동영상 플러그인 ytplayer 구동

  let nowPlaying = false
  //재생 완전종료 상태변수

  video.on("YTPStart", function () {
    if (!nowPlaying) {
      $("circle").addClass("circle")
      nowPlaying = true
    }
  })
  //동영상 첫 구동 이벤트

  function play() {
    video.YTPPlay()
    $(".circle_play").css("display", "none")
    $(".circle_pause").css("display", "block")
  }
  //동영상 재생 시작 함수

  $(".play_btn").on("click", function () {
    let ytState = video.prop("state")
    //동영상 재생 상태변수

    if (ytState == 1 || ytState == 0) {
      video.YTPPause()
      $("circle").addClass("circle_stop")
      $(".circle_play").css("display", "block")
      $(".circle_pause").css("display", "none")
    } else if (ytState == 2 && nowPlaying) {
      $("circle").removeClass("circle_stop")
      play()
    } else if (ytState == 2 && !nowPlaying) {
      $("circle").removeClass("circle")
      void $("circle").outerWidth()
      $("circle").addClass("circle")
      play()
      nowPlaying = true
    }
  })
  //재생or일시정지 버튼 이벤트

  video.on("YTPEnd", function () {
    nowPlaying = false
    $(".circle_play").css("display", "block")
    $(".circle_pause").css("display", "none")
  })
  //동영상 완전종료

  //////////////////////-------------------Web & Tablet code 시작----------------------//////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  function web() {
    $(".world_of_seiko a").on("mouseover mouseout", function () {
      $(".world_of_seiko a").removeClass("wos_move")
      $(".world_of_seiko a").not(this).addClass("wos_move")
    })
    //world_of_seiko hover 효과

    function newsWebSlide() {
      let eleWidth = $(".news .news_slider a~a").outerWidth(true)
      let slide = $(".news_slider")

      function right() {
        let all = slide.width()
        let current = parseInt(slide.css("left"))
        if (slide.is(":animated")) {
          return //중복 클릭으로 인한 애니메이션 버그 방지
        } else if (current > eleWidth * -2 && all == 1352) {
          //tablet ver
          slide.stop().animate({ left: current - eleWidth })
        } else if (current > eleWidth * -3 && all == 1656) {
          //web ver
          slide.stop().animate({ left: current - eleWidth })
        }
      }

      function left() {
        let all = slide.width()
        let current = parseInt(slide.css("left"))
        if (slide.is(":animated")) {
          return //중복 클릭으로 인한 애니메이션 버그 방지
        } else if (current < 0 && all == 1352) {
          //tablet ver
          slide.stop().animate({ left: current + eleWidth })
        } else if (current < 0 && all == 1656) {
          //web ver
          slide.stop().animate({ left: current + eleWidth })
        }
      }

      $(".news .arrow_right").on("click", function () {
        right()
      })
      $(".news .arrow_left").on("click", function () {
        left()
      })
    }
    //newsWebSlide()
    newsWebSlide()
  } //web_code

  //////////////////////////--------------------Mobile code 시작-------------////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  function mobile() {
    //////////////////////
    brandSlide()
    newsSlide()
    wosSlide()
    //////////////////////

    function brandSlide() {
      let eleWidth = $(".brands .brands_slide a").innerWidth() //padding을 포함한 width
      let playOn = false // bannerslider의 동작 상태를 관리하는 변수
      let direction // 좌우 방향버튼 변수
      let bannerAuto //setInterval함수 제어를 위한 변수
      let indi = $(".brands .indicator_box span") // indicator
      let slide = $(".brands_slide")

      indi.click(function () {
        $(this).css("backgroundColor", "#000")
        indi.not($(this)).css("backgroundColor", "#dedede")
        stop()
        let index = $(this).index()
        if (slide.is(":animated")) {
          return
        } else {
          slide.stop().animate({ left: eleWidth * index * -1 })
        }
        play()
      })

      function indiFocus() {
        let current = parseInt(slide.css("left"))
        if (direction == "right") {
          switch (current) {
            case 0:
              indi.not(indi.eq(1)).css("backgroundColor", "#dedede")
              indi.eq(1).css("backgroundColor", "#000")
              break
            case eleWidth * -1:
              indi.not(indi.eq(2)).css("backgroundColor", "#dedede")
              indi.eq(2).css("backgroundColor", "#000")
              break
            case eleWidth * -2:
              indi.not(indi.eq(3)).css("backgroundColor", "#dedede")
              indi.eq(3).css("backgroundColor", "#000")
              break
            case eleWidth * -3:
              indi.not(indi.eq(0)).css("backgroundColor", "#dedede")
              indi.eq(0).css("backgroundColor", "#000")
              break
          }
        } else if (direction == "left") {
          switch (current) {
            case 0:
              indi.not(indi.eq(3)).css("backgroundColor", "#dedede")
              indi.eq(3).css("backgroundColor", "#000")
              break
            case eleWidth * -1:
              indi.not(indi.eq(0)).css("backgroundColor", "#dedede")
              indi.eq(0).css("backgroundColor", "#000")
              break
            case eleWidth * -2:
              indi.not(indi.eq(1)).css("backgroundColor", "#dedede")
              indi.eq(1).css("backgroundColor", "#000")
              break
            case eleWidth * -3:
              indi.not(indi.eq(2)).css("backgroundColor", "#dedede")
              indi.eq(2).css("backgroundColor", "#000")
              break
            case eleWidth * -4:
              indi.not(indi.eq(3)).css("backgroundColor", "#dedede")
              indi.eq(3).css("backgroundColor", "#000")
              break
          }
        }
      } //현재 슬리이드에 따라 indicator의 색 변화

      function play() {
        if (!playOn) {
          playOn = true
          bannerAuto = setInterval(function () {
            right()
          }, 4000)
        }
      }

      function stop() {
        if (playOn) {
          playOn = false
          clearInterval(bannerAuto)
        }
      }

      function right() {
        stop()
        direction = "right"
        let current = parseInt(slide.css("left"))
        let end = eleWidth * -3

        if (slide.is(":animated")) {
          return //중복 클릭으로 인한 애니메이션 버그 방지
        } else if (current <= end) {
          slide.stop().animate({ left: current - eleWidth }, function () {
            slide.css("left", "0")
          })
        } else {
          slide.stop().animate({ left: current - eleWidth })
        }
        indiFocus()
        play()
      }

      function left() {
        stop()
        direction = "left"
        let current = parseInt(slide.css("left"))
        let start = eleWidth * -4

        if (slide.is(":animated")) {
          return //중복 클릭으로 인한 애니메이션 버그 방지
        } else if (current == 0) {
          slide.animate({ left: start }, 0, function () {
            slide.stop().animate({ left: eleWidth * -3 })
          })
        } else {
          slide.stop().animate({ left: current + eleWidth })
        }
        indiFocus()
        play()
      }

      $(".brands .right_arrow").on("click", function () {
        right()
      })
      $(".brands .left_arrow").on("click", function () {
        left()
      })
      play()

      let startX = 0
      let endX = 0

      $(".brands_slide").on("touchstart", function (e) {
        startX = e.originalEvent.touches[0].screenX
      })

      $(".brands_slide").on("touchend", function (e) {
        endX = e.originalEvent.changedTouches[0].screenX
        if (startX > endX) {
          right()
        } else if (startX < endX) {
          left()
        }
      })
    } //brandSlide

    function newsSlide() {
      let indi = $(".news .indicator_box span") //indicator
      let content = $(".news .news_slider .news_item") //slide
      let i = 0
      let playOn = false
      let rollAuto
      content.hide()
      indi.click(function () {
        let index = indi.index(this) // let index = $(this).index()
        if (indi.state) {
          //객체.속성
          stop()
          indiOff(indi.state)
          indiOn(this)
          $(content.state).stop().fadeOut(200)
          $(content[index]).stop().delay(200).fadeIn(500)
          i = index
          play()
        } else {
          indiOn(this)
          $(content[index]).fadeIn(500)
          play()
        }
        indi.state = this
        content.state = content[index]
        return false
      }) //click_event

      $(".news .left_arrow").click(function () {
        i--
        if (i < 0) {
          i = indi.length - 1
        }
        indi[i].click()
      })

      $(".news .right_arrow").click(function () {
        i++
        if (i > indi.length - 1) {
          i = 0
        }
        indi[i].click()
      })

      function play() {
        if (!playOn) {
          playOn = true
          rollAuto = setInterval(function () {
            $(".news .right_arrow").click()
          }, 4000)
        }
      }

      function stop() {
        if (playOn) {
          playOn = false
          clearInterval(rollAuto)
        }
      }

      function indiOn(p) {
        $(p).css("backgroundColor", "#000")
      }
      function indiOff(p) {
        $(p).css("backgroundColor", "#dedede")
      }

      let startX = 0
      let endX = 0

      $(".news_slider").on("touchstart", function (e) {
        startX = e.originalEvent.touches[0].screenX
      })

      $(".news_slider").on("touchend", function (e) {
        endX = e.originalEvent.changedTouches[0].screenX
        if (startX > endX) {
          $(".news .right_arrow").click()
        } else if (startX < endX) {
          $(".news .left_arrow").click()
        }
      })

      indi[0].click()
    } //newsSlide()

    function wosSlide() {
      let scrollWidth = $(".wos a").outerWidth(true)
      let startX = 0
      let endX = 0

      $(".wos").on("touchstart", function (e) {
        startX = e.originalEvent.touches[0].screenX
      })

      $(".wos").on("touchend", function (e) {
        endX = e.originalEvent.changedTouches[0].screenX
        if (startX > endX) {
          $(this)
            .stop()
            .animate({
              left: scrollWidth * -1,
            })
        } else if (startX < endX) {
          $(this).stop().animate({
            left: 0,
          })
        }
      })
    } //wosSlide()
  }
})

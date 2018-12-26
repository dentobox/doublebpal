"use strict";
function _classCallCheck(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, n) {
  for (var t = 0; t < n.length; t++) {
    var a = n[t];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, n, t) {
  return (
    n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), e
  );
}
function _classCallCheck(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, n) {
  for (var t = 0; t < n.length; t++) {
    var a = n[t];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, n, t) {
  return (
    n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), e
  );
}
function _classCallCheck(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, n) {
  for (var t = 0; t < n.length; t++) {
    var a = n[t];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, n, t) {
  return (
    n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), e
  );
}
function _classCallCheck(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, n) {
  for (var t = 0; t < n.length; t++) {
    var a = n[t];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, n, t) {
  return (
    n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), e
  );
}
function _classCallCheck(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
var Ajax =
    /* */
    (function() {
      function s() {
        _classCallCheck(this, s);
      }
      return (
        _createClass(s, null, [
          {
            key: "x",
            value: function e() {
              var n;
              return (n = window.XMLHttpRequest
                ? new XMLHttpRequest()
                : new ActiveXObject("Microsoft.XMLHTTP"));
            }
          },
          {
            key: "send",
            value: function e(n, t, a, i, r) {
              void 0 === r && (r = !0);
              var o = s.x();
              o.open(a, n, r),
                (o.onreadystatechange = function() {
                  4 == o.readyState && t(o.responseText);
                }),
                "POST" == a &&
                  o.setRequestHeader(
                    "Content-type",
                    "application/x-www-form-urlencoded"
                  ),
                o.send(i);
            }
          },
          {
            key: "get",
            value: function e(n, t, a, i) {
              var r = [];
              for (var o in t)
                r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
              s.send(
                n + (r.length ? "?" + r.join("&") : ""),
                a,
                "GET",
                null,
                i
              );
            }
          },
          {
            key: "post",
            value: function e(n, t, a, i) {
              var r = [];
              for (var o in t)
                r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
              s.send(n, a, "POST", r.join("&"), i);
            }
          }
        ]),
        s
      );
    })(),
  Utils =
    /* */
    (function() {
      function e() {
        _classCallCheck(this, e);
      }
      return (
        _createClass(e, null, [
          {
            key: "getMobileOperatingSystem",
            value: function e() {
              var n = navigator.userAgent || navigator.vendor || window.opera; 
              return /windows phone/i.test(n)
                ? "Windows Phone"
                : /android/i.test(n)
                ? "Android" 
                : /iPad|iPhone|iPod/.test(n) && !window.MSStream
                ? "iOS"
                : "unknown";
            }
          },
          {
            key: "getParameterByName",
            value: function e(n, t) {
              t || (t = window.location.href),
                (n = n.replace(/[\[\]]/g, "\\$&"));
              var a,
                i = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)").exec(t);
              return i
                ? i[2]
                  ? decodeURIComponent(i[2].replace(/\+/g, " "))
                  : ""
                : null;
            }
          }
        ]),
        e
      );
    })(),
  PageSettings =
    /* */
    (function() {
      function e() {
        var n = this;
        _classCallCheck(this, e),
          // Toss 유저, 거래량
          (this.RECORDS_URI =
            "https://cafeworks-1539254532108.firebaseio.com/homepage/records.json"),
          $.get(this.RECORDS_URI)
            .done(function(e) {
              n.setRecords(e);
            })
            .fail(function(e) {
              console.log(e);
            }), // ScrollReveal Default Settings
          (window.sr = ScrollReveal({
            duration: 500,
            scale: 1,
            distance: "50px",
            easing: "cubic-bezier(0.0, 0.0, 0.2, 1)"
          })), // ScrollReveal Browser Support 확인 후 실행
          sr.isSupported() && this.setScrollReveal(),
          this.changeHeaderStyle(),
          this.makeSlider(".p2"),
          this.makeSlider(".p4"),
          this.makeSlider(".insurance"),
          this.attachEvent();
      }
      return (
        _createClass(e, [
          {
            key: "attachEvent",
            value: function e() {
              var n = $("#show-banklist-button"),
                t = $("#banklist"),
                a = !1,
                i = n.text();
              n.on("click", function() {
                var e = $(this).offset().top;
                a
                  ? (t.removeClass("show"),
                    t.addClass("hide"),
                    (this.innerText = i),
                    t.one("animationend", function() {
                      t.css("height", void 0);
                    }),
                    null == t.css("animation-name") && t.css("height", "0px"))
                  : (t.removeClass("hide"),
                    t.addClass("show"),
                    (this.innerText = "닫기"),
                    $("html, body")
                      .stop()
                      .animate(
                        { scrollTop: e - parseInt(0.15 * window.innerHeight) },
                        700,
                        "swing"
                      ),
                    null == t.css("animation-name") &&
                      t.css("height", "570px")),
                  (a = !a);
              }),
                $(".cover .downarrow").on("click", function() {
                  $("body").animate({ scrollTop: $(window).height() }, 500);
                });
            }
          },
          {
            key: "setScrollReveal",
            value: function e() {
              var o = this;
              (window.sr = ScrollReveal({
                duration: 500,
                scale: 1,
                distance: "50px",
                easing: "cubic-bezier(0.0, 0.0, 0.2, 1)"
              })),
                sr.reveal(
                  ".cert_image",
                  { distance: "0px", scale: 0.5, delay: 0.15 },
                  80
                ),
                sr.reveal(".psr", { distance: "50px", delay: 0.15 }),
                sr.reveal(".particle", {
                  distance: "300px",
                  scale: 0.1,
                  delay: 750,
                  reset: !0
                }),
                sr.reveal(".sr", {
                  distance: "50px",
                  delay: 0.25,
                  duration: 2e3,
                  opacity: 1,
                  reset: !0,
                  easing: "cubic-bezier(0.0, 0.5, 0.2, 0.8)"
                }),
                sr.reveal(".txtsr", {
                  delay: 0.1,
                  distance: "30px",
                  viewFactor: 0.8
                }),
                sr.reveal(".p7 .logos, .cert", {
                  distance: "60px",
                  delay: 0.25,
                  viewFactor: 0.8
                }),
                sr.reveal(".button", {
                  delay: 0.1,
                  viewFactor: 0.8,
                  scale: 0.5,
                  distance: "0px",
                  duration: 500
                }),
                sr.reveal(
                  ".store-list .item",
                  {
                    origin: "right",
                    viewFactor: 1,
                    distance: "80px",
                    scale: 0.8,
                    reset: !0
                  },
                  50
                ); // 지점 숫자 카운트
              var s = [52, 25, 33, 29, 61],
                c = 0;
              sr.reveal(
                ".banks .item",
                {
                  duration: 750,
                  origin: "right",
                  viewFactor: 0.4,
                  distance: "70px",
                  reset: !0,
                  beforeReset: function e() {
                    c = 0;
                  },
                  beforeReveal: function e(n) {
                    var t = { useEasing: !0, separator: ",", suffix: "곳" },
                      a = n.children[1] ? n.children[1] : void 0,
                      i = a ? a.children[1] : void 0; 
                    // CountUp.js
                    if (void 0 !== i) {
                      var r = new CountUp(i, 0, s[c], 0, 2, t);
                      o.countStart(r), c++;
                    } else console.error("DOM 선택이 잘 못 되었습니다.");
                  }
                },
                120
              ); // 카드 숫자 카운트
              var i = 77400,
                l = [33800, 22200, 21400],
                u = 0;
              sr.reveal(".cards .badge", {
                duration: 750,
                origin: "left",
                viewFactor: 0.4,
                distance: "70px",
                reset: !0
              }),
                sr.reveal(".cards .total", {
                  duration: 750,
                  origin: "left",
                  viewFactor: 0.4,
                  distance: "70px",
                  reset: !0,
                  beforeReveal: function e(n) {
                    var t,
                      a = new CountUp(n, 0, i, 0, 2, {
                        useEasing: !0,
                        separator: ",",
                        suffix: "원"
                      });
                    o.countStart(a);
                  }
                }),
                sr.reveal(
                  ".cards .item",
                  {
                    duration: 750,
                    origin: "left",
                    viewFactor: 0.4,
                    distance: "70px",
                    reset: !0,
                    beforeReset: function e() {
                      u = 0;
                    },
                    beforeReveal: function e(n) {
                      var t = { useEasing: !0, separator: ",", suffix: "원" },
                        a = n.children[1] ? n.children[1] : void 0,
                        i = a ? a.children[1] : void 0; 
                      // CountUp.js
                      if (void 0 !== i) {
                        var r = new CountUp(i, 0, l[u], 0, 2, t);
                        o.countStart(r), u++;
                      } else console.error("DOM 선택이 잘 못 되었습니다.");
                    }
                  },
                  120
                );
            }
          },
          {
            key: "setRecords",
            value: function e(c) {
              var l = this;
              // Toss 기록 카운트
              sr.reveal(
                ".records",
                {
                  distance: "50px",
                  reset: !0,
                  beforeReveal: function e(n) {
                    var t = document.getElementById("user"),
                      a = document.getElementById("transaction"),
                      i = { useEasing: !0, separator: ",", suffix: "만" },
                      r = { useEasing: !0, suffix: "조 원" },
                      o = new CountUp(t, 0, c.download, 0, 2.5, i),
                      s = new CountUp(a, 0, c.transaction, 0, 2, r);
                    l.countStart(o), l.countStart(s);
                  }
                },
                100
              ),
                $(".p1 .desc").text(c.update_date + " 기준");
            }
          },
          {
            key: "countStart",
            value: function e(n) {
              n.error ? console.error(n.error) : n.start();
            }
          },
          {
            key: "changeHeaderStyle",
            value: function e() {
              var t = $("#navibar"),
                a = $("#mobile-appdown-button"),
                i = document.documentElement,
                r = window;
              window.addEventListener("scroll", function(e) {
                var n;
                20 < (r.pageYOffset || i.scrollTop) - (i.clientTop || 0)
                  ? (t.removeClass("top"), a.addClass("scrolled"))
                  : (t.addClass("top"), a.removeClass("scrolled"));
              });
            }
          },
          {
            key: "makeSlider",
            value: function e(i) {
              var n = $(i + " .features .item"),
                r = $(i + " .screens .item"),
                o = $(i + " .desc .con");
              n.each(function(a, e) {
                $(e).on("click", function(e) {
                  var n = $(i + " .features .item.active"),
                    t = $(i + " .screens .item.active");
                  r.each(function(e, n) {
                    $(n).removeClass("active"), $(n).css("z-index", "1");
                  }),
                    o.each(function(e, n) {
                      $(n).removeClass("active");
                    }),
                    t && t.css("z-index", "2"),
                    n && n.removeClass("active"),
                    $(this).addClass("active"),
                    $(r[a]).addClass("active"),
                    $(r[a]).css("z-index", "3"),
                    $(o[a]).addClass("active");
                });
              });
            }
          }
        ]),
        e
      );
    })(),
  ReceivingAppLink =
    /* */
    (function() {
      function e() {
        _classCallCheck(this, e), this.attachEvent();
      }
      return (
        _createClass(e, [
          {
            key: "autoHypenPhone",
            value: function e(n) {
              var t = "";
              return (n = n.replace(/[^0-9]/g, "")).length < 4
                ? n
                : n.length < 7
                ? ((t += n.substr(0, 3)), (t += "-"), (t += n.substr(3)))
                : n.length < 11
                ? ((t += n.substr(0, 3)),
                  (t += "-"),
                  (t += n.substr(3, 3)),
                  (t += "-"),
                  (t += n.substr(6)))
                : ((t += n.substr(0, 3)),
                  (t += "-"),
                  (t += n.substr(3, 4)),
                  (t += "-"),
                  (t += n.substr(7)));
              return n;
            }
          },
          {
            key: "attachEvent",
            value: function e() {
              var a = this,
                n = this;
              $(".applink-input").each(function(e, t) {
                $(t).attr("maxlength", "13"),
                  t.addEventListener("keydown", function(e) {
                    13 == e.keyCode && (e.preventDefault(), a.sendLink($(t)));
                  }),
                  t.addEventListener("keyup", function(e) {
                    var n = a.autoHypenPhone(t.value);
                    t.value = n;
                  });
              }),
                $(".receiving-applink-button").each(function(e, n) {
                  n.addEventListener("click", function(e) {
                    e.preventDefault(), a.sendLink($(n).prev());
                  });
                });
            }
          },
     

          {
            key: "appendHTML",
            value: function e(n) {
              var t =
                '\n      <div class="notice">\n        <div class="n_wrapper">\n          <div class="closebutton">\n            <img src="new_assets/closebutton.png"/>\n          </div>\n          <div class="n_title">\n            {Title}\n          </div>\n          <div class="n_date">\n            {date}\n          </div>\n          <div class="line"></div>\n          <div class="n_content">\n            {content}\n          </div>\n        </div>\n        <div class="dimm"></div>\n      </div>\n    ';
              $("body").append(t);
              var a = $(".notice .n_title"),
                i = $(".notice .n_date"),
                r = $(".notice .n_content");
              a.html(n.title),
                i.html(n.date),
                r.html(n.content),
                this.attachEvent();
            }
          },
          {
            key: "attachEvent",
            value: function e() {
              var n = $(".notice .closebutton"),
                t = $(".notice");
              n.on("click", function() {
                t.remove();
              });
            }
          }
        ]),
        e
      );
    })(),
  ScrollByPageNum = function e() {
    _classCallCheck(this, e);
    var n = Utils.getParameterByName("page"),
      t = $(".p" + n),
      a = 1e3,
      i = 0;
    t.offset() && (i = t.offset().top),
      window.innerWidth <= 768 && ((i -= 80), (a = 0)),
      void 0 !== t &&
        0 !== i &&
        $("html, body")
          .stop()
          .animate({ scrollTop: i }, a, "swing");
  };
window.onload = function() {
  new Notice(),
    new PageSettings(),
    new ReceivingAppLink(),
    new ScrollByPageNum();
};

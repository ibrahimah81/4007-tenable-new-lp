//add class to body
document.body.classList.add('tenable-products');
/*! Magnific Popup - v0.9.6 - 2013-10-01
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function (e) { var t, n, i, o, r, a, s, l = "Close", c = "BeforeClose", d = "AfterClose", u = "BeforeAppend", p = "MarkupParse", f = "Open", m = "Change", g = "mfp", v = "." + g, h = "mfp-ready", C = "mfp-removing", y = "mfp-prevent-close", w = function () { }, b = !!window.jQuery, I = e(window), x = function (e, n) { t.ev.on(g + e + v, n) }, k = function (t, n, i, o) { var r = document.createElement("div"); return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r }, T = function (n, i) { t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i])) }, E = function () { (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus() }, S = function (n) { return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn }, P = function () { e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t) }, _ = function (n) { if (!e(n).hasClass(y)) { var i = t.st.closeOnContentClick, o = t.st.closeOnBgClick; if (i && o) return !0; if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0; if (n === t.content[0] || e.contains(t.content[0], n)) { if (i) return !0 } else if (o && e.contains(document, n)) return !0; return !1 } }, O = function () { var e = document.createElement("p").style, t = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== e.transition) return !0; for (; t.length;)if (t.pop() + "Transition" in e) return !0; return !1 }; w.prototype = { constructor: w, init: function () { var n = navigator.appVersion; t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = O(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document.body), o = e(document), t.popupsCache = {} }, open: function (n) { var i; if (n.isObj === !1) { t.items = n.items.toArray(), t.index = 0; var r, s = n.items; for (i = 0; s.length > i; i++)if (r = s[i], r.parsed && (r = r.el[0]), r === n.el[0]) { t.index = i; break } } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0; if (t.isOpen) return t.updateItemHTML(), void 0; t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + v, function () { t.close() }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + v, function (e) { _(e.target) && t.close() }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading)); var l = e.magnificPopup.modules; for (i = 0; l.length > i; i++) { var c = l[i]; c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t) } T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function (e, t, n, i) { n.close_replaceWith = S(i.type) }), a += " mfp-close-btn-in") : t.wrap.append(S())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: I.scrollTop(), position: "absolute" }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: o.height(), position: "absolute" }), t.st.enableEscapeKey && o.on("keyup" + v, function (e) { 27 === e.keyCode && t.close() }), I.on("resize" + v, function () { t.updateSize() }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a); var d = t.wH = I.height(), u = {}; if (t.fixedContentPos && t._hasScrollBar(d)) { var m = t._getScrollbarSize(); m && (u.paddingRight = m) } t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : u.overflow = "hidden"); var g = t.st.mainClass; return t.isIE7 && (g += " mfp-ie7"), g && t._addClassToMFP(g), t.updateItemHTML(), T("BuildControls"), e("html").css(u), t.bgOverlay.add(t.wrap).prependTo(document.body), t._lastFocusedEl = document.activeElement, setTimeout(function () { t.content ? (t._addClassToMFP(h), E()) : t.bgOverlay.addClass(h), o.on("focusin" + v, function (n) { return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (E(), !1) }) }, 16), t.isOpen = !0, t.updateSize(d), T(f), n }, close: function () { t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function () { t._close() }, t.st.removalDelay)) : t._close()) }, _close: function () { T(l); var n = C + " " + h + " "; if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) { var i = { paddingRight: "" }; t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i) } o.off("keyup" + v + " focusin" + v), t.ev.off(v), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d) }, updateSize: function (e) { if (t.isIOS) { var n = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * n; t.wrap.css("height", i), t.wH = i } else t.wH = e || I.height(); t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize") }, updateItemHTML: function () { var n = t.items[t.index]; t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index)); var i = n.type; if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) { var o = t.st[i] ? t.st[i].markup : !1; T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0 } r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder"); var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]); t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange") }, appendContent: function (e, n) { t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(S()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content) }, parseEl: function (n) { var i = t.items[n], o = i.type; if (i = i.tagName ? { el: e(i) } : { data: i, src: i.src }, i.el) { for (var r = t.types, a = 0; r.length > a; a++)if (i.el.hasClass("mfp-" + r[a])) { o = r[a]; break } i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href")) } return i.type = o || t.st.type || "inline", i.index = n, i.parsed = !0, t.items[n] = i, T("ElementParse", i), t.items[n] }, addGroup: function (e, n) { var i = function (i) { i.mfpEl = this, t._openClick(i, e, n) }; n || (n = {}); var o = "click.magnificPopup"; n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i))) }, _openClick: function (n, i, o) { var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick; if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) { var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn; if (a) if (e.isFunction(a)) { if (!a.call(t)) return !0 } else if (a > I.width()) return !0; n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o) } }, updateStatus: function (e, i) { if (t.preloader) { n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading); var o = { status: e, text: i }; T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) { e.stopImmediatePropagation() }), t.container.addClass("mfp-s-" + e), n = e } }, _addClassToMFP: function (e) { t.bgOverlay.addClass(e), t.wrap.addClass(e) }, _removeClassFromMFP: function (e) { this.bgOverlay.removeClass(e), t.wrap.removeClass(e) }, _hasScrollBar: function (e) { return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height()) }, _parseMarkup: function (t, n, i) { var o; i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function (e, n) { if (void 0 === n || n === !1) return !0; if (o = e.split("_"), o.length > 1) { var i = t.find(v + "-" + o[0]); if (i.length > 0) { var r = o[1]; "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n) } } else t.find(v + "-" + e).html(n) }) }, _getScrollbarSize: function () { if (void 0 === t.scrollbarSize) { var e = document.createElement("div"); e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e) } return t.scrollbarSize } }, e.magnificPopup = { instance: null, proto: w.prototype, modules: [], open: function (t, n) { return P(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t) }, close: function () { return e.magnificPopup.instance && e.magnificPopup.instance.close() }, registerModule: function (t, n) { n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, e.fn.magnificPopup = function (n) { P(); var i = e(this); if ("string" == typeof n) if ("open" === n) { var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup, a = parseInt(arguments[1], 10) || 0; r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({ mfpEl: o }, i, r) } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1)); else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n); return i }; var z, M, B, H = "inline", L = function () { B && (M.after(B.addClass(z)).detach(), B = null) }; e.magnificPopup.registerModule(H, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { t.types.push(H), x(l + "." + H, function () { L() }) }, getInline: function (n, i) { if (L(), n.src) { var o = t.st.inline, r = e(n.src); if (r.length) { var a = r[0].parentNode; a && a.tagName && (M || (z = o.hiddenClass, M = k(z), z = "mfp-" + z), B = r.after(M).detach().removeClass(z)), t.updateStatus("ready") } else t.updateStatus("error", o.tNotFound), r = e("<div>"); return n.inlineElement = r, r } return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i } } }); var A, F = "ajax", j = function () { A && i.removeClass(A) }, N = function () { j(), t.req && t.req.abort() }; e.magnificPopup.registerModule(F, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () { t.types.push(F), A = t.st.ajax.cursor, x(l + "." + F, N), x("BeforeChange." + F, N) }, getAjax: function (n) { A && i.addClass(A), t.updateStatus("loading"); var o = e.extend({ url: n.src, success: function (i, o, r) { var a = { data: i, xhr: r }; T("ParseAjax", a), t.appendContent(e(a.data), F), n.finished = !0, j(), E(), setTimeout(function () { t.wrap.addClass(h) }, 16), t.updateStatus("ready"), T("AjaxContentAdded") }, error: function () { j(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src)) } }, t.st.ajax.settings); return t.req = e.ajax(o), "" } } }); var W, R = function (n) { if (n.data && void 0 !== n.data.title) return n.data.title; var i = t.st.image.titleSrc; if (i) { if (e.isFunction(i)) return i.call(t, n); if (n.el) return n.el.attr(i) || "" } return "" }; e.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () { var e = t.st.image, n = ".image"; t.types.push("image"), x(f + n, function () { "image" === t.currItem.type && e.cursor && i.addClass(e.cursor) }), x(l + n, function () { e.cursor && i.removeClass(e.cursor), I.off("resize" + v) }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage) }, resizeImage: function () { var e = t.currItem; if (e && e.img && t.st.image.verticalFit) { var n = 0; t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n) } }, _onImageHasSize: function (e) { e.img && (e.hasSize = !0, W && clearInterval(W), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1)) }, findImageSize: function (e) { var n = 0, i = e.img[0], o = function (r) { W && clearInterval(W), W = setInterval(function () { return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(W), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0) }, r) }; o(1) }, getImage: function (n, i) { var o = 0, r = function () { n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a())) }, a = function () { n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0) }, s = t.st.image, l = i.find(".mfp-img"); if (l.length) { var c = document.createElement("img"); c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), n.img[0].naturalWidth > 0 && (n.hasSize = !0) } return t._parseMarkup(i, { title: R(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (W && clearInterval(W), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i) } } }); var Z, q = function () { return void 0 === Z && (Z = void 0 !== document.createElement("p").style.MozTransform), Z }; e.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (e) { return e.is("img") ? e : e.find("img") } }, proto: { initZoom: function () { var e, n = t.st.zoom, i = ".zoom"; if (n.enabled && t.supportsTransition) { var o, r, a = n.duration, s = function (e) { var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), i = "all " + n.duration / 1e3 + "s " + n.easing, o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, r = "transition"; return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t }, d = function () { t.content.css("visibility", "visible") }; x("BuildControls" + i, function () { if (t._allowZoom()) { if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0; r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () { r.css(t._getOffset(!0)), o = setTimeout(function () { d(), setTimeout(function () { r.remove(), e = r = null, T("ZoomAnimationEnded") }, 16) }, a) }, 16) } }), x(c + i, function () { if (t._allowZoom()) { if (clearTimeout(o), t.st.removalDelay = a, !e) { if (e = t._getItemToZoom(), !e) return; r = s(e) } r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () { r.css(t._getOffset()) }, 16) } }), x(l + i, function () { t._allowZoom() && (d(), r && r.remove(), e = null) }) } }, _allowZoom: function () { return "image" === t.currItem.type }, _getItemToZoom: function () { return t.currItem.hasSize ? t.currItem.img : !1 }, _getOffset: function (n) { var i; i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem); var o = i.offset(), r = parseInt(i.css("padding-top"), 10), a = parseInt(i.css("padding-bottom"), 10); o.top -= e(window).scrollTop() - r; var s = { width: i.width(), height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r }; return q() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s } } }); var D = "iframe", K = "//about:blank", Y = function (e) { if (t.currTemplate[D]) { var n = t.currTemplate[D].find("iframe"); n.length && (e || (n[0].src = K), t.isIE8 && n.css("display", e ? "block" : "none")) } }; e.magnificPopup.registerModule(D, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () { t.types.push(D), x("BeforeChange", function (e, t, n) { t !== n && (t === D ? Y() : n === D && Y(!0)) }), x(l + "." + D, function () { Y() }) }, getIframe: function (n, i) { var o = n.src, r = t.st.iframe; e.each(r.patterns, function () { return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0 }); var a = {}; return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i } } }); var U = function (e) { var n = t.items.length; return e > n - 1 ? e - n : 0 > e ? n + e : e }, G = function (e, t, n) { return e.replace("%curr%", t + 1).replace("%total%", n) }; e.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () { var n = t.st.gallery, i = ".mfp-gallery", r = Boolean(e.fn.mfpFastClick); return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function () { n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function () { return t.items.length > 1 ? (t.next(), !1) : void 0 }), o.on("keydown" + i, function (e) { 37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next() }) }), x("UpdateStatus" + i, function (e, n) { n.text && (n.text = G(n.text, t.currItem.index, t.items.length)) }), x(p + i, function (e, i, o, r) { var a = t.items.length; o.counter = a > 1 ? G(n.tCounter, r.index, a) : "" }), x("BuildControls" + i, function () { if (t.items.length > 1 && n.arrows && !t.arrowLeft) { var i = n.arrowMarkup, o = t.arrowLeft = e(i.replace("%title%", n.tPrev).replace("%dir%", "left")).addClass(y), a = t.arrowRight = e(i.replace("%title%", n.tNext).replace("%dir%", "right")).addClass(y), s = r ? "mfpFastClick" : "click"; o[s](function () { t.prev() }), a[s](function () { t.next() }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a)) } }), x(m + i, function () { t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () { t.preloadNearbyImages(), t._preloadTimeout = null }, 16) }), x(l + i, function () { o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null }), void 0) : !1 }, next: function () { t.direction = !0, t.index = U(t.index + 1), t.updateItemHTML() }, prev: function () { t.direction = !1, t.index = U(t.index - 1), t.updateItemHTML() }, goTo: function (e) { t.direction = e >= t.index, t.index = e, t.updateItemHTML() }, preloadNearbyImages: function () { var e, n = t.st.gallery.preload, i = Math.min(n[0], t.items.length), o = Math.min(n[1], t.items.length); for (e = 1; (t.direction ? o : i) >= e; e++)t._preloadItem(t.index + e); for (e = 1; (t.direction ? i : o) >= e; e++)t._preloadItem(t.index - e) }, _preloadItem: function (n) { if (n = U(n), !t.items[n].preloaded) { var i = t.items[n]; i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () { i.hasSize = !0 }).on("error.mfploader", function () { i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i) }).attr("src", i.src)), i.preloaded = !0 } } } }); var X = "retina"; e.magnificPopup.registerModule(X, { options: { replaceSrc: function (e) { return e.src.replace(/\.\w+$/, function (e) { return "@2x" + e }) }, ratio: 1 }, proto: { initRetina: function () { if (window.devicePixelRatio > 1) { var e = t.st.retina, n = e.ratio; n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + X, function (e, t) { t.img.css({ "max-width": t.img[0].naturalWidth / n, width: "100%" }) }), x("ElementParse." + X, function (t, i) { i.src = e.replaceSrc(i, n) })) } } } }), function () { var t = 1e3, n = "ontouchstart" in window, i = function () { I.off("touchmove" + r + " touchend" + r) }, o = "mfpFastClick", r = "." + o; e.fn.mfpFastClick = function (o) { return e(this).each(function () { var a, s = e(this); if (n) { var l, c, d, u, p, f; s.on("touchstart" + r, function (e) { u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function (e) { p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i()) }).on("touchend" + r, function (e) { i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function () { a = !1 }, t), o()) }) }) } s.on("click" + r, function () { a || o() }) }) }, e.fn.destroyMfpFastClick = function () { e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r) } }() })(window.jQuery || window.Zepto);

$(function () {

  // Image popup - Open Lightbox
  $('body').on('click keyup', '.big-link', function (e) {
    if (e.type == "click" || (e.type == "keyup" && e.keyCode == 13)) {
      var youTubeVideoId = $(this).data('videoid');
      $('html').addClass('no-scroll');
      $('body').append('<div class="lightbox-opened-mask youtube-box"></div>\
        <div class="lightbox-opened youtube-box">\
        <div class="lightbox-inner">\
            <div class="lightbox-content">\
            <a class="close" title="Close (Esc)">×</a>\
            <iframe id="youtube-video-holder" title="Youtube Video" width="100%" height="506" src="//www.youtube.com/embed/'+ youTubeVideoId + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
            </div>\
        </div>\
        </div>');

    }
  });
  // Popup Product Youtube Video
  $('body').on('keyup', '.product-media-container', function (e) {
    if (e.type == "keyup" && e.keyCode == 13) {
      $(this).find('.big-link').click();
    }
  });


  // Close Lightbox For Both Youtube Video and Image
  $('body').on('click touchstart', '.close, .lightbox-opened, .lightbox-opened-mask', function (event) {
    if (event.target == $('#youtube-video-holder')[0] || event.target == $('.main-img')[0]) return;
    $('html').removeClass('no-scroll');
    $('body').find('.lightbox-opened-mask ,.lightbox-opened').remove();
  });
  // Close Lightbox Using ESC Key For Youtube Video
  $('body').on('keyup', function (e) {
    if (e.key === "Escape" || e.keyCode == 27) {
      $('html').removeClass('no-scroll');
      body.find('.lightbox-opened-mask ,.lightbox-opened').remove();
    }
  });

  //click event of nessus video button
  $('.video-play-btn').click(function () {
    $('.product-video-img').click();
  });

  //changed the appearnce of close button of vidyard popup modal
  var running = false;
  var close = setInterval(function () {
    if ($('#vidyard-overlay-wrapper').length > 0) {
      clearInterval(close);
      var target = document.body;
      const config = { childList: true, characterData: true, subtree: true, attributes: true, };
      const callback = function (mutationsList, observer) {
        if (running == true) return;
        if ($('.vidyard-close-x')) {
          $('.vidyard-close-x').append('<a class="close" title="Close (Esc)">×</a>');
          running = true;
        }
        setTimeout(function () { running = false }, 1000);
      };
      const observer = new MutationObserver(callback);
      observer.observe(target, config);
      clearInterval(close);
    }
  }, 100);

  // Slider
  var setSlickInterVal = setInterval(function () {
    if ($.fn.slick) {
      clearInterval(setSlickInterVal);
      $('.customer-reviews .large-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        asNavFor: '.customer-reviews .small-slider'
      });
      $('.customer-reviews .small-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        asNavFor: '.customer-reviews .large-slider',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }
  }, 100);

  // Testimonial SLider Video Popup
  // var tenablePage =
  $('.play-icon').on('click', function (e) {
    var isNotMobileYet = window.matchMedia("(min-width: 700px)").matches;
    var youTubeVideoId = $(this).data('videoid');
    if (isNotMobileYet) {
      $('html').addClass('no-scroll');
      $('body').append('<div class="lightbox-opened-mask youtube-box"></div>\
            <div class="lightbox-opened youtube-box">\
                <div class="lightbox-inner">\
                <div class="lightbox-content">\
                <a class="close" title="Close (Esc)">×</a>\
                <iframe id="youtube-video-holder" title="Youtube Video" width="100%" height="506" src="//www.youtube.com/embed/'+ youTubeVideoId + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
                </div>\
                </div>\
            </div>');
    } else {
      if (youTubeVideoId == "aZgAjBnPTAc") {
        window.location.href = "https://m.youtube.com/watch?v=aZgAjBnPTAc";
      } else if (youTubeVideoId == "rhEZqBZqC5A") {
        window.location.href = "//www.youtube.com/watch?v=rhEZqBZqC5A";
      } else {
        window.location.href = "//www.youtube.com/watch?v=PzzqupPz7go";
      }
    }
  });

  $('body').on('keyup', function (e) {
    if (e.key === "Escape" || e.keyCode == 27) {
      $('html').removeClass('no-scroll');
      tenablePage.find('.lightbox-opened-mask ,.lightbox-opened').remove();
    }
  });

  // Modal link click, to set overflow:none on HTML tag
  $(".product-button").click(function () {
    $("html, body").addClass("overflow-hidden");
  });
  // Modal close event detection, to unset overflow:none on HTML tag
  $("body").on('DOMNodeRemoved', function (e) {
    if ($(e.target).is("button.mfp-close")) {
      $("html, body").removeClass("overflow-hidden");
    }
  });

  // Form Popup JS
  //Content
  $('.lightbox-content').magnificPopup({
    type: 'inline',
    midClick: true
  });

});

function checkMobileEvent(){($.browser.mobile||isTablet)&&($(window).off("orientationchange").on("orientationchange",function(e){$("#canvasHolder").hide(),$("#rotateHolder").hide(),clearTimeout(resizeTimer),resizeTimer=setTimeout(checkMobileOrientation,1e3)}),checkMobileOrientation())}function checkMobileOrientation(){var e=!1;window.innerWidth>window.innerHeight&&(e=!0),$.editor.enable?viewport.isLandscape=editData.isLandscape:viewport.isLandscape=e,changeViewport(viewport.isLandscape),resizeGameFunc(),$("#canvasHolder").show()}function toggleRotate(e){e?$("#rotateHolder").fadeIn():$("#rotateHolder").fadeOut(),resizeGameFunc()}var resizeTimer;
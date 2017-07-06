// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.remotipart
//= require turbolinks
//= require_tree .
//= require materialize-sprockets
//= require materialize/extras/nouislider




$(document).ready(function(){
      $('.parallax').parallax();
      $('.dropdown-button').width(200);
      $('#userDetails').width(44);
      $('.dropdown-button').css("cursor","pointer");
      $('.material-icons').css("cursor","pointer");
      $('.carousel.carousel-slider').carousel({fullWidth: true});
      $('.materialboxed').materialbox();
      $('.slider').slider();
      $('.slides').height(485);
      $('#myBtn').on('click', function() { $('#myForm').submit(); });
    


            var file_field = document.getElementById("file_field");
            $("#file_field").change(function (){
                  
                 
                  var div = document.getElementById("showImage");
                  var aTag = document.getElementById("deleteImage");
                  if(div.hasChildNodes()){
                        div.removeChild(div.childNodes[0]);
                  }
                   var elem = document.createElement("img");
                  var reader = new FileReader();
                    reader.onload = function (e) {
            // get loaded data and render thumbnail.
            elem.src = e.target.result;
            elem.setAttribute("width",75);
            elem.setAttribute("height",75);
            div.appendChild(elem);
            aTag.style.display = "block";
        };

        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);

            });

            $("#deleteImage").on('click' , function (){
                        $("#deleteImage").css('display','none');
                        var div = document.getElementById("showImage");
                        if(div.hasChildNodes()){
                        div.removeChild(div.childNodes[0]);
                  }
            });

        setVideos();

    });

function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition,showError);
    }
}
    function showPosition(position) {
      sessionStorage.setItem('lat',position.coords.latitude);
       sessionStorage.setItem('long',position.coords.longitude);
     console.log("Lat: "+position.coords.latitude);
     console.log("Long: "+position.coords.longitude);
}
function showError(error) {
  console.log("showError: "+error.code+" "+error.PERMISSION_DENIED);
    switch(error.code) {
        case error.PERMISSION_DENIED:
            break;
        case error.POSITION_UNAVAILABLE:
            break;
        case error.TIMEOUT:
            break;
        case error.UNKNOWN_ERROR:
            break;
    }
}

function setVideos(){
   var media = $('video').not("[autoplay='autoplay']");
            var tolerancePixel = 300;
            function checkMedia(){
                // Get current browser top and bottom
                var scrollTop = $(window).scrollTop() + tolerancePixel;
                var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

                media.each(function(index, el) {
                    var yTopMedia = $(this).offset().top;
                    var yBottomMedia = $(this).height() + yTopMedia;

                    if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
                        $(this).get(0).play();
                    } else {
                        $(this).get(0).pause();
                    }
                });
            }
            $(document).on('scroll', checkMedia);
}


// (function($) {
	
// 	$(window).scroll(function() {
		
// 		$(window).scroll(function() {
// 			space = $(window).innerHeight() - $('.fab').offsetTop + $('.fab').offsetHeight;
// 			if(space < 200){
// 				$('.fab').css('margin-bottom', '150px');
// 			}
// 		})
		
// 	});
	
// })(jQuery);



       

//     const TABBAR_BORDER_TRANSFORM_EASING = 'ease'
// const TABBAR_BORDER_TRANSFORM_SPEED = 400
// const TABBAR_ITEM_ACTIVE_CLASSNAME = 'active'

// let _ActiveTabBarItemNode = null
// let _ActiveTabBarItemIndex = -1
// let _TabBarBorderNode = null
// let _TabBarListNode = null
// let _FeedViewName = null

// const addTabBarItemProps = () => {
//   const items = _TabBarListNode.children
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i]
//     item.style.transition = `color ${TABBAR_BORDER_TRANSFORM_SPEED}ms ${TABBAR_BORDER_TRANSFORM_EASING}`
//     item.addEventListener('click', () => setTabBarItemActive(i) )
//   }
// }

// const getNodeCenter = clientRect => {
//   return (clientRect.left + clientRect.right) / 2
// }

// const getTabBarItem = index => {
//   return index < _TabBarListNode.children.length ? _TabBarListNode.children[index] : false
// }

// const initTabBar = index => {
//   const node = document.getElementsByClassName('tabbar')[0]
//   const feedName = document.getElementsByClassName('js-view-name')[0]
  
//   if (_TabBarListNode || _TabBarBorderNode || !node) return
  
//   if (feedName) _FeedViewName = feedName

//   _TabBarListNode   = node.children[0]
//   _TabBarBorderNode = node.children[1]

//   // This way, we can use integer numbers for scale transform.
//   _TabBarBorderNode.children[0].style.width = '1px'

//   // Wait until the border has applied styles.
//   setTimeout( () => {
//     addTabBarItemProps()
//     // Do not animate the first state transition.
//     setTabBarItemActive(index).then( () => {
//       setTimeout( () => {
//         _TabBarBorderNode.style.transition = `transform ${TABBAR_BORDER_TRANSFORM_SPEED}ms ${TABBAR_BORDER_TRANSFORM_EASING}`
//         _TabBarBorderNode.children[0].style.transition = `transform ${TABBAR_BORDER_TRANSFORM_SPEED}ms ${TABBAR_BORDER_TRANSFORM_EASING}`

//         window.addEventListener('resize', () => setTabBarItemActive(_ActiveTabBarItemIndex, true) )
//       }, 0)
//     })
    
//   }, 100)
// }

// const moveTabBarBorder = (index, noAnimation) => {
//   return new Promise( (resolve, reject) => {
//     let activeItemClientRect = _ActiveTabBarItemNode.getBoundingClientRect()
//     let borderClientRect     = _TabBarBorderNode.getBoundingClientRect()
//     let firstItemClientRect  = getTabBarItem(0).getBoundingClientRect()
//     let tempTabBarBorderNodeStyle,
//         tempTabBarBorderSpanStyle

//     activeItemClientRect.centerX = getNodeCenter(activeItemClientRect)
//     borderClientRect.centerX     = getNodeCenter(borderClientRect)

//     const currentTransformTranslateX = borderClientRect.left - (firstItemClientRect.left < 0 ? 0 : firstItemClientRect.left)
//     const newTransformTranslateX     = currentTransformTranslateX + (activeItemClientRect.centerX - borderClientRect.centerX)

//     if (noAnimation) {
//       tempTabBarBorderNodeStyle = _TabBarBorderNode.style.transition
//       tempTabBarBorderSpanStyle = _TabBarBorderNode.children[0].style.transition
//       _TabBarBorderNode.style.transition = ''
//       _TabBarBorderNode.children[0].style.transition = ''
//     }

//     setTimeout( () => {
//       _TabBarBorderNode.style.transform = `translateX(${newTransformTranslateX}px)`
//       _TabBarBorderNode.children[0].style.transform = `scaleX(${activeItemClientRect.width}) translateX(-50%)`

//       if (noAnimation) {
//         setTimeout( () => {
//           if (tempTabBarBorderNodeStyle) {
//             _TabBarBorderNode.style.transition = tempTabBarBorderNodeStyle
//           }
          
//           if (tempTabBarBorderSpanStyle) {
//             _TabBarBorderNode.children[0].style.transition = tempTabBarBorderSpanStyle
//           }
          
//           return resolve()
//         }, 0)
//       }
//       else {
//         return resolve()
//       }
//     }, 0)
//   })
// }

// const setTabBarItemActive = (index, isEventListener) => {
//   return new Promise( (resolve, reject) => {
//     if (index === -1) return resolve()

//     // Event listeners do not change the index.
//     if (!isEventListener) {
//       if (_ActiveTabBarItemNode) {
//         _ActiveTabBarItemNode.classList.remove(TABBAR_ITEM_ACTIVE_CLASSNAME)
//       }

//       _ActiveTabBarItemIndex = index
//       _ActiveTabBarItemNode  = getTabBarItem(index)
//       _ActiveTabBarItemNode.classList.add(TABBAR_ITEM_ACTIVE_CLASSNAME)

//       _FeedViewName.innerHTML = _ActiveTabBarItemNode.innerHTML
//     }
    
//     moveTabBarBorder(index, isEventListener).then( () => resolve() )
//   })
// }

// window.addEventListener('load', () => initTabBar(0) )











// $(document).ready(function(){
//     $('.carousel').carousel();
//   });
        

// // Next slide
// $('.carousel').carousel('next');
// $('.carousel').carousel('next', 3); // Move next n times.
// // Previous slide
// $('.carousel').carousel('prev');
// $('.carousel').carousel('prev', 4); // Move prev n times.
// // Set to nth slide
// $('.carousel').carousel('set', 4);


       
// $('.carousel.carousel-slider').carousel({fullWidth: true});
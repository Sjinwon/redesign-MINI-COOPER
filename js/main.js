/* fullpage */
$(document).ready(function(){
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
        scrollHorizontally: true,
				menu: '#menu',
				lockAnchors: false,
				anchors:['firstPage', 'secondPage'],
				navigation: false,
				navigationPosition: 'right',
				navigationTooltips: ['firstSlide', 'secondSlide'],
				showActiveTooltip: false,
				slidesNavigation: false,
				slidesNavPosition: 'bottom',

				//스크롤
				css3: true,
				scrollingSpeed: 700,
				autoScrolling: true,
				fitToSection: true,
				fitToSectionDelay: 1000,
				scrollBar: false,
				easing: 'easeInOutCubic',
				easingcss3: 'ease',
				loopBottom: false,
				loopTop: false,
				loopHorizontal: true,
				continuousVertical: false,
				continuousHorizontal: false,
				scrollHorizontally: false,
				interlockedSlides: false,
				dragAndMove: false,
				offsetSections: false,
				resetSliders: false,
				fadingEffect: false,
				normalScrollElements: '#element1, .element2',
				scrollOverflow: false,
				scrollOverflowReset: false,
				scrollOverflowOptions: null,
				touchSensitivity: 15,
				bigSectionsDestination: null,

				//접근성
				keyboardScrolling: true,
				animateAnchor: true,
				recordHistory: true,

				//디자인
				controlArrows: true,
				verticalCentered: true,
				sectionsColor : ['#ccc', '#fff'],
				paddingTop: '3em',
				paddingBottom: '10px',
				fixedElements: '#header, .footer',
				responsiveWidth: 0,
				responsiveHeight: 0,
				responsiveSlides: false,
				parallax: false,
				parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
				cards: false,
				cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

				//맞춤 선택자
				sectionSelector: '.section',
				slideSelector: '.slide',

				lazyLoading: true,

			//사건(이벤트)
			onLeave: function(origin, destination, direction){},
			afterLoad: function(origin, destination, direction){},
			afterRender: function(){},
			afterResize: function(width, height){},
			afterReBuild: function(){},
			afterResponsive: function(isResponsive){},
			afterSlideLoad: function(section, origin, destination, direction){},
			onSlideLeave: function(section, origin, destination, direction){}
    });
});

/* slick slider */
$(function(){
	$('#slider-div').slick({
		slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
		infinite : true, 	//무한 반복 옵션	 
		slidesToShow : 3,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 1000,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
		dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
		autoplay : true,			// 자동 스크롤 사용 여부
		autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		vertical : false,		// 세로 방향 슬라이드 옵션
		prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
		nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
		dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
		draggable : true, 	//드래그 가능 여부 
		
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 1000, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:2 
				} 
			},
			{ 
				breakpoint: 500, //화면 사이즈 768px
				settings: {	
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:1
				} 
			}
		]

	});
	})

	window.addEventListener('load', function(){
		// btn-11
		var movingBar = new MovingBar('.btn-11');
	});
	
	// btn-11 : Moving Bar
	function MovingBar( nav ){
		var $navMovingBar = document.querySelector( nav ),
			$btnMenu11 = $navMovingBar.querySelectorAll('a'),
			bar = document.createElement('span'),
			width, left;
	
		bar.classList.add('effect');
		$navMovingBar.appendChild( bar );
	
		for( var i=0, max=$btnMenu11.length; i<max; i++ ){
			$btnMenu11[i].addEventListener('mouseenter', function(){
				width = this.offsetWidth,
				left = this.offsetLeft;
				barMovingCurrentMenu( width, left );
			});
		}
	
		function barMovingCurrentMenu( width, left ) {
			bar.style.width = width + 'px';
			bar.style.left = left + 'px';
		}
	}
	

	
//menu fade in/out
/* $('header nav ul li').mouseenter(function(){
	$('.sub').stop().fadeIn();
	$('.nav-bg').stop().fadeIn();
});
$('header nav ul li').mouseleave(function(){
	$('.sub').stop().fadeOut();
	$('.nav-bg').stop().fadeOut();
}) */





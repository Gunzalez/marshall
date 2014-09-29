// JavaScript Document
(function ($, window) {
	
	var marshall = {};

	marshall.properties = {
		isMobile: false,
		windowWidth: '',
        mobileThreshold: 768,
        desktopThreshold: 960,
        handHeldThreshold: 400
	};

    marshall.environment = {

        init: function(){
            if(Modernizr.touch){
                marshall.properties.isMobile = true;
                $('html').addClass('mobile');
            } else {
                $('html').addClass('desktop');
            }

            marshall.properties.windowWidth = $(window).width();

            // Overlays
            var fancyBoxOptions = {
                'nextEffect': 'fade',
                'prevEffect': 'fade',
                openEffect  : 'none',
                closeEffect : 'none',
                padding: 10,
                helpers : {
                    title: {
                        type: 'inside',
                        media: {}
                    }
                }
            }

            $(".fancybox").fancybox(fancyBoxOptions);
            $('.gallery a').fancybox(fancyBoxOptions);
        },

        resize: function(){

            var newWindowWith = $(window).width();

            if(newWindowWith > marshall.properties.mobileThreshold){
                $('html').removeClass('mobile').addClass('desktop');
            } else {
                $('html').removeClass('desktop').addClass('mobile');
            }

            if(newWindowWith < marshall.properties.desktopThreshold){
                $('.footer').removeClass('wide');
            } else {
                $('.footer').addClass('wide');
            }

            // TODO, does not work on iPad
//            $('.sidebox-2').each(function(){
//                var $sidebox1 = $('.sidebox', $(this)).eq(0),
//                    $sidebox2 = $('.sidebox', $(this)).eq(1);
//
//                if(newWindowWith < marshall.properties.mobileThreshold && newWindowWith > marshall.properties.handHeldThreshold){
//                    var timer = setTimeout(function(){
//                        $sidebox1.height($sidebox2.height());
//                        clearTimeout(timer);
//                    }, 100);
//                } else {
//                    $sidebox1.removeAttr('style');
//                    $sidebox2.removeAttr('style');
//                }
//            })
        }
    };

    marshall.homepage = {
        // Yes, a bit messy I know, may refactor if time allows
        // TODO, clean up
        resize: function(){
            var $minibox = $('.minibox'),
                mainboxWidth = $minibox.parent().width(),
                mainWindowWidth = $(window).width(),
                miniboxWidth = 0,
                $sideBar = $('.sidebar'),
                $videoBox = $('.video', $sideBar),
                $videoIframe = $('iframe', $videoBox);

            $minibox.removeAttr('style');
            $minibox.find('.copy').removeAttr('style');
            $minibox.find('.more').removeAttr('style');

            if(mainWindowWidth >= 960){
                miniboxWidth = (mainboxWidth-30)/3;
                $minibox.width(miniboxWidth);
                $minibox.eq(0).css('margin-right','15px');
                $minibox.eq(1).css('margin-right','15px');
                var imageHeight = $minibox.eq(0).find('img').height();
                $minibox.eq(2).find('.copy').height(imageHeight);
            }

            if(mainWindowWidth < 960 && mainWindowWidth > 400){
                miniboxWidth = (mainboxWidth-15)/2;
                $minibox.width(miniboxWidth);
                $minibox.eq(0).css('margin-right','15px');
                $minibox.eq(0).css('margin-bottom','15px');
                $minibox.eq(1).css('margin-bottom','15px');
                $minibox.eq(2).width('100%').css('margin-bottom','15px');
            }

            if(mainWindowWidth <= 399){
                $minibox.width('100%').css('margin-right','0').css('margin-bottom','0');
                $minibox.eq('2').css('margin-bottom','0');
                $minibox.eq('2').find('.more').css('background-color','#fff');
            }



            // video sidebox
            var sideBoxHeight = $('.sidebox', $sideBar).eq('1').height();
            $videoIframe.height(sideBoxHeight);

        }
    };

    marshall.configuration = {
        $configureForm: $('#config_machine'),
        $configureSelect: $('#machine', this.$configureForm),
        $configureContent: $('#configure-content', this.$configureForm),
        $configureOptions: $('#options li', this.$configureForm),
        $configureTable: $('#quote', this.$configureForm),
        basketActions: {
            $stickyBasket: $('#basket'),
            pushOut: function(){

                this.$stickyBasket.addClass('stick-out');
                if($(window).width() < 401){
                    this.$stickyBasket.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                        function(e) {
                            this.$stickyBasket.removeClass('stick-out');
                        });

//                    var timer = setTimeout(function(){
//                        marshall.configuration.basketActions.$stickyBasket.removeClass('stick-out');
//                        clearTimeout(timer);
//                    }, 3000);
                }
            },
            pushIn: function(){
                this.$stickyBasket.removeClass('stick-out');
            }
        },

        attachConfigureAction: function(){
            var self = this;
            self.$configureSelect.on('change', function(){

                self.toggleStepsDisplay('hide');

                var value = $(this).val();
                if(value.length == '' || isNaN(value)){

                    var $welcomeScreen = $('<div class="empty-configuration"><h3>Select a machine from the options</h3></div>');
                    self.$configureContent.html($welcomeScreen);

                    // Add cost to basket, and stick it out
                    var $stickyBasket = $('#basket');
                    $('.total', $stickyBasket).text('0.00');
                    self.basketActions.pushIn();

                } else {

                    self.$configureContent.load('ajax/configure-content.php?machineId='+value, function(){

                        // Add cost to basket, and push it out
                        var $stickyBasket = $('#basket');
                        $('.total', $stickyBasket).text('12,552.00');
                        self.basketActions.pushOut();

                        // Attach action to open options
                        $('#btnConfigure', self.$configureContent).on('click', function(evt){

                            evt.preventDefault();
                            self.toggleStepsDisplay('show');

                            var $detail = $('.content', self.$configureContent);

                            // FAKE main product entry
                            var $newRow = $('<tr></tr>');
                            $newRow.append('<td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/thumbnails/290313-0832-5148.jpg" alt="QM1200 Monocoque Trailer"></td>');
                            $newRow.append('<td class="name">' +  $('h3', $detail).text()  + ' - Basic price:</td>');
                            $newRow.append('<td class="cost">&pound;12,552.00</td>');
                            self.$configureTable.append($newRow);

                            // FAKE delivery cost entry
                            $newRow = $('<tr id="211"></tr>');
                            $newRow.append('<td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/delivery_lorry.jpg" alt="Delivery Charge"></td>');
                            $newRow.append('<td class="name">Delivery Charge (000/00-000):</td>');
                            $newRow.append('<td class="cost">&pound;145.00</td>');
                            self.$configureTable.append($newRow);
                            self.applyTableStripes();

                            // visually selecting delivery cost option in list
                            self.$configureOptions.eq(self.$configureOptions.length - 1).addClass('selected');
                        });

                    });
                }

                this.blur();
            });
        },

        fixOptionWidths: function(){
            var self = this,
                $optionsList = $('#options', self.$configureForm),
                $optionsListWidth = $optionsList.width(),
                marginRight = 15,
                col, optionWidth;

            $optionsList.removeClass('single-column');

            if($optionsListWidth > 849){
                col = 3;
                optionWidth = ($optionsListWidth-30)/3;
            } else if($optionsListWidth < 850 && $optionsListWidth > 499){
                col = 2;
                optionWidth = ($optionsListWidth-15)/2;
            } else if($optionsListWidth < 500){
                col = 1;
                $optionsList.addClass('single-column');
            }

            self.$configureOptions.each(function(i, obj){
                if(col == 1){
                    $(obj).removeAttr('style');
                } else {
                    var optionMarginRight = marginRight;
                    if((i+1) % col == 0){
                        optionMarginRight = 0;
                    }
                    $(obj).css({
                        'width': optionWidth,
                        'margin-right': optionMarginRight
                    });
                }
            });
        },

        toggleStepsDisplay: function(toggleValue){
            var self = this,
                $collapsibleSteps = $('.can-hide', self.$configureForm);

            if(toggleValue == 'hide'){

                // Hides steps 2 - 5
                $collapsibleSteps.addClass('displayNone');
                $('.email-option', self.$configureForm).addClass('displayNone');

            } else {

                // Shows steps 2 - 4
                self.$configureOptions.removeClass('selected');                         // clears options
                self.$configureTable.empty();                                           // clears the table
                $collapsibleSteps.removeClass('closed, displayNone').addClass('open');  // resets collapsible panels
                self.fixOptionWidths();                                                 // adjusts options layout

                // Some fancy slide to options panel
                $('html, body').animate({
                    scrollTop: $(".configure-options").offset().top - 30
                }, 500);
            }
        },

        applyTableStripes: function(){
            var self = this,
                $tableRows = $('tr', self.$configureTable);

            $tableRows.removeAttr('style');
            $tableRows.each(function(i, obj){
                if((i+1) % 2 == 0){
                    $(obj).addClass('even');
                }
            })
        },

        attachOptionsAction: function(){
            var self = this;

            self.$configureOptions.each(function(i, obj){
                $(obj).on('click', function(){
                    if($(obj).hasClass('selected')){

                        // Todo: Any other calculations or clean up
                        // e.g removing price from total cost, remove row from table

                        //var $stickyBasket = $('#basket');
                        //$('.total', $stickyBasket).text('X.XX');
                        self.basketActions.pushOut();








                        $(obj).removeClass('selected');
                        self.applyTableStripes();

                    } else {

                        // Todo: Any other calculations you need to do
                        // e.g adding price to total cost, and a row to table, maybe pulled in by ajax

                        // e.g fake new row
                        var $newRow = $('<tr id="119"></tr>');
                        $newRow.append('<td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/8 inch Grain Hatch.jpg" alt="8 grain hatch"></td>');
                        $newRow.append('<td class="name">8" Grain Hatch (065/07-8000):</td>');
                        $newRow.append('<td class="cost">&pound;118.00</td>');
                        self.$configureTable.append($newRow);


                        //var $stickyBasket = $('#basket');
                        //$('.total', $stickyBasket).text('X.XX');
                        self.basketActions.pushOut();










                        $(obj).addClass('selected');
                        self.applyTableStripes();

                    }
                });
            });
        },

        attachShowHideAction: function(){
            var self = this,
                $showIcons = $('.show-hide', self.$configureForm);

            $showIcons.each(function(i, obj){

                var $showHideHeader = $(obj).parents('h3'),
                    $mainBox = $(obj).parents('.mainbox');

                $showHideHeader.on('click', function(){
                    if($mainBox.hasClass('open')){
                        $mainBox.removeClass('open').addClass('closed');
                    } else {
                        $mainBox.removeClass('closed').addClass('open');
                    }
                    self.fixOptionWidths();
                });
            });

        },

        setLinksInStepFour: function(){
            var self = this;

            $('#email-option', self.$configureForm).on('click', function(evt){
                evt.preventDefault();

                $('.email-option', self.$configureForm).removeClass('displayNone');

                $('html, body').animate({
                    scrollTop: $(".email-option").offset().top - 30
                }, 500);
            });

            $('#pdf-option', self.$configureForm).on('click', function(evt){
                evt.preventDefault();
            });
        },

        setUpConfigurationEmail: function(){
            var self = this,
                $formFieldsBox = $('.email-option', self.$configureForm);

            self.$configureForm.on('submit', function(){

                var returnValue = true;

                // ROBCURLE - TODO, validation, just add .error to parent p tag of the offending form field










                return returnValue; // for normal post
            });

            // cosmetic, clears error when suer clicks on field
            $('input', $formFieldsBox).on('focus', function(){
                $(this).parents('.error').removeClass('error');
            });

            $('select', $formFieldsBox).on('change', function(){
                $(this).parents('.error').removeClass('error');
            });

        },


        setUpStickyBasket: function(){
            var self = this,
                initialPos = 153,
                stickyPos = 20,
                $stickyBasket = $('#basket');

            $(window).scroll(function(){

                if($(window).width() > 400){
                    if( $(this).scrollTop() > initialPos ) {
                        $stickyBasket.css('margin-top', $(this).scrollTop() + stickyPos);
                    } else {
                        $stickyBasket.css('margin-top', $(this).scrollTop() + initialPos);
                    }
                }

            });

            $('.show-hide', $stickyBasket).on('click',function(evt){
                evt.preventDefault();
                if($stickyBasket.hasClass('stick-out')){
                    self.basketActions.pushIn();
                } else {
                    self.basketActions.pushOut();
                }
            });

        },

        resize: function(){
            var self = this;
            self.fixOptionWidths();
        },

        init: function(){
            var self = this;
            if(self.$configureForm.length > 0){

                self.attachConfigureAction();
                self.attachShowHideAction();
                self.attachOptionsAction();
                self.setLinksInStepFour();
                self.setUpConfigurationEmail();
                self.setUpStickyBasket();

            }
        }
    };

	marshall.carousel = {
		init: function(){

            var $slider = $('.bxslider');

			if($slider.length > 0){
                $slider.bxSlider({
					onSliderLoad: function(){
                        // nothing for now
					},
					onSlideAfter: function(){
                        // nothing for now
					}
				});

			}
		}
	};

	marshall.mobile = {

		/* properties */
		isBusy: false,
		slideSpeed: 250,
		easing: 'swing',
		$mobileNavBtn: $('#menu-icon'),

		/* methods */
		_launchMobileNav: function(){

			var self = this,
				$mainPage = $('.page'),
				$mobileNav = $('#mobile-nav'),
				$theStage = $('<div id="the-stage" />'),
				$fakeWrapper = $('<div id="fake-wrapper" />'),
				$slidingContainer = $('<div id="sliding-container" />'),
				stageWidth = $(window).width(),
				peakThrough = $(window).width()/4,
				stageHeight = $(window).height(),
				mobileNavHeight = $mobileNav.height();

			if(mobileNavHeight > stageHeight){
				stageHeight = mobileNavHeight;
			}

			$theStage.css({
				width: stageWidth,
				height: stageHeight,
				position: 'relative',
				overflow: 'hidden'
			});

			$fakeWrapper.css({
				width: stageWidth,
				height: stageHeight,
				position: 'absolute',
				top: 0,
				left: 0
			});

			$mobileNav.css({
				width: stageWidth - peakThrough + 'px',
				position: 'absolute',
				top: 0,
				left: stageWidth + 'px',
				height: stageHeight,
				display: 'block'
			});

			$slidingContainer.css({
				width: (stageWidth * 2) - peakThrough + 'px',
				height: stageHeight,
				position: 'absolute',
				top: 0,
				left: 0
			});

			$fakeWrapper.append($mainPage);
			$slidingContainer.append($fakeWrapper).append($mobileNav);
			$theStage.append($slidingContainer);
			$('body').prepend($theStage);

			$slidingContainer.animate({
				left:'-'+(stageWidth-peakThrough)+'px'
			}, self.slideSpeed, self.easing);

		},

		_hideMobileNav: function(){

			var self = this,
				$slidingContainer = $('#sliding-container'),
                $stickyBasket = $('#basket');

			$slidingContainer.animate({
				left:0
			}, self.slideSpeed, self.easing, function(){
					self._destroyMobileNav();
                    $stickyBasket.removeClass('displayNone');
				});
		},

		_destroyMobileNav: function(){

			var	$mainPage = $('.page'),
				$mobileNav = $('#mobile-nav'),
				$theStage = $('#the-stage');

			$mobileNav.css({
				display:'none'
			}).removeAttr('style');

			$mainPage.removeAttr('style');
			$('body').prepend($mobileNav).prepend($mainPage);
            $theStage.remove();

		},

		_cloneNavigation: function(){

			var $mobileNav = $('#mobile-nav'),
                $mainNav = $('.main-nav'),
				$header = $('<div class="header"><span class="fa fa-times">&nbsp;</span></div>');

			$header.on('click', function(){
				$('#menu-icon').trigger('click');
			});

			$mobileNav.append($header);
            var tempVar = $mainNav.clone(true);
            $('ul', tempVar).not(".root-ul").remove();
            $mobileNav.append(tempVar.html());

            $($mobileNav).on('click', 'a', function(){
                $('a', $mobileNav).removeAttr('class');
                $(this).addClass('active');
            });

		},

		resize: function(){
			var self = this;
			self._destroyMobileNav();
		},

		init: function(){

			var self = this,
                $menu = $('#menu-icon'),
                $stickyBasket = $('#basket');

			if($menu.length > 0){

                $menu.on('click',function(evt){
					evt.preventDefault();
					if($('#the-stage').length > 0){
						self._hideMobileNav();
					} else {
						self._launchMobileNav();
                        $stickyBasket.addClass('displayNone');
					}
				});

				self._cloneNavigation();
			}

		}

	};

    marshall.navigation = {

        $html: $('.main-nav'),

        clearNav: function(){
            var self = this;
            $('.hover', self.$html).removeClass('hover');
        },

        init: function(){
            var self = this;
            if(marshall.properties.isMobile){
                $('a', self.$html).on('click',function(evt){
                    evt.preventDefault();
                    var $li = $(this).parent();
                    if($li.find('ul').length > 0){
                        if($li.hasClass('hover')){
                            location.href = $(this).prop('href');
                        } else {
                            self.clearNav();
                            $li.addClass('hover').parents('li').addClass('hover');
                        }
                    } else {
                        location.href = $(this).prop('href');
                    }
                });
            } else {
                $('li', self.$html).on('mouseenter',function(){
                    $(this).addClass('hover');
                }).on('mouseleave',function(){
                    $(this).removeClass('hover');
                });
            }
        },

        resize: function(){
            var self = this;
            self.clearNav();
        }
    };

    marshall.tabs = {

        $html: {
            controls: $('.tabs'),
            content: $('.tabs-content')
        },

        init: function(){
            var self = this;

            $('li', self.$html.controls).each(function(i, obj){
                $(obj).on('click', function(evt){

                    evt.preventDefault();
                    $('li', self.$html.controls).removeClass('active');
                    $(this).addClass('active');

                    var $clonedCopy = $('.copy-block',$(this)).clone();
                    self.$html.content.html($clonedCopy);

                    if($(window).width() < 679){
                        $('html, body').animate({
                            scrollTop: $(obj).offset().top - 30
                        }, 500);
                    }

                });
            });

            var $firstLi = $('li', self.$html.controls).eq(0),
                $clonedCopy = $('.copy-block', $firstLi).clone();

            $firstLi.addClass('active');
            self.$html.content.html($clonedCopy);

        },
        resize: function(){

        }
    };

    marshall.resize = function(){

        // All resize adjustments
        marshall.environment.resize();
        marshall.navigation.resize();
        marshall.homepage.resize();
        marshall.configuration.resize();
        marshall.mobile.resize();
        marshall.tabs.resize();
    };

	marshall.init = function(){

        // All initialisations
        marshall.environment.init();
        marshall.navigation.init();
		marshall.mobile.init();
		marshall.carousel.init();
        marshall.configuration.init();
        marshall.tabs.init();






        // Resize triggers
		$(window).on('resize',function(){
			
			var theWidthNow = $(window).width();
			
			if(marshall.properties.windowWidth != theWidthNow){
				marshall.resize();
				marshall.properties.windowWidth = theWidthNow;
			}
		});

        // Do initial resize, just incase
		marshall.resize();
		$(window).trigger('resize');
	};

    // Main init
	$(window).load(function(){
		marshall.init();
	});

}(jQuery, window));
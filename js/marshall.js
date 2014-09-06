// JavaScript Document

function log(stuff){ // Sheg Todo, remove
    console.log(stuff);
}

(function ($, window) {
	
	var marshall = {};

	marshall.properties = {
		isMobile: false,
		windowWidth: ''
	};

	marshall.environment = function(){
        if(Modernizr.touch){
			marshall.properties.isMobile = true;
            $('html').addClass('mobile');
		} else {
            $('html').addClass('desktop');
        }
		
		marshall.properties.windowWidth = $(window).width();

        // overlays, I left these for you
        $(".fancybox").fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            padding: 10,
            helpers : {
                title: {
                    type: 'inside',
                    media: {}
                }
            }
        });

	};


    marshall.homepage = {
        // Yes, a bit messy I know, may refactor if time allows
        resize: function(){
            var $minibox = $('.minibox'),
                mainboxWidth = $minibox.parent().width(),
                mainWindowWidth = $(window).width(),
                miniboxWidth = 0;

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
                $minibox.eq(2).width('100%');
            }

            if(mainWindowWidth <= 399){
                $minibox.width('100%').css('margin-right','0').css('margin-bottom','0');
                $minibox.eq('2').css('margin-bottom','0');
                $minibox.eq('2').find('.more').css('background-color','#fff');
            }

        }
    };

	marshall.resize = function(){
        marshall.navigation.clearNav();
        marshall.homepage.resize();
        marshall.configuration.resize();
        marshall.mobile.resize();
	};

    marshall.configuration = {
        $configureForm: $('#config_machine'),
        $configureSelect: $('#machine', this.$configureForm),
        $configureContent: $('#configure-content', this.$configureForm),
        $configureOptions: $('#options li', this.$configureForm),
        $configureTable: $('#quote', this.$configureForm),

        attachConfigureAction: function(){
            var self = this;
            self.$configureSelect.on('change', function(){

                self.toggleStepsDisplay('hide');

                var value = $(this).val();
                if(value.length == '' || isNaN(value)){

                    var $welcomeScreen = $('<div class="empty-configuration"><h3>Select a machine from the options</h3></div>');
                    self.$configureContent.html($welcomeScreen);

                } else {

                    self.$configureContent.load('ajax/configure-content.php?machineId='+value, function(){

                        // Add cost to basket, and stick it out
                        var $stickyBasket = $('#basket');
                        $('.total', $stickyBasket).text('12,552.00');
                        $stickyBasket.addClass('stick-out');

                        // Attach action to open options
                        $('#btnConfigure', self.$configureContent).on('click', function(evt){

                            evt.preventDefault();
                            self.toggleStepsDisplay('show');

                            var $detail = $('.content', self.$configureContent);

                            // add main product and delivery cost to table - fake of course, for illustration
                            var $newRow = $('<tr></tr>');
                            $newRow.append('<td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/thumbnails/290313-0832-5148.jpg" alt="QM1200 Monocoque Trailer"></td>');
                            $newRow.append('<td class="name">' +  $('h3', $detail).text()  + ' - Basic price:</td>');
                            $newRow.append('<td class="cost">&pound;12,552.00</td>');
                            self.$configureTable.append($newRow);
                            $newRow = $('<tr id="211"></tr>');
                            $newRow.append('<td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/delivery_lorry.jpg" alt="Delivery Charge"></td>');
                            $newRow.append('<td class="name">Delivery Charge (000/00-000):</td>');
                            $newRow.append('<td class="cost">&pound;145.00</td>');
                            self.$configureTable.append($newRow);
                            self.applyTableStripes();

                            // visually selecting delivery option in list
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

                // e.g, clear options, empty the table, reset floating price, reopen all collapsible panels
                self.$configureOptions.removeClass('selected'); // clears options
                self.$configureTable.empty(); // empties the table
                $collapsibleSteps.removeClass('closed').addClass('open'); // resets collapsible (need for resizing)
                $collapsibleSteps.removeClass('displayNone'); // show steps 2 - 4
                self.fixOptionWidths();

                // TODO reset floating price





                // some fancy slide to options panel
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

                        $(obj).removeClass('selected');
                        self.applyTableStripes();

                        // Todo: Any other calculations or clean up
                        // e.g removing price from total cost, remove row from table










                    } else {

                        $(obj).addClass('selected');
                        self.applyTableStripes();

                        // Todo: Any other calculations you need to do
                        // e.g adding price to total cost, and a row to table, maybe pulled in by ajax

                        // e.g fake new row
                        var $newRow = $('<tr id="119"></tr>');
                        $newRow.append('<td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/8 inch Grain Hatch.jpg" alt="8 grain hatch"></td>');
                        $newRow.append('<td class="name">8" Grain Hatch (065/07-8000):</td>');
                        $newRow.append('<td class="cost">&pound;118.00</td>');
                        self.$configureTable.append($newRow);










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
            var initialPos = 153,
                stickyPos = 20,
                $stickyBasket = $('#basket');

            $(window).scroll(function() {
                if( $(this).scrollTop() > initialPos ) {
                    $stickyBasket.css('margin-top', $(this).scrollTop() + stickyPos);
                } else {
                    $stickyBasket.css('margin-top', $(this).scrollTop() + initialPos);
                }
            });

            $('.show-hide', $stickyBasket).on('click',function(evt){
                evt.preventDefault();
                if($stickyBasket.hasClass('stick-out')){
                   $stickyBasket.removeClass('stick-out');
                } else {
                   $stickyBasket.addClass('stick-out');
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
				$slidingContainer = $('#sliding-container');
			
			$slidingContainer.animate({
				left:0	
			}, self.slideSpeed, self.easing, function(){
					self._destroyMobileNav();
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
			
		},
		
		resize: function(){
			var self = this;
			self._destroyMobileNav();
		},
		
		init: function(){
			
			var self = this,
                $menu = $('#menu-icon');
			
			if($menu.length > 0){

                $menu.on('click',function(evt){
					evt.preventDefault();
					if($('#the-stage').length > 0){						
						self._hideMobileNav();						
					} else {						
						self._launchMobileNav();						
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
        }
    };
	
	marshall.init = function(){

        marshall.environment();

        marshall.navigation.init();
		
		marshall.mobile.init();
		
		marshall.carousel.init();

        marshall.configuration.init();
		
		$(window).on('resize',function(){
			
			var theWidthNow = $(window).width();
			
			if(marshall.properties.windowWidth != theWidthNow){
				
				marshall.resize();
						
				marshall.properties.windowWidth = theWidthNow;
			
			}
			
		});
		
		marshall.resize();
		$(window).trigger('resize');		
	};
	
	
	$(window).load(function(){
		marshall.init();
	});

}(jQuery, window));
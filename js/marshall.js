// JavaScript Document

function log(stuff){ // Sheg Todo, remove
    console.log(stuff);
}

(function ($, window) {
	
	var marshall = {};

    marshall.utilities = utilities || {};

	marshall.properties = {
		widthThresshold: 1000,
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




        adjustments: function(){
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
        marshall.homepage.adjustments();
        marshall.configuration.adjustConfigureOptionWidths();
		









	};

    marshall.configuration = {
        $configureForm: $('#config_machine'),
        $configureSelect: $('select', this.$configureForm),
        $configureContent: $('#configure-content', this.$configureForm),
        $configureOptions: $('#options li', this.$configureForm),

        attachConfigureAction: function(){
            var self = this;
            self.$configureSelect.on('change', function(){

                var value = $(this).val();
                if(value.length == '' || isNaN(value)){

                    // Todo: Any other clean ups

                    var $welcomeScreen = $('<div class="empty-configuration"><h3>Select a machine from the options</h3></div>');
                    self.$configureContent.html($welcomeScreen);
                    self.toggleStepsDisplay('hide');




                } else {
                    this.blur();

                    // Todo: Any other calculations you need to do
                    // e.g Resetting selected options
                    // e.g Clearing the quote table

                    self.$configureContent.load('ajax/configure-content.php?machineId='+value, function(){
                        $('#btnConfigure', self.$configureContent).on('click', function(evt){
                            evt.preventDefault();
                            self.toggleStepsDisplay('show');
                        });
                    });

                }
            });
        },

        adjustConfigureOptionWidths: function(){
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
                $stepsWeCanHide = $('.can-hide', self.$configureForm);

            if(toggleValue == 'hide'){
                $stepsWeCanHide.addClass('displayNone');
            } else {
                $stepsWeCanHide.removeClass('displayNone');
                self.adjustConfigureOptionWidths();
                self.adjustTableStripes();
            }
        },

        adjustTableStripes: function(){
            var self = this,
                $tableRows = $('#quote tr', self.$configureForm);

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

                        self.adjustTableStripes();
                        // Todo: Any other calculations or clean up
                        // e.g re-adjusting table stripes
                        // e.g removing price from total cost




                    } else {
                        $(obj).addClass('selected');

                        self.adjustTableStripes();
                        // Todo: Any other calculations you need to do
                        // e.g re-adjusting table stripes
                        // e.g adding price to total cost




                    }
                });
            });
        },

        attachShowHideAction: function(){
            var self = this,
                $showIcons = $('.show-hide', self.$configureForm);

            $showIcons.each(function(i, obj){

                var $showHideButton = $(obj).parents('h3'),
                    $mainBox = $(obj).parents('.mainbox');

                $showHideButton.on('click', function(){
                    if($mainBox.hasClass('open')){
                        $mainBox.removeClass('open').addClass('closed');
                    } else {
                        $mainBox.removeClass('closed').addClass('open');
                    }
                });
            });

        },

        init: function(){
            var self = this;
            if(self.$configureForm.length > 0){
                self.attachConfigureAction();
                self.attachShowHideAction();
                self.attachOptionsAction();
            }
        }
    };


	marshall.carousel = {
		init: function(){

            var $slider = $('.bxslider');
			if($slider.length > 0){

                $slider.bxSlider({
					
					onSliderLoad: function(){						
						

						
					},
					
					onSlideAfter: function(){
						
						// Does nowt
						
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

    marshall.contactForm = {

        $contactForm: $('#contact-form'),
        $selectField: $('#contact-type', this.$contactForm),
        $retryButton: $('#retryButton'),
        $spinnerDiv: $('#spinSpinSugar'),
        $sendError: $('#sendError'),
        $thankingYou: $('#thanks'),

        switchFormType: function(button){

            var self = this,
                activeClass = $(button).attr('data-id'),
                $buttonList = $(button).parents('ul');

            $('a', $buttonList).removeAttr('class');
            $(button).addClass('active');
            self.$selectField.val(activeClass);
            self.$selectField.change();
        },

        slowAppear: function($obj){
            $obj.removeClass('displayNone').css('opacity','0').animate({ opacity: 1 }, 250);
        },

        validateForm: function($form){
            var self = this,
                isValid = true,
                $name = $('#name', $form),
                $company = $('#company', $form),
                $email = $('#email', $form),
                $phone = $('#phone', $form),
                $contactType = $('#contact-type', $form),
                errorClass = '.row';

            $(errorClass, $form).removeClass('error');

            if(marshall.utilities.isEmptyInputField($name)){
                marshall.utilities.reportError($name, errorClass);
                isValid = false;
            }

            if(marshall.utilities.isEmptyInputField($company)){
                marshall.utilities.reportError($company, errorClass);
                isValid = false;
            }

            if(!marshall.utilities.isValidEmailAddress($email)){
                marshall.utilities.reportError($email, errorClass);
                isValid = false;
            }

            if(marshall.utilities.isEmptyInputField($phone)){
                marshall.utilities.reportError($phone, errorClass);
                isValid = false;
            }

            var $enquiry = $('#'+$contactType.val()+'.textarea');
            if(marshall.utilities.isEmptyInputField($enquiry)){
                marshall.utilities.reportError($enquiry, errorClass);
                isValid = false;
            }

            if(isValid){

                self.$spinnerDiv.removeClass('displayNone');
                $form.addClass('displayNone');

                var url = $form.attr('action'),
                    posting = $.post(url, $form.serialize());

                posting.done(function(data) {
                    setTimeout(function(){
                        self.$spinnerDiv.addClass('displayNone');
                        if(data == 'error'){
                            self.slowAppear(self.$sendError);
                        } else {
                            self.slowAppear(self.$thankingYou);
                        }
                    }, 250);
                });

//                posting.fail(function(data){
//                    // Not used for now.
//                });
            }
        },

        init: function(){

            var self = this;
            if(self.$contactForm.length > 0){
                var $switcherButtons = $('#contact-type-switcher a', self.$contactForm);
                $switcherButtons.on('click', function(evt){
                    evt.preventDefault();
                    if(!$(evt.target).hasClass('active')){
                        self.switchFormType(evt.target);
                    }
                });

                self.$selectField.on('change', function(){
                    var currVal = $(this).val();
                    self.$contactForm.removeClass('brief meeting general').addClass(currVal);
                });

                self.$contactForm.on('submit', function(evt){
                    evt.preventDefault();
                    self.validateForm(self.$contactForm);
                });

                $('input, .textarea', self.$contactForm).on('focus', function(){
                    $(this).parents('.row').removeClass('error');
                });

                self.$retryButton.on('click', function(evt){
                    evt.preventDefault();
                    self.slowAppear(self.$contactForm);
                    self.$sendError.addClass('displayNone');
                });
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
                            location.href = $(this).attr('href');
                        } else {
                            self.clearNav();
                            $li.addClass('hover').parents('li').addClass('hover');
                        }
                    } else {
                        location.href = $(this).attr('href');
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

        //marshall.contactForm.init();

        marshall.configuration.init();
		
		$(window).on('resize',function(){
			
			var theWidthNow = $(window).width();
			
			if(marshall.properties.windowWidth != theWidthNow){
				
				marshall.resize();
				
				marshall.mobile.resize();
						
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
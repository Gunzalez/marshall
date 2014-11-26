// JavaScript Document
(function ($, window) {
	
	var marshall = {};

    marshall.utils = utilities;

	marshall.properties = {
		isMobile: false,
		windowWidth: '',
        deviceWidth: {
            desktop: 960,
            tablet: 768,
            phablet: 678,
            phone: 400
        }

	};

    marshall.environment = {

        init: function(){

            // mobile/desktop
            if($('html').hasClass('mobile')){
                marshall.properties.isMobile = true;
            } // Written in with PHP

            marshall.properties.windowWidth = $(window).width();

            // overlays
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

            // fancy box
            $(".fancybox").fancybox(fancyBoxOptions);
            $('.gallery a').fancybox(fancyBoxOptions);

            // Back to top
            $('#back-to-top').on('click', function(){
                $('html, body').animate({ scrollTop: 0 }, '2000');
            });

            // scroll activated back-to-top
            $(window).on('scroll', function(){
                if( $(this).scrollTop() > 300 ) {
                    $('#back-to-top').addClass('onScreen');
                } else {
                    $('#back-to-top').removeClass('onScreen');
                }
            });

            if($('#basket').length > 0){
                $('body').addClass('hasBasket')
            }



        },

        resize: function(){

            var newWindowWith = $(window).width();

            // TODO: check if still needed
            if( newWindowWith < marshall.properties.deviceWidth.desktop ){
                $('.footer').removeClass('wide');
            } else {
                $('.footer').addClass('wide');
            }

            // basket layout
            if( newWindowWith <= marshall.properties.deviceWidth.phablet ){ // PS: This works together with some media query show/hide
                $('#config_machine').find('.basket .total').removeAttr('colspan');
            } else {
                $('#config_machine').find('.basket .total').attr('colspan', '2');
            }

            $('.sidebox-2').each(function(){
                var $sidebox1 = $('.sidebox', $(this)).eq(0),
                    $sidebox2 = $('.sidebox', $(this)).eq(1),
                    margin = 20;

                $sidebox1.removeAttr('style');
                $sidebox2.removeAttr('style');

                if(newWindowWith <= marshall.properties.deviceWidth.tablet && newWindowWith > marshall.properties.deviceWidth.phone){
                    var $parent = $sidebox1.parent('.sidebar'),
                        sideBoxWidth = ($parent.width() - margin)/2;

                    $sidebox1.css({
                        width:sideBoxWidth,
                        'margin-right': margin + 'px'
                    });
                    $sidebox2.css('width',sideBoxWidth);
                }
            })
        }
    };

    marshall.homepage = {
        $html: $('#homepage-template'),

        init: function(){
            var self = this;
            if(self.$html.length > 0){
                $(window).load(function(){
                    self.setMiniBoxSizes();
                    self.setSideBarSideBoxPadding();
                    self.setVideoBoxSize();
                });
            }
        },

        setSideBarSideBoxPadding: function(){

            var self = this,
                mainWindowWidth = $(window).width(),
                $sideBar = $('.sidebar'),
                $sideBoxes = $('.sidebox', $sideBar),
                sideBoxesWidth = 0;

            $sideBoxes.removeAttr('style'); // resets 'em
            if( mainWindowWidth <= marshall.properties.deviceWidth.tablet && mainWindowWidth > marshall.properties.deviceWidth.phone ){
                sideBoxesWidth = ($sideBar.width()-30)/3;
                $sideBoxes.not($('.news', $sideBar)).width(sideBoxesWidth);
                $sideBoxes.eq(0).css('margin-right', '15px');
                $sideBoxes.eq(1).css('margin-right', '15px');
            }
        },

        setVideoBoxSize: function(){
            var self = this,
                $sideBar = $('.sidebar'),
                $videoBox = $('.video', $sideBar),
                $videoIframe = $('iframe', $videoBox);

            var sideBoxHeight = $('.sidebox', $sideBar).eq('1').height();
            $videoIframe.height(sideBoxHeight);
        },

        setMiniBoxSizes: function(){
            var $minibox = $('.minibox'),
                mainboxWidth = $minibox.parent().width(),
                mainWindowWidth = $(window).width(),
                miniboxWidth = 0;

            $minibox.removeAttr('style');
            $minibox.find('.copy').removeAttr('style');
            $minibox.find('.more').removeAttr('style');

            if( mainWindowWidth >= marshall.properties.deviceWidth.desktop ){
                miniboxWidth = (mainboxWidth-30)/3;
                $minibox.width(miniboxWidth);
                $minibox.eq(0).css('margin-right','15px');
                $minibox.eq(1).css('margin-right','15px');
                var imageHeight = $minibox.eq(0).find('img').height();
                $minibox.eq(2).find('.copy').height(imageHeight);
            }

            if( mainWindowWidth < marshall.properties.deviceWidth.desktop && mainWindowWidth > marshall.properties.deviceWidth.phone ){
                miniboxWidth = (mainboxWidth-15)/2;
                $minibox.width(miniboxWidth);
                $minibox.eq(0).css('margin-right','15px');
                $minibox.eq(0).css('margin-bottom','15px');
                $minibox.eq(1).css('margin-bottom','15px');
                $minibox.eq(2).width('100%').css('margin-bottom','0');
            }

            if( mainWindowWidth <= marshall.properties.deviceWidth.phone ){
                $minibox.width('100%').css('margin-right','0').css('margin-bottom','20px');
                $minibox.eq('2').css('margin-bottom','0');
                $minibox.eq('2').find('.more').css('background-color','#fff');
            }
        },

        resize: function(){
            var self = this;
            if(self.$html.length > 0) {
                if (marshall.properties.isMobile) {
                    self.setMiniBoxSizes();
                    self.setSideBarSideBoxPadding();
                    self.setVideoBoxSize();
                }
            }
        }
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

                    // Reset basket cost, push it back (if you like)
                    var $stickyBasket = $('#basket');
                    $('.total', $stickyBasket).text('0');
                    marshall.stickyBaskest.pushIn();

                } else {

                    self.$configureContent.load('ajax/configure-content.php?machineId='+value, function(){

                        // Add cost to basket, and push it out
                        var $stickyBasket = $('#basket');
                        $('.total', $stickyBasket).text('12,552.00');
                        marshall.stickyBaskest.pushOut();

                        // Attach action to open options
                        $('#btnConfigure', self.$configureContent).on('click', function(evt){

                            evt.preventDefault();
                            self.toggleStepsDisplay('show');

                            var $detail = $('.content', self.$configureContent);

                            // FAKE main product entry
                            var $newRow = $('<tr></tr>');
                            $newRow.append('<td class="name">' +  $('h3', $detail).text()  + ' - Basic price:</td>');
                            $newRow.append('<td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/thumbnails/290313-0832-5148.jpg" alt="QM1200 Monocoque Trailer"></td>');
                            $newRow.append('<td class="cost">&pound;12,552.00</td>');
                            self.$configureTable.append($newRow);

                            // FAKE delivery cost entry
                            $newRow = $('<tr id="211"></tr>');
                            $newRow.append('<td class="name">Delivery Charge (000/00-000):</td>');
                            $newRow.append('<td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/delivery_lorry.jpg" alt="Delivery Charge"></td>');
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
                $collapsibleSteps.not('.email-option').removeClass('closed, displayNone').addClass('open');  // resets collapsible panels
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
                        marshall.stickyBaskest.pushOut();








                        $(obj).removeClass('selected');
                        self.applyTableStripes();

                    } else {

                        // Todo: Any other calculations you need to do
                        // e.g adding price to total cost, and a row to table, maybe pulled in by ajax

                        // e.g fake new row
                        var $newRow = $('<tr id="119"></tr>');
                        $newRow.append('<td class="name">8" Grain Hatch (065/07-8000):</td>');
                        $newRow.append('<td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/8 inch Grain Hatch.jpg" alt="8 grain hatch"></td>');
                        $newRow.append('<td class="cost">&pound;118.00</td>');
                        self.$configureTable.append($newRow);


                        //var $stickyBasket = $('#basket');
                        //$('.total', $stickyBasket).text('X.XX');
                        marshall.stickyBaskest.pushOut();










                        $(obj).addClass('selected');
                        self.applyTableStripes();

                    }
                });
            });
        },

        attachShowHideAction: function(){
            var self = this,
                $showIcons = $('.show-hide', self.$configureForm);

            if(marshall.properties.isMobile){
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
                        $('.error-div').remove();
                    });
                });
            } else {
                $showIcons.each(function(i, obj){

                    var $showHideHeader = $(obj).parents('h3'),
                        $mainBox = $(obj).parents('.mainbox');

                    $showHideHeader.on('click', function(){
                        if($mainBox.hasClass('open')){
                            $('.body', $mainBox).slideUp();
                            $mainBox.removeClass('open').addClass('closed');
                        } else {
                            $('.body', $mainBox).slideDown();
                            $mainBox.removeClass('closed').addClass('open');
                        }
                        //self.fixOptionWidths();

                        $('.error-div').remove();
                    });
                });
            }


        },

        setLinksInStepFour: function(){
            var self = this;

            $('#email_enquiry', self.$configureForm).on('click', function(evt){
                evt.preventDefault();

                $('.email-option', self.$configureForm).removeClass('displayNone');

                $('html, body').animate({
                    scrollTop: $(".email-option").offset().top - 30
                }, 500);
            });

            $('#pdf_enquiry', self.$configureForm).on('click', function(evt){
                evt.preventDefault();

                // do your magic here
            });
        },

        reportError: function($el, msg){
            if(marshall.properties.isMobile){
                var $parentTag = $el.parent('p');
                $parentTag.addClass('error');
                $('.error', $parentTag).html(msg);
            } else {
                var leftPos = $el.offset().left + 205,
                    topPos =  $el.offset().top,
                    $errorDiv = $('<div class="error-div">'+msg+'</div>');

                $errorDiv.css({
                    top: topPos,
                    left: leftPos
                });
                $('body').append($errorDiv);
            }
        },

        setUpConfigurationEmail: function(){
            var self = this,
                $formFieldsBox = $('.email-option', self.$configureForm);

            self.$configureForm.on('submit', function(){

                var isValidForm = true,
                    $lastNameInput = $('#lastname', $formFieldsBox),
                    $telephoneInput = $('#telephone', $formFieldsBox),
                    $emailInput = $('#email', $formFieldsBox);

                $('.error-div').remove();

                // ROBCURLE - tweaks as needed
                if(marshall.utils.isEmptyInputField($lastNameInput)){
                    self.reportError($lastNameInput, 'Please complete this mandatory field');
                    isValidForm = false;
                }

                if(marshall.utils.isEmptyInputField($telephoneInput)){
                    self.reportError($telephoneInput, 'Please complete this mandatory field');
                    isValidForm = false;
                }

                if(marshall.utils.isEmptyInputField($emailInput)){
                    self.reportError($emailInput, 'Please complete this mandatory field');
                    isValidForm = false;
                } else {
                    if(!marshall.utils.isValidEmailAddress($emailInput)){
                        self.reportError($emailInput, 'Please enter a valid email address');
                        isValidForm = false;
                    }
                }

                return isValidForm; // for normal post
            });

            // cosmetic, clears error when user clicks on field
            $('input', $formFieldsBox).on('focus', function(){
                $(this).parents('.error').removeClass('error');
            });

            $('select', $formFieldsBox).on('change', function(){
                $(this).parents('.error').removeClass('error');
            });

        },

        resize: function(){
            var self = this;
            self.fixOptionWidths();
            $('.error-div').remove();
        },

        init: function(){
            var self = this;
            if(self.$configureForm.length > 0){
                self.attachConfigureAction();
                self.attachShowHideAction();
                self.attachOptionsAction();
                self.setLinksInStepFour();
                self.setUpConfigurationEmail();
            }
        }
    };

    marshall.stickyBaskest = {
        $stickyBasket: $('#basket'),

        pushOut: function(){
            var self = this;
            self.$stickyBasket.addClass('stick-out');
        },

        pushIn: function(){
            var self = this;
            self.$stickyBasket.removeClass('stick-out');
            self.$stickyBasket.removeClass('displayNone');
        },

        setUpStickyBasket: function(){
            var self = this,
                initialPos = 176,
                stickyPos = 18;

            $(window).scroll(function(){

                if( $(window).width() > marshall.properties.deviceWidth.phablet ){
                    if( $(this).scrollTop() > initialPos ) {
                        self.$stickyBasket.css('top', $(this).scrollTop() + stickyPos);
                    } else {
                        self.$stickyBasket.css('top', $(this).scrollTop() + initialPos);
                    }
                }
            });

            $('.show-hide', self.$stickyBasket).on('click',function(evt){
                evt.preventDefault();
                if(self.$stickyBasket.hasClass('stick-out')){
                    self.pushIn();
                } else {
                    self.pushOut();
                }
            });

            $('.hide-me', self.$stickyBasket).on('click',function(evt){
                evt.preventDefault();
                self.pushIn();
            });

        },

        resize: function(){
            var self = this;
            self.pushIn();
            $('#basket').removeAttr('style');
        },

        init: function(){
            var self = this;
            if($('#basket').length > 0){
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

    marshall.spares = {

        $html: $('ol.filters'),
        $filterContainer2: $('#filter2', this.$html),
        $filterContainer3: $('#filter3', this.$html),
        $filterContainer4: $('#filter4', this.$html),
        $filterContainer5: $('#filter5', this.$html),
        $filterContainer6: $('#filter6', this.$html),
        $filterContainer7: $('#filter7', this.$html),

        getData: function($container, url){
            var self = this;
            $container.load(url, function(){
                var $nextHeader = $container;
                $nextHeader.parents('li').addClass('selected').removeClass('displayNone');
                if( $(window).width() < marshall.properties.deviceWidth.phone ){
                    $('html, body').animate({
                        scrollTop: $($nextHeader).offset().top - 30
                    }, 500);
                } else {
                    self.adjustFilterHeights();
                }
            });
        },

        init: function(){
            var self = this;

            // Select boxes
            $('#filter1', self.$html).on('change', function(){
                // TODO Ajax for results
                //
                //
                //
                $('#range', self.$html).removeClass('displayNone');
                self.adjustFilterHeights();
                marshall.stickyBaskest.pushOut();
            });

            $('#range', self.$html).on('change', function(){
                // TODO Ajax for results
                //
                //
                //
                $('#model', self.$html).removeClass('displayNone');
                self.adjustFilterHeights();
                marshall.stickyBaskest.pushOut();
            });

            $('#model', self.$html).on('change', function(){
                // TODO Ajax for results
                //
                //
                //
                self.getData(self.$filterContainer2, 'ajax/filters.php');
                marshall.stickyBaskest.pushOut();
            });

            // Link delegates
            $(self.$filterContainer2).on('click', 'a', function(evt){
                evt.preventDefault();
                $('a', self.$filterContainer2).removeClass('selected');
                $(this).addClass('selected');
                // TODO Ajax for results
                //
                //
                //
                self.getData(self.$filterContainer3, 'ajax/filters.php');
                marshall.stickyBaskest.pushOut();
            });


            $(self.$filterContainer3).on('click', 'a', function(evt){
                $('a', self.$filterContainer3).removeClass('selected');
                $(this).addClass('selected');
                evt.preventDefault();
                // TODO Ajax for results
                //
                //
                //
                self.getData(self.$filterContainer4, 'ajax/filters-tall.php');
                marshall.stickyBaskest.pushOut();
            });

            $(self.$filterContainer4).on('click', 'a', function(evt){
                evt.preventDefault();
                $('a', self.$filterContainer4).removeClass('selected');
                $(this).addClass('selected');
                // TODO Ajax for results
                //
                //
                //
                self.getData(self.$filterContainer5, 'ajax/filters.php');
                marshall.stickyBaskest.pushOut();
            });

            $(self.$filterContainer5).on('click', 'a', function(evt){
                evt.preventDefault();
                $('a', self.$filterContainer5).removeClass('selected');
                $(this).addClass('selected');
                // TODO Ajax for results
                //
                //
                //
                marshall.stickyBaskest.pushOut();
                self.getData(self.$filterContainer6, 'ajax/filters.php');
            });

            $(self.$filterContainer6).on('click', 'a', function(evt){
                evt.preventDefault();
                $('a', self.$filterContainer6).removeClass('selected');
                $(this).addClass('selected');
                // TODO Ajax for results
                //
                //
                //
                marshall.stickyBaskest.pushOut();
                self.getData(self.$filterContainer7, 'ajax/filters.php');
            });

            $(self.$filterContainer7).on('click', 'a', function(evt){
                evt.preventDefault();
                $('a', self.$filterContainer7).removeClass('selected');
                $(this).addClass('selected');
                // TODO Ajax for results
                //
                //
                //
                marshall.stickyBaskest.pushOut();
            });
        },

        adjustFilterHeights: function(){
            var self = this,
                $html = $('.filters'),
                initialHeight = 375,
                filterListHeights = [],
                windowWidth = $(window).width();

            // clear all styles
            $('> li', $html).removeAttr('style');

            if( windowWidth > marshall.properties.deviceWidth.phone ){

                $('.filterList', $html).each(function(i, obj){
                    filterListHeights.push($(obj).height()+ 34 ); // + 34 header height
                });

                var tallestLi = Math.max.apply( null, filterListHeights );
                if(tallestLi > initialHeight){
                    $('.filterList', $html).parents('li').height(tallestLi).siblings().height(tallestLi);
                } else {
                    $('.filterList', $html).parents('li').removeAttr('style').siblings().removeAttr('style');
                }
            }
        },

        resize: function(){
            var self = this;
            self.adjustFilterHeights();
        }
    }

    marshall.resize = function(){

        // All resize adjustments
        marshall.environment.resize();
        marshall.navigation.resize();
        marshall.homepage.resize();
        marshall.configuration.resize();
        marshall.mobile.resize();
        marshall.tabs.resize();
        marshall.spares.resize();
        marshall.stickyBaskest.resize();
    };

	marshall.init = function(){

        // All initialisations
        marshall.homepage.init();
        marshall.environment.init();
        marshall.navigation.init();
		marshall.mobile.init();
		marshall.carousel.init();
        marshall.configuration.init();
        marshall.tabs.init();
        marshall.spares.init();
        marshall.stickyBaskest.init();

        // Resize triggers
		$(window).on('resize',function(){
			
			var theWidthNow = $(window).width();
			
			if(marshall.properties.windowWidth != theWidthNow){
				marshall.resize();
				marshall.properties.windowWidth = theWidthNow;
			}
		});

        // Do initial resize, just incase
        // marshall.resize();
        // $(window).trigger('resize');
	};

    // Main init
	$(document).ready(function(){
		marshall.init();
	});

    $(window).load(function(){
        marshall.resize();
        $(window).trigger('resize');
    });

}(jQuery, window));
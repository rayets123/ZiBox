$(document).ready(function () {

    //map API//

    $(document).on('click', '.map_arround', function () {
        $(".wrap_arround").slideToggle();
        return false;
    });
    $(document).on('click', '#panel a', function () {
        var filter = $(this).attr('data-filtr');
        console.log(filter);
        switch(filter) {
            case 'adv':
                var el = $('#filterAdv');
                if (el.prop('checked') == true) {
                    $(this).removeClass("active");
                    el.prop('checked', false);
                } else {
                    $(this).addClass("active");
                    el.prop('checked', true);
                }
                break;
            case 'mind':
                var el = $('#filterMind');
                if (el.prop('checked') == true) {
                    $(this).removeClass("active");
                    el.prop('checked', false);
                } else {
                    $(this).addClass("active");
                    el.prop('checked', true);
                }
                break;
            case 'trd':
                var el = $('#filterTrd');
                if (el.prop('checked') == true) {
                    $(this).removeClass("active");
                    el.prop('checked', false);
                } else {
                    $(this).addClass("active");
                    el.prop('checked', true);
                }
                break;
            default:
                break;
        }
    });

    //----------------------TOOLTIP
    $('[data-toggle="tooltip"]').tooltip();
    //--------------------------------Появление MEDIA при скроле
    $(document).scroll(function () {
        if ($(this).scrollTop() >= 830) {
            $(".media").show().fadeIn();
        } else {
            $(".media").hide().fadeOut();
        }
        ;
        if ($(this).scrollTop() <= 830) {
            $(".audio-list").hide().fadeOut();
        }
        if ($(this).scrollTop() >= 300) {
            $(".up").show().fadeIn();
        } else {
            $(".up").hide().fadeOut();
        }
        ;
    });
    //---------------------------end

    //----------------my_profil_change_status
    $(".edit_status").click(function () {
        $(this).parents(".person_status").find(".save_edit").show();
        $(this).parents(".person_status").addClass("active");
        $(this).parents(".person_status").find("textarea").removeAttr("disabled");
    });
    $(".save_edit").click(function () {
        $(this).hide();
        $(this).parents(".person_status").removeClass("active");
        $(this).parents(".person_status").find("textarea").attr("disabled", "true");
    });
    //-----mark as read in notifications---
    $(".mark_as_read").click(function () {
        $(this).parents(".notific_item").removeClass("notific_unread");
        $(this).hide();
    });
    //---------------trade img preview------
    $(".detail_img_thumbs_l a").click(function () {
        var imgThumb = $(this).html();
        var addThumb = $(this).parents(".detail_img").find(".detail_img_container a");
        addThumb.html(imgThumb);
        return false;
    });


    //--------------------------------call-popup
    $(".hide_chat").click(function () {
        $(this).toggleClass("down");
        if ($(".right_field").css("right") == "0px") {
            $(".right_field").css({
                right: "-340px",
                transition: "all 0.5s linear",
            });
            $(".preview_hide").css({
                right: "0px",
                transition: "all 0.5s linear",
            });
            $(".window_nav").css({
                top: "5px",
                transition: "all 0.5s linear",
            });
            $(".call_window").css({
                width: "100%",
                padding: "30px 100px",
                transition: "all 0.5s linear",
            });
            $(this).css("background-color", "#2e2e2e");
        }
        else {
            $(".right_field").css({
                right: "0px",
                transition: "all 0.5s linear",
            });
            $(".preview_hide").css({
                right: "340px",
                transition: "all 0.5s linear",
            });
            $(".window_nav").css({
                top: "19px",
                transition: "all 0.5s linear",
            });
            $(".call_window").css({
                width: "660px",
                padding: "100px 30px",
                transition: "all 0.5s linear",
            });
            $(this).css("background-color", "#fff");

        }
    });
    //mute on-off
    $(".call_buttons .mute").click(function () {
        $(this).toggleClass("no-mute");
    });

    //select for dropdown
    $(".dropdown-menu li").click(function () {
        $(".dropdown").removeClass("choose");
        $(this).parents(".dropdown").addClass("choose");
        var text = $(this).text();
        $(".choose span").text(text);
    });

    //------------------------------------FRENDS POP-Over
    $(document).on('click', '.open_popup', function () {
        $(".profil_container").removeClass("open");
        $(this).parent().addClass("open");
        return false;
    })

    $(document).click(function () {
        $(".profil_container").removeClass("open");
    });

    //------------------------------------TRADE POP-Over
    $(".item_tittle").click(function () {
        $(".trade_popup").removeClass("open");
        $(this).parents(".trade_item").find(".trade_popup").addClass("open");
        return false;
    });
    $(".up_adress").click(function () {
        $(".update_adress").addClass("open");
        return false;
    });
    $(".close_address").click(function () {
        $(".update_adress").removeClass("open");
        return false;
    });
    $(document).click(function () {
        $(".trade_popup").removeClass("open");
    });

    //--------------------------------------Sort TRADE
    $(".sort_trade .checkbox-inline input").change(function () {
        if (this.checked) {
            $(".trade_item .item_details").show();
            $(this).parent().css("color", "#000");
        } else {
            $(".trade_item .item_details").hide();
            $(this).parent().css("color", "#929292");
        }
    });
    // $(":checkbox").change(function(){
    //    if(this.checked){
    //        $(this).parents(".checkbox").css("color", "#000");
    //    }else{
    //       $(this).parents(".checkbox").css("color", "#929292");
    //    }
    // });

    //-------------------------------full album
    $(".load_more.full_screen").click(function () {
        if ($(".wrap_photos").css("max-height") == "620px") {
            $(".wrap_photos").css("max-height", "100%");
        }
        return false;
    });

    //---------------------------more_playlists
    $(".more_playlists").click(function (event) {
        var gg = Number(event.target.style.height.substring(0, event.target.style.height.length - 2));
        event.target.style.height = (gg + 345) + "px";
        $(".my_playlists").height(gg + 560);
        $(".my_playlists").css("transition", "all 1s");
    });

    //--------------------------------music
    //open-hide lyrics, play-pause
    $(".audio_tracks .pause, .tracks .play").click(function () {
        if ($(this).attr("src") == "/img/icons/music/play.png") {
            $(this).attr("src", "/img/icons/music/pause.png");
        }
        else {
            $(this).attr("src", "/img/icons/music/play.png");
        }
    });
    $(".tracks .play").click(function () {
        $(this).parents(".audio").toggleClass("active");
        if ($(this).parents(".audio_container").find(".audio_hovered").css("display") == "none") {
            $(this).parents(".audio_container").find(".audio_hovered").css("display", "block");
            if ($(this).parents(".audio_container").find(".lyrics").css("display") == "block") {
                $(this).parents(".audio_container").find(".audio_hovered").css("display", "none");
            }
        }
        else {
            $(this).parents(".audio_container").find(".audio_hovered").css("display", "none");
        }
        if ($(this).parents(".audio_container").find(".lyrics").css("display") == "block") {
            $(this).parents(".audio_container").find(".lyrics").css({
                position: "relative",
                top: "0px"
            });
        }
    });

    $(".show_lyrics span").click(function () {
        $(this).parents(".audio_container").find(".lyrics").show();
        $(this).parents(".audio_container").find(".lyrics").css({
            position: "relative",
            top: "-20px"
        });

    });

    $(".hide_lyrics").click(function () {
        $(this).parents(".audio_container").find(".lyrics").hide();
    });
    //---------------------------------------end music

    //---------------------------------------плеер при скроле
    $(".open-close").click(function () {
        if ($(".audio-list").css("width") == "395px") {
            $(".audio-list").css({
                width: "525px",
                height: "270px",
                transition: "all 1s"
            });
            $(".play_list_all").css({
                height: "230px",
                transition: "all 1s"
            });
            $(this).css("background", "url('img/icons/audioplayer/close.png') no-repeat 10px 5px");
        }
        else {
            $(".audio-list").css({
                width: "395px",
                height: "160px",
                transition: "all 1s"
            });
            $(".play_list_all").css({
                height: "120px",
                transition: "all 1s"
            });
            $(this).css("background", "url('img/icons/audioplayer/open.png') no-repeat 10px 5px");
        }
    });
    //------------------------------------end player

    //-----------------------------open-hide map
    $(".location_map a").click(function () {
        var valText = $(this).find("strong").text();
        var rr = $(this).parents(".location").find(".value");
        rr.val(valText);
        return false;
    });
    $(".location_dropdown").click(function () {
        $(".location").removeClass("map_on");
        $(this).parent().addClass("map_on");
        $(".map_on .wrap_map").slideToggle();
        return false;
    });

    $(".show_map").click(function () {
        if ($(this).parents(".wrap_map").css("height") == "210px") {
            $(this).parents(".wrap_map").css({
                height: "400px",
                transition: "all 1s"
            });
            $(".save_location").css({
                display: "block",
                transition: "all 1s"
            });
            $(this).text("Close map");
        }
        else {
            $(this).parents(".wrap_map").css({
                height: "210px",
                transition: "all 1s"
            });
            $(".save_location").css({
                display: "none",
                transition: "all 1s"
            });
            $(this).text("Show map");
        }
        return false;
    });
    //------------------------------------------end map

    //-------------------появление при клике
    $(".media .player").click(function () {
        $(".audio-list").slideToggle(600);
    });

    $(".toggle-mnu2").click(function () {
        $(this).toggleClass("on");
        $(".other_content").slideToggle(600);
        return false;
    });

    //dropdown
    $(".artist_dropdown").click(function () {
        $(this).parent().find(".drop_artists").slideToggle();
        return false;
    });
    $(".drop_artists li").click(function () {
        var valText = $(this).text();
        var rr = $(this).parents(".artist").find(".value");
        rr.val(valText);
    });
    //music delete
    $(".remove_img").click(function () {
        $(this).parents("div.photo_setting, .img_wrap").remove();
    });
    //-------chat_group_open-------
    $(".dropdown_group .open_menu").click(function () {
        $(".dropdown_group .menu").slideToggle();
    });

    $(".open_quastion").click(function () {
        if ($(this).parent().css("height") == "25px") {
            $(this).parent().css("height", "50px");
        }
        else {
            $(this).parent().css("height", "25px");
        }
    });
    //-------chat_create_open------------
    $(".artist_dropdown").click(function () {
        $(".dropdown_create").slideToggle();
    });
    $(".conversation .create").click(function () {
        if ($(".dropdown_create").css("display") == "none") {
            $(".dropdown_create").show();
        }
        else {
            $(".dropdown_create").hide();
        }
        return false;
    });
    //-----------add tags----------------
    $(".link_tags").click(function () {
        $(this).find("span").toggleClass("hide");
        $(this).parents(".tag").find(".dropdown_tag").toggleClass("tittle");
        if ($(this).css("z-index") == "1") {
            $(this).css("z-index", "999");
        } else {
            $(this).css("z-index", "1");
        }
        return false;
    });

    //-----add person----------
    $(".link_person").click(function () {
        $(this).find("span").toggleClass("hide");
        $(this).parents(".person_add").find(".dropdown_tag").toggleClass("tittle");
        if ($(this).css("z-index") == "1") {
            $(this).css("z-index", "999");
        } else {
            $(this).css("z-index", "1");
        }
        return false;
    });

    //удаления при клике
    $(".mark_buttons .delete").click(function () {
        $(this).parents(".wrap_notific_item").remove();
    });
    $(".remove_img").click(function () {
        $(this).parents("div.photo_setting").remove();
    });

    //----------------------------правый сайдбар
    $(".down").click(function () {
        $(this).removeClass();
        $(".right_sidebar").show(600).css("right", "0px");
        return false;
    });


    $(document).on('click', '.toggle-mnu', function () {
        $(this).toggleClass("on");
        if ($(".right_sidebar").css("right") == "0px") {
            $(".right_sidebar").css({
                right: "-185px",
                transition: "right 0.5s linear",
            });
            $(this).css({
                right: "0px",
                transition: "right 0.5s linear",
            });
        }
        else {
            $(".right_sidebar").css({
                right: "0px",
                transition: "right 0.5s linear",
            });
            $(this).css({
                right: "185px",
                transition: "right 0.5s linear",
            });
        }
        return false;
    });
    $(document).on('click', '.toggle-mnu-map', function () {
        $(this).toggleClass("on");
        if ($("#panel").css("left") == "0px") {
            $("#panel").css({
                left: "-60px",
                transition: "left 0.5s linear",
            });
            // $(this).css({
            // 	left: "0",
            // 	transition: "left 0.5s linear",
            // });
        }
        else {
            $("#panel").css({
                left: "0px",
                transition: "left 0.5s linear",
            });
            // $(this).css({
            // 	left: "50px",
            // 	transition: "left 0.5s linear",
            // });
        }
        return false;
    });
    //-----------------------открыть описание в попапе
    // $(".open_description").click(function () {
    // 	if($(".bottom_description").css("height") == "169px"){
    // 		$(".bottom_description").css({
    // 		height: "100%",
    // 		transition: "all .5s"
    // 	});
    // 		$(this).css({
    // 			transform: "rotate(180deg)",
    // 			transition: "all .5s"
    // 		});
    // 	}else{
    // 		$(".bottom_description").css({
    // 		height: "169px",
    // 		transition: "all .5s"
    // 	});
    // 	$(this).css({
    // 			transform: "rotate(360deg)",
    // 			transition: "all .5s"
    // 		});
    // 		}
    // });

    //------------------------скрыть prewiev в попапе
    $(".down").click(function () {
        $(this).removeClass();
        return false;
    });
    // $(".toggle-mnu3").click(function() {
    // 		$(this).toggleClass("down");
    // 		if ($(".owl-carousel").css("bottom") == "0px") {
    //         $(".owl-carousel").css({
    //         	bottom: "-110px",
    //         	transition: "all 0.5s linear",
    //         });
    //         $(".preview_hide").css({
    //         	bottom: "0px",
    //         	transition: "all 0.5s linear",
    //         });
    //         $(".modal-box-content .img_wrap").css({
    //         	height: "600px",
    //         	transition: "all 0.5s linear",
    //         });
    //     }
    //     else{
    //     	 $(".owl-carousel").css({
    //     	 	bottom: "0px",
    //     	 	transition: "all 0.5s linear",
    //     	 });
    //     	 $(".preview_hide").css({
    //         	bottom: "110px",
    //         	transition: "all 0.5s linear",
    //         });
    //     	 $(".modal-box-content .img_wrap").css({
    //         	height: "490px",
    //         	transition: "all 0.5s linear",
    //         });
    //     }
    //     return false;
    // 	});

    //поисковик в хедере
    $(".search_box").click(function () {
        $(this).toggleClass("search_move").css("transition", "all .5s");
        if (($(".top_search input").css("width") == "0px")) {
            $(".top_search input").css({
                width: "185px",
            });
            $(".top_search a").css({
                display: "block",
            });
        }
        else {
            $(".top_search input").css({
                width: "0px",
            });
            $(".top_search a").css({
                display: "none",
            });
        }
        return false;
    });

    //добавление активности ссылкам
    $(".dropdown_create li .dropdown_create li a, .dropdown_create li p, .dropdown_create li span").click(function () {
        $(this).parent().toggleClass("choosen");
    });
    $(".media li .music").click(function () {
        $(".media li .music").removeClass("active");
        $(this).addClass("active");
    });

    $(".audio_filter a").click(function () {
        $(".audio_filter li").removeClass("active_link");
        $(this).parent().addClass("active_link");
    });

    $(".left_menu li").click(function () {
        $(".left_menu li").removeClass("active-link");
        $(this).addClass("active-link");
    });
    $(".chat_menu li").click(function () {
        $(".chat_menu li").removeClass("active");
        $(this).addClass("active");
    });

    $(".left_menu .left_li").click(function () {
        $(".friends-toggle").hide(600);
    });
    //---------------якорь на верх
    $(".up").mPageScroll2id({
        scrollSpeed: 900,
        offset: 60
    });
    //-------------------скрол
    $(".recent .dropdown-menu, .scroll_tags, .dropdown_create ul").niceScroll({
        cursorcolor: "#557bb4",
        cursorwidth: "4px",
        cursorborder: "none",
        horizrailenabled: false,
    });
    $(".carousel-inner, textarea, .settings .dropdown-menu, .form-group .dropdown-menu, .filter .dropdown-menu, .drag .dropzone, .modal-content .chat, .drop_artists, .podrt_descr .chat_field, .main_drop, .location_map, .dropdown_group .menu, .groups, .wrap_chat_inside .chat_field, .modal-content .description_avatar .dropdown-menu, .year .dropdown-menu, .day .dropdown-menu").niceScroll({
        cursorcolor: "#88bb0e",
        cursorwidth: "4px",
        cursorborder: "none",
        horizrailenabled: false,
    });
    $(".scroll_tags_second").niceScroll({
        cursorcolor: "#eb692b",
        cursorwidth: "4px",
        cursorborder: "none",
        horizrailenabled: false,
    });
    $(".play_list_all, .group .dropdown-menu, .music_genre .dropdown-menu, .dialog .dropdown-menu, group .dropdown-menu, .filter .filter_inner, .popup ul, .wrap_right_side").niceScroll({
        cursorwidth: "0px",
        cursorborder: "none",
        horizrailenabled: false,
    });

    //----------------плеер
    $(".audio-player audio, #audio_track, #audio-player").mediaelementplayer({
        alwaysShowControls: true,
        features: ['playpause', 'progress', 'current', 'volume', 'next', 'prev'],
        audioVolume: 'horizontal',
        startVolume: 0.8,
        success: function (mediaElement, domObject) {
            mediaElement.addEventListener('ended', function (e) {
                mejsPlayNext(e.target);
            }, false);
        },
    });

    function mejsPlayNext(currentPlayer) {
        $.each($('.playing'), function (k, v) {
            $(v).attr("src", "/img/icons/music/play.png");
            $(v).removeClass('playing');
            $(v).addClass('playAudio');
        });
        if ($('.audio_container.list_items.current').length > 0) {
            var current_item = $('.audio_container.list_items.current');
            var audio_src = $(current_item).attr('data-src');
            var song_title = $(current_item).find('.song_title').text();
            var song_artist = $(current_item).find('.song_artist').text();
            $(current_item).next().addClass('current').siblings().removeClass('current');
        } else {
            if ($(currentPlayer).hasClass('first_time') && $('.audio_container.list_items').length > 1) {
                var current_item = $('.audio_container.list_items')[1];
                $(currentPlayer).removeClass('first_time');
            } else {
                var current_item = $('.audio_container.list_items')[0];
            }

            var audio_src = $(current_item).attr('data-src');
            var song_title = $(current_item).find('.song_title').text();
            var song_artist = $(current_item).find('.song_artist').text();
            $(current_item).next().addClass('current').siblings().removeClass('current');
        }
        if ($(current_item).is(':last-child')) {
            currentPlayer.setSrc(audio_src);
            currentPlayer.play();
            $(current_item).removeClass('current');
            $('#song_title').find('strong').text(song_title);
            $('#song_artist').text(song_artist);
        } else {
            currentPlayer.setSrc(audio_src);
            currentPlayer.play();
            $('#song_title').find('strong').text(song_title);
            $('#song_artist').text(song_artist);
        }
        $(current_item).find('.playAudio').removeClass('playAudio').addClass('playing').attr("src", "/img/icons/music/pause.png");
    }

    $(document).on('click', '.playing', function () {
        $(this).attr("src", "/img/icons/music/play.png");
        $(this).removeClass('playing');
        $(this).addClass('playAudio');
        $('audio#audio_track:first').each(function () {
            this.player.pause();
        });
    });

    $(document).on('click', 'img.playAudio', function () {
        $('audio#audio_track').removeClass('first_time');
        $.each($('.playing'), function (k, v) {
            $(v).attr("src", "/img/icons/music/play.png");
            $(v).removeClass('playing');
            $(v).addClass('playAudio');
        });
        var el = $(this);
        el.attr("src", "/img/icons/music/pause.png");
        el.removeClass('playAudio');
        el.addClass('playing');
        var current_element = $(this).closest('.audio_container.list_items');
        if ($(current_element).is(':last-child')) {
            $(current_element).removeClass('current');
        } else {
            current_element.next().addClass('current').siblings().removeClass('current');
        }
        var audio_src = current_element.attr('data-src');
        var song_title = current_element.find('.song_title').text();
        var song_artist = current_element.find('.song_artist').text();
        $('#song_title').find('strong').text(song_title);
        $('#song_artist').text(song_artist);

        $('audio#audio_track:first').each(function () {
            this.player.pause();
            if (this.src != location.origin + audio_src) {
                this.player.setSrc(audio_src);
            }
            if ($(el).attr("src") == "/img/icons/music/pause.png") {
                this.player.play();
            }
        });
    });

    $(".book_slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["Previous page", "Next page"],
        items: 2,
        mouseDrag: true,
        slideBy: 2,
        dots: false
    });

    $(".popup_slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["", ""],
        items: 4,
        mouseDrag: true,
        slideBy: 3,
        dots: false
    });

    //-----------------Превю в попапе
    $(".owl-carousel .item a").click(function () {
        var img = $(this).html();
        var add = $(this).parents(".modal-box-content").find(".img_wrap");
        add.html(img);
        return false;
    });
    $(".owl-carousel .item a").click(function () {
        var img = $(this).html();
        var add = $(this).parents(".modal-box-content").find(".img_wrap");
        add.html(img);
        $(this).parents(".modal-box-content").find(".img_wrap video").attr({
            controls: "controls",
            autoplay: "autoplay"
        });
        return false;
    });

    //----------------------роздаем id для попапа
    $(".item").each(function (i) {
        $(this).find(".popup_content").attr("href", "#work_" + i);
        $(this).find(".podrt_descr").attr("id", "work_" + i);
    });
    $(".item").each(function (i) {
        $(this).find(".popup_content_video").attr("href", "#work_" + i);
        $(this).find(".podrt_descr").attr("id", "work_" + i);
    });

    //--------------------------Попап для картинок
    $('.popup-gallery').magnificPopup({
        delegate: '.popup_content',
        type: 'inline',
        mainClass: 'mfp-img-mobile',
        // gallery: {
        // 	enabled: true,
        // 	navigateByImgClick: true
        // },
    });

    // 	$('.popup-gallery-video').magnificPopup({
    // 	delegate: '.popup_content_video',
    // 	type: 'inline',
    // 	mainClass: 'mfp-img-mobile',
    // 	// gallery: {
    // 	// 	enabled: true,
    // 	// 	navigateByImgClick: true
    // 	// },
    // });

    $('select').select2();

    $('.replies_form_input textarea, textarea.status, .whats_new textarea').autoResize({
        extraSpace: 0
    });
    //---------------------------drag and drop
    //$("#my-awesome-dropzone").dropzone();
    //$("#album_cover, #album_cover_1, #album_cover_2, #album_cover_3, #album_cover_4").dropzone();

    //------------------------calenadar
    $('#calendar').fullCalendar({
        buttonText: {
            prev: 'Previous',
            next: 'Next',
            month: 'Month',
            day: 'Day',
            week: 'Week'
        },
        header: {
            left: 'prev',
            center: 'title',
            right: 'month,agendaWeek,agendaDay, next'
        },
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'],
        defaultDate: '2016-01-12',
        selectable: true,
        selectHelper: true,
        select: function (start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2016-01-01'
            },
            {
                title: 'Long Event',
                start: '2016-01-07',
                end: '2016-01-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-01-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-01-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2016-01-11',
                end: '2016-01-13'
            },
            {
                title: 'Meeting',
                start: '2016-01-12T10:30:00',
                end: '2016-01-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2016-01-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2016-01-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2016-01-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2016-01-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2016-01-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2016-01-28'
            }
        ]
    });
	setInterval(function(){
        $.ajax({
            type : 'post',
            url : '/site/check-online'
        });
    }, 1000*60*5);
    $.ajax({
        type : 'post',
        url : '/site/check-online'
    });
});


 

    

 
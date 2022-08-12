


$(function () {

    $('#btn-slide').on('click', function () {
        if (!$('input[type="hidden"]').val()) return;
        $('#rating').html($('#hidden-input').val());
        $('.item-container').css({ display: 'none' });
        $('.second').css({ display: 'block' });
    })
    $('#1').on('click', function () {
        $(this).css('background-color', 'rgb(252, 118, 19)');
        $(this).hover(function () {
            $(this).css('background-color', 'rgb(252, 118, 19)');
        }, function () {
            $(this).css('background-color', 'rgb(252, 118, 19)');
        })

        $('.rate-container > *:not("#1")').each(function () {
            $(this).css('background-color', 'rgb(44, 44, 52)')
            $(this).hover(function () {
                $(this).css('background-color', 'skyblue')
            }, function () {
                $(this).css('background-color', 'rgb(44, 44, 52)')
            })
        });

        $('#hidden-input').val('1');
    })

    $('#2').on('click', function () {
        $(this).css('background-color', 'rgb(252, 118, 19)');
        $(this).hover(function () {
            $(this).css('background-color', 'rgb(252, 118, 19)');
        }, function () {
            $(this).css('background-color', 'rgb(252, 118, 19)');
        })
        $('.rate-container > *:not("#2")').each(function () {
            $(this).css('background-color', 'rgb(44, 44, 52)')
            $(this).hover(function () {
                $(this).css('background-color', 'skyblue')
            }, function () {
                $(this).css('background-color', 'rgb(44, 44, 52)')
            })
        });
        $('#hidden-input').val('2');

    })

    $('#3').on('click', function () {
        $(this).css('background-color', 'rgb(252, 118, 19)');
        $(this).hover(function () {
            $(this).css('background-color', 'rgb(252, 118, 19)');
        }, function () {
            $(this).css('background-color', 'rgb(252, 118, 19)');
        })
        $('.rate-container > *:not("#3")').each(function () {
            $(this).css('background-color', 'rgb(44, 44, 52)')
            $(this).hover(function () {
                $(this).css('background-color', 'skyblue')
            }, function () {
                $(this).css('background-color', 'rgb(44, 44, 52)')
            })

        });
        $('#hidden-input').val('3');

    })

    $('#4').on('click', function () {
        $(this).css('background-color', 'rgb(252, 118, 19)');
        $(this).hover(function () {
            $(this).css('background-color', 'rgb(252, 118, 19)');
        }, function () {
            $(this).css('background-color', 'rgb(252, 118, 19)');
        })
        $('.rate-container > *:not("#4")').each(function () {
            $(this).css('background-color', 'rgb(44, 44, 52)')
            $(this).hover(function () {
                $(this).css('background-color', 'skyblue')
            }, function () {
                $(this).css('background-color', 'rgb(44, 44, 52)')
            })
        });
        $('#hidden-input').val('4')

    })

    $('#5').on('click', function () {
        $(this).css('background-color', 'rgb(252, 118, 19)');
        $(this).hover(function () {
            $(this).css('background-color', 'rgb(252, 118, 19)');
        }, function () {
            $(this).css('background-color', 'rgb(252, 118, 19)');
        })
        $('.rate-container > *:not("#5")').each(function () {
            $(this).css('background-color', 'rgb(44, 44, 52)')
            $(this).hover(function () {
                $(this).css('background-color', 'skyblue')
            }, function () {
                $(this).css('background-color', 'rgb(44, 44, 52)')
            })
        });
        $('#hidden-input').val('5')

    })
})
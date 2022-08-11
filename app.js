


$(function () {
    $('#btn-slide').on('click', function () {
        $('#rating').html($('#hidden-input').val());
        $('.item-container').css({ display: 'none' });
        $('.second').css({ display: 'block' });
    })
    $('#1').on('click', function () {
        $(this).css('background-color', 'rgb(252, 118, 19)');
        $('#1').parent().children().not(this).each(function () {
            $(this).css('background-color', 'rgb(44, 44, 52)');
        });
        $('#hidden-input').val('1');
    })

    $('#2').on('click', function () {
        $(this).css('background-color', 'rgb(252, 118, 19)');
        $('#2').parent().children().not(this).each(function () {
            $(this).css('background-color', 'rgb(44, 44, 52)');
        });
        $('#hidden-input').val('2');

    })

    $('#3').on('click', function () {
        $(this).css('background-color', 'rgb(252, 118, 19)');
        $('#3').parent().children().not(this).each(function () {
            $(this).css('background-color', 'rgb(44, 44, 52)');
        });
        $('#hidden-input').val('3');

    })

    $('#4').on('click', function () {
        $(this).css('background-color', 'rgb(252, 118, 19)');
        $('#4').parent().children().not(this).each(function () {
            $(this).css('background-color', 'rgb(44, 44, 52)')
        });
        $('#hidden-input').val('4')

    })

    $('#5').on('click', function () {
        $(this).css('background-color', 'rgb(252, 118, 19)');
        $('#5').parent().children().not(this).each(function () {
            $(this).css('background-color', 'rgb(44, 44, 52)')
        });
        $('#hidden-input').val('5')

    })
})
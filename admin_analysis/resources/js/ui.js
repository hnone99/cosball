var settingTitle = function () {
    $('#menutree span').each(function () {
        var txt = $(this).text();
        if (txt !== '') {
            var html = '<li class="breadcrumb-item">' + txt + '</li>';
            $('.content-header .breadcrumb').append(html);
        }
    });
    $('#page-title').text($('#menutree span:last-child').text());
}

$(document).ready(function () {
    $('#header-include').load('../_include/header.html');
    $('#location-include').load('../_include/location.html');
    $('#aside-include').load('../_include/aside.html');
    $('#footer-include').load('../_include/footer.html');

    //타이틀, 로케이션
    setTimeout(function () {
        settingTitle();
    }, 200);

    //https://www.daterangepicker.com/
    //single datepicker
    $('[data-event="singleDatepicker"]').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd'
    });
    //range datepicker
    $('[data-event="rangeDatepicker"]').daterangepicker({
        locale: {
            format: 'YYYY-MM-DD'
        }
    });

    //테이블 내 체크박스 전체 선택
    $('[data-check="all"]').on('change', function () {
        if ($(this).prop('checked')) {
            $(this).closest('.table').find('tbody .custom-checkbox .custom-control-input').prop('checked', true);
        } else {
            $(this).closest('.table').find('tbody .custom-checkbox .custom-control-input').prop('checked', false);
        }
    });

    //기타 라디오 선택시 input toggle
    $('[data-check="etc"]').on('change', function () {
        if ($(this).prop('checked')) {
            $($(this).attr('data-match')).show();
        } else {
            $($(this).attr('data-match')).hide();
        }
    });

    //날짜 전체 선택
    $('[data-check="allday"]').on('change', function () {
        if ($(this).prop('checked')) {
            $($(this).attr('data-match')).attr('disabled', true);
        } else {
            $($(this).attr('data-match')).attr('disabled', false);
        }
    });
});
$(function () {

    var executed = false;

    $(window).scroll(function() {
            var threshold = $('.count').offset().top - 300;

            if ($(window).scrollTop() >= threshold) {
                var progressRate = $('.count').attr('data-rate');

                $({
                    percent: 0
                }).animate({
                    percent: progresRate
                }, {
                    duration: 1205,
                    progress: function () {
                        var now = this.percent;
                        $('.count').text(Math.ceil(now) + '%');
                    }
                });
                executed = true;
            }
        }
    });
});
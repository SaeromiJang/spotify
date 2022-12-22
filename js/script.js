

            // 모달 기능
            let modal = $('.modal');
            let modalCon = $('.modal-content');
            let modalClose = $('.modal-close');
            modal.click(function () {
                modal.stop().fadeOut();
                $('html').css('overflow', 'auto');
            });
            modalCon.click(function (event) {
                // 아래로 클릭한 정보 전달 막기
                event.stopPropagation();
            });
            modalClose.click(function () {
                modal.stop().fadeOut();
                $('html').css('overflow', 'auto');
            });
/* globals $ */

//function solve() {
$.fn.gallery = function (columnsPerRow) {
    columnsPerRow = columnsPerRow || 4;

    var $gallery = this;
    var $selected = $gallery.children('.selected');
    var $galleryList = $gallery.children('.gallery-list');
    var $currentImage = $selected.find('#current-image');
    //console.log($currentImage);
    var $previousImage = $selected.find('#previous-image');
    var $nextImage = $selected.find('#next-image');

    var imageContainers = $gallery.children('.image-container');
    imageContainers.each(function (index, element) {
        if (index % columnsPerRow == 0) {
            $(element).addClass('clearfix');
        }
    });

    $galleryList.on('click', 'img', function (ev) {
        var $this = $(this);
        $galleryList.addClass('blurred');
        var imgSrc = $this.attr('src');
        var index = parseInt($this.data('info'));
        $currentImage.attr('src', imgSrc);
        $('<div />').addClass('disabled-background').appendTo($gallery);
        setImaggeInformation($currentImage, imgSrc, index);

        $selected.show();
    });

    $currentImage.on('click', function (ev) {
        $selected.hide();
        $galleryList.removeClass('blurred');
        $gallery.children('.disabled-background').remove();
    })

    $gallery.addClass('gallery');
    $selected.hide();

    function setImaggeInformation($element, src, index) {
        $element.attr('src', src);
        $element.attr('data-info', index);
    }

    function getImageInformation($element) {
        return {
            src: $element.attr('src'),
            index: parseInt($element.data('info'))
        };
    }

    function getNextIndex(index) {
        index++;
        if (index > $imageContainers.length) {
            index = 1;
        }
        return index;
    }
    function getPreviousIndex(index) {
        index--;
        if (index < 1) {
            index = $imageContainers.length;
        }
        return index;
    }


    return this;
};
//}
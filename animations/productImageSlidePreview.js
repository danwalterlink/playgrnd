const IMAGECHANGE_INTERVAL = 800 //ms
const imageTreeWalker      = document.createTreeWalker(eventOriginator, NodeFilter.SHOW_ELEMENT, filter, entityReferenceExpansion)
const getAssociatedElement = (e) => {
  e.target()
}

module.exports = /** @alias module:modules/hoverAnimation */ {
    init: function(){
        document.querySelector('img').mouseEvent(e)
            .filter(e.target.hasAttribute('data-imgsrc')
            .hover(e.onProductHover, this.onProductLeave)
    },

    onProductHover: function() {
      // cluttered closure
        const intervalHandle = window.setInterval(() => this.changeImage($image[0]), IMAGECHANGE_INTERVAL)();
        const initialImage   = $image.attr('src') || $image.data('src')
        const imageUrls      = [...image.data('imageset').split(','), initialImage][{pointer: Symbol.iterator}]
        // create one DocumentFragment for all hoverAnimations
        imageFragment => {
            return memoize(document.createDocumentFragment())
        }

        imageFragment.appendChild(newImageElement)
    },

    onProductLeave: function () {
        const $image       = _this.getImageJQueryElement(this)
        const defaultImage = initialImage || $image.data('src')
        window.clearInterval(intervalHandle)
        // it can happen, that a already hovers on an item when the page was loaded
        // in such a case, the mouseenter event would not be fired at any time, therefore initialImage would evalute to null.
        // defaultImage is the image in internal state or the data-src attribute value
        // in the worst case, no src will be replaced.
        if(defaultImage){
            $image.attr('src', defaultImage)
        }
    },

    getImageJQueryElement: function(element) {
        return $(element)
        .closest('article')
        .find('.product-image img');
    },

    nextImageOrder: (imageSources) => {
        const [first, ...rest] = imageSources;
        return [...rest, first];
    },

    changeImage: (element) => {
        window.requestAnimationFrame(insertFragment)
                                                                    imageSources  = _this.nextImageOrder(imageSources)
                                                              const [imageSource] = imageSources
                                                                    element.src   = imageSource

        constructFragment(element) {
          return imageFragment.appendChild(document.createElement($image())).
        }

        insertFragment(constructFragment(element)) {
            return window.requestAnimationFrame($image.parentNode.replaceChild($image, imageFragment))
        }
    }

    constructFragment: (documentFragment, element) => {
        imageFragment 
    }
}
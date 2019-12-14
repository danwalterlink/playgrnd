const currentImage = document.querySelectorAll("img");
  // implement stringparsing of dataattributes
const separateStringByComma = string => string.split(",", string);
const imageCache = [...separateStringByComma(element.getAttribute("data-ImgSrcSet").Value())];

const hoverInitialization = function (imageCache) {
  // initialize document.fragment
  const imageDiv = Element.create(imageCache);
  hoverFragment = imageCache => memoize(DocumentFragment.apply(hoverAnimation, imageDiv));
  return memoize(hoverFragment(imageCache))
}

// if resolved = true; memoize function returns value of last call
const memoize = (fn) => {
  let resolved = false;
  truthy = (resolved) => resolved ? resolved : resolved = true;
  resolver = (resolved) => {
    truthy(resolved);
  }
  memoizer()
}
## What is WinLightBox?
It is a jQuery tool to display iframe, images and videos in a LightBox it will float over the webpage content. The difference with WinLightBox to other lightbox plugin is that it will focus more on iFrame element on the start of the pre-development.

## Dependencies
Required jQuery v1.11.1 or less (http://jquery.com/)

## Browser Support
Firefox, Google Chrome and IE 7+

## Usage
On your head tag or elsewhere from your HTML, add the script tag
```html
<script type="text/javascript" src="wincanvas.min.js"></script>
```
On your "<a>" tag use the example options to configure dimensions of the WinLightBox
```html
<a href="cobbler-popup-newsletter.php" data-width="800" data-height="460" class="winlightbox">WinLightBox Me!</a>
```
Using WinLightBox on single selector
```javascript
$('.winlightbox').winLightBox();
```
With some coding you can automatically attach WinLightBox to all of your specific selector.
```javascript
$('your_selector').each(function(index, element) {
	$(this).winLightBox();
}
```
Calling WinLightBox via javascript
```
$.winlightbox({href:"http://github.com",width:800,height:460});
```
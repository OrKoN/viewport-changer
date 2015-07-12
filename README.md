# Viewport Changer

A simple drop-in script that resizes the specified iframe on the page to emulate desktop/mobile/tablet devices. It's useful for demos for component authors. Adding the view changer will allow users to see how your components behave on different devices.

## Usage

Include via script tag:

```html

```

or install via JSPM:


Then add the following HTML to your page:

```html
<div data-reload="false" data-target="targetIframe" data-default-viewport="desktop" class="viewport-changer">
  <a href="#" class="fa fa-desktop fa-3x" data-viewport="desktop"></a>
  <a href="#" class="fa fa-mobile fa-3x" data-viewport="mobile"></a>
  <a href="#" class="fa fa-tablet fa-3x" data-viewport="tablet"></a>
</div>
```


## TODO

- unregister event listeners
- tests
- test cross-platform

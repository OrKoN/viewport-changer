var ViewportChanger = function(opts) {
  this.target = opts.target || null;
  this.defaultViewport = opts.defaultViewport || "desktop";
  this.container = opts.container || null
  this.reload = opts.reload || false;
  this.init();
}

ViewportChanger.prototype.init = function() {
  this.container.addEventListener('click', this.onClick.bind(this));
  this.resize.apply(this, this.getSizesFor(this.defaultViewport));
}

ViewportChanger.prototype.onClick = function(e) {
  var viewport = e.target.dataset.viewport;
  this.resize.apply(this, this.getSizesFor(viewport));
}

ViewportChanger.prototype.resize = function(width, height) {
  this.target.style.width = width;
  this.target.style.height = height;
  if (this.reload) {
    this.target.src = this.target.src;
  }
}

ViewportChanger.prototype.getSizesFor = function(viewport) {
  var sizes = {
    'desktop': ['1280px', '800px'],
    'mobile': ['375px', '667px'],
    'tablet': ['1024px', '768px']
  }
  return sizes[viewport];
}

var classes = document.getElementsByClassName('viewport-changer');
for (var i = 0; i < classes.length; i++) {
  var container = classes[i];
  var opts = {
    target: document.getElementById(container.dataset.target),
    defaultViewport: container.dataset.defaultViewport,
    container: container
  }
  var changer = new ViewportChanger(opts);
}

attachListeners();
new MutationObserver(attachListeners.bind(this)).observe(document, {
  childList: true,
  subtree: true
});

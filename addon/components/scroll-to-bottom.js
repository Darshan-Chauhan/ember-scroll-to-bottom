import Ember from 'ember';

export default Ember.Component.extend({
  showScrollIcon: true,

  init() {
    this._super(...arguments);
    var _this = this;
    const currentScrollPosition = window.innerHeight + window.pageYOffset;
    const documentScrollHeight = document.body.offsetHeight + 2;
    _this.handleScrollArrow(currentScrollPosition, documentScrollHeight);
    var scrollHandler = function (object) {
      object.handleScrollArrow(currentScrollPosition, documentScrollHeight);
    };
    window.addEventListener("scroll", function() {
      scrollHandler(_this);
    }, false);
  },

  handleScrollArrow(currentScrollPosition, documentScrollHeight) {
    if (currentScrollPosition >= documentScrollHeight) {
      object.set("showScrollIcon", false);
    } else {
      object.set("showScrollIcon", true);
    }
  },

  click() {
    let body = document.body;
    let html = document.documentElement;
    let height = Math.max( body.scrollHeight, body.offsetHeight,
                  html.clientHeight, html.scrollHeight, html.offsetHeight );
    window.scrollTo({ top: height, behavior: 'smooth' });
  },

  willDestroyElement() {
    this.destroy();
  }
});

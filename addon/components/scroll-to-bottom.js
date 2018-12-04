import Ember from 'ember';

export default Ember.Component.extend({
  showScrollIcon: true,

  init() {
    this._super(...arguments);
    var _this = this;
    var scrollHandler = function (object) {
     if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 2)) {
        object.set("showScrollIcon", false);
      } else {
        object.set("showScrollIcon", true);
      }
    };
    window.addEventListener("scroll", function() {
      scrollHandler(_this);
    }, false);
  },

  click() {
    let body = document.body;
    let html = document.documentElement;
    let height = Math.max( body.scrollHeight, body.offsetHeight,
                  html.clientHeight, html.scrollHeight, html.offsetHeight );
    window.scrollTo({ top: height, behavior: 'smooth' });
  }
});

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
    var finaldestination = document.querySelector("body").scrollHeight;
    window.scrollTo({ top: finaldestination, behavior: 'smooth' });
  }
});

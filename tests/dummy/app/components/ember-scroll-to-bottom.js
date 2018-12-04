import Ember from 'ember';

export default Ember.Component.extend({
  showScrollIcon: true,

  init() {
    this._super(...arguments);
    var _this = this;
    var storageHandler = function () {
     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        this.set("showScrollIcon", false);
      } else {
        this.set("showScrollIcon", true);
      }
    };
    window.addEventListener("scroll", function() {
      storageHandler.call(_this);
    }, false);
  },

  click(element) {
    var finaldestination = document.querySelector("body").scrollHeight;
    window.scrollTo({ top: finaldestination, behavior: 'smooth' });
  }
});

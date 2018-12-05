import Ember from 'ember';

export default Ember.Component.extend({
  showScrollIcon: true,
  customClass: null,
  customScrollElement: null,

  didRender() {
    this._super(...arguments);
    var _this = this;
    const customClass = this.get("customClass");
    const customScrollElement = this.get("customScrollElement");

    //For custom styling
    if(customClass) {
      Ember.$('.ember-scroll-to-bottom').addClass(customClass);
    }

    //Sets initial scroll arrow based on page rendered
    _this.handleScrollArrow();


    //Scroll handling on particular element
    if(customScrollElement) {
      // Click component event will handle scrolling
    } else {
      //Event handling on window scroll
      var scrollHandler = function (object) {
        object.handleScrollArrow();
      };
      window.addEventListener("scroll", function() {
        scrollHandler(_this);
      }, false);
    }
  },

  handleScrollArrow() {
    const currentScrollPosition = window.innerHeight + window.pageYOffset;
    //2 is added as fix on Mac
    const documentScrollHeight = document.body.offsetHeight + 2;
    if (currentScrollPosition >= documentScrollHeight) {
      this.set("showScrollIcon", false);
    } else {
      this.set("showScrollIcon", true);
    }
  },

  click() {
    const customScrollElement = this.get("customScrollElement");
    const _this = this;
    if(customScrollElement) {
      Ember.$(customScrollElement).animate({ scrollTop: Ember.$(customScrollElement).prop("scrollHeight")}, 1000, function() { _this.set("showScrollIcon", false); });
    } else {
      let body = document.body;
      let html = document.documentElement;
      let height = Math.max( body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight );
      window.scrollTo({ top: height, behavior: 'smooth' });
    }
  },

  willDestroyElement() {
    this.destroy();
  }
});

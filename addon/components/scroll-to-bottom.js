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



    if(customScrollElement) {
      //Scroll handling on particular element
      Ember.$(customScrollElement).on("scroll", function() {
        _this.handleScrollArrow();
      });

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
    const customScrollElement= this.get("customScrollElement");
    const currentScrollPosition = window.innerHeight + window.pageYOffset;
    const documentScrollHeight = document.body.offsetHeight + 1;
    if(customScrollElement) {
      if((Ember.$(customScrollElement).scrollTop() + 2) >= (Ember.$(customScrollElement).prop("scrollHeight") - Ember.$(customScrollElement).prop("offsetHeight"))) {
        if(!this.isDestroyed) {
          this.set("showScrollIcon", false);
        } else {
          if(!this.isDestroyed) {
            this.set("showScrollIcon", true);
          }
        }
      }

    } else {
      if (currentScrollPosition >= documentScrollHeight) {
        if(!this.isDestroyed) {
          this.set("showScrollIcon", false);
        }
      } else {
        if(!this.isDestroyed) {
          this.set("showScrollIcon", true);
        }
      }
    }
  },

  click() {
    const customScrollElement = this.get("customScrollElement");
    const _this = this;
    if(customScrollElement) {
      Ember.$(customScrollElement).animate(
        { scrollTop: Ember.$(customScrollElement).prop("scrollHeight")},
        1000,
        function() { if(!_this.isDestroyed) { _this.set("showScrollIcon", false); }
      });
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

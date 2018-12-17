'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SkillsInfluences = function (_React$Component) {
  _inherits(SkillsInfluences, _React$Component);

  function SkillsInfluences(props) {
    _classCallCheck(this, SkillsInfluences);

    var _this = _possibleConstructorReturn(this, (SkillsInfluences.__proto__ || Object.getPrototypeOf(SkillsInfluences)).call(this, props));

    _this.state = {
      skills: [],
      influences: []
    };
    return _this;
  }

  _createClass(SkillsInfluences, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/data/skills.js?v=2').then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return _this2.setState({ skills: json });
      });

      fetch('/data/influences.js?v=4').then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return _this2.setState({ influences: json });
      });
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item, idx) {
      return React.createElement(
        'li',
        { key: idx, className: 'mdc-list-item' },
        item
      );
    }
  }, {
    key: 'renderGroup',
    value: function renderGroup(items, idx) {
      var _this3 = this;

      return React.createElement(
        'div',
        { key: idx, className: 'mdc-layout-grid__cell--span-3' },
        React.createElement(
          'ul',
          { className: 'mdc-list' },
          items.map(function (item, i) {
            return _this3.renderItem(item, i);
          })
        )
      );
    }
  }, {
    key: 'renderItems',
    value: function renderItems(items) {
      var _this4 = this;

      var chunks = [];

      for (var i = 0; i < items.length; i += 5) {
        chunks.push(items.slice(i, i + 5));
      }

      return React.createElement(
        'div',
        { className: 'mdc-layout-grid__inner' },
        chunks.map(function (items, i) {
          return _this4.renderGroup(items, i);
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'mdc-layout-grid__inner' },
        React.createElement(
          'div',
          { className: 'mdc-layout-grid__cell--span-12' },
          React.createElement(
            'h2',
            { className: 'heading--section-title' },
            'Skills'
          ),
          this.renderItems(this.state.skills)
        ),
        React.createElement(
          'div',
          { className: 'mdc-layout-grid__cell--span-12' },
          React.createElement(
            'h2',
            { className: 'heading--section-title' },
            'Influences'
          ),
          this.renderItems(this.state.influences)
        )
      );
    }
  }]);

  return SkillsInfluences;
}(React.Component);

var AboutMe = function (_React$Component2) {
  _inherits(AboutMe, _React$Component2);

  function AboutMe() {
    _classCallCheck(this, AboutMe);

    return _possibleConstructorReturn(this, (AboutMe.__proto__ || Object.getPrototypeOf(AboutMe)).apply(this, arguments));
  }

  _createClass(AboutMe, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // legacy photo-feed.js needs a custom Event
      document.dispatchEvent(new Event('AboutMe:Ready'));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'mdc-layout-grid' },
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__inner' },
            React.createElement(
              'div',
              { className: 'mdc-layout-grid__cell--span-2-desktop' },
              '\xA0'
            ),
            React.createElement(
              'div',
              { className: 'mdc-layout-grid__cell--span-8' },
              React.createElement(
                'div',
                { id: 'hello__more' },
                React.createElement(
                  'h4',
                  null,
                  'hola mundo \u2022 bonjour le monde \u2022 hello world'
                ),
                React.createElement(
                  'p',
                  null,
                  'Welcome, and thank you for taking the time to get to know me. My 20 year background includes both front-end and back-end programming, while nurturing a keen eye and strong passion for a well-designed UI and UX. I prefer working prototypes and designing in the browser over complete plans and mockups. I like weekly iterative cycles, I thrive on customer feedback, and I love human-centered design.'
                ),
                React.createElement(
                  'p',
                  null,
                  'Good design trims away everything that\'s not necessary, is honest about what\'s not working, and promotes empathy, compassion, and humans above policy, routine, and expectation.'
                ),
                React.createElement(
                  'p',
                  null,
                  'These are some of the values that I will bring to your project. With strong opinions loosely held, I hope to work on a team with a shared vision of excellence.'
                ),
                React.createElement(
                  'p',
                  null,
                  'Thank you again for your time,',
                  React.createElement('br', null),
                  'Joseph M. Sak'
                )
              )
            )
          )
        ),
        React.createElement(SkillsInfluences, null),
        React.createElement(
          'div',
          { className: 'mdc-layout-grid mdc-layout-grid' },
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell--span-12' },
            React.createElement('div', { id: 'photo-feed', className: 'mdc-layout-grid__inner' })
          )
        ),
        React.createElement(
          'div',
          { id: 'lightbox', className: 'lightbox-close' },
          React.createElement(
            'div',
            { className: 'lightbox-header' },
            React.createElement(
              'div',
              null,
              '\xA0'
            ),
            React.createElement(
              'a',
              { id: 'lightbox-close', href: '#' },
              '\xD7'
            )
          ),
          React.createElement(
            'div',
            { className: 'lightbox-img' },
            React.createElement(
              'a',
              { className: 'lightbox-nav prev', href: '#' },
              '\u2039'
            ),
            React.createElement('img', null),
            React.createElement(
              'a',
              { className: 'lightbox-nav next', href: '#' },
              '\u203A'
            )
          )
        )
      );
    }
  }]);

  return AboutMe;
}(React.Component);

var ReactRouter = window.ReactRouterDOM;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { id: 'hello' },
          React.createElement(
            'h1',
            null,
            'Joe Sak'
          ),
          React.createElement(
            'h2',
            null,
            'Full\u2013Stack Developer'
          ),
          React.createElement(
            'h2',
            null,
            'Photographer'
          )
        ),
        React.createElement(
          'footer',
          { id: 'site-footer' },
          React.createElement(
            'p',
            null,
            'This github pages site was made in VS Code with HTML5, CSS3, ES6, and React by Joseph M. Sak',
            React.createElement(
              'span',
              null,
              React.createElement(
                'i',
                null,
                '\uD83D\uDCF7'
              ),
              React.createElement(
                'i',
                null,
                '\uD83D\uDCF8'
              )
            ),
            React.createElement(
              'a',
              { href: 'https://github.com/joemsak/joemsak.github.io' },
              'Open the source of this site'
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var ScrollToTop = function (_React$Component4) {
  _inherits(ScrollToTop, _React$Component4);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, (ScrollToTop.__proto__ || Object.getPrototypeOf(ScrollToTop)).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ScrollToTop;
}(React.Component);

ScrollToTop = ReactRouter.withRouter(ScrollToTop);

var Router = ReactRouter.HashRouter;

ReactDOM.render(React.createElement(
  Router,
  null,
  React.createElement(
    ScrollToTop,
    null,
    React.createElement(App, null)
  )
), document.getElementById('app'));
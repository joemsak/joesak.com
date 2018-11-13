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

      fetch('/data/skills.js').then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return _this2.setState({ skills: json });
      });

      fetch('/data/influences.js?v=1').then(function (resp) {
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

      for (var i = 0; i < items.length; i++) {
        chunks.push(items.slice(i, i += 4));
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

var FAQ = function (_React$Component2) {
  _inherits(FAQ, _React$Component2);

  function FAQ(props) {
    _classCallCheck(this, FAQ);

    var _this5 = _possibleConstructorReturn(this, (FAQ.__proto__ || Object.getPrototypeOf(FAQ)).call(this, props));

    _this5.state = {
      faqs: []
    };
    return _this5;
  }

  _createClass(FAQ, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this6 = this;

      fetch('/data/faqs.js').then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return _this6.setState({ faqs: json });
      });
    }
  }, {
    key: 'renderAnswer',
    value: function renderAnswer(answer, i) {
      return React.createElement(
        'p',
        { key: i },
        answer
      );
    }
  }, {
    key: 'renderFaq',
    value: function renderFaq(faq, i) {
      var _this7 = this;

      return React.createElement(
        'div',
        { key: i },
        React.createElement(
          'dt',
          { className: 'hire-questions__question' },
          faq.question
        ),
        React.createElement(
          'dd',
          { className: 'hire-questions__answer' },
          faq.answers.map(function (answer, i) {
            return _this7.renderAnswer(answer, i);
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      return React.createElement(
        'div',
        { className: 'mdc-layout-grid__cell--span-12' },
        React.createElement(
          'dl',
          { className: 'hire-questions' },
          this.state.faqs.map(function (faq, i) {
            return _this8.renderFaq(faq, i);
          })
        )
      );
    }
  }]);

  return FAQ;
}(React.Component);

var HireMe = function (_React$Component3) {
  _inherits(HireMe, _React$Component3);

  function HireMe() {
    _classCallCheck(this, HireMe);

    return _possibleConstructorReturn(this, (HireMe.__proto__ || Object.getPrototypeOf(HireMe)).apply(this, arguments));
  }

  _createClass(HireMe, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // email.js needs custom Event
      document.dispatchEvent(new Event('HireMe:Ready'));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'mdc-layout-grid' },
        React.createElement(
          'div',
          { className: 'mdc-layout-grid__inner' },
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell--span-6' },
            React.createElement(
              'div',
              { className: 'hire-me' },
              React.createElement(
                'h1',
                { className: 'hire-me__topic' },
                'Web design & development',
                React.createElement(
                  'small',
                  null,
                  '(business hours)'
                )
              ),
              React.createElement(
                'h2',
                { className: 'hire-me__rate' },
                '$13,000 USD / month',
                React.createElement(
                  'small',
                  null,
                  'Half due up front, the rest at month\'s end'
                )
              ),
              React.createElement(
                'p',
                { className: 'hire-me__duration' },
                '6-8 hours a day, Mondays \u2013 Fridays'
              ),
              React.createElement(
                'p',
                { className: 'hire-me__deliverables' },
                React.createElement(
                  'strong',
                  null,
                  'Services include, but are not limited to:'
                ),
                'ruby \u2022 ruby on rails \u2022 html \u2022 css \u2022 javascript \u2022 UI/UX design \u2022 refactoring \u2022 IT administration'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell--span-6' },
            React.createElement(
              'div',
              { className: 'hire-me' },
              React.createElement(
                'h1',
                { className: 'hire-me__topic' },
                'Web design & development',
                React.createElement(
                  'small',
                  null,
                  '(outside of business hours)'
                )
              ),
              React.createElement(
                'h2',
                { className: 'hire-me__rate' },
                '$5,000 USD / month',
                React.createElement(
                  'small',
                  null,
                  'Half due up front, the rest at month\'s end'
                )
              ),
              React.createElement(
                'p',
                { className: 'hire-me__duration' },
                '2-3 hours a day, Mondays \u2013 Fridays'
              ),
              React.createElement(
                'p',
                { className: 'hire-me__deliverables' },
                React.createElement(
                  'strong',
                  null,
                  'Services include, but are not limited to:'
                ),
                'ruby \u2022 ruby on rails \u2022 html \u2022 css \u2022 javascript \u2022 UI/UX design \u2022 refactoring \u2022 IT administration'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell--span-6' },
            React.createElement(
              'div',
              { className: 'hire-me' },
              React.createElement(
                'h1',
                { className: 'hire-me__topic' },
                'Consultation',
                React.createElement(
                  'small',
                  null,
                  '(business hours)'
                )
              ),
              React.createElement(
                'h2',
                { className: 'hire-me__rate' },
                '$80 USD / hour'
              ),
              React.createElement(
                'p',
                { className: 'hire-me__deliverables' },
                React.createElement(
                  'strong',
                  null,
                  'Services include, but are not limited to:'
                ),
                'pairing \u2022 mentoring \u2022 refactoring \u2022 testing \u2022 IT administration'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell--span-6' },
            React.createElement(
              'div',
              { className: 'hire-me' },
              React.createElement(
                'h1',
                { className: 'hire-me__topic' },
                'Consultation',
                React.createElement(
                  'small',
                  null,
                  '(outside of business hours)'
                )
              ),
              React.createElement(
                'h2',
                { className: 'hire-me__rate' },
                '$150 USD / hour'
              ),
              React.createElement(
                'p',
                { className: 'hire-me__deliverables' },
                React.createElement(
                  'strong',
                  null,
                  'Services include, but are not limited to:'
                ),
                'pairing \u2022 mentoring \u2022 refactoring \u2022 testing \u2022 IT administration'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--centered' },
            React.createElement(
              'p',
              null,
              'Specific deliverables to be outlined in contract.'
            ),
            React.createElement(
              'p',
              null,
              React.createElement(
                'a',
                { className: 'email', href: '#' },
                'Email me to get started'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'hidden--desktop mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--centered' },
            React.createElement(
              'a',
              { href: '/' },
              'About me'
            )
          ),
          React.createElement(FAQ, null)
        )
      );
    }
  }]);

  return HireMe;
}(React.Component);

var AboutMe = function (_React$Component4) {
  _inherits(AboutMe, _React$Component4);

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
            { className: 'hidden--desktop mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--centered' },
            React.createElement(
              'a',
              { href: '/hire' },
              'Hire me'
            )
          ),
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

var App = function (_React$Component5) {
  _inherits(App, _React$Component5);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'renderNavigation',
    value: function renderNavigation() {
      if (window.location.hash == "#/hire") {
        return React.createElement(
          Link,
          { to: '/' },
          'About me'
        );
      } else {
        return React.createElement(
          Link,
          { to: '/hire' },
          'Hire me'
        );
      }
    }
  }, {
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
          ),
          this.renderNavigation()
        ),
        React.createElement(Route, { path: '/', exact: true, component: AboutMe }),
        React.createElement(Route, { path: '/hire', component: HireMe }),
        React.createElement(
          'footer',
          { id: 'site-footer' },
          'This github pages site was made in VS Code with HTML5, CSS3, ES6, and React by Joseph M. Sak',
          React.createElement(
            'span',
            null,
            '\uD83D\uDCF8'
          ),
          React.createElement(
            'a',
            { href: 'https://github.com/joemsak/joemsak.github.io' },
            'Open the source of this site'
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var Router = ReactRouter.HashRouter;

ReactDOM.render(React.createElement(
  Router,
  null,
  React.createElement(App, null)
), document.getElementById('app'));
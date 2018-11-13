'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Insta = function (_React$Component) {
  _inherits(Insta, _React$Component);

  function Insta(props) {
    _classCallCheck(this, Insta);

    var _this = _possibleConstructorReturn(this, (Insta.__proto__ || Object.getPrototypeOf(Insta)).call(this, props));

    _this.state = {
      essays: []
    };
    return _this;
  }

  _createClass(Insta, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/data/essays.js?v=1').then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return _this2.setState({ essays: json });
      });
    }
  }, {
    key: 'renderEssay',
    value: function renderEssay(essay) {
      return React.createElement(
        'li',
        { key: essay.title },
        React.createElement(
          'a',
          { href: essay.link },
          essay.title
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'ol',
        null,
        this.state.essays.map(function (essay) {
          return _this3.renderEssay(essay);
        })
      );
    }
  }]);

  return Insta;
}(React.Component);

var appEl = document.querySelector('#insta-app');
ReactDOM.render(React.createElement(Insta, null), appEl);
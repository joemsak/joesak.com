'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      skills: [],
      influences: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/data/skills.js').then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return _this2.setState({ skills: json });
      });

      fetch('/data/influences.js').then(function (resp) {
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
    key: 'renderSkills',
    value: function renderSkills() {
      this.renderItems(this.state.skills);
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

  return Index;
}(React.Component);

var appEl = document.querySelector('#index-app');
ReactDOM.render(React.createElement(Index, null), appEl);
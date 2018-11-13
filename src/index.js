'use strict'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: [],
      influences: [],
    }
  }

  componentDidMount () {
    fetch('/assets/js/skills.js')
      .then(resp => resp.json())
      .then(json => this.setState({ skills: json }))

    fetch('/assets/js/influences.js')
      .then(resp => resp.json())
      .then(json => this.setState({ influences: json }))
  }

  renderItem (item, idx) {
    return (
      <li key={idx} className="mdc-list-item">{ item }</li>
    )
  }

  renderGroup (items, idx) {
    return (
      <div key={idx} className="mdc-layout-grid__cell--span-3">
        <ul className="mdc-list">
          {items.map((item, i) => this.renderItem(item, i))}
        </ul>
      </div>
    )
  }

  renderSkills () {
    this.renderItems(this.state.skills)
  }

  renderItems (items) {
    let chunks = []

    for (let i = 0; i < items.length; i++) {
      chunks.push(items.slice(i, i += 4));
    }

    return (
      <div className="mdc-layout-grid__inner">
        {chunks.map((items, i) => this.renderGroup(items, i))}
      </div>
    )
  }

  render() {
    return(
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell--span-12">
          <h2 className="heading--section-title">
            Skills
          </h2>

          {this.renderItems(this.state.skills)}
        </div>

        <div className="mdc-layout-grid__cell--span-12">
          <h2 className="heading--section-title">
            Influences
          </h2>

          {this.renderItems(this.state.influences)}
        </div>
      </div>
    )
  }
}

var appEl = document.querySelector('#index-app')
ReactDOM.render(<Index />, appEl)
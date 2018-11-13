'use strict'

class Insta extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      essays: [],
    }
  }

  componentDidMount () {
    fetch('/data/essays.js?v=1')
      .then(resp => resp.json())
      .then(json => this.setState({ essays: json }))
  }

  renderEssay(essay) {
    return <li key={essay.title}><a href={essay.link}>{essay.title}</a></li>
  }

  render () {
    return (
      <ol>
        {this.state.essays.map(essay => this.renderEssay(essay))}
      </ol>
    )
  }
}

const appEl = document.querySelector('#insta-app')
ReactDOM.render(<Insta />, appEl)
'use strict'

class SkillsInfluences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: [],
      influences: [],
    }
  }

  componentDidMount () {
    fetch('/data/skills.js?v=2')
      .then(resp => resp.json())
      .then(json => this.setState({ skills: json }))

    fetch('/data/influences.js?v=4')
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

  renderItems (items) {
    let chunks = []

    for (let i = 0; i < items.length; i+=5) {
      chunks.push(items.slice(i, i + 5))
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

class AboutMe extends React.Component {
  componentDidMount () {
    // legacy photo-feed.js needs a custom Event
    document.dispatchEvent(new Event('AboutMe:Ready'))
  }

  render() {
    return(
      <div>
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2-desktop">
              &nbsp;
            </div>

            <div className="mdc-layout-grid__cell--span-8">
              <div id="hello__more">
                <h4>hola mundo • bonjour le monde • hello world</h4>

                <p>
                  Welcome, and thank you for taking the time to get to
                  know me. My 20 year background includes both front-end
                  and back-end programming, while nurturing a keen eye
                  and strong passion for a well-designed UI and UX.
                  I prefer working prototypes and designing in the
                  browser over complete plans and mockups. I like weekly
                  iterative cycles, I thrive on customer feedback,
                  and I love human-centered design.
                </p>

                <p>
                  Good design trims away everything that&apos;s not necessary,
                  is honest about what&apos;s not working, and promotes
                  empathy, compassion, and humans above policy, routine,
                  and expectation.
                </p>

                <p>
                  These are some of the values that I will bring to your
                  project. With strong opinions loosely held, I hope to
                  work on a team with a shared vision of excellence.
                </p>

                <p>
                  Thank you again for your time,<br />
                  Joseph M. Sak
                </p>
              </div>
            </div>
          </div>
        </div>

        <SkillsInfluences />

        <div className="mdc-layout-grid mdc-layout-grid">
          <div className="mdc-layout-grid__cell--span-12">
            <div id="photo-feed" className="mdc-layout-grid__inner"></div>
          </div>
        </div>

        <div id="lightbox" className="lightbox-close">
        <div className="lightbox-header">
          <div>&nbsp;</div>
          <a id="lightbox-close" href="#">&times;</a>
        </div>

        <div className="lightbox-img">
          <a className="lightbox-nav prev" href="#">&#x2039;</a>
          <img />
          <a className="lightbox-nav next" href="#">&#x203a;</a>
        </div>
      </div>
      </div>
    )
  }
}

const ReactRouter = window.ReactRouterDOM
const Route = ReactRouter.Route
const Link = ReactRouter.Link

class App extends React.Component {
  render () {
    return(
      <div>
        <div id="hello">
          <h1>Joe Sak</h1>

          <h2>Full–Stack Developer</h2>

          <h2>Photographer</h2>
        </div>

        <footer id="site-footer">
          <p>
            This github pages site was made in VS Code with
            HTML5, CSS3, ES6, and React by Joseph M. Sak
            <span><i>&#128247;</i><i>&#128248;</i></span>
            <a href="https://github.com/joemsak/joemsak.github.io">
              Open the source of this site
            </a>
          </p>
        </footer>
      </div>
    )
  }
}

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location)
      window.scrollTo(0, 0)
  }

  render() {
    return this.props.children
  }
}

ScrollToTop = ReactRouter.withRouter(ScrollToTop)

const Router = ReactRouter.HashRouter

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('app')
)
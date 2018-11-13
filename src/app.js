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
    fetch('/data/skills.js')
      .then(resp => resp.json())
      .then(json => this.setState({ skills: json }))

    fetch('/data/influences.js')
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

class FAQ extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      faqs: []
    }
  }

  componentDidMount () {
    fetch('/data/faqs.js')
      .then(resp => resp.json())
      .then(json => this.setState({ faqs: json }))
  }

  renderAnswer (answer, i) {
    return <p key={i}>{answer}</p>
  }

  renderFaq (faq, i) {
    return(
      <div key={i}>
        <dt class="hire-questions__question">
          {faq.question}
        </dt>

        <dd class="hire-questions__answer">
          {faq.answers.map((answer, i) => this.renderAnswer(answer, i))}
        </dd>
      </div>
    )
  }

  render () {
    return(
      <div class="mdc-layout-grid__cell--span-12">
        <dl class="hire-questions">
          {this.state.faqs.map((faq, i) => this.renderFaq(faq, i))}
        </dl>
      </div>
    )
  }
}

class HireMe extends React.Component {
  componentDidMount () {
    // email.js needs custom Event
    document.dispatchEvent(new Event('HireMe:Ready'))
  }

  render() {
    return(
      <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-6">
            <div class="hire-me">
              <h1 class="hire-me__topic">
                Web design &amp; development
                <small>(business hours)</small>
              </h1>

              <h2 class="hire-me__rate">
                $13,000 USD / month
                <small>
                  Half due up front, the rest at month&apos;s end
                </small>
              </h2>

              <p class="hire-me__duration">
                6-8 hours a day, Mondays – Fridays
              </p>

              <p class="hire-me__deliverables">
                <strong>
                  Services include, but are not limited to:
                </strong>

                ruby •
                ruby on rails •
                html •
                css •
                javascript •
                UI/UX design •
                refactoring •
                IT administration
              </p>
            </div>
          </div>

          <div class="mdc-layout-grid__cell--span-6">
            <div class="hire-me">
              <h1 class="hire-me__topic">
                Web design &amp; development
                <small>(outside of business hours)</small>
              </h1>

              <h2 class="hire-me__rate">
                $5,000 USD / month
                <small>
                  Half due up front, the rest at month&apos;s end
                </small>
              </h2>

              <p class="hire-me__duration">
                2-3 hours a day, Mondays – Fridays
              </p>

              <p class="hire-me__deliverables">
                <strong>
                  Services include, but are not limited to:
                </strong>

                ruby •
                ruby on rails •
                html •
                css •
                javascript •
                UI/UX design •
                refactoring •
                IT administration
              </p>
            </div>
          </div>

          <div class="mdc-layout-grid__cell--span-6">
            <div class="hire-me">
              <h1 class="hire-me__topic">
                Consultation
                <small>(business hours)</small>
              </h1>

              <h2 class="hire-me__rate">
                $80 USD / hour
              </h2>

              <p class="hire-me__deliverables">
                <strong>
                  Services include, but are not limited to:
                </strong>

                pairing •
                mentoring •
                refactoring •
                testing •
                IT administration
              </p>
            </div>
          </div>

          <div class="mdc-layout-grid__cell--span-6">
            <div class="hire-me">
              <h1 class="hire-me__topic">
                Consultation
                <small>(outside of business hours)</small>
              </h1>

              <h2 class="hire-me__rate">
                $150 USD / hour
              </h2>

              <p class="hire-me__deliverables">
                <strong>
                  Services include, but are not limited to:
                </strong>

                pairing •
                mentoring •
                refactoring •
                testing •
                IT administration
              </p>
            </div>
          </div>

          <div
            class="
              mdc-layout-grid__cell--span-12
              mdc-layout-grid__cell--centered
            "
          >
            <p>Specific deliverables to be outlined in contract.</p>
            <p>
              <a class="email" href="#">
                Email me to get started
              </a>
            </p>
          </div>

          <div
            class="
              hidden--desktop
              mdc-layout-grid__cell--span-12
              mdc-layout-grid__cell--centered
            "
          >
            <a href="/">About me</a>
          </div>


          <FAQ />
        </div>
      </div>
    );
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
        <div class="mdc-layout-grid">
          <div class="mdc-layout-grid__inner">
            <div class="mdc-layout-grid__cell--span-2-desktop">
              &nbsp;
            </div>

            <div class="mdc-layout-grid__cell--span-8">
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

        <div class="mdc-layout-grid mdc-layout-grid">
          <div
            class="
              hidden--desktop
              mdc-layout-grid__cell--span-12
              mdc-layout-grid__cell--centered
            "
          >
            <a href="/hire">Hire me</a>
          </div>

          <div class="mdc-layout-grid__cell--span-12">
            <div id="photo-feed" class="mdc-layout-grid__inner"></div>
          </div>
        </div>

        <div id="lightbox" class="lightbox-close">
        <div class="lightbox-header">
          <div>&nbsp;</div>
          <a id="lightbox-close" href="#">&times;</a>
        </div>

        <div class="lightbox-img">
          <a class="lightbox-nav prev" href="#">&#x2039;</a>
          <img />
          <a class="lightbox-nav next" href="#">&#x203a;</a>
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
  renderNavigation () {
    if (window.location.hash == "#/hire") {
      return <Link to="/">About me</Link>
    } else {
      return <Link to="/hire">Hire me</Link>
    }
  }

  render () {
    return(
      <div>
        <div id="hello">
          <h1>Joe Sak</h1>

          <h2>Full–Stack Developer</h2>

          <h2>Photographer</h2>

          {this.renderNavigation()}
        </div>

        <Route path="/" exact component={AboutMe} />
        <Route path="/hire" component={HireMe} />

        <footer id="site-footer">
          This github pages site was made in VS Code with
          HTML5, CSS3, ES6, and React by Joseph M. Sak
          <span>&#128248;</span>
          <a href="https://github.com/joemsak/joemsak.github.io">
            Open the source of this site
          </a>
        </footer>
      </div>
    )
  }
}

const Router = ReactRouter.HashRouter

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
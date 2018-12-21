<template>
  <div id="app">
    <div id="profile">
      <a href="https://instagram.com/sakjosep">
        <img
          src="me-sm-cropped.jpg"
          alt="Profile photo of Joe standing in agave fields, with mountains behind me"
        />

        @sakjosep
      </a>
    </div>

    <p>
      Photo essays by Joseph M. Sak<br />
      An American Photographer in Guadalajara
    </p>

    <ol id="links">
      <li v-for="(link, i) in links" :key="i">
        <a :href="link.href">{{ link.title }}</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      links: [],
    }
  },

  created () {
    fetch('data/links.json')
      .then(resp => resp.json())
      .then(json => this.links = json)
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");

html,
body {
  height: 100vh;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

p {
  width: 40vw;
  margin: 1rem auto 0;
  text-align: center;
}

#profile {
  width: 129px;
  margin: 1rem auto;

  img {
    width: 129px;
    height: 129px;
    border-radius: 100%;
    border: solid 3px #333;
    box-shadow: 0 0.2rem 0.5rem 0.2rem rgba(0, 0, 0, 0.2);
    margin: 0 0 1rem;
  }

  a {
    color: #666;
    font-weight: bold;
    text-decoration: none;
    display: block;
    text-align: center;
    transition: color 0.2s;

    &:hover {
      color: black;
    }
  }
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#links {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0;
    width: 40vw;
    margin: 3rem auto;
    text-align: center;

    a {
      display: block;
      background: #333;
      color: white;
      padding: 1rem 0.5rem;
      text-decoration: none;
      transition: background-color 0.2s;
      box-shadow: 0 0.2rem 0.5rem 0.2rem rgba(0, 0, 0, 0.2);
      font-weight: bold;

      &:hover {
        background: black;
      }
    }
  }
}

@media(max-width: 600px) {
  #links li,
  p {
    width: 70vw;
  }
}
</style>

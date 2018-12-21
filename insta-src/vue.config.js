console.log(process.env.NODE_ENV)
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/insta/'
    : '/'
}
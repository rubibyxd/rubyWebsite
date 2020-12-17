<template>
  <div id="app">
    <div id="nav">
      <h2 class="my-name">Ruby Hsieh</h2>
      <div class="navbar-list">
      <router-link to="/">HOME</router-link>
      <router-link to="/portfolio">PORTFOLIO</router-link>
      <router-link to="/blog">BLOG</router-link>
      <router-link to="/resume">RESUME</router-link>
      <router-link to="/contact">CONTACT</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import url('https://allfont.net/allfont.css?fonts=agency-fb');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

#app {
  font-family: 'Noto Sans TC', sans-serif;
  padding: 70px 0;
}

#nav {
  width: 100%;
  height: 70px;
  padding: 0 60px;
  background-color: #3B2C2A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  margin-top: -70px;
  z-index: 99;
  .my-name{
    font-size: 32px;
    font-family: 'Agency FB', arial;
    color: #FFFFFF;
  }
  .navbar-list{
    // width: 35%;
    display: flex;
    justify-content: space-between;
    margin-right: 100px;
    a {
      display: inline-block;
      width: 100px;
      text-align: center;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: normal;
      color: #FFFFFF;
      text-decoration: none;
      &.router-link-exact-active {
        color: #02FFE6;
      }
    }
  }

}
</style>

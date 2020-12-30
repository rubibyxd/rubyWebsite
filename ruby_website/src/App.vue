<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" id="nav">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand class="my-name">Ruby Hsieh</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="navbar-list ml-auto">
          <router-link to="/">HOME</router-link>
          <router-link to="/portfolio">PORTFOLIO</router-link>
          <router-link to="/resume">RESUME</router-link>
          <router-link to="/contact">CONTACT</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import url('https://allfont.net/allfont.css?fonts=agency-fb');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

#app {
  width: 100%;
  font-family: 'Noto Sans TC', sans-serif;
  padding: 70px 0;
  background-color: #222730;
  color: #F4F8FC;
}

#nav {
  width: 100%;
  min-height: 70px;
  padding: 0 60px;
  background-color:#2F394A;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  margin-top: -70px;
  z-index: 99;
  user-select: none;
  .my-name{
    font-size: 32px;
    font-weight: bold;
    font-family: 'Agency FB', arial;
    color: #F4F8FC;
  }
  .navbar-list{
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
        color: #d1a449;
        text-shadow: 0px 0 1px #927842;
      }
    }
  }
}
@media(max-width:1024px) {
  #nav{
    padding: 0 20px;
    .my-name{
      margin: 0 auto;
    }
    .navbar-list{
      margin: 0;
      a{
        width: 100%;
        padding: 20px 0;
        &:hover{
        background-color: #222730;
        }
      }
    }
  }
}
</style>

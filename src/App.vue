<template>
  <div id="app">
    <TheHeader/>
    <main id="main">
      <transition mode="out-in">
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>

import TheHeader from "@/components/TheHeader.vue";

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

h1 {
  color: white;
}

ul {
  list-style: none;
}

body {
  font-family: 'Dosis', "Avenir", Helvetica, Arial, sans-serif;
  color: #c0c6cb;
  background-color: #008AC7;
}

a {
  color: #345;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  max-width: 1000px;
  margin: 50px auto;
}

.btn {
  display: unset;
  padding: 10px 30px;
  background: #55B267;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}

.btn-delete {
  display: unset;
  padding: 10px 30px;
  background: #b25555;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
  margin-left: 5px;
}

.btn:hover {
  transform: scale(1.1);
}

.btn-delete:hover {
  transform: scale(1.1);
}

.btn-disabled,
.btn-disabled:hover {
  background: #bbc;
  transform: scale(1);
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}

label {
  margin-bottom: 5px;
}

input,
textarea {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
  width: 100%;
}

select {

  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
  width: 100%;

}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #002cee;
}

.text-danger {
  color: red;
  font-size: 1rem;
  transition: all 0.3s;
}


.breadcrumb {
  --uiBreadcrumbDividerColor: var(--breadcrumbDividerColor, inherit);
  --uiBreadcrumbDividerSize: var(--breadcrumbDividerSize, 1rem);
  --uiBreadcrumbIndent: var(--breadcrumbIndent, .75rem);
}

.breadcrumb__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--uiBreadcrumbIndent);
}

.breadcrumb__group {
  display: inline-flex;
  align-items: center;
}

.breadcrumb__divider {
  margin-left: var(--uiBreadcrumbIndent);
  font-size: var(--uiBreadcrumbDividerSize);
}

.breadcrumb {
  --uiBreadcrumbTextColor: var(--breadcrumbTextColor);
  --uiBreadcrumbTextColorActive: var(--breadcrumbTextColorActive);

  --breadcrumbDividerColor: var(--uiBreadcrumbTextColor);
  --rLinkTextColor: var(--uiBreadcrumbTextColor);
}

.breadcrumb__divider {
  color: var(--uiBreadcrumbDividerColor);
}

span.breadcrumb__point {
  color: var(--uiBreadcrumbTextColorActive);
}

:root {
  --breadcrumbTextColor: #D1C4E9;
  --breadcrumbTextColorActive: #fff;
}

.breadcrumb_type2 {
  --breadcrumbDividerSize: 20px;
}

.breadcrumb_type3 {
  --breadcrumbDividerSize: 18px;
}

.breadcrumb_type4 {
  --breadcrumbDividerSize: 14px;
}

.breadcrumb_type5 {
  --breadcrumbDividerSize: 20px;
}

.breadcrumb_type6 {
  --breadcrumbDividerSize: 14px;
}

.page {
  box-sizing: border-box;
  max-width: 600px;
  padding: 3rem 1rem;
  margin-left: auto;
  margin-right: auto;
}

.page__section {
  padding: 1rem 2rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12), 0 3px 1px -2px rgba(0, 0, 0, .2);
  background-color: #3498db;
  color: #fff;
  border-radius: 2px;
}

.page__section:nth-of-type(n+2) {
  margin-top: 2.5rem;
}

.r-list {
  --uirListPaddingLeft: var(--rListPaddingLeft, 0);
  --uirListMarginTop: var(--rListMarginTop, 0);
  --uirListMarginBottom: var(--rListMarginBottom, 0);
  --uirListListStyle: var(--rListListStyle, none);

  padding-left: var(--uirListPaddingLeft) !important;
  margin-top: var(--uirListMarginTop) !important;
  margin-bottom: var(--uirListMarginBottom) !important;
  list-style: var(--uirListListStyle) !important;
}

.r-link {
  --uirLinkDisplay: var(--rLinkDisplay, inline-flex);
  --uirLinkTextColor: var(--rLinkTextColor);
  --uirLinkTextDecoration: var(--rLinkTextDecoration, none);
  display: var(--uirLinkDisplay) !important;
  color: var(--uirLinkTextColor) !important;
  text-decoration: var(--uirLinkTextDecoration) !important;
}

#customers {
  width: 100%;
}

#customers td, #customers th {
  padding: 8px;
}

#customers tr:hover {
  background-color: #5d7fbf;
}

#customers th {
  font-size: 30px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

td {
  font-size: 20px;
  color: white;
}

b-button {
  border: none;
  font-family: 'Avenir', serif;
  font-size: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
  padding: 25px 80px;
  display: inline-block;
  margin: 15px 0px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

b-button:after {
  content: '';
  position: absolute;
  z-index: -1;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

/* Pseudo elements for icons */
b-button:before {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  position: relative;
  -webkit-font-smoothing: antialiased;
}


b-button {
  background: #3498db;
  color: #fff;
}

b-button:hover {
  background: #2980b9;
}

b-button:active {
  background: #2980b9;
  top: 2px;
}

b-button:before {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  line-height: 3;
  font-size: 140%;
  width: 60px;
}
</style>

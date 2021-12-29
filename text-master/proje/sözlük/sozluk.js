// 2. kişinin js atamaları başı
const header2 = document.getElementById('header2')
const title2 = document.getElementById('title2')
const excerpt2 = document.getElementById('excerpt2')
const profile_img2 = document.getElementById('profile_img2')
const name2 = document.getElementById('name2')
const date2 = document.getElementById('date2')

const animated_bgs2 = document.querySelectorAll('.animated-bg2')
const animated_bg_texts2 = document.querySelectorAll('.animated-bg-text2')

setTimeout(getData, 2500)

function getData() {
  animated_bgs2.forEach((bg) => bg.classList.remove('animated-bg2'))
  animated_bg_texts2.forEach((bg) => bg.classList.remove('animated-bg-text2'))
}
// 2. kişinin js atamaları sonu


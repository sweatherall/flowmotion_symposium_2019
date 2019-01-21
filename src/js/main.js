document.addEventListener("DOMContentLoaded", function(event) {
  AOS.init({
    offset: 50,
    duration: 500,
    easing: 'ease-in-sine',
    delay: 50,
  });
  feather.replace()

  setTimeout(function(){
    document.querySelector('#loadingscreen').style.opacity = 0
    document.querySelector('#loadingscreen').style.zIndex = -1
  },10);



  window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
      document.querySelector('.goto-section-btn').style.opacity = '0'
    } else {
      document.querySelector('.goto-section-btn').style.opacity = '1'
    }
  };

  document.querySelector('.gradient_btn_1').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
  }

  document.querySelector('.gradient_btn_2').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
  }
  document.querySelector('.gradient_btn_3').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
  }
  document.querySelector('.gradient_btn_4').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
  }
  document.querySelector('.gradient_btn_5').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
  }

  document.querySelector('.goto-section-btn').onclick = (e) => {
    const secondary_section_offsets = document.getElementById('secondary_section').getBoundingClientRect();
    const secondary_section_top = secondary_section_offsets.top;
    const secondary_section_left = secondary_section_offsets.left;
    window.scroll({ top: secondary_section_top, left: secondary_section_left, behavior: 'smooth' });
  }


});

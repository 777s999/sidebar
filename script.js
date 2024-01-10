'use strict';
const sidebar = document.getElementById('sidebar');
const menubtn = document.getElementById('menu');
const content = document.getElementById('content');

menubtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  content.classList.toggle('active');
});

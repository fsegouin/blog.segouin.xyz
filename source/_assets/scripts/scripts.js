document.getElementsByClassName('dots__dot--switch')[0].onclick = function() {
  const html = document.documentElement
  html.classList.toggle('dark')
  const dot_switch = document.getElementsByClassName('dots__dot--switch')[0];
  dot_switch.classList.toggle('dark')
};

document.getElementsByClassName('dots__dot--minimize')[0].onclick = function() {
  const shell = document.getElementsByClassName('shell')[0]
  shell.classList.remove('shell--maximized')
  shell.classList.add('shell--minimized');
};

document.getElementsByClassName('dots__dot--maximize')[0].onclick = function() {
  const shell = document.getElementsByClassName('shell')[0]
  if(shell.classList.contains('shell--minimized')) {
    shell.classList.remove('shell--minimized')
    shell.classList.add('shell--maximized')
  }
};

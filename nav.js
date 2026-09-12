(function(){
  var b=document.getElementById('snavBurger');
  var o=document.getElementById('snavOverlay');
  if(!b||!o)return;
  b.addEventListener('click',function(){
    var open=b.classList.toggle('open');
    o.classList.toggle('open',open);
    b.setAttribute('aria-expanded',String(open));
    document.body.classList.toggle('snav-locked',open);
  });
  o.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){
      b.classList.remove('open');
      o.classList.remove('open');
      b.setAttribute('aria-expanded','false');
      document.body.classList.remove('snav-locked');
    });
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&o.classList.contains('open')){
      b.classList.remove('open');
      o.classList.remove('open');
      b.setAttribute('aria-expanded','false');
      document.body.classList.remove('snav-locked');
      b.focus();
    }
  });
})();

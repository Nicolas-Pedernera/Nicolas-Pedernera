const links=[...document.querySelectorAll('.nav nav a')];const sections=[...document.querySelectorAll('main section[id]')];const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-35% 0px -55%'});sections.forEach(s=>observer.observe(s));

// Project cards: whole card clickable to detail page, inner GitHub link still works standalone
document.querySelectorAll('.project[data-href]').forEach(card=>{
  const dest=card.getAttribute('data-href');
  function go(){ window.location.href=dest; }
  card.addEventListener('click',(e)=>{
    if(e.target.closest('a')) return; // let the inner GitHub link behave normally
    go();
  });
  card.addEventListener('keydown',(e)=>{
    if(e.key==='Enter' || e.key===' '){ e.preventDefault(); go(); }
  });
});

// Hero title typewriter effect
(function(){
  const titleEl=document.getElementById('typed-title');
  if(!titleEl)return;
  const partA=titleEl.querySelector('.typed-a');
  const partB=titleEl.querySelector('.typed-b');
  const textA='Construyo la infraestructura que ';
  const textB='mueve el dinero.';
  const full=textA+textB;
  const TYPE_SPEED=55;
  const DELETE_SPEED=30;
  const HOLD_TIME=2600;
  const PAUSE_TIME=500;
  let i=0;
  let deleting=false;

  function render(count){
    if(count<=textA.length){
      partA.textContent=textA.slice(0,count);
      partB.textContent='';
    }else{
      partA.textContent=textA;
      partB.textContent=textB.slice(0,count-textA.length);
    }
  }

  function tick(){
    if(!deleting){
      i++;
      render(i);
      if(i>=full.length){
        deleting=true;
        setTimeout(tick,HOLD_TIME);
        return;
      }
      setTimeout(tick,TYPE_SPEED);
    }else{
      i--;
      render(i);
      if(i<=0){
        deleting=false;
        setTimeout(tick,PAUSE_TIME);
        return;
      }
      setTimeout(tick,DELETE_SPEED);
    }
  }
  render(0);
  setTimeout(tick,400);
})();


const contactForm=document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit',function(e){
    e.preventDefault();
    const data=new FormData(contactForm);
    const nombre=data.get('nombre')||'';
    const email=data.get('email')||'';
    const asunto=data.get('asunto')||'Contacto desde el portfolio';
    const mensaje=data.get('mensaje')||'';
    const body=`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`;
    window.location.href=`mailto:n.e.v.pedernera@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(body)}`;
  });
}
const links=[...document.querySelectorAll('.nav nav a')];const sections=[...document.querySelectorAll('main section[id]')];const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-35% 0px -55%'});sections.forEach(s=>observer.observe(s));

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
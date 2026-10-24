function renderEye(gazeX,gazeY,openness) {
  const art=[];
  for(let r=0;r<29;r++) {
    let row='';
    for(let c=0;c<69;c++) {
      const x=(c-34)/31,y=(r-14)/11;
      const height=Math.max(0,1-Math.abs(x)**1.65)*.80;
      const d=Math.abs(y)-height*Math.max(.035,openness);
      const noise=((c*37+r*71+c*r*13)%19)/19;
      let ch=' ';
      if(Math.abs(x)<1.02&&Math.abs(d)<.075)ch='▓';
      else if(Math.abs(x)<1&&d<0) {
        const iris=Math.hypot((x-gazeX)/.38,(y-gazeY)/.8);
        const pupil=Math.hypot((x-gazeX)/.16,(y-gazeY)/.37);
        if(pupil<1)ch='█';
        else if(iris<1)ch=iris>.88?'▓':'▧▒╱░□▓'[(c*7+r*3)%6];
        else ch=noise>.84?'·':' ';
        if(((x-gazeX+.1)/.07)**2+((y-gazeY+.27)/.14)**2<1)ch=' ';
      } else if(Math.abs(x)<1&&y<-.9&&y>-1.25+Math.abs(x)*.23&&noise>.42)ch='═';
      else if(Math.abs(x)<.99&&d>.12&&d<.28&&y>0&&noise>.35)ch='·';
      else if(c%4===0&&r%3===0)ch='·';
      row+=ch;
    }
    art.push(row);
  }
  return art.join('\n');
}


(() => { 'use strict';
const pages={
home:{en:['CMPRS — Smaller videos. Same story.','Native batch video compression on Mac. H.264 and HEVC, MOV beside untouched originals.'],ru:['CMPRS — Видео легче. Всё на месте.','Нативное пакетное сжатие видео на Mac. H.264 и HEVC, готовые MOV рядом с нетронутыми оригиналами.']},
support:{en:['CMPRS — Support','Get started with CMPRS 2: H.264 and HEVC, batch MOV compression, Finder Quick Actions and troubleshooting.'],ru:['CMPRS — Поддержка','Начало работы с CMPRS 2: H.264 и HEVC, пакетное сжатие в MOV, действия Finder и помощь.']},
privacy:{en:['CMPRS — Privacy','How CMPRS handles local videos, folder permissions, diagnostics and support messages.'],ru:['CMPRS — Конфиденциальность','Как CMPRS обрабатывает локальные видео, доступ к папкам, диагностику и обращения в поддержку.']}};
function setLanguage(language){const lang=language==='ru'?'ru':'en';document.documentElement.lang=lang;document.querySelectorAll('[data-en][data-ru]').forEach(el=>el.innerHTML=el.dataset[lang]);document.querySelectorAll('[data-label-en]').forEach(el=>el.setAttribute('aria-label',el.getAttribute('data-label-'+lang)));document.querySelectorAll('[data-language-content]').forEach(el=>el.hidden=el.dataset.languageContent!==lang);document.querySelectorAll('[data-language]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.language===lang)));const info=pages[document.body.dataset.page]?.[lang];if(info){document.title=info[0];document.querySelector('meta[name="description"]')?.setAttribute('content',info[1]);document.querySelector('meta[property="og:title"]')?.setAttribute('content',info[0]);document.querySelector('meta[property="og:description"]')?.setAttribute('content',info[1]);}try{localStorage.setItem('cmprs-language',lang)}catch{} }
let initial='en';try{initial=localStorage.getItem('cmprs-language')==='ru'?'ru':'en'}catch{}document.querySelectorAll('[data-language]').forEach(el=>{el.setAttribute('lang',el.dataset.language);el.addEventListener('click',()=>setLanguage(el.dataset.language))});setLanguage(initial);
const el=document.getElementById('eye');if(!el)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)');let start=performance.now(),last=0,raf;
function paint(now){const t=(now-start)/1000,b=t%6.8,o=reduced.matches?1:b<.14?1-b/.14:b<.34?(b-.14)/.2:1;el.textContent=renderEye(reduced.matches?0:Math.sin(t*.42)*.12,reduced.matches?0:Math.sin(t*.21)*.035,o)}
function frame(now){if(document.hidden||reduced.matches){raf=null;return}if(now-last>90){paint(now);last=now}raf=requestAnimationFrame(frame)}
function motion(){if(raf)cancelAnimationFrame(raf);raf=null;paint(performance.now());if(!document.hidden&&!reduced.matches)raf=requestAnimationFrame(frame)}
reduced.addEventListener('change',motion);document.addEventListener('visibilitychange',motion);motion();
})();

/* FinHelper · first-party, dependency-free presentation. */
"use strict";
const copy = {
  en: {
    title:"FinHelper — Finances in your freelance rhythm", description:"The finance app for freelancers. Clients, expected payments, multi-currency accounts and clear insights over your last 7, 30 or 365 days.",
    skip:"Skip to content",navClients:"Clients",navAnalysis:"Your money",navDetails:"The details",try:"Try FinHelper",eyebrow:"MADE FOR FREELANCERS",
    headline:"Freelance life.<br><span>Financial clarity.</span>",heroBody:"Different clients. Different currencies. One clear picture of your money.",joinBeta:"Get the public beta",explore:"Take a closer look",availability:"For iPhone · iOS 26 and later",floatNote:"Your work. Your money. Together.",
    manifesto:"You don’t get paid like everyone else. Your finance app should understand that.",pillarClients:"Clients & payments",pillarCurrencies:"Accounts & currencies",pillarAnalysis:"Insights that make sense",
    clientsEyebrow:"FROM PROMISED TO PAID",clientsTitle:"Every client.<br>Every payment.",clientsBody:"See who owes you, how much is coming and what has already arrived. Receive payments in full or in parts, straight into the right account.",clientsFoot:"Keep the work moving. Keep the payments in sight.",interactive:"TRY IT · SAMPLE DATA",expected:"Expected from clients",twoPayments:"2 payments",onePayment:"1 payment",paymentOne:"First payment",paymentTwo:"Second payment",receive:"Receive $400",received:"Payment received",clientHint:"Open a client. Try receiving a payment.",receiptHint:"$400 received. Expected payments updated.",
    rhythmEyebrow:"A PERIOD THAT MOVES WITH YOU",rhythmTitle:"Your last 30 days.<br><span>Not last month.</span>",rhythmBody:"A new month doesn’t reset your life. See the last 7, 30 or 365 days, right up to now. Your income, spending and comparisons keep moving with you.",cashFlow:"Cash flow",days7:"7 days",days30:"30 days",days365:"365 days",income:"Income",spending:"Spending",flow:"Cash flow",chartHint:"Tap a column for the details.",calendarNote:"Prefer the calendar? Switch to calendar weeks, months and years in Settings.",
    detailsEyebrow:"THE WHOLE PICTURE. LESS EFFORT.",detailsTitle:"More understanding.<br>Less bookkeeping.",accountsTitle:"Across banks. Across currencies.",accountsBody:"Group accounts by bank and see their value in your main currency. Record the actual amount received when you exchange money.",analysisTitle:"Go beyond the total.",analysisBody:"Explore spending by category, compare periods and uncover recurring patterns. Clear explanations help you turn numbers into better decisions.",weeklyTitle:"A little clarity, every week.",weeklyBody:"See what changed, what went well and a useful next step. Your weekly review brings the important things into focus.",privacyTitle:"Personal means personal.",privacyBody:"Your finances stay on your devices. Protect the app with Face ID and sync through your own iCloud Drive folder.",
    screensTitle:"A familiar feel. A clearer head.",screensBody:"Quick entry when you’re busy. A deeper look when you need it.",captionAnalysis:"See the bigger picture",captionClients:"Know what’s coming",captionAccounts:"Bring your accounts together",closingTitle:"You do the work.<br><span>Make your money make sense.</span>",betaNote:"Available to try with TestFlight.",privacy:"Privacy",support:"Support",screenOverview:"FinHelper overview showing account balances and quick entry",screenAnalysis:"FinHelper analysis with financial metrics and cash flow",screenClients:"FinHelper clients and expected payments",screenAccounts:"FinHelper bank and account groups",
    supportTitle:"How can we help?",supportBody:"Questions, ideas or something not working? Get in touch.",email:"Email support",reportTitle:"Tell us what happened.",reportBody:"Include your FinHelper version, iOS version and the steps that led to the issue. A screenshot is always helpful.",back:"Back to FinHelper"
  },
  ru: {
    title:"FinHelper — Финансы в ритме фриланса",description:"Финансы для фрилансеров: клиенты, ожидаемые выплаты, счета в разных валютах и понятный анализ за последние 7, 30 и 365 дней.",
    skip:"К содержимому",navClients:"Клиенты",navAnalysis:"Ваши деньги",navDetails:"Возможности",try:"Попробовать",eyebrow:"ДЛЯ ФРИЛАНСЕРОВ",
    headline:"Свобода фриланса.<br><span>Ясность в деньгах.</span>",heroBody:"Разные клиенты. Разные валюты. Цельная картина ваших финансов.",joinBeta:"Попробовать бета-версию",explore:"Познакомиться ближе",availability:"Для iPhone · iOS 26 и новее",floatNote:"Ваши проекты. Ваши деньги. Вместе.",
    manifesto:"Вам платят не как всем. Ваше финансовое приложение должно это понимать.",pillarClients:"Клиенты и выплаты",pillarCurrencies:"Счета и валюты",pillarAnalysis:"Понятный анализ",
    clientsEyebrow:"ОТ «СКОРО ПЕРЕВЕДУ» ДО «ДЕНЬГИ НА СЧЁТЕ»",clientsTitle:"Каждый клиент.<br>Каждая выплата.",clientsBody:"Кто должен заплатить, сколько ожидается и что уже пришло — всё перед глазами. Принимайте выплату целиком или частями на нужный счёт.",clientsFoot:"Занимайтесь работой. Держите выплаты в поле зрения.",interactive:"ПОПРОБУЙТЕ · ПРИМЕР ДАННЫХ",expected:"Ожидается от клиентов",twoPayments:"2 выплаты",onePayment:"1 выплата",paymentOne:"Первая выплата",paymentTwo:"Вторая выплата",receive:"Получить $400",received:"Платёж получен",clientHint:"Откройте клиента и попробуйте получить платёж.",receiptHint:"Получено $400. Сумма ожидаемых выплат обновлена.",
    rhythmEyebrow:"ПЕРИОД, КОТОРЫЙ ДВИЖЕТСЯ ВМЕСТЕ С ВАМИ",rhythmTitle:"Последние 30 дней.<br><span>А не прошлый месяц.</span>",rhythmBody:"Новый месяц не обнуляет вашу жизнь. Смотрите последние 7, 30 или 365 дней — до текущего момента. Доходы, расходы и сравнения всегда в вашем ритме.",cashFlow:"Денежный поток",days7:"7 дней",days30:"30 дней",days365:"365 дней",income:"Доходы",spending:"Расходы",flow:"Поток",chartHint:"Нажмите на столбец для подробностей.",calendarNote:"Привыкли к календарю? В настройках есть календарные недели, месяцы и годы.",
    detailsEyebrow:"БОЛЬШЕ ЯСНОСТИ. МЕНЬШЕ РУТИНЫ.",detailsTitle:"Понимать деньги.<br>А не вести бухгалтерию.",accountsTitle:"Разные банки. Разные валюты.",accountsBody:"Объединяйте счета по банкам и смотрите их стоимость в основной валюте. При обмене указывайте сумму, которую получили на самом деле.",analysisTitle:"Больше, чем общая сумма.",analysisBody:"Изучайте расходы по категориям, сравнивайте периоды и находите повторяющиеся платежи. Понятные объяснения превращают цифры в решения.",weeklyTitle:"Немного ясности каждую неделю.",weeklyBody:"Что изменилось, что получилось хорошо и какой шаг поможет дальше. Итоги недели подсветят главное.",privacyTitle:"Личные финансы. По-настоящему.",privacyBody:"Ваши финансы остаются на ваших устройствах. Защищайте приложение Face ID и синхронизируйте через свою папку iCloud Drive.",
    screensTitle:"Знакомый интерфейс. Свежий взгляд.",screensBody:"Быстро записать, когда заняты. Разобраться глубже, когда нужно.",captionAnalysis:"Видеть картину целиком",captionClients:"Знать, сколько ожидается",captionAccounts:"Все счета под рукой",closingTitle:"Вы делаете своё дело.<br><span>Пусть в деньгах будет ясность.</span>",betaNote:"Бета-версия доступна в TestFlight.",privacy:"Конфиденциальность",support:"Поддержка",screenOverview:"Обзор FinHelper: баланс счетов и быстрый ввод",screenAnalysis:"Анализ FinHelper: финансовые показатели и денежный поток",screenClients:"Клиенты и ожидаемые выплаты в FinHelper",screenAccounts:"Банки и счета в FinHelper",
    supportTitle:"Чем помочь?",supportBody:"Есть вопрос, идея или что-то не работает? Напишите нам.",email:"Написать в поддержку",reportTitle:"Расскажите, что случилось.",reportBody:"Укажите версию FinHelper, версию iOS и действия, после которых возникла проблема. Скриншот тоже пригодится.",back:"Вернуться к FinHelper"
  }
};
let language = "en", period = 30, received = false, selected = null;
const locale = () => language === "ru" ? "ru-RU" : "en-US";
const money = value => new Intl.NumberFormat(locale(),{style:"currency",currency:"USD",maximumFractionDigits:0}).format(value);
const isHome = Boolean(document.querySelector("#chart"));
function setLanguage(value) {
  language = value === "ru" ? "ru" : "en";
  const content = copy[language];
  document.documentElement.lang = language;
  document.title = isHome ? content.title : `FinHelper — ${content.support}`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = content.description;
  document.querySelectorAll("[data-i18n]").forEach(el => {if (content[el.dataset.i18n] !== undefined) el.textContent = content[el.dataset.i18n];});
  document.querySelectorAll("[data-i18n-html]").forEach(el => {if (content[el.dataset.i18nHtml]) el.innerHTML = content[el.dataset.i18nHtml];});
  document.querySelectorAll("[data-alt]").forEach(el => {el.alt = content[el.dataset.alt];});
  document.querySelectorAll("[data-language]").forEach(button => button.setAttribute("aria-pressed",String(button.dataset.language === language)));
  document.querySelectorAll('a[data-i18n="support"],a[data-i18n="back"],.support-page ~ footer a[href^="../"]').forEach(link=>{
    const url=new URL(link.href);if(url.origin===location.origin){
      if(language==="ru")url.searchParams.set("lang","ru");else url.searchParams.delete("lang");
      link.href=url.href;
    }
  });
  document.querySelectorAll("[data-screen]").forEach(img => {img.src = `${isHome ? "./" : "../"}assets/${language}-${img.dataset.screen}.webp`;});
  const hero = document.querySelector("#hero-screen");
  if (hero) hero.src = `./assets/${language}-overview.webp`;
  if (isHome) {renderFlow();updateClient();}
}
document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click",()=>{
  setLanguage(button.dataset.language);
  const url = new URL(location.href);
  if (language === "ru") url.searchParams.set("lang","ru"); else url.searchParams.delete("lang");
  history.replaceState(null,"",url);
}));

function sample(day) {
  const expense = Math.round(23 + 16 * (1 + Math.sin(day * 1.9)) + (day % 13 === 0 ? 75 : 0));
  const income = day % 8 === 0 ? 640 : day % 17 === 0 ? 420 : 0;
  return {income,expense};
}
function renderFlow() {
  const chart = document.querySelector("#chart"); if (!chart) return;
  const groups = Math.min(10,period), days = Array.from({length:period},(_,i)=>sample(i+1));
  const income = days.reduce((sum,d)=>sum+d.income,0),expense = days.reduce((sum,d)=>sum+d.expense,0);
  document.querySelector("#income-total").textContent = money(income);
  document.querySelector("#expense-total").textContent = money(expense);
  document.querySelector("#flow-total").textContent = money(income-expense);
  const buckets = Array.from({length:groups},(_,index)=>{
    const from = Math.floor(index * period / groups),to = Math.floor((index + 1) * period / groups);
    const values = days.slice(from,to);
    const date = new Date(); date.setDate(date.getDate()-period+from+1);
    const end = new Date(); end.setDate(end.getDate()-period+to);
    return {date,end,income:values.reduce((s,d)=>s+d.income,0),expense:values.reduce((s,d)=>s+d.expense,0)};
  });
  const max = Math.max(1,...buckets.flatMap(x=>[x.income,x.expense]));
  chart.replaceChildren();
  buckets.forEach((b,index)=>{
    const button = document.createElement("button"); button.type="button";button.className="bar-group";
    const label = new Intl.DateTimeFormat(locale(),{month:"short",day:"numeric"}).format(b.date);
    button.setAttribute("aria-label",`${label}: ${copy[language].income} ${money(b.income)}, ${copy[language].spending} ${money(b.expense)}`);
    button.setAttribute("aria-pressed",String(selected===index));
    if (selected===index) button.classList.add("selected");
    for(const kind of ["income","expense"]){const bar=document.createElement("span");bar.className=`bar ${kind}`;bar.style.setProperty("--height",`${b[kind]/max*91}%`);button.append(bar);}
    const caption=document.createElement("span");caption.className="bar-label";caption.textContent=label;button.append(caption);
    button.addEventListener("click",()=>{selected=selected===index?null:index;renderFlow();}); chart.append(button);
  });
  const readout = document.querySelector("#chart-selection"), b=buckets[selected];
  if (b) {
    const date = new Intl.DateTimeFormat(locale(),{month:"short",day:"numeric"}).format(b.date);
    readout.textContent=`${date} · ${copy[language].income} ${money(b.income)} · ${copy[language].spending} ${money(b.expense)}`;
  } else readout.textContent=copy[language].chartHint;
  const previous = Math.round(expense*1.14), difference=previous-expense;
  document.querySelector("#comparison").textContent=language==="ru"
    ? `За ${period} дней потрачено ${money(expense)} — на ${money(difference)} меньше предыдущего периода.`
    : `${money(expense)} spent over ${period} days — ${money(difference)} less than the previous period.`;
  document.querySelectorAll("[data-period]").forEach(button=>button.setAttribute("aria-pressed",String(Number(button.dataset.period)===period)));
}
document.querySelectorAll("[data-period]").forEach(button=>button.addEventListener("click",()=>{period=Number(button.dataset.period);selected=null;renderFlow();}));
document.querySelectorAll(".client-toggle").forEach(button=>button.addEventListener("click",()=>{
  const expanded = button.getAttribute("aria-expanded")==="true";
  button.setAttribute("aria-expanded",String(!expanded));
  document.getElementById(button.getAttribute("aria-controls")).hidden=expanded;
}));
function updateClient(){
  document.querySelector("#pending-total").textContent=money(received?3450:3850);
  document.querySelector("#north-total").textContent=money(received?2000:2400);
  document.querySelector("#first-payment").textContent=money(received?800:1200);
  const button=document.querySelector("#receive");button.disabled=received;
  button.querySelector("span").textContent=copy[language][received?"received":"receive"];
  document.querySelector("#client-feedback").textContent=copy[language][received?"receiptHint":"clientHint"];
}
document.querySelector("#receive")?.addEventListener("click",()=>{received=true;updateClient();});
document.documentElement.classList.add("js");
if ("IntersectionObserver" in window) {
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.05});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
} else document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));
setLanguage(new URLSearchParams(location.search).get("lang"));

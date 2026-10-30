
/* AXIS Login Module — v5 (first-login password setup) */
(function(){
  const FALLBACK_ENDPOINT='https://script.google.com/macros/s/AKfycbzaSOpJ1HeZGuTFFEvdqor_NtptXDlqGoo_ijrw8cKtKeP2ABxkwH527fHbnJJr4skUiw/exec';
  const css=`@keyframes axIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}@keyframes axShake{10%,90%{transform:translateX(-2px)}20%,80%{transform:translateX(3px)}30%,50%,70%{transform:translateX(-5px)}40%,60%{transform:translateX(5px)}}@keyframes axSpin{to{transform:rotate(360deg)}}@keyframes axGlow{0%,100%{opacity:.5;transform:translate(0,0) scale(1)}50%{opacity:.85;transform:translate(30px,-24px) scale(1.15)}}
.ax-overlay{position:fixed;inset:0;z-index:50000;display:flex;align-items:center;justify-content:center;background:linear-gradient(150deg,#07090d,#0e141c 55%,#0a0d12);font-family:Tahoma,Arial,sans-serif;overflow:hidden}
.ax-orb{position:absolute;border-radius:50%;filter:blur(70px);pointer-events:none}
.ax-orb.o1{width:340px;height:340px;background:#ff790033;top:-90px;right:-70px;animation:axGlow 7s ease-in-out infinite}
.ax-orb.o2{width:280px;height:280px;background:#1d5bb033;bottom:-80px;left:-60px;animation:axGlow 9s ease-in-out infinite reverse}
.ax-grid{position:absolute;inset:0;background-image:linear-gradient(#ffffff06 1px,transparent 1px),linear-gradient(90deg,#ffffff06 1px,transparent 1px);background-size:40px 40px;mask-image:radial-gradient(560px 400px at 50% 42%,#000 25%,transparent 72%);pointer-events:none}
.ax-card{position:relative;width:min(410px,calc(100vw - 30px));padding:32px 28px 20px;border-radius:22px;background:#121926cc;backdrop-filter:blur(16px);border:1px solid #ffffff17;color:#fff;box-shadow:0 34px 90px #000b;animation:axIn .5s cubic-bezier(.2,.9,.3,1.15);overflow:hidden}
.ax-card:before{content:"";position:absolute;top:0;left:0;right:0;height:2.5px;background:linear-gradient(90deg,transparent 5%,#ff7900 35%,#ffd9b0 50%,#ff7900 65%,transparent 95%)}
.ax-brand{display:flex;align-items:center;justify-content:center;gap:11px;margin-bottom:6px}
.ax-logo{width:52px;height:52px;border-radius:16px;background:linear-gradient(145deg,#ff9636,#e26600);display:grid;place-items:center;font:900 26px Arial;color:#fff;box-shadow:0 10px 26px #ff79005e,0 2px 0 #ffffff2e inset}
.ax-word{font:900 34px Arial,sans-serif;letter-spacing:7px;color:#fff;line-height:1}
.ax-word i{color:#ff7900;font-style:normal}
.ax-tag{text-align:center;color:#8fa2b6;font-size:11px;margin:4px 0 16px;letter-spacing:.4px}
.ax-card h2{margin:0 0 4px;font-size:16.5px;text-align:center}
.ax-desc{text-align:center;color:#a9b8c9;font-size:12px;margin:0 0 8px;line-height:1.8}
.ax-field{position:relative;margin-top:12px}
.ax-field label{display:block;font-size:11.5px;color:#c8d4e2;margin-bottom:5px;padding-right:4px}
.ax-field input{width:100%;padding:12px 42px 12px 13px;border-radius:12px;border:1.4px solid #ffffff1f;background:#0c1119;color:#fff;font-size:14px;transition:border-color .2s,box-shadow .2s;box-sizing:border-box}
.ax-field input:focus{outline:0;border-color:#ff7900;box-shadow:0 0 0 3.5px #ff790024}
.ax-field input::placeholder{color:#54637a}
.ax-field>svg{position:absolute;right:13px;top:50%;transform:translateY(-26%);color:#5d7085;pointer-events:none}
.ax-eye{position:absolute;right:10px;top:50%;transform:translateY(-26%);background:none;border:0;color:#5d7085;cursor:pointer;padding:4px;line-height:0}
.ax-eye:hover{color:#ff7900}
.ax-confirm{display:none}
.ax-main{width:100%;margin-top:18px;background:linear-gradient(145deg,#ff9636,#ea7000);color:#fff;border:0;border-radius:12px;padding:13px;font-weight:bold;font-size:14.5px;cursor:pointer;box-shadow:0 12px 28px #ff79002e;transition:transform .15s,filter .2s}
.ax-main:hover{filter:brightness(1.07);transform:translateY(-1px)}
.ax-main:disabled{opacity:.6;cursor:default;transform:none}
.ax-spin{display:inline-block;width:14px;height:14px;border:2px solid #ffffff59;border-top-color:#fff;border-radius:50%;animation:axSpin .7s linear infinite;vertical-align:-2px;margin-inline-end:7px}
.ax-error{margin:12px 0 0;padding:10px 12px;border-radius:11px;background:#ff4d4d14;border:1px solid #ff4d4d40;color:#ffb4ae;font-size:12px;line-height:1.7;display:none;text-align:center}
.ax-error.show{display:block;animation:axShake .5s}
.ax-links{margin-top:13px;text-align:center}
.ax-link{color:#76899f;font-size:11px;cursor:pointer;text-decoration:underline dotted}
.ax-link:hover{color:#ff7900}
.ax-dot{margin:0 7px;color:#3a4859}
.ax-foot{margin-top:16px;padding-top:11px;border-top:1px solid #ffffff12;display:flex;align-items:center;justify-content:space-between;color:#5d7085;font-size:10px;letter-spacing:1px}
.ax-ver{background:#ff790018;border:1px solid #ff79003a;color:#ffb066;border-radius:999px;padding:2.5px 10px;font-size:10px;letter-spacing:.5px;direction:ltr}
.ax-note{margin-top:10px;text-align:center;color:#8fa2b6;font-size:11px;line-height:1.8}`;
  const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);
  const el=document.createElement('div');el.id='authOverlay';el.className='ax-overlay';
  el.innerHTML=`<div class="ax-orb o1"></div><div class="ax-orb o2"></div><div class="ax-grid"></div><div class="ax-card"><div class="ax-tag">سیستم مدیریت سفارش پرینت سه‌بعدی</div><h2 id="authTitle">ورود به سیستم</h2><p class="ax-desc" id="authDescription">نام کاربری خود را وارد کنید؛ اگر اولین ورود شماست، بعد از ورود رمز عبور تعیین می‌کنید.</p><div class="ax-field"><label>نام کاربری</label><input id="authUsername" autocomplete="username" placeholder="username"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.6 3.7-5.2 7-5.2s6.2 1.6 7 5.2"/></svg></div><div class="ax-field" id="authPassWrap" style="display:none"><label>رمز عبور</label><input id="authPassword" type="password" autocomplete="current-password" placeholder="••••••••"><svg id="authLockIcon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="5" y="11" width="14" height="9" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg><button type="button" class="ax-eye" id="authTogglePass" title="نمایش رمز"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.6"/></svg></button></div><div class="ax-field ax-confirm" id="authConfirmWrap"><label id="authConfirmLabel">تکرار رمز عبور</label><input id="authConfirm" type="password"></div><button class="ax-main" id="authSubmit">ورود</button><div class="ax-error" id="authError"></div><div class="ax-links"><span class="ax-link" id="authResetLink">بازنشانی این مرورگر</span><span class="ax-dot">·</span><span class="ax-link" id="authBootstrapLink" style="display:none">راه‌اندازی اولیه سیستم</span></div><div class="ax-foot"><span>AXIS ORDER SYSTEM</span><span class="ax-ver" id="authVersion">v.1.2.103</span></div></div>`;
  document.body.appendChild(el);
  let bootstrapActive=false,busy=false;
  const $=id=>document.getElementById(id);
  try{const v=document.querySelector('.dashboard-version');if(v&&v.textContent)$('authVersion').textContent=v.textContent}catch(e){}
  function setError(msg){const e=$('authError');if(!e)return;if(msg){e.textContent=msg;e.classList.add('show')}else{e.classList.remove('show');e.textContent=''}}
  function setBusy(on,label){const b=$('authSubmit');if(!b)return;busy=!!on;b.disabled=busy;b.innerHTML=on?'<span class="ax-spin"></span>'+(label||'در حال بررسی...'):'ورود'}
  $('authTogglePass').onclick=function(){const p=$('authPassword');const show=p.type==='password';p.type=show?'text':'password';this.style.color=show?'#ff7900':'';$('authLockIcon').style.opacity=show?.35:1};
  async function hash(v){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(v));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
  function esc(s){try{if(typeof axisEsc==='function')return axisEsc(s)}catch(e){}return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
  function normUser(s){return String(s||'').replace(/[\u064B-\u0655\u0670\u0640\u200B-\u200F\u202A-\u202E\u2060\uFEFF\u00A0]/g,'').trim().toLowerCase()}
function readUsers(){let users=[];try{users=JSON.parse(localStorage.getItem('axisUsers')||'[]')}catch(e){}if(!Array.isArray(users))users=[];return users}
  function saveUsers(u){try{localStorage.setItem('axisUsers',JSON.stringify(u))}catch(e){}}
  function endpoint(){return localStorage.getItem('axisUsersEndpointUrl')||window.AXIS_USERS_DEFAULT_ENDPOINT||FALLBACK_ENDPOINT}
  function fetchCloudOnce(kind,ms){const url=endpoint();if(!url)return Promise.resolve(null);return new Promise(resolve=>{try{const cb='axisAuthCb_'+Date.now()+'_'+Math.floor(Math.random()*9999),s=document.createElement('script'),t=setTimeout(()=>{try{delete window[cb]}catch(e){}try{s.remove()}catch(e){}resolve(null)},ms||12000);window[cb]=d=>{clearTimeout(t);try{delete window[cb]}catch(e){}try{s.remove()}catch(e){}resolve(d&&d.ok&&Array.isArray(d.users)?d:null)};s.src=url+(url.indexOf('?')>-1?'&':'?')+'action='+(kind||'auth')+'&callback='+cb;s.onerror=()=>{clearTimeout(t);try{delete window[cb]}catch(e){}try{s.remove()}catch(e){}resolve(null)};document.head.appendChild(s)}catch(e){resolve(null)}})}
  async function fetchCloud(){let d=await fetchCloudOnce('auth',12000);if(d)return d;d=await fetchCloudOnce('all',25000);if(d)return d;return await fetchCloudOnce('auth',12000)}
  function mergeCloud(list){const users=readUsers().slice();(Array.isArray(list)?list:[]).forEach(cu=>{if(!cu||!cu.username)return;const i=users.findIndex(u=>normUser(u.username)===normUser(cu.username));if(i>-1){users[i].username=cu.username;if(cu.role)users[i].role=cu.role;if(cu.passwordHash!==undefined)users[i].passwordHash=cu.passwordHash||''}else users.push({username:cu.username,role:cu.role||'operator',passwordHash:cu.passwordHash||'',createdAt:cu.createdAt||''})});saveUsers(users);return users}
  function loginMode(){bootstrapActive=false;$('authTitle').textContent='ورود به سیستم';$('authDescription').textContent='نام کاربری خود را وارد کنید؛ اگر اولین ورود شماست، بعد از ورود رمز عبور تعیین می‌کنید.';$('authPassWrap').style.display='none';$('authConfirmWrap').style.display='none';$('authConfirmLabel').style.display='none';$('authResetLink').style.display='inline';$('authBootstrapLink').style.display='none'}
  function bootstrapMode(){bootstrapActive=true;$('authTitle').textContent='راه‌اندازی اولیه';$('authDescription').textContent='هیچ حسابی در سیستم وجود ندارد؛ حساب مدیر اصلی را بسازید.';$('authConfirmWrap').style.display='block';$('authConfirmLabel').style.display='block'}
  function sessionActive(){return sessionStorage.getItem('axisSession')==='active'||localStorage.getItem('axisSession')==='active'}
  function granted(rec){localStorage.setItem('axisAuthUser',JSON.stringify(rec));sessionStorage.setItem('axisSession','active');localStorage.setItem('axisSession','active');el.style.display='none'}
  function afterLoginSync(){try{if(typeof axisCloudFullSync==='function')axisCloudFullSync(true)}catch(e){}}
  function showSetPassPopup(rec){
    const old=document.getElementById('axisSetPass');if(old)old.remove();
    const ov=document.createElement('div');ov.id='axisSetPass';ov.className='ax-overlay';ov.style.zIndex='50001';
    ov.innerHTML=`<div class="ax-orb o1"></div><div class="ax-grid"></div><div class="ax-card"><div class="ax-tag">تعیین رمز عبور</div><h2>خوش آمدید، ${esc(rec.username)}!</h2><p class="ax-desc">اولین ورود شماست. یک رمز عبور برای حساب‌تان انتخاب کنید؛ از ورود بعدی فقط با همین رمز می‌توانید وارد شوید. این رمز در اکسل ثبت می‌شود.</p><div class="ax-field"><label>رمز عبور جدید</label><input id="spPass1" type="password" placeholder="حداقل ۴ کاراکتر"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="5" y="11" width="14" height="9" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></div><div class="ax-field"><label>تکرار رمز عبور جدید</label><input id="spPass2" type="password"></div><button class="ax-main" id="spSubmit">ثبت رمز عبور</button><div class="ax-error" id="spError"></div><p class="ax-note">تا تعیین رمز، این پنجره بسته نمی‌شود.</p></div>`;
    document.body.appendChild(ov);
    const submit=async function(){
      const p1=$('spPass1').value||'',p2=$('spPass2').value||'';const err=$('spError');
      err.classList.remove('show');
      if(p1.length<4){err.textContent='رمز عبور باید حداقل ۴ کاراکتر باشد.';err.classList.add('show');return}
      if(p1!==p2){err.textContent='تکرار رمز عبور یکسان نیست.';err.classList.add('show');return}
      const hp=await hash(p1);
      rec.passwordHash=hp;
      const all=readUsers();const ix=all.findIndex(u=>String(u.username).toLowerCase()===String(rec.username).toLowerCase());if(ix>-1){all[ix].passwordHash=hp;saveUsers(all)}
      localStorage.setItem('axisAuthUser',JSON.stringify(rec));
      try{if(typeof axisCloudPush==='function'){axisCloudPush('saveUser',rec);if(typeof axisDirtySet==='function')axisDirtySet('users',(typeof axisNormUser==='function'?axisNormUser(rec.username):String(rec.username).toLowerCase()));if(typeof axisCloudFlush==='function')axisCloudFlush()}}catch(e){}
      ov.remove();
      try{if(typeof showNotification==='function')showNotification('رمز عبور شما ثبت شد؛ از ورود بعدی با همین رمز وارد شوید.',true)}catch(e){}
    };
    $('spSubmit').onclick=submit;
    ['spPass1','spPass2'].forEach(function(id){$(id).addEventListener('keydown',function(e){if(e.key==='Enter')submit()})});
    setTimeout(function(){const f=$('spPass1');if(f)f.focus()},60);
  }
  async function setup(){
    if(sessionActive()&&localStorage.getItem('axisAuthUser')){
      el.style.display='none';
      try{const cur=JSON.parse(localStorage.getItem('axisAuthUser'));if(cur&&!cur.passwordHash)showSetPassPopup(cur)}catch(e){}
      return;
    }
    loginMode();
    const users=readUsers();
    if(users.length){try{fetchCloud().then(function(d){if(d&&d.users&&d.users.length)mergeCloud(d.users)}).catch(function(){})}catch(e){}}
    if(!users.length){
      $('authDescription').textContent='در حال دریافت حساب‌های کاربری از سرور...';
      const d=await fetchCloud();
      $('authDescription').textContent='نام کاربری خود را وارد کنید؛ اگر اولین ورود شماست، بعد از ورود رمز عبور تعیین می‌کنید.';
      if(d&&d.users&&d.users.length)mergeCloud(d.users);
      else if(d&&!d.users.length&&!readUsers().length)$('authBootstrapLink').style.display='inline';
    }
  }
  async function submitLogin(){
    if(busy)return;
    const uEl=$('authUsername'),pEl=$('authPassword'),cEl=$('authConfirm');
    const u=(uEl.value||'').trim(),p=pEl.value||'';
    setError('');
    if(!u){setError('نام کاربری را وارد کنید.');return}
    if(bootstrapActive){
      const bp=p;
      if(bp.length<4){setError('رمز عبور باید حداقل ۴ کاراکتر باشد.');return}
      if(bp!==cEl.value){setError('تکرار رمز عبور یکسان نیست.');return}
      setBusy(true,'در حال ایجاد حساب');
      const rec={username:u,role:'admin',passwordHash:await hash(bp),createdAt:new Date().toISOString()};
      saveUsers([rec]);granted(rec);setBusy(false);return;
    }
    setBusy(true,'در حال ورود');
    let users=readUsers();
    const nu=normUser(u);const findName=list=>(list||[]).find(x=>normUser(x.username)===nu);
    let rec=findName(users),cloudOk=null;
    if(!rec){const d=await fetchCloud();cloudOk=!!(d&&Array.isArray(d.users));if(cloudOk&&d.users.length)users=mergeCloud(d.users);rec=findName(users)}
    if(!rec){setBusy(false);if(!cloudOk){setError('اتصال به سرور برقرار نشد. اینترنت را بررسی کنید و دوباره دکمه ورود را بزنید.');return}setError('کاربری با این نام ثبت نشده است.');return}
    const ensureLocal=function(){const all=readUsers();const ix=all.findIndex(x=>normUser(x.username)===nu);if(ix>-1){all[ix]=rec;saveUsers(all)}else{all.push(rec);saveUsers(all)}};
    if(rec.passwordHash){
      $('authPassWrap').style.display='block';
      if(!p){setBusy(false);setError('این حساب رمز عبور دارد؛ رمز عبور را وارد کنید.');return}
      const hp=await hash(p);
      if(hp!==rec.passwordHash){setBusy(false);setError('رمز عبور نادرست است.');return}
      ensureLocal();granted(rec);setBusy(false);afterLoginSync();return;
    }
    ensureLocal();granted(rec);setBusy(false);
    showSetPassPopup(rec);
    afterLoginSync();
  }
  function doReset(){
    if(!confirm('هشدار!\n\nحساب‌های ورود ذخیره‌شده در این مرورگر حذف می‌شوند.\n\nسفارش‌ها، مشتریان، محصولات و بکاپ ابری (Google Sheets) حذف نمی‌شوند.\n\nآیا مطمئن هستید؟'))return;
    localStorage.removeItem('axisAuthUser');localStorage.removeItem('axisUsers');localStorage.removeItem('axisSession');sessionStorage.removeItem('axisSession');location.reload();
  }
  $('authSubmit').onclick=submitLogin;
  ['authUsername','authPassword','authConfirm'].forEach(function(id){$(id).addEventListener('keydown',function(e){if(e.key==='Enter')submitLogin()})});
  $('authResetLink').onclick=doReset;
  $('authBootstrapLink').onclick=bootstrapMode;
  setup();
})();

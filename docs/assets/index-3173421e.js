(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();function L(){}const ne=t=>t;function Oe(t){return t()}function se(){return Object.create(null)}function B(t){t.forEach(Oe)}function U(t){return typeof t=="function"}function Ie(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let I;function K(t,e){return I||(I=document.createElement("a")),I.href=e,t===I.href}function Ye(t){return Object.keys(t).length===0}const Te=typeof window<"u";let Pe=Te?()=>window.performance.now():()=>Date.now(),re=Te?t=>requestAnimationFrame(t):L;const M=new Set;function Be(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&re(Be)}function He(t){let e;return M.size===0&&re(Be),{promise:new Promise(l=>{M.add(e={c:t,f:l})}),abort(){M.delete(e)}}}function g(t,e){t.appendChild(e)}function Me(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ze(t){const e=v("style");return Xe(Me(t),e),e.sheet}function Xe(t,e){return g(t.head||t,e),e.sheet}function j(t,e,l){t.insertBefore(e,l||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function O(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function v(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function $(){return S(" ")}function V(){return S("")}function D(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function x(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Ke(t){return Array.from(t.childNodes)}function Z(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ge(t,e,{bubbles:l=!1,cancelable:n=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,l,n,e),r}const G=new Map;let J=0;function Je(t){let e=5381,l=t.length;for(;l--;)e=(e<<5)-e^t.charCodeAt(l);return e>>>0}function Qe(t,e){const l={stylesheet:ze(e),rules:{}};return G.set(t,l),l}function Re(t,e,l,n,r,o,i,h=0){const c=16.666/n;let s=`{
`;for(let m=0;m<=1;m+=c){const y=e+(l-e)*o(m);s+=m*100+`%{${i(y,1-y)}}
`}const _=s+`100% {${i(l,1-l)}}
}`,f=`__svelte_${Je(_)}_${h}`,d=Me(t),{stylesheet:a,rules:b}=G.get(d)||Qe(d,t);b[f]||(b[f]=!0,a.insertRule(`@keyframes ${f} ${_}`,a.cssRules.length));const u=t.style.animation||"";return t.style.animation=`${u?`${u}, `:""}${f} ${n}ms linear ${r}ms 1 both`,J+=1,f}function te(t,e){const l=(t.style.animation||"").split(", "),n=l.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=l.length-n.length;r&&(t.style.animation=n.join(", "),J-=r,J||Ue())}function Ue(){re(()=>{J||(G.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&w(e)}),G.clear())})}let ie;function W(t){ie=t}const F=[],ae=[],z=[],ue=[],Ve=Promise.resolve();let le=!1;function Ze(){le||(le=!0,Ve.then(qe))}function A(t){z.push(t)}const ee=new Set;let Y=0;function qe(){const t=ie;do{for(;Y<F.length;){const e=F[Y];Y++,W(e),et(e.$$)}for(W(null),F.length=0,Y=0;ae.length;)ae.pop()();for(let e=0;e<z.length;e+=1){const l=z[e];ee.has(l)||(ee.add(l),l())}z.length=0}while(F.length);for(;ue.length;)ue.pop()();le=!1,ee.clear(),W(t)}function et(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let q;function Fe(){return q||(q=Promise.resolve(),q.then(()=>{q=null})),q}function Q(t,e,l){t.dispatchEvent(Ge(`${e?"intro":"outro"}${l}`))}const X=new Set;let P;function oe(){P={r:0,c:[],p:P}}function ce(){P.r||B(P.c),P=P.p}function N(t,e){t&&t.i&&(X.delete(t),t.i(e))}function R(t,e,l,n){if(t&&t.o){if(X.has(t))return;X.add(t),P.c.push(()=>{X.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}const We={duration:0};function T(t,e,l){const n={direction:"in"};let r=e(t,l,n),o=!1,i,h,c=0;function s(){i&&te(t,i)}function _(){const{delay:d=0,duration:a=300,easing:b=ne,tick:u=L,css:m}=r||We;m&&(i=Re(t,0,1,a,d,b,m,c++)),u(0,1);const y=Pe()+d,p=y+a;h&&h.abort(),o=!0,A(()=>Q(t,!0,"start")),h=He(k=>{if(o){if(k>=p)return u(1,0),Q(t,!0,"end"),s(),o=!1;if(k>=y){const E=b((k-y)/a);u(E,1-E)}}return o})}let f=!1;return{start(){f||(f=!0,te(t),U(r)?(r=r(n),Fe().then(_)):_())},invalidate(){f=!1},end(){o&&(s(),o=!1)}}}function H(t,e,l){const n={direction:"out"};let r=e(t,l,n),o=!0,i;const h=P;h.r+=1;function c(){const{delay:s=0,duration:_=300,easing:f=ne,tick:d=L,css:a}=r||We;a&&(i=Re(t,1,0,_,s,f,a));const b=Pe()+s,u=b+_;A(()=>Q(t,!1,"start")),He(m=>{if(o){if(m>=u)return d(0,1),Q(t,!1,"end"),--h.r||B(h.c),!1;if(m>=b){const y=f((m-b)/_);d(1-y,y)}}return o})}return U(r)?Fe().then(()=>{r=r(n),c()}):c(),{end(s){s&&r.tick&&r.tick(1,0),o&&(i&&te(t,i),o=!1)}}}function tt(t,e,l,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,l),n||A(()=>{const i=t.$$.on_mount.map(Oe).filter(U);t.$$.on_destroy?t.$$.on_destroy.push(...i):B(i),t.$$.on_mount=[]}),o.forEach(A)}function lt(t,e){const l=t.$$;l.fragment!==null&&(B(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function nt(t,e){t.$$.dirty[0]===-1&&(F.push(t),Ze(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(t,e,l,n,r,o,i,h=[-1]){const c=ie;W(t);const s=t.$$={fragment:null,ctx:[],props:o,update:L,not_equal:r,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:se(),dirty:h,skip_bound:!1,root:e.target||c.$$.root};i&&i(s.root);let _=!1;if(s.ctx=l?l(t,e.props||{},(f,d,...a)=>{const b=a.length?a[0]:d;return s.ctx&&r(s.ctx[f],s.ctx[f]=b)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](b),_&&nt(t,f)),d}):[],s.update(),_=!0,B(s.before_update),s.fragment=n?n(s.ctx):!1,e.target){if(e.hydrate){const f=Ke(e.target);s.fragment&&s.fragment.l(f),f.forEach(w)}else s.fragment&&s.fragment.c();e.intro&&N(t.$$.fragment),tt(t,e.target,e.anchor,e.customElement),qe()}W(c)}class it{$destroy(){lt(this,1),this.$destroy=L}$on(e,l){if(!U(l))return L;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const r=n.indexOf(l);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!Ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function C(t,{delay:e=0,duration:l=400,easing:n=ne}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:l,easing:n,css:o=>`opacity: ${o*r}`}}const fe={p1:[],p2:[],p3:["感謝您的教導，希望快點能夠在課室內見到您💓","希望你贏賺大錢,跟開心","祝老師教師節快樂,天天開心,生體健康","老師，謝謝你一直以來的教導，我很開心","祝老師每天都快樂","謝謝老師，希望老師永遠美麗"],p4:["祝如梅老師，教師節快樂，祝天天健健康康😘","如梅老師您好親切，而且教學很有趣，我喜歡上您的課，而且您教導的方式讓我很容易學習，謝謝老師用心的教導，教師節快樂。","謝謝老師教我們,祝老師每天開開心心.","thank you for teach us,wish you happy everyday","期待老師陪我們一起度過小四班，祝老師教師節快樂","我們這年級會開心吧! 加油呵!! 希望這次沒人受傷!!","老師，謝謝您一直熱情的教導。我很愛您喔!"],p5:["老師，謝謝您一直守護著我們，不管是上課還是下課，只要我們有問題，您總是會跳出來幫忙","谢谢您带领我们班，让我们变得更好。","謝謝林家溱老師在我們開學這一個月的付出，我希望這學期我們有美好的回憶。","謝謝林家溱老師在開學這個月的付出，希望這個學期我們有美好的回憶。","祝師教師節快樂，希望老師可以每天都開開心心，身體健康。","家溱老師這兩個禮拜的教導，讓我們學到了更多的知識，謝謝老師，老師教師節快樂~~~!!!!!!!!","老師，非常感謝你每天努力的教導我們！"],p6:["老師，謝謝你教我們書，我從你那邊學到很多東西，祝老師教師節快樂😄","老師謝謝你的教導，雖然我很皮，不喜歡他你跟我撈叨，但是謝謝你帶給我的指導。","謝謝老師不管再學校或是線上上課都很努力交我們","蕭老師謝謝您，教我們學很多知識，我一定不會忘記您說的自在島故事😊","謝謝老師幫我練習我的數學和我的國語。","在班的时候都很好沒有什么事在班没有什么問題"],j1:["謝謝老師仔細和教導我們班","老師您好！感謝你用了很多的耐心去教導我們班～解釋詞語時總是會一直確認我們有沒有理解，謝謝你～","老師，謝謝你教了我們不同的新知識和國語，老師辛苦了！ありがとう！","親愛的班導，現在已經要開學一個月了，你教的真的很快，但也教的很明白，而且你也花了很多苦心在我們班，謝謝您博凱老師","謝謝博凱老師的教導，謝謝老師幫助我更有信心，讓我知道我自己想要的工作，讓我對國文更有興趣，祝你教師節快樂！","謝謝老師的耐心教導，就算我們有不會的東西，您還是耐心的指導我們，我們非常的快樂能跟您一起上課。","感謝班導張博凱老師，謝謝你讓我來到新學校可以很快的適應新的環境，認識新的同學也謝謝您對我關心。"],j2:["親愛的玉香老師，雖然是初次見面，認識不久，僅有短短的一個月，但我們能清楚的感受到您對我們的關懷以及包容。 雖然您是新進的老師，可不難看出您是一位對學生非常負責的好老師，非常感謝老師您能在這段如此艱難的時期，不辭千里來到離家遙遠且人生地不熟的馬來西亞台校只為教導我們，我們十分感激也無比欣喜您的到來。 相信來馬來西亞的旅途十分令人疲憊，老師請務必照顧好自己，真心希望老師快點結束隔離，平安健康的來學校授課，我們很期待與您的見面。線上課程的我們會較為羞澀不敢發言，但到正式上實體課時，相信您就可以感受到來自國二班的熱情及活潑了! 很慶幸能被如此謙和又有資歷的您教到， 遇見您是我們的幸運!我們再度歡迎老師您來到馬來西亞，國二還很長，相信我們一定可以創造更多難以忘懷的美好回憶，新的一年請多多指教，很榮幸能在您教的班級學習，我們會奮發相上，努力學習的！ Last but not least, happy teacher’s day !"],j3:["雖然才認識一個學期，不過老師很認真教課，也希望以後能好好相處。","老師，感謝您對我的幫助和教導，感謝您對我們所做的一切，好人一生平安^_^ 教師節快樂","老師！ 您的工作忙忙碌碌，生活簡簡單單，快樂斷斷續續，體會酸酸甜甜。 而我們的惦記也時時刻刻，對您的祝福也長長久久，祝教師節快樂！","孝柔老師，一開始我剛來到這間學校的時候，您一直都要來詢問我有沒有適應這間學校。老實說一開始我其實有點驚訝，畢竟我以前還沒見過有這麼熱心的老師， 會這麼關注班上同學的情況當時還挺高興的。雖然有時候班上一些人還有我應該讓你頭痛，不過我們會反省和改善自己，讓你減少不必要的壓力。最後祝你教師節快樂，未來會有更美好的生活。","老師，雖然我只待在這裡一年多，但是我非常慶幸能夠轉來台灣學校。現在我們國三了，再過一個學期就要道別了:(老師，謝謝您的教導愛妳哦ʕ •ᴥ•ʔ","給老師的一段話：老師，我知道妳也許已經從很多學生的感謝短文中一直聽到「妳辛苦了」，但我還是要再說一次，妳真的辛苦了。 我小時候曾認為當一名老師很簡單。所以曾想要當一名老師。我認為，老師就是拿著課本上課，念念內容、管教秩序、分配作業、批改作業而已，既不像學生要處處被規則跟老師拘束著，也不用辛苦寫作業。 年紀比較大了之後，我才開始知道，上課前備課原來需要下很多功夫。秩序要管理妥當，不能讓學生反感，也要控制好對學校能有交代。給作業要深思熟慮，衡量必要性與對學生學習的幫助，甚至還包括程度不同要做到恰好。年紀長大了，也漸漸更理解原來老師是一個不容易的職業，卻也很感動。 願意投入教學事業的妳，是真心實意想要傳教妳的知識、經驗與人生的經歷。而身為學生，我們常常以自己的角度去看妳的辛苦，才會覺得自己很辛苦，很勞累。其實是我們都忘了，妳身上既有教學的責任，還有面對學校、面對各個班級的壓力。 現在的我，已經學會去理解老師們的難處了。雖然偶爾還是衝動又莽撞，可是妳的付出我一直都看在眼裡。有時候跟妳之間，像師生，有時候也像朋友。是老師與學生的時候，妳辛苦向我們傳教妳所有的東西。是朋友時，妳會傾聽我的想法。 雖然這個班有時候會讓妳擔心，但我相信大家是知道妳的付出的。 我時常忘了感謝妳，但妳的每一個關心，與為我們班奔波勞苦我都記得。謝謝妳，一直都在。對妳，我最希望妳一直身體健康，無憂無慮~","謝謝老師陪我2年，今年是第3年，也許是最後一年了，但我不會忘記你","老師是神聖的職業，你為了孩子的學習、成長，不辭辛勞的教導、教育。非常感謝您對我們的愛和教導，我們再這裏要說一聲：老師，謝謝您!","開心是快樂的老師，快樂是健康的老師，健康是幸福的老師，幸福是美好的老師，美好是和諧的老師，和諧是生活的老師，祝老師教師節快樂！！","感謝老師這幾年來的教導，讓我們班從一盤散沙變成了一個團結一心的班級","感谢老師為我們的付出，時時刻刻盡心盡力的幫助我們，不只是為我們全力準備教材，更鼓勵我們努力求學。希望您有個難忘的教師節～祝您教師節快樂！！！","時光飛逝，歲月如流，帶着無限的思緒回顧這三年來走過的人生道路，我思緒萬千。啊！我要感謝老師的實在是太多太多了…三年來，您耗費了多少心血。靜下心來，體會到那無盡的關愛。國一時，您總是說我們，是我們的嚴師。我知道，您這麼做，是為了讓我們從小有一個良好的習慣，堅實的基礎。初一的記憶，那麼模糊，可是現在，又逐漸清晰起來了。初二上時，您說，我們都有了自尊，您不願再批評我們了。可調皮的學生總惹您生氣，您又說他們了，我知道，您還是為他們好… 初二下時，您對我們關愛有加，您說，這是個轉折點，我們要跟著自己內心的腳步，學會如何自我尊敬以及自我管理。國三，您沒有放棄任何一個人，您說：“一定要好好堅持下去”　 三年來，天天都留到三更半夜改完讓您頭痛的考卷，準備明天的教材，您累了嗎？老師您就是酷暑中的一陣清風，吹散學生那心中的煩悶;您就是嚴寒中的一絲火苗，溫暖學生那幼小的心靈；您就是大雨中的一把打傘；遮擋住外界對學生的傷害。老師，我們怎能忘了您？師恩如一望無際海洋啊，轉眼便三年了…… 老師，辛苦了。","無論風雨，無論坎坷，都是您在默默的支持和指引我們，老師您辛苦了，謝謝您。","謝謝老師為我們的付出，謝謝老師為了我們準備課程到很晚，在現在因為疫情爆發，大家都辛苦的時候，也謝謝老師指導我們。最後祝老師萬事如意，心想事成，工作順利，身體健康，天天開心。","老師，感謝您細心地栽培我們，一路上有您的教導，才不會迷失方向；一路上有您的關注，才更加的自信勇敢，老師，謝謝您！","轉眼間，2年的時光飛逝，在這2年裡，全班就像您的兒女一樣，您總是日日夜夜為我們批改作業、卷子，在我做錯事情時，您總是寬容，細心的開導。我一定不會辜負您的期望，在新的們一學期裡，同學們會和睦相處、認真學習。教師節到了，祝您一年365天天天開心，8760小時時時快樂，5256000分分分精彩，31536000秒秒秒幸福。","老師您辛苦了，我們班應該很常惹你生氣吧，雖然這樣但還是對我們班不離不棄、用心教導，真的很感謝您，有些時候您可能會有點嚴厲，但我們都知道是為我們好，訓練我們之後的能力，讓我們成為更好的人，老師教師節快樂♡","老師，教師節快樂，希望老師每天健健康康，開心的生活，也謝謝老師的陪伴與教導。","謝謝老師耐心的教我們，我們聽不懂的老師也會願意再去教我們 謝謝老師","感謝，老師擔任我們班班導三年的時間，以及把我們的地理跟歷史教的這麼好，雖然一開始見到老師有點可怕也嚴格可是到後面覺得其實也還好，之後覺得老師您也是有溫柔的一面，謝謝老師這三年的教導，也辛苦您了。教師節快樂( ・∀・)/","老師雖然你每次都會罵我，不過我知道你是為了我的未來著想，老師謝謝你我會努力向上的。","Ya 謝謝老師陪我聊心事。硬啦： P","老師，我知道妳也許已經從很多學生的感謝短文中一直聽到「妳辛苦了」，但我還是要再說一次，妳真的辛苦了。 我小時候曾認為當一名老師很簡單。所以曾想要當一名老師。我認為，老師就是拿著課本上課，念念內容、管教秩序、分配作業、批改作業而已，既不像學生要處處被規則跟老師拘束著，也不用辛苦寫作業。 年紀比較大了之後，我才開始知道，上課前備課原來需要下很多功夫。秩序要管理妥當，不能讓學生反感，也要控制好對學校能有交代。給作業要深思熟慮，衡量必要性與對學生學習的幫助，甚至還包括程度不同要做到恰好。年紀長大了，也漸漸更理解原來老師是一個不容易的職業，卻也很感動。 願意投入教學事業的妳，是真心實意想要傳教妳的知識、經驗與人生的經歷。而身為學生，我們常常以自己的角度去看妳的辛苦，才會覺得自己很辛苦，很勞累。其實是我們都忘了，妳身上既有教學的責任，還有面對學校、面對各個班級的壓力。 現在的我，已經學會去理解老師們的難處了。雖然偶爾還是衝動又莽撞，可是妳的付出我一直都看在眼裡。有時候跟妳之間，像師生，有時候也像朋友。是老師與學生的時候，妳辛苦向我們傳教妳所有的東西。是朋友時，妳會傾聽我的想法。 雖然這個班有時候會讓妳擔心，但我相信大家是知道妳的付出的。 我時常忘了感謝妳，但妳的每一個關心，與為我們班奔波勞苦我都記得。謝謝妳，一直都在。對妳，我最希望妳一直身體健康，無憂無慮~老師，我知道妳也許已經從很多學生的感謝短文中一直聽到「妳辛苦了」，但我還是要再說一次，妳真的辛苦了。 我小時候曾認為當一名老師很簡單。所以曾想要當一名老師。我認為，老師就是拿著課本上課，念念內容、管教秩序、分配作業、批改作業而已，既不像學生要處處被規則跟老師拘束著，也不用辛苦寫作業。 年紀比較大了之後，我才開始知道，上課前備課原來需要下很多功夫。秩序要管理妥當，不能讓學生反感，也要控制好對學校能有交代。給作業要深思熟慮，衡量必要性與對學生學習的幫助，甚至還包括程度不同要做到恰好。年紀長大了，也漸漸更理解原來老師是一個不容易的職業，卻也很感動。 願意投入教學事業的妳，是真心實意想要傳教妳的知識、經驗與人生的經歷。而身為學生，我們常常以自己的角度去看妳的辛苦，才會覺得自己很辛苦，很勞累。其實是我們都忘了，妳身上既有教學的責任，還有面對學校、面對各個班級的壓力。 現在的我，已經學會去理解老師們的難處了。雖然偶爾還是衝動又莽撞，可是妳的付出我一直都看在眼裡。有時候跟妳之間，像師生，有時候也像朋友。是老師與學生的時候，妳辛苦向我們傳教妳所有的東西。是朋友時，妳會傾聽我的想法。 雖然這個班有時候會讓妳擔心，但我相信大家是知道妳的付出的。 我時常忘了感謝妳，但妳的每一個關心，與為我們班奔波勞苦我都記得。謝謝妳，一直都在。對妳，我最希望妳一直身體健康，無憂無慮~"],s1:["謝謝老師對我們如沐春風的教誨，還有苦口婆心的提醒與勸誡","感謝班導在我們從國三升高一的時候一直鼓勵著我們，也不會放棄任何一位同學。","老師我是你可愛的紫姍，感謝老師帶我們度過最困難的國三，老師也要繼續漂漂亮亮得過每一天喔!","感謝班導的包容面對我每次頑皮的時候都能細心對待我感謝老師對我的支持","老師謝謝您的教導，祝您教師節快樂，保重身體！","長期面對我們班真是讓各位老師們都辛苦了，也謝謝各位老師們的教導。教師節快樂!!","感謝老師的教導","謝謝老師在園遊會時用心的幫我們規劃攤位，還有才藝競賽，而且還讓我們用你的國文課來練習表演的舞蹈。","在我們還是懵懂無知時，授與我們知識的，是老師;在我們感到無助時，幫助我們的，也是老師;在我們做錯事時，包容我們，並給予更好的做法的，還是老師。古之學者必有師，老師們的重要性，可見一斑。謝謝老師們一直以來的教導，以後也麻煩您們了。","過去的學習歷程雖不長，但您幫我們好多。老師，謝謝您，沒有您的教導我們並不會在這裏。","第一次有位老師帶我們這麼久，代表老師真的很棒很努力，謝謝老師辛苦您了，教師節快樂","老師你很認真而且也很愛聽八卦又不容易生氣，所以我覺得老師你好猛。","您將自己的所知所學傾囊相授，在身後引導我們前往正確的道路，在失意之時給予我們一個安心的避風港，我們一起哭、一起笑、一起憤怒、一起慶祝，無論喜樂，共同分享。","老師，今天是屬於您的節日，在這裡我要獻上我最誠摯的祝福與感謝。謝謝您成為我們的老師，謝謝您和我們一起努力，無論是幫助我們的學習、競賽、運動會，真的非常感謝您！","願我們以後也能一起努力，未來的每一天，都能活得繽紛光彩，共同邁向更好的自己！","老師一直以來都非常照顧我們～這幾個學期也要麻煩老師了～","老師有時搞笑，有時候又很認真，老師在我們心裡都是最好的，而且是獨一獨二的！","我們都很愛老師～！還有老師你給我們感覺！一直都是一個！很猛很猛的！老師！ 施又鳴敬上.","非常感謝的班導的對我的教育對我的栽培能夠在每次做錯事情的時候體諒我包容我","謝謝老師都會在假日或是放假關心我們","在這個特別的日子裡，我想對老師您說聲：教師節快樂！願您在今後的日子裡健康快樂","老師又要麻煩你一年了  辛苦老師了","老師，感謝您一年的教導，在未來的幾年，我會更加努力，不辜負您的期望。","謝謝老師這一年的照顧也謝謝老師都會關心其他同學","教誨如春風，師恩深似海。祝老師教師節快樂，永遠年輕!!!","『師者，所以傳道、受業、解惑也。』老師，謝謝您教導我們知識，傳授我們道理，感謝您為我們辛勤的付出。祝您教師節快樂！","雖然還未能跟您親自碰面，不過從那些談話中，我能夠清楚的感受到您對我們的關心和用心，期待接下來的三年 ，能夠與老師跟整個班級創下美好的回憶","祝老師 教師節快樂","老師，雖然相處的時間不長，但是我覺得您對我是非常的關心和照顧。謝謝您，教師節快樂！","不計辛勤一硯寒，桃熟流丹，李熟技殘，種花容易樹人難；幽谷飛香不一般，詩滿人間，畫滿人間，英才濟濟笑開顏。祝:教師節快樂！"],s2:["很高興能認識您，希望接下來的時間多多關照 教師節快樂","祝您教師節快樂，未來兩年也多多指教。","感謝您這幾天的照顧和幫助，希望以後可以做好自己的任務。","謝謝老師過去一年不停地激勵我們，讓我們在高中生活不留下任何遺憾，祝您教師節快樂！","謝謝老師的耐心指導還有老師帶給我們的種種快樂，讓我們能夠在艱難的時刻一樣能夠非常愉快，很開心上高中能夠遇見這麽好的班導，祝老師永遠青春幸福，我們非常愛你ㄛ～","謝謝純莉老師對自己班的每一個學生都像自己孩子一般疼愛，我非常的敬佩你，能力好、教導能力佳、溝通能力強，我非常的誠實，雖然有些時候老師脾氣怪怪的，但是整體上來說可以給98分以上，謝謝老師每次約談的話，我都記在心坎裡，謝謝老師每次耐心的教導，尤其是數學能力很差的我，謝謝老師不厭煩的一遍又一遍的教，謝謝老師看好我們，有朝一日我們一定會讓你看到我們的成就，謝謝老師那麼愛我們，教師節快樂，老師真的辛苦了！！","謝謝純莉老師從高一開始一直到現在對我們的教導以及用心!!總是提醒我們該做什麼不該做什麼，帶我們往正確的方向前進，老師辛苦了～祝教師節快樂!!","老師，雖然您看似和矮可親，但生氣起來十分的恐怖、也很刺激，而我們知道那是為了我們好，同時也是希忘通過老師的斥責使我們變得更優秀，並且成為有能力的人在社會上有所貢獻。祝您永遠健康美麗，謝謝","謝謝老師在這一年的帶領下讓我們班越來越進步，也祝您教師節快樂。","感謝老師一直以來的教導，我班導希望一直教我到畢業","我很想感謝純莉老師一年來給我的支持，協助我在課業上的問題，我希望老師能夠一直的指導我到大學，謝謝純莉老師。","您的娓娓教導，似潺潺清泉。謝謝老師對我的教導，祝您教師節快樂。","謝謝老師常以遊戲方式來增進同學們的能力，雖然我們很皮又很吵XD","一直以來我們都很愛玩，也常常惹老師你生氣，希望以後我們該團結就團結；該認真就認真，讓老師不那麼辛苦。最後，祝老師教師節快樂！好好享受我們的一系列教師節祝賀活動～","老師我數學會好好學的(・∀・)(・∀・)不會讓您擔心的","感謝老師你總是不厭其煩的教導我們，教師節快樂","給敬愛的Shelly老師,教師節快樂,面對有想法又懶散的我們,想必對您是種折磨和挑戰吧～但也同時是訓練您耐心的時候,畢竟一代不如一代了,希望我們高三能跟您一起衝,Fighting!!!","老師好，感謝教育之恩，祝您教師節快樂！","謝謝老師總是如此包容我，教師節快樂，您辛苦了!"],s3:["短短的三年也快結束了， 感謝老師一直以來容忍我們愚蠢的問題， 細心的指導我們。 我們最後的一年就好好一起過， 大家一起努力 :)","謝謝老師今年能夠陪同我們一起到畢業","阿達,接下来的一年就麻煩你了喲！希望不要嫌我煩哈哈。","老師很專業，教的很好，學識淵博。但是要少暴怒，對身體好哦，很開心可以一起走完高中的最後一年。","🎉教師節快樂🎉","達達老師，教師節快樂🎉祝老師永遠這麼帥😎","老師，謝謝您每天早自習都給予我們勉勵和建議。","教師節快樂，祝您身体健康。你是一个很負責的老師，而且教的很好。謝謝老師","阿達老師！ 雖然我剛開始覺得你蠻兇的， 有時候還會有點不耐煩。 但相處久後我才明白其實你比誰都有耐心， 你曾經說過會陪我們走完這一段艱辛的路， 這讓我覺得很安心、 很踏實。 最後， 很謝謝你肯那麼用心地栽培我們， 陪伴我們， 讓我們有所依靠。 致： 比起老師更像老爸的阿達老師，教師節快樂！！！","在這個特別的日子里，我想對老師您說聲：老師節日快樂！願您在今後的日子里健康快樂！","我還記得老師你高一的時候說過你會陪着我们度過整个高中時期， 那時候的我突然就覺得踏實了， 就好像瞬間覺得不迷茫了。 虽然老師你平常有點凶，但其實是个温柔的好人啊XDD","這一年可能要辛苦班導了，雖然有時候聽到你唠唠叨叨的勸我們會覺得有點煩，但你苦口婆心說的話，都是金玉良言啊","感謝老師一直以來的教導，希望老師每天都可以過得幸福","老師辛苦了，感謝老師能陪我們走完高中的最後一段路，我們一定會加油努力。","謝謝老師一直以來給予的教導與肯定","謝謝老師對我們那麼好真心感謝"]},_e={p1:[],p2:[],p3:["I miss you! See you in School on 1st October! ❤️","謝謝老師們每天照顧我們","謝謝老師們的幫忙跟交我們上課","謝謝老師們每天的辛苦，我愛你","祝老師永遠健康","謝謝老師教我們那麽多東西"],p4:["祝所有的老師，教師節快樂，祝天天快樂❤️。","老師們教師節快樂，上您們的課很有趣，而且也很歡樂，整個學習氣氛都非常好，我很喜歡每一位老師，謝謝有您們的教導與陪伴，辛苦了！","謝謝老師教我們,祝老師可以健健康康.","thank you for teach us , wish you happy everyday.","今年很少時間和老師們相處，我想念老師們祝老師教師節快","給美術老師: 老師我很喜歡您的課喔! 很好做您教我們的東西!","我非常感謝所有的老師們，很期待在學校跟老師們見面!"],p5:["老師們辛苦了，每次都要想辦法搞定及教導我們這一群阿瓜，用盡所有心思，真的是謝謝您們了。","谢谢你们辛苦的教导我们，在我们需要帮忙时伸出援手。","謝謝各位老師教導我各位老師教導我們，祝福各位老師身體健康，蒸蒸日上。","謝謝各位老師教導我們，祝福各位老師身體健康，蒸蒸日上。","祝舞蹈老師身體健康，平平安安","謝謝老師們教導我門運動和才藝，老師祝妳們教師節快樂~~~!!!!","感謝其他科目的老師們，用心的教育我們！"],p6:["各位老師們，謝謝你教我書，我從你那邊學到很多東西，祝老師們教師節快樂😄","各位老師們辛苦了，教師節快樂，希望你們都天天開心！！","謝謝自然老師幫我們補充我們不懂的地方","謝謝其他教我們的老師，讓我學了各種科目。","謝謝每一位老師，大家都對我很好，和幫我學的更多。","很感谢老师因为老师教很多东西還有做东西"],j1:["親愛的老師們，你們在台校辛苦了，謝謝你們每天都給予我們新的知識，陪伴我們長得，謝謝你們，我愛你們。","謝謝老師總是用很多的耐心來教導我們班，雖然有時候我們班很調皮，但是你們還是會給我們很多的包容，謝謝你們！","謝謝老師幫助我更有信心，讓我知道我自己想要的工作，讓我對學習更有興趣，祝你教師節快樂！","俗話說：科技是第一生產力，而科技需要人才，人才需要學校，學校需要老師。所以老師是第一生產力。我們可以變成有用的人都是由老師一塊一塊的把我們拼凑起來。感謝天下全體的老師，謝謝你們！","每年的九月二十八，學生們都帶著鮮花,賀卡,小禮盒等等.邁著開心的布伐,將自己一點點的小心意獻給老師,沒錯,這就是一年一度的教師節。 今年的教師節，雖然不能來學校讀書，但還是沒能讓我忘記老師那一絲不苟的身姿，那無微不至的關心，那和藹可親的笑容讓我親不自禁的想要對老師說：「謝謝你們對我們的關愛與照顧慮，謝謝你們教會我們點點滴滴，就算遇到不會的題，你們也不急不躁的指導著我們，謝謝你們讓我們懂得人生中大大小小的道理，慢慢的讓我們走向光芒四射的大路上，心裡充滿了信心，不再輕易被擊倒。謝謝您們，也祝老師們節日快樂，每天臉上掛著一個美麗的笑容」","感謝老師們那麼用心的指導著我們，沒有你們的關心、指導，也就沒有今天的我們，你們的諄諄教誨，讓我們不再犯錯。","謝謝全校老師教導大家如何有好的常識與新常識跟美好的學習環境,謝謝你們~"],j2:["今年夏天「國二班」將我們聚在一起，希望我們能快樂的度過這段時光，每每路過辦公室，看到老師們桌上一疊疊的文件和一捆捆的卷宗，總讓我們愈發的心疼，教務處正是運行整個學校的動力，卻也學校是最為繁忙的地方之一。我們上課的時候，常常看到教務處老師們在巡堂，無論天多熱，無論是不是休息時間，放學時教務處老師們還要檢查我們的教室日誌，平時就已經很忙了，可疫情期間，教務處的師長們還要為我們處理各種大小事，希望師長們不要因為這些事情過度疲累，我們由衷的感激各個身兼重職的老師們。親愛的總務處老师們，總務處的師長們謝謝您們幫助學校的設施汰舊換新，保養我們的設備以及應徵優秀的老師，讓我們在學校學習的品質提升以及保持。金錢的管理需要非常細心和耐心的工作，辛苦您們幫學校管帳了！小時候的我們在跌倒擦傷之時，總是無助的，總是不知該何去何從，腦袋一片空白，懵懂無知，可我們永遠不會忘了，我們放聲大哭之時，從學務處那端急匆匆跑出的身影，溫柔的為我們擦藥安撫我們的您總是讓我們倍感親切。犯錯時老師們總是比我們還要擔心還要心疼，我們可以感受到您們對我們的愛以及期望，忙碌的課間您們在一扇扇門進進出出，站上講台的老師們總是能在最後一聲鈴響迅速化身成一位台風穩健的演說家，而我們就是您永遠忠實的聽眾。老師是一個最神聖的職業，以最簡單的言語，創造最非凡的未來，是您們用對教育的熱情，點亮我們心中之路，是您們讓我們能明對錯，辨是非，是您們讓我們的夢想不再是夢，白板上通過一隻筆綻放智慧之花，一排一排的課桌旁邊，站在講台上的您諄諄教誨引領我們學海無涯，努力造就桃李天下，謝謝老師這日子的教導,我們必將帶著您們的愛不斷走下去，。衷心祝福無限敬意，祝您教師節快樂。 我們下次一定準時交作業啦!"],j3:["在位於赤道上的某個屬於熱帶雨林氣候的國家，有一群人從遙遠的福爾摩沙，離開了他們的家人，離開了他們熟悉的地方，獨自一人孤身來到這裏。這裏是？馬來西亞，也就是他們前往任職的地方；他們是?他們是一群領航員‘老師’。在這時而烈日當空，時而颳風下雨的季節裏，我們學生們與你邂逅了。您不僅教導了我們一些做人處事的態度，還會分享給我們許多屬於自己的故事。雖然你上得課程有點快，不過我們知道您需要上完國中三班的課很辛苦。你對學校的學生們和家長們都熟記於心，可見你們如此的熱愛學校與我們。 不管是所謂的“新生”老師，還是“舊生”老師，您來這裡也只有一個目的。就是把知識與經驗傳授給我們。您離鄉背井，來到這陌生的環境，面對陌生的面孔，而且還要克服水土不服。即便到了這麼人生路不熟的地方，您仍舊義無反顧的教導我們。這種說不盡的犧牲令人敬佩。有時您遇到我們的調皮搗蛋，可能會感到很生氣，但是卻不會因此而唾棄我們，反而不斷地給予包容，不斷的給我們機會。可見您的心雖然只有拳頭大，但是卻容得下全世界。每當遇到我們種種意見，您會選擇採納並檢視自己，而非怒罵我們。您的心胸令我們刮目相看。 每個老師都像是遊戲裡的坦克和輔助，努力的把我們從等級1開始培養。到最後學生滿等的時候，必定十連勝以回報老師的恩情。在求學的這段期間，感謝有各位老師的幫助和教導。沒有你們，我們只是一群烏合之眾。出了社會以後，你們的諄諄教誨我們一定會銘記在心。在此，我想插一個題外話。其實在這次的教師節最大的功臣是活動的策劃和負責人。我很感謝他們給我這個機會讓我寫出感謝老師的話語，而且他們還利用自己的空閒時間來跟我們討論種種的問題，他們是最辛苦的。謝謝所有的負責人。 最後我們期望各位老師像個旅者一樣，不斷前行，不斷堅持，成為心目中的自己。 祝賀各位老師  教師節快樂！"],s1:["世界上有一群人，他們在人生旅途中引導著我們，像是夜路上的一盞燈，指引我們未來的方向；他們將畢生所學毫不保留的傳授給我們，像是家族裡的長輩，教導小輩們人生的道理；他們在我們失意之時，成為了我們的避風港，保護著脆弱的我們，細心呵護我們長大，直到有一天我們可以頂天立地，成為一個獨當一面的人。這些人，他們對我們毫不保留、無微不至、煞费苦心，不求什麼，只希望我們能健康快樂的成長茁壯，有美好的未來夢想去追求。他們，就是老師。 老師，謝謝你無怨無悔的教導，讓我們可以有足夠的知識，不會被坑蒙拐骗，能與未來的社會對抗。 老師，謝謝你告訴我們是非對錯，讓我們可以認清自己是誰，不會犯下讓自己後悔的事情。 老師，謝謝你無時無刻的提醒著我們，要好好念書，這樣才不會辜負了自己的青春。 老師，謝謝你一直在我們身旁，支持著我們的想法，讓我們可以毫無顧忌的放手去嘗試想做的事。 雖然我們之間可能有過摩擦、不和、不愉快未來的路還很長，願我們可以一起成長、互相陪伴，在未來的某一天，我可以為你們做些什麼。雖然我們現在無法為你做些什麼，但是在這個日子裡，我希望可以為你獻上最誠摯的祝福。用炫麗的彩霞代表我們熱血激昂的心情，用璀璨的銀河代表我們深深的羈絆，用緋紅的赤日代表我們熱情的心，老師！祝你教師節快樂！"],s2:["很高興認識各位優秀的老師們，祝老師們教師節快樂","祝您教師節快樂，未來兩年也多多指教。","謝謝各位老師的教育和指導，今後我會更加努力的學習知識跟緊老師的步伐。","謝謝各位老師的指教，希望在日後的時間也可以持續教導我","謝謝老師們帶給我們每一堂課的精彩，也謝謝所有老師在網課的期間一樣把我們教的很棒~！","為您送上一份祝福，願世上每一位學生，生命中有良師相伴，在黑暗中為你閃耀星光，照亮你的前方，收穫一片燦爛的星空，如同每一位台校生一般，親愛的老師們，在這個特別的教師節裡，祝你幸福無邊！","謝謝老師一直以來的教導，每次都非常用心的在幫我們上課，辛苦了!!教師節快樂!!","教師節到了，老師們，謝謝平日裡的指導，我們犯錯時也會不顧一切地糾正，使我們越來越完美。祝福每位老師賺大錢","謝謝老師一直以來的教導，以及在高一教過我的老師辛苦了","謝謝老師，在這一年的教導，也祝各位老師教師節快樂。","謝謝每一位教過我的老師，雖然我從來沒有好過一科目，但是最後還是讓我通過這道關卡，謝謝每一位老師。","教師節，恩師情重，無以為報，唯有默默祝愿，願您身體健康，教師節快樂。","辛苦你們了，為你們對學生的努力及栽培表示感謝","不管是哪一科的老師，還是哪一個部門的行政老師，都辛苦的打理一切事物，一直以來都辛苦了，也希望老師們在我們這次籌辦的活動裡可以放鬆一下～祝老師們教師節快樂！","國文老師我會把不足的地方補好的！！！","謝謝每位老師上課都認真的教導我們，教師節快樂","感謝多位老師對高二班的用心教導，在老師辛苦的付出下，相信高二班也會有成材的一天，教師節快樂","老師好，感謝教育之恩，祝您教師節快樂！","所有老師們都辛苦了，尤其是教導我的，拜託別當我"],s3:["謝謝每個老師對學生的付出和努力","高三了，要去煩老師讀書！老師們準備好了哦哈哈","謝謝老師們那麼長久的教導，很感恩哦。老師們很辛苦，謝謝教導。","🎉教師節快樂🎉","祝各位老師們教師節快樂🎉祝老師們在節日裡，「師」分幸福，「師」分開心，「師」分健康！","致所有過去教過我和未來將教我的老師，謝謝你們盡心盡力地策畫課程和耐心地教導我們。","老師們謝謝你们，祝你们教師節快樂。","親愛的老師們，雖然您們沒有像班導一樣帶著我們，但我知道您們也是一直在為我們默默付出，為我們鋪好走向未來的道路。雖然我們有時候會惹您們生氣，但在關鍵時刻，我們一定不會辜負您們的教導，盡最大的努力去爭取屬於我們的未來。謝謝老師們，您們辛苦了，教師節快樂！","純莉老師感謝您一直以來的指導，雖然不是我們的導師卻一直像我們第二個導師。無論有任何問題，給老師足夠的時間也一定解的出來。","一路上有您的教導，才不會迷失方向；一路上有您的關注，才更加自信勇敢，老師，謝謝您！教師節快樂","纯莉老師辛苦啦~一次带高中三個班的數學，又是班導，還要兼顧高三的複習，感恩老師啦！","蔡仁敏老師，謝謝你用心良苦的教導我們，有你這種老師真的可說是大海撈針啊","也謝謝其他老師們多年以來的陪伴，我們能夠有充足的學校生活","老師們辛苦了，疫情關係讓所有老師變得很忙碌，真的很感謝老師們。","謝謝純莉老師一直細心的教導我們","謝謝老師"]},de=["各位台校的老師、主任、訓育組長們，","高二班全體學生由衷感謝在校師長的教導。","你們猶如月亮，是黑夜裡的溫暖。","當我們畏懼黑暗不敢向前，","您默默成為我們心中的一份力量。","迷茫黑夜失去方向時，更為我們指引明路。","做錯事的我們化身成一隻小老鼠，在冰冷的夜逃竄，","你們也毫不吝嗇的細心引導，直到天亮。","我們知道即使今天是新月，你們也從不缺席。","是你們在我們每個陌生的夜晚，偷偷陪伴；","是你們讓可怕的夜晚，藏著溫存，使我們不再被它吞噬；","是你們悄悄的讓太陽快點出來，曬乾了暴風雨的霉氣；","","是你們的到來，讓我們感受到愛、被愛；","更是你們帶給了我們溫暖和希望。","","網路課程因你們的出現，學習不受疫情終止；","謝謝你們無私的愛，與關懷；","","教師節快樂，老師您真的辛苦了!!"],he=["To all of our beloved English teachers,","today we celebrate all of your work towards helping us learn and perfect the English language. We also celebrate how we will be better English speakers and writers thanks to your relentless reminders on the right spelling for our vocabulary, the right conjunctions to be used in certain contexts, or even where we are supposed to place our commas, you catch every little detail and encourage us to improve sentence by sentence. We appreciate each of you from the bottom of our hearts, especially during these trying times, where teaching is an apparent challenge, none of you have ever ceased your passion towards educating us. Although admittedly we do not show our gratitude towards you anywhere near enough, we truly do respect and are inspired by how you are able to teach us a language that is complicated and confusing, without ever giving up on us. We wish each and every one of you only the best in health, and that you will never give up on anything the same way you have taught us to never give up on English. We hope to see all of you soon!!","","p.s. we are truly sorry if you find any grammar mistakes, if you do, we would be more than grateful if you tell us where we went wrong. xP"];function pe(t,e,l){const n=t.slice();return n[21]=e[l],n[17]=l,n}function me(t,e,l){const n=t.slice();return n[21]=e[l],n[17]=l,n}function ge(t,e,l){const n=t.slice();return n[21]=e[l],n}function be(t,e,l){const n=t.slice();return n[19]=e[l],n[17]=l,n}function xe(t,e,l){const n=t.slice();return n[15]=e[l],n[17]=l,n}function ve(t,e,l){const n=t.slice();return n[21]=e[l],n}function ke(t,e,l){const n=t.slice();return n[19]=e[l],n[17]=l,n}function ye(t,e,l){const n=t.slice();return n[15]=e[l],n[17]=l,n}function we(t,e,l){const n=t.slice();return n[15]=e[l],n[17]=l,n}function ot(t){let e,l,n,r,o,i,h,c,s,_,f=he,d=[];for(let a=0;a<f.length;a+=1)d[a]=$e(pe(t,f,a));return{c(){e=v("div"),l=v("span"),l.textContent="All Teachers...",n=$();for(let a=0;a<d.length;a+=1)d[a].c();r=$(),o=v("div"),o.textContent="< back",x(l,"class","text-4xl text-center text-white my-8 uppercase"),x(o,"class","border p-3 text-2xl mb-2 mt-12 w-82 mx-1 text-white hover:bg-white hover:text-black flex cursor-pointer transition"),x(e,"class","flex flex-col items-center")},m(a,b){j(a,e,b),g(e,l),g(e,n);for(let u=0;u<d.length;u+=1)d[u].m(e,null);g(e,r),g(e,o),c=!0,s||(_=D(o,"click",t[14]),s=!0)},p(a,b){if(b&0){f=he;let u;for(u=0;u<f.length;u+=1){const m=pe(a,f,u);d[u]?(d[u].p(m,b),N(d[u],1)):(d[u]=$e(m),d[u].c(),N(d[u],1),d[u].m(e,r))}for(;u<d.length;u+=1)d[u].d(1);d.length=f.length}},i(a){if(!c){for(let b=0;b<f.length;b+=1)N(d[b]);A(()=>{h&&h.end(1),i=T(e,C,{delay:500}),i.start()}),c=!0}},o(a){i&&i.invalidate(),h=H(e,C,{}),c=!1},d(a){a&&w(e),O(d,a),a&&h&&h.end(),s=!1,_()}}}function ct(t){let e,l,n,r,o,i,h,c,s,_,f=de,d=[];for(let a=0;a<f.length;a+=1)d[a]=je(me(t,f,a));return{c(){e=v("div"),l=v("span"),l.textContent="全體老師...",n=$();for(let a=0;a<d.length;a+=1)d[a].c();r=$(),o=v("div"),o.textContent="< back",x(l,"class","text-4xl text-center text-white my-8 uppercase"),x(o,"class","border p-3 text-2xl mb-2 mt-12 w-82 mx-1 text-white hover:bg-white hover:text-black flex cursor-pointer transition"),x(e,"class","flex flex-col items-center")},m(a,b){j(a,e,b),g(e,l),g(e,n);for(let u=0;u<d.length;u+=1)d[u].m(e,null);g(e,r),g(e,o),c=!0,s||(_=D(o,"click",t[13]),s=!0)},p(a,b){if(b&0){f=de;let u;for(u=0;u<f.length;u+=1){const m=me(a,f,u);d[u]?(d[u].p(m,b),N(d[u],1)):(d[u]=je(m),d[u].c(),N(d[u],1),d[u].m(e,r))}for(;u<d.length;u+=1)d[u].d(1);d.length=f.length}},i(a){if(!c){for(let b=0;b<f.length;b+=1)N(d[b]);A(()=>{h&&h.end(1),i=T(e,C,{delay:500}),i.start()}),c=!0}},o(a){i&&i.invalidate(),h=H(e,C,{}),c=!1},d(a){a&&w(e),O(d,a),a&&h&&h.end(),s=!1,_()}}}function st(t){let e,l,n,r;const o=[_t,ft],i=[];function h(c,s){return c[1]?1:0}return e=h(t),l=i[e]=o[e](t),{c(){l.c(),n=V()},m(c,s){i[e].m(c,s),j(c,n,s),r=!0},p(c,s){let _=e;e=h(c),e===_?i[e].p(c,s):(oe(),R(i[_],1,1,()=>{i[_]=null}),ce(),l=i[e],l?l.p(c,s):(l=i[e]=o[e](c),l.c()),N(l,1),l.m(n.parentNode,n))},i(c){r||(N(l),r=!0)},o(c){R(l),r=!1},d(c){i[e].d(c),c&&w(n)}}}function at(t){let e,l,n,r;const o=[mt,pt],i=[];function h(c,s){return c[1]?1:0}return e=h(t),l=i[e]=o[e](t),{c(){l.c(),n=V()},m(c,s){i[e].m(c,s),j(c,n,s),r=!0},p(c,s){let _=e;e=h(c),e===_?i[e].p(c,s):(oe(),R(i[_],1,1,()=>{i[_]=null}),ce(),l=i[e],l?l.p(c,s):(l=i[e]=o[e](c),l.c()),N(l,1),l.m(n.parentNode,n))},i(c){r||(N(l),r=!0)},o(c){R(l),r=!1},d(c){i[e].d(c),c&&w(n)}}}function ut(t){let e,l,n,r,o,i,h,c,s=t[2],_=[];for(let f=0;f<s.length;f+=1)_[f]=Le(we(t,s,f));return{c(){e=v("div"),l=v("span"),l.textContent="祝老師們教師節快樂",n=$(),r=v("span"),r.textContent="HAPPY TEACHER'S DAY",o=$();for(let f=0;f<_.length;f+=1)_[f].c();x(l,"class","text-5xl text-center text-white"),x(r,"class","text-4xl text-center text-white mb-12"),x(e,"class","flex h-screen flex-col items-center justify-center")},m(f,d){j(f,e,d),g(e,l),g(e,n),g(e,r),g(e,o);for(let a=0;a<_.length;a+=1)_[a].m(e,null);c=!0},p(f,d){if(d&5){s=f[2];let a;for(a=0;a<s.length;a+=1){const b=we(f,s,a);_[a]?_[a].p(b,d):(_[a]=Le(b),_[a].c(),_[a].m(e,null))}for(;a<_.length;a+=1)_[a].d(1);_.length=s.length}},i(f){c||(A(()=>{h&&h.end(1),i=T(e,C,{delay:500}),i.start()}),c=!0)},o(f){i&&i.invalidate(),h=H(e,C,{}),c=!1},d(f){f&&w(e),O(_,f),f&&h&&h.end()}}}function $e(t){let e,l=(t[21]?t[21]:"<br>")+"",n;return{c(){e=v("span"),x(e,"class","mx-2 text-2xl font-init text-center")},m(r,o){j(r,e,o),e.innerHTML=l},p:L,i(r){n||A(()=>{n=T(e,C,{delay:t[17]*100+500}),n.start()})},o:L,d(r){r&&w(e)}}}function je(t){let e,l=(t[21]?t[21]:"<br>")+"",n;return{c(){e=v("span"),x(e,"class","mx-2 text-2xl font-init text-center")},m(r,o){j(r,e,o),e.innerHTML=l},p:L,i(r){n||A(()=>{n=T(e,C,{delay:t[17]*100+500}),n.start()})},o:L,d(r){r&&w(e)}}}function ft(t){let e,l,n,r,o,i,h,c,s,_,f,d,a,b,u;function m(k,E){return E&2&&(c=null),c==null&&(c=!!["p1","p2"].includes(k[1])),c?ht:dt}let y=m(t,-1),p=y(t);return{c(){e=v("div"),l=v("div"),l.textContent="< back",n=$(),r=v("span"),o=S(t[1]),i=S(" 想對您說..."),h=$(),p.c(),s=$(),_=v("div"),_.textContent="< back",x(l,"class","border p-3 text-2xl my-2 mx-1 text-white hover:bg-white hover:text-black flex cursor-pointer transition"),x(r,"class","text-4xl text-center text-white my-8 uppercase"),x(_,"class","border p-3 text-2xl mb-2 mx-1 text-white hover:bg-white hover:text-black flex cursor-pointer transition"),x(e,"class","flex flex-col")},m(k,E){j(k,e,E),g(e,l),g(e,n),g(e,r),g(r,o),g(r,i),g(e,h),p.m(e,null),g(e,s),g(e,_),a=!0,b||(u=[D(l,"click",t[11]),D(_,"click",t[12])],b=!0)},p(k,E){(!a||E&2)&&Z(o,k[1]),y===(y=m(k,E))&&p?p.p(k,E):(p.d(1),p=y(k),p&&(p.c(),p.m(e,s)))},i(k){a||(A(()=>{d&&d.end(1),f=T(e,C,{delay:500}),f.start()}),a=!0)},o(k){f&&f.invalidate(),d=H(e,C,{}),a=!1},d(k){k&&w(e),p.d(),k&&d&&d.end(),b=!1,B(u)}}}function _t(t){let e,l,n,r,o,i,h,c,s,_,f,d,a,b=t[3],u=[];for(let m=0;m<b.length;m+=1)u[m]=Ae(xe(t,b,m));return{c(){e=v("div"),l=v("span"),l.textContent="各班老師",n=$(),r=v("span"),r.textContent="Subject Teachers",o=$(),i=v("div");for(let m=0;m<u.length;m+=1)u[m].c();h=$(),c=v("div"),c.textContent="< back",x(l,"class","text-5xl text-center text-white"),x(r,"class","text-4xl text-center text-white mb-12"),x(i,"class","grid grid-cols-2"),x(c,"class","border p-3 text-2xl mb-2 mx-1 w-82 text-white hover:bg-white hover:text-black flex cursor-pointer transition"),x(e,"class","flex flex-col items-center justify-center h-screen")},m(m,y){j(m,e,y),g(e,l),g(e,n),g(e,r),g(e,o),g(e,i);for(let p=0;p<u.length;p+=1)u[p].m(i,null);g(e,h),g(e,c),f=!0,d||(a=D(c,"click",t[10]),d=!0)},p(m,y){if(y&10){b=m[3];let p;for(p=0;p<b.length;p+=1){const k=xe(m,b,p);u[p]?u[p].p(k,y):(u[p]=Ae(k),u[p].c(),u[p].m(i,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=b.length}},i(m){f||(A(()=>{_&&_.end(1),s=T(e,C,{delay:500}),s.start()}),f=!0)},o(m){s&&s.invalidate(),_=H(e,C,{}),f=!1},d(m){m&&w(e),O(u,m),m&&_&&_.end(),d=!1,a()}}}function dt(t){let e,l=_e[t[1]],n=[];for(let r=0;r<l.length;r+=1)n[r]=Ee(ge(t,l,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=V()},m(r,o){for(let i=0;i<n.length;i+=1)n[i].m(r,o);j(r,e,o)},p(r,o){if(o&2){l=_e[r[1]];let i;for(i=0;i<l.length;i+=1){const h=ge(r,l,i);n[i]?n[i].p(h,o):(n[i]=Ee(h),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=l.length}},d(r){O(n,r),r&&w(e)}}}function ht(t){let e,l=Array(t[1]=="p1"?12:17),n=[];for(let r=0;r<l.length;r+=1)n[r]=Ce(be(t,l,r));return{c(){e=v("div");for(let r=0;r<n.length;r+=1)n[r].c();x(e,"class","grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6")},m(r,o){j(r,e,o);for(let i=0;i<n.length;i+=1)n[i].m(e,null)},p(r,o){if(o&2){l=Array(r[1]=="p1"?12:17);let i;for(i=0;i<l.length;i+=1){const h=be(r,l,i);n[i]?n[i].p(h,o):(n[i]=Ce(h),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=l.length}},d(r){r&&w(e),O(n,r)}}}function Ee(t){let e,l=t[21]+"",n;return{c(){e=v("span"),n=S(l),x(e,"class","bg-orange-300 my-1 mx-2 p-3 text-2xl font-init")},m(r,o){j(r,e,o),g(e,n)},p(r,o){o&2&&l!==(l=r[21]+"")&&Z(n,l)},d(r){r&&w(e)}}}function Ce(t){let e,l;return{c(){e=v("img"),x(e,"class","object-cover object-center h-full"),K(e.src,l="../"+t[1]+"_subject/"+(t[17]+1)+".jpg")||x(e,"src",l)},m(n,r){j(n,e,r)},p(n,r){r&2&&!K(e.src,l="../"+n[1]+"_subject/"+(n[17]+1)+".jpg")&&x(e,"src",l)},d(n){n&&w(e)}}}function Ae(t){let e,l,n=t[15]+"",r,o,i,h;function c(){return t[9](t[15])}return{c(){e=v("div"),l=v("span"),r=S(n),o=$(),x(l,"class","flex-1 text-center uppercase"),x(e,"class","border p-3 text-2xl mb-2 mx-1 w-40 text-white hover:bg-white hover:text-black flex cursor-pointer transition")},m(s,_){j(s,e,_),g(e,l),g(l,r),g(e,o),i||(h=D(e,"click",c),i=!0)},p(s,_){t=s},d(s){s&&w(e),i=!1,h()}}}function pt(t){let e,l,n,r,o,i,h,c,s,_,f,d,a,b,u;function m(k,E){return E&2&&(c=null),c==null&&(c=!!["p1","p2"].includes(k[1])),c?bt:gt}let y=m(t,-1),p=y(t);return{c(){e=v("div"),l=v("div"),l.textContent="< back",n=$(),r=v("span"),o=S(t[1]),i=S(" 想對您說..."),h=$(),p.c(),s=$(),_=v("div"),_.textContent="< back",x(l,"class","border p-3 text-2xl my-2 mx-1 text-white hover:bg-white hover:text-black flex cursor-pointer transition"),x(r,"class","text-4xl text-center text-white my-8 uppercase"),x(_,"class","border p-3 text-2xl mb-2 mx-1 text-white hover:bg-white hover:text-black flex cursor-pointer transition"),x(e,"class","flex flex-col")},m(k,E){j(k,e,E),g(e,l),g(e,n),g(e,r),g(r,o),g(r,i),g(e,h),p.m(e,null),g(e,s),g(e,_),a=!0,b||(u=[D(l,"click",t[7]),D(_,"click",t[8])],b=!0)},p(k,E){(!a||E&2)&&Z(o,k[1]),y===(y=m(k,E))&&p?p.p(k,E):(p.d(1),p=y(k),p&&(p.c(),p.m(e,s)))},i(k){a||(A(()=>{d&&d.end(1),f=T(e,C,{delay:500}),f.start()}),a=!0)},o(k){f&&f.invalidate(),d=H(e,C,{}),a=!1},d(k){k&&w(e),p.d(),k&&d&&d.end(),b=!1,B(u)}}}function mt(t){let e,l,n,r,o,i,h,c,s,_,f,d,a,b=t[3],u=[];for(let m=0;m<b.length;m+=1)u[m]=De(ye(t,b,m));return{c(){e=v("div"),l=v("span"),l.textContent="班級導師",n=$(),r=v("span"),r.textContent="Homeroom Teachers",o=$(),i=v("div");for(let m=0;m<u.length;m+=1)u[m].c();h=$(),c=v("div"),c.textContent="< back",x(l,"class","text-5xl text-center text-white"),x(r,"class","text-4xl text-center text-white mb-12"),x(i,"class","grid grid-cols-2"),x(c,"class","border p-3 text-2xl mb-2 mx-1 w-82 text-white hover:bg-white hover:text-black flex cursor-pointer transition"),x(e,"class","flex flex-col items-center justify-center h-screen")},m(m,y){j(m,e,y),g(e,l),g(e,n),g(e,r),g(e,o),g(e,i);for(let p=0;p<u.length;p+=1)u[p].m(i,null);g(e,h),g(e,c),f=!0,d||(a=D(c,"click",t[6]),d=!0)},p(m,y){if(y&10){b=m[3];let p;for(p=0;p<b.length;p+=1){const k=ye(m,b,p);u[p]?u[p].p(k,y):(u[p]=De(k),u[p].c(),u[p].m(i,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=b.length}},i(m){f||(A(()=>{_&&_.end(1),s=T(e,C,{delay:500}),s.start()}),f=!0)},o(m){s&&s.invalidate(),_=H(e,C,{}),f=!1},d(m){m&&w(e),O(u,m),m&&_&&_.end(),d=!1,a()}}}function gt(t){let e,l=fe[t[1]],n=[];for(let r=0;r<l.length;r+=1)n[r]=Ne(ve(t,l,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=V()},m(r,o){for(let i=0;i<n.length;i+=1)n[i].m(r,o);j(r,e,o)},p(r,o){if(o&2){l=fe[r[1]];let i;for(i=0;i<l.length;i+=1){const h=ve(r,l,i);n[i]?n[i].p(h,o):(n[i]=Ne(h),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=l.length}},d(r){O(n,r),r&&w(e)}}}function bt(t){let e,l=Array(t[1]=="p1"?12:21),n=[];for(let r=0;r<l.length;r+=1)n[r]=Se(ke(t,l,r));return{c(){e=v("div");for(let r=0;r<n.length;r+=1)n[r].c();x(e,"class","grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6")},m(r,o){j(r,e,o);for(let i=0;i<n.length;i+=1)n[i].m(e,null)},p(r,o){if(o&2){l=Array(r[1]=="p1"?12:21);let i;for(i=0;i<l.length;i+=1){const h=ke(r,l,i);n[i]?n[i].p(h,o):(n[i]=Se(h),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=l.length}},d(r){r&&w(e),O(n,r)}}}function Ne(t){let e,l=t[21]+"",n;return{c(){e=v("span"),n=S(l),x(e,"class","bg-orange-300 my-1 mx-2 p-3 text-2xl font-init")},m(r,o){j(r,e,o),g(e,n)},p(r,o){o&2&&l!==(l=r[21]+"")&&Z(n,l)},d(r){r&&w(e)}}}function Se(t){let e,l;return{c(){e=v("img"),x(e,"class","shadow-xl border border-8 border-orange-300 object-cover object-center h-full"),K(e.src,l="../"+t[1]+"_homeroom/"+(t[17]+1)+".jpg")||x(e,"src",l)},m(n,r){j(n,e,r)},p(n,r){r&2&&!K(e.src,l="../"+n[1]+"_homeroom/"+(n[17]+1)+".jpg")&&x(e,"src",l)},d(n){n&&w(e)}}}function De(t){let e,l,n=t[15]+"",r,o,i,h;function c(){return t[5](t[15])}return{c(){e=v("div"),l=v("span"),r=S(n),o=$(),x(l,"class","flex-1 text-center uppercase"),x(e,"class","border p-3 text-2xl mb-2 mx-1 w-40 text-white hover:bg-white hover:text-black flex cursor-pointer transition")},m(s,_){j(s,e,_),g(e,l),g(l,r),g(e,o),i||(h=D(e,"click",c),i=!0)},p(s,_){t=s},d(s){s&&w(e),i=!1,h()}}}function Le(t){let e,l,n,r,o,i=t[15][0]+"",h,c,s,_=t[15][1]+"",f,d,a,b,u,m;function y(){return t[4](t[17])}return{c(){e=v("div"),l=v("span"),l.textContent="To:",n=$(),r=v("div"),o=v("span"),h=S(i),c=$(),s=v("span"),f=S(_),d=$(),a=v("span"),b=$(),x(l,"class","w-8"),x(r,"class","flex-1 text-center flex flex-col"),x(a,"class","w-8"),x(e,"class","border p-3 text-2xl w-110 mb-2 text-white hover:bg-white hover:text-black flex cursor-pointer transition")},m(p,k){j(p,e,k),g(e,l),g(e,n),g(e,r),g(r,o),g(o,h),g(r,c),g(r,s),g(s,f),g(e,d),g(e,a),g(e,b),u||(m=D(e,"click",y),u=!0)},p(p,k){t=p},d(p){p&&w(e),u=!1,m()}}}function xt(t){let e,l,n,r;const o=[ut,at,st,ct,ot],i=[];function h(c,s){return c[0]==0?0:c[0]==1?1:c[0]==2?2:c[0]==3?3:c[0]==4?4:-1}return~(l=h(t))&&(n=i[l]=o[l](t)),{c(){e=v("main"),n&&n.c(),x(e,"class","bg-orange-400 min-h-screen")},m(c,s){j(c,e,s),~l&&i[l].m(e,null),r=!0},p(c,[s]){let _=l;l=h(c),l===_?~l&&i[l].p(c,s):(n&&(oe(),R(i[_],1,1,()=>{i[_]=null}),ce()),~l?(n=i[l],n?n.p(c,s):(n=i[l]=o[l](c),n.c()),N(n,1),n.m(e,null)):n=null)},i(c){r||(N(n),r=!0)},o(c){R(n),r=!1},d(c){c&&w(e),~l&&i[l].d()}}}function vt(t,e,l){let n=[["班級導師","Homeroom"],["各班老師","Subject"],["全體老師","All"],["英文老師","English"]],r=["p1","p2","p3","p4","p5","p6","j1","j2","j3","s1","s2","s3"],o=0,i=0;return[o,i,n,r,p=>{l(0,o=p+1)},p=>{l(1,i=p)},()=>{l(0,o=0)},()=>{l(1,i=0)},()=>{l(1,i=0)},p=>{l(1,i=p)},()=>{l(0,o=0)},()=>{l(1,i=0)},()=>{l(1,i=0)},()=>{l(0,o=0)},()=>{l(0,o=0)}]}class kt extends it{constructor(e){super(),rt(this,e,vt,xt,Ie,{})}}new kt({target:document.getElementById("app")});

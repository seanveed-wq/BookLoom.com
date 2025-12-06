<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Futuristic Audiobooks — 3D Mockup</title>
<style>
  /* -------------------------
     Configurable palette & sizing
     ------------------------- */
  :root{
    --bg-deep: #05040a;
    --neon-pink: #ff2d95;
    --neon-cyan: #00e0ff;
    --accent: #8b5cff;
    --card-bg: rgba(255,255,255,0.035);
    --glass: rgba(255,255,255,0.04);
    --glass-2: rgba(255,255,255,0.02);
    --glass-border: rgba(255,255,255,0.08);
    --glass-reflect: rgba(255,255,255,0.06);
    --text: #e9eef8;
    --muted: #b8c6d6;
    --card-radius: 18px;
    --card-w: 320px;
    --card-h: 420px;
  }

  /* -------------------------
     Base layout
     ------------------------- */
  *{box-sizing:border-box}
  html,body{height:100%}
  body{
    margin:0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: radial-gradient(1200px 600px at 10% 10%, rgba(0,160,255,0.05), transparent),
                radial-gradient(900px 500px at 90% 80%, rgba(255,45,149,0.04), transparent),
                var(--bg-deep);
    color:var(--text);
    overflow:hidden;
    --perspective: 1200px;
    perspective: var(--perspective);
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }

  /* -------------------------
     Cinematic tilted container
     ------------------------- */
  .scene {
    width: 100%;
    height: 100vh;
    position:relative;
    transform-style: preserve-3d;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  /* angled camera viewpoint */
  .camera {
    transform-origin: center;
    transform: rotateX(20deg) rotateZ(-10deg) translateZ(-120px) translateY(-40px);
    width:100%;
    max-width:1400px;
    margin:auto;
    position:relative;
  }

  /* cinematic road background */
  .road {
    position:absolute;
    inset:0;
    transform: translateZ(-600px) rotateX(60deg) scale(1.4);
    z-index:0;
    pointer-events:none;
  }
  .road::before{
    content:"";
    position:absolute;
    inset:0;
    background:
      linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.85)),
      radial-gradient(1200px 200px at 50% 0%, rgba(255,255,255,0.02), transparent);
    mix-blend-mode:overlay;
  }
  /* road surface stripes repeating to evoke a long cinematic highway */
  .road .surface{
    position:absolute;
    inset:0;
    background:
      linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.9)),
      repeating-linear-gradient(180deg, rgba(30,30,40,0.5) 0 2px, rgba(0,0,0,0) 2px 8px),
      linear-gradient(90deg, rgba(20,20,30,0.2), rgba(10,10,15,0.6));
    border-top: 1px solid rgba(255,255,255,0.02);
    filter: blur(20px);
    transform: translateZ(-1px);
  }
  /* center lane glow */
  .road .center {
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    width:12%;
    height:120%;
    top:-10%;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)),
      linear-gradient(90deg, rgba(0,0,0,0) 0 35%, rgba(255,45,149,0.12) 45% 55%, rgba(0,0,0,0) 65%);
    box-shadow: 0 40px 120px rgba(0,160,255,0.06), 0 100px 240px rgba(255,45,149,0.04);
    filter: blur(18px);
    opacity:0.9;
  }
  /* streaks of neon light traveling along the road */
  .road .streak {
    position:absolute;
    left:50%;
    transform-origin:center;
    transform: translateX(-50%) rotateX(2deg);
    width:6%;
    height:200%;
    top:-60%;
    background: linear-gradient(180deg, rgba(0,224,255,0.0), rgba(0,224,255,0.08) 20%, rgba(255,45,149,0.06) 60%, rgba(255,45,149,0));
    filter: blur(26px);
    animation: streak-move 6s linear infinite;
    opacity:0.9;
  }
  .road .streak:nth-child(2){ left:60%; animation-delay:-1.2s; transform: translateX(-50%) rotateX(8deg) }
  .road .streak:nth-child(3){ left:40%; animation-delay:-2.8s; transform: translateX(-50%) rotateX(-6deg) }

  @keyframes streak-move{
    0%{ transform: translateX(-50%) translateY(-20%) rotateX(2deg) scaleY(0.6) }
    50%{ transform: translateX(-50%) translateY(20%) rotateX(2deg) scaleY(1.2) }
    100%{ transform: translateX(-50%) translateY(120%) rotateX(2deg) scaleY(1.5) }
  }

  /* -------------------------
     Floating card grid
     ------------------------- */
  .cards {
    position:relative;
    z-index:3;
    display:grid;
    grid-template-columns: repeat(3, var(--card-w));
    gap:40px;
    justify-content:center;
    align-items:end;
    padding:120px 40px;
    transform-style:preserve-3d;
  }

  /* single card */
  .card {
    width:var(--card-w);
    height:var(--card-h);
    border-radius: var(--card-radius);
    background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
    border: 1px solid var(--glass-border);
    box-shadow:
      0 20px 50px rgba(0,0,0,0.6),
      0 6px 18px rgba(0,0,0,0.5),
      0 0 40px rgba(0,224,255,0.03) inset;
    position:relative;
    transform-style: preserve-3d;
    overflow:visible;
    padding:18px;
    backdrop-filter: blur(8px) saturate(120%);
    transition: transform .35s cubic-bezier(.2,.9,.2,1), box-shadow .35s;
    cursor: pointer;
  }

  /* subtle floating motion per card */
  .card[data-index="1"]{ animation: float 6s ease-in-out infinite; transform: translateZ(80px) rotateY(-6deg) }
  .card[data-index="2"]{ animation: float 5.2s ease-in-out infinite; transform: translateZ(120px) rotateY(-2deg) }
  .card[data-index="3"]{ animation: float 6.8s ease-in-out infinite; transform: translateZ(100px) rotateY(6deg) }

  @keyframes float {
    0%{ transform: translateY(0px) translateZ(110px) rotateY(0deg) }
    50%{ transform: translateY(-18px) translateZ(120px) rotateY(4deg) }
    100%{ transform: translateY(0px) translateZ(110px) rotateY(0deg) }
  }

  .card:hover{
    transform: translateY(-28px) translateZ(180px) scale(1.02);
    box-shadow: 0 40px 90px rgba(0,0,0,0.7), 0 0 80px rgba(0,224,255,0.08);
  }

  /* card artwork area */
  .card .cover{
    position:relative;
    height:60%;
    border-radius: 12px;
    overflow:hidden;
    background:
      linear-gradient(135deg, rgba(0,224,255,0.04), rgba(255,45,149,0.03)),
      linear-gradient(180deg, rgba(20,10,40,0.6), rgba(8,6,16,0.35));
    display:flex;
    align-items:flex-end;
    justify-content:flex-start;
    padding:18px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.6) inset;
  }

  /* simulated 3D book spine / art using CSS */
  .cover .art {
    width:58%;
    height:72%;
    border-radius:10px;
    background:
      linear-gradient(120deg, rgba(255,255,255,0.03), rgba(0,0,0,0.15)),
      conic-gradient(from 200deg at 50% 50%, rgba(0,224,255,0.18), rgba(255,45,149,0.16), rgba(139,92,255,0.14), rgba(0,224,255,0.18));
    box-shadow: 0 10px 30px rgba(0,0,0,0.6), 0 0 40px rgba(255,45,149,0.06);
    border:1px solid rgba(255,255,255,0.03);
    position:relative;
    transform: translateZ(24px) rotateX(6deg);
    display:flex;
    align-items:center;
    justify-content:center;
    color:var(--text);
    font-weight:700;
    font-size:14px;
    text-align:center;
    padding:8px;
  }

  /* neon title badge */
  .card h3 {
    margin:12px 0 6px;
    font-size:18px;
    letter-spacing:0.2px;
    color:var(--text);
  }
  .card p {
    margin:0;
    color:var(--muted);
    font-size:13px;
    line-height:1.2;
  }

  /* controls area */
  .card .controls {
    position:absolute;
    left:18px;
    right:18px;
    bottom:18px;
    display:flex;
    align-items:center;
    gap:12px;
  }

  /* play button */
  .play-btn {
    width:64px;
    height:64px;
    border-radius:14px;
    display:grid;
    place-items:center;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    border:1px solid rgba(255,255,255,0.06);
    box-shadow: 0 8px 30px rgba(0,0,0,0.6), 0 0 30px rgba(0,224,255,0.06);
    position:relative;
    overflow:visible;
  }
  .play-btn .icon {
    width:28px;
    height:28px;
    display:block;
    filter: drop-shadow(0 6px 12px rgba(0,224,255,0.06));
  }

  /* progress container */
  .progress-wrap {
    flex:1;
    display:flex;
    flex-direction:column;
    gap:6px;
  }
  .progress {
    width:100%;
    height:8px;
    border-radius:999px;
    background:linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
    overflow:hidden;
    position:relative;
    border:1px solid rgba(255,255,255,0.02);
  }
  .progress .bar {
    position:absolute;
    left:0; top:0; bottom:0;
    width:0%;
    border-radius:999px;
    background: linear-gradient(90deg, var(--neon-cyan), var(--neon-pink));
    box-shadow: 0 8px 28px rgba(0,224,255,0.06), 0 0 40px rgba(255,45,149,0.06);
    transition: width 0.2s linear;
  }
  .progress .gloss{
    position:absolute;
    inset:0;
    background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01));
    mix-blend-mode: overlay;
    pointer-events:none;
  }
  .meta { font-size:12px; color:var(--muted); display:flex; justify-content:space-between; }

  /* reflection below cards on road */
  .card::after{
    content:"";
    position:absolute;
    left:6%;
    right:6%;
    bottom:-28px;
    height:60px;
    border-radius:12px;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.0));
    transform: translateZ(-300px) scaleY(-1) skewX(-6deg);
    filter: blur(18px) saturate(150%);
    opacity:0.6;
    pointer-events:none;
  }

  /* neon rim highlight */
  .card .rim {
    position:absolute;
    inset:0;
    border-radius:inherit;
    box-shadow: 0 0 40px rgba(0,224,255,0.04) inset, 0 0 80px rgba(255,45,149,0.02) inset;
    pointer-events:none;
  }

  /* overall header / hero */
  .hero {
    position:absolute;
    left:40px;
    top:28px;
    z-index:6;
    transform: translateZ(320px) rotateX(8deg);
  }
  .brand {
    display:flex;
    gap:12px;
    align-items:center;
    color:var(--text);
  }
  .brand .logo {
    width:56px;
    height:56px;
    border-radius:12px;
    background: conic-gradient(from 120deg, var(--neon-cyan), var(--neon-pink), var(--accent));
    box-shadow: 0 12px 40px rgba(139,92,255,0.12), 0 0 60px rgba(0,224,255,0.06);
    display:grid;
    place-items:center;
    font-weight:800;
    color:#071026;
    letter-spacing:0.6px;
  }
  .brand h1{ margin:0; font-size:20px; letter-spacing:0.2px }
  .brand p{ margin:0; color:var(--muted); font-size:12px }

  /* small footer text */
  .caption {
    position:absolute;
    right:32px;
    bottom:28px;
    z-index:5;
    transform: translateZ(220px) rotateX(6deg);
    color:var(--muted);
    font-size:13px;
  }

  /* responsive */
  @media (max-width:1100px){
    .cards { grid-template-columns: repeat(2, var(--card-w)); gap:28px; padding:90px 24px; }
    .card[data-index="3"]{ display:none }
  }
  @media (max-width:720px){
    .cards { grid-template-columns: repeat(1, calc(90vw)); gap:18px; padding:70px 12px; }
    .hero{ left:18px; top:14px }
  }

  /* small decorative vignette + film grain */
  .grain{
    position:fixed;
    inset:0;
    pointer-events:none;
    background-image:
      linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.4));
    mix-blend-mode:multiply;
    z-index:9;
    opacity:0.6;
  }
  .film {
    position:fixed;
    inset:0;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><rect width="1" height="1" fill="%23ffffff" opacity="0.02"/></svg>');
    mix-blend-mode:overlay;
    z-index:9;
    opacity:0.06;
    pointer-events:none;
  }
</style>
</head>
<body>
  <div class="scene">
    <div class="camera">

      <div class="hero">
        <div class="brand" aria-hidden="false">
          <div class="logo">AB</div>
          <div>
            <h1>AudioBlade</h1>
            <p>Ultra-Cinematic Audiobooks & Summaries</p>
          </div>
        </div>
      </div>

      <!-- Road / cinematic background elements -->
      <div class="road" aria-hidden="true">
        <div class="surface"></div>
        <div class="center"></div>
        <div class="streak"></div>
        <div class="streak"></div>
        <div class="streak"></div>
      </div>

      <!-- Cards -->
      <div class="cards" role="list">
        <!-- Card 1 -->
        <article class="card" role="listitem" data-index="1" aria-label="Audiobook: The Neon City">
          <div class="rim" aria-hidden="true"></div>

          <div class="cover">
            <div class="art">THE NEON<br> CITY</div>
          </div>

          <div style="padding:12px 6px 84px;">
            <h3>The Neon City</h3>
            <p>Futuristic thriller — 8 hr • Narrated • Summary included</p>
          </div>

          <div class="controls" aria-hidden="false">
            <button class="play-btn" data-playing="false" aria-pressed="false" aria-label="Play">
              <svg class="icon" viewBox="0 0 24 24">
                <defs></defs>
                <g fill="none" stroke="white" stroke-width="0" transform="translate(0 0)">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </g>
                <polygon class="play-icon" points="6,4 20,12 6,20" fill="white"></polygon>
              </svg>
            </button>

            <div class="progress-wrap">
              <div class="meta"><span>02:14</span><span>08:00</span></div>
              <div class="progress" aria-hidden="false">
                <div class="bar" style="width:8%"></div>
                <div class="gloss"></div>
              </div>
            </div>
          </div>
        </article>

        <!-- Card 2 -->
        <article class="card" role="listitem" data-index="2" aria-label="Audiobook: Titans of Thought">
          <div class="rim" aria-hidden="true"></div>

          <div class="cover">
            <div class="art">TITANS<br> OF THOUGHT</div>
          </div>

          <div style="padding:12px 6px 84px;">
            <h3>Titans of Thought</h3>
            <p>Biography anthology — 5 hr • Curated summary</p>
          </div>

          <div class="controls">
            <button class="play-btn" data-playing="false" aria-pressed="false" aria-label="Play">
              <svg class="icon" viewBox="0 0 24 24">
                <polygon class="play-icon" points="6,4 20,12 6,20" fill="white"></polygon>
              </svg>
            </button>

            <div class="progress-wrap">
              <div class="meta"><span>00:34</span><span>05:00</span></div>
              <div class="progress">
                <div class="bar" style="width:11%"></div>
                <div class="gloss"></div>
              </div>
            </div>
          </div>
        </article>

        <!-- Card 3 -->
        <article class="card" role="listitem" data-index="3" aria-label="Audiobook: Pulse of Stories">
          <div class="rim" aria-hidden="true"></div>

          <div class="cover">
            <div class="art">PULSE<br> OF STORIES</div>
          </div>

          <div style="padding:12px 6px 84px;">
            <h3>Pulse of Stories</h3>
            <p>Short stories collection — 3 hr • Highlights & summaries</p>
          </div>

          <div class="controls">
            <button class="play-btn" data-playing="false" aria-pressed="false" aria-label="Play">
              <svg class="icon" viewBox="0 0 24 24">
                <polygon class="play-icon" points="6,4 20,12 6,20" fill="white"></polygon>
              </svg>
            </button>

            <div class="progress-wrap">
              <div class="meta"><span>00:00</span><span>03:00</span></div>
              <div class="progress">
                <div class="bar" style="width:0%"></div>
                <div class="gloss"></div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="caption">Top angled aerial view — cinematic DOF & neon reflections</div>
    </div>

    <div class="grain"></div>
    <div class="film"></div>
  </div>

<script>
  // tiny JS to toggle play/pause and animate progress bar
  const cards = document.querySelectorAll('.card');

  function animateProgress(bar, startWidth, duration){
    // simple animation loop to increase width from startWidth to 98% in `duration` seconds
    const start = performance.now();
    const startPct = parseFloat(startWidth);
    const dur = Math.max(duration, 4) * 1000; // fallback
    function frame(now){
      const t = Math.min((now - start) / dur, 1);
      const eased = t; // linear
      const current = startPct + (98 - startPct) * eased;
      bar.style.width = current + '%';
      if(t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  cards.forEach(card => {
    const btn = card.querySelector('.play-btn');
    const bar = card.querySelector('.bar');
    const metaStart = card.querySelector('.meta span:first-child');

    btn.addEventListener('click', () => {
      const playing = btn.getAttribute('data-playing') === 'true';
      if(!playing){
        // start playing
        btn.setAttribute('data-playing', 'true');
        btn.setAttribute('aria-pressed', 'true');
        btn.querySelector('.play-icon').setAttribute('d','');
        // replace play icon with pause-like appearance by rotating
        btn.style.transform = 'scale(1.02)';
        // pulse glow
        btn.animate([
          { boxShadow: '0 8px 30px rgba(0,224,255,0.06), 0 0 30px rgba(255,45,149,0.06)' },
          { boxShadow: '0 18px 90px rgba(0,224,255,0.14), 0 0 120px rgba(255,45,149,0.12)' }
        ], { duration: 650, iterations: 1, fill:'forwards' });
        // animate progress (duration derived from "total time" displayed if any)
        const total = parseInt(card.querySelector('.meta span:last-child').textContent.split(':')[0]) || 6;
        animateProgress(bar, parseFloat(bar.style.width) || 0, Math.max(total, 6));
        // simple interval to increment elapsed time display
        let elapsed = parseTime(metaStart.textContent);
        const totalSeconds = (total * 60) || 480;
        btn._tick = setInterval(() => {
          elapsed = Math.min(elapsed + 1, totalSeconds);
          metaStart.textContent = formatTime(elapsed);
          if(elapsed >= totalSeconds){
            clearInterval(btn._tick);
            btn.setAttribute('data-playing','false');
            btn.setAttribute('aria-pressed','false');
            btn.style.transform = '';
          }
        }, 1000);
      } else {
        // pause
        btn.setAttribute('data-playing','false');
        btn.setAttribute('aria-pressed','false');
        btn.style.transform = '';
        if(btn._tick) clearInterval(btn._tick);
      }
    });
  });

  function parseTime(s){
    // "MM:SS" or "HH:MM" or "MM"
    const parts = s.split(':').map(x=>parseInt(x)||0);
    if(parts.length === 2) return parts[0]*60 + parts[1];
    if(parts.length === 3) return parts[0]*3600 + parts[1]*60 + parts[2];
    return parts[0]*60;
  }
  function formatTime(sec){
    const m = Math.floor(sec/60);
    const s = sec%60;
    return String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
  }
</script>
</body>
</html>

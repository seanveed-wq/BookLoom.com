<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bookloom — Vibrant Audiobooks</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg1: #0f172a; /* deep navy */
      --glass: rgba(255,255,255,0.06);
      --accent-a: #ff5cac; /* pink magenta */
      --accent-b: #4ef5a1; /* electric mint */
      --accent-c: #7a6eff; /* violet */
      --muted: rgba(255,255,255,0.75);
      --card: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
    }
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial}
    body{
      background: radial-gradient(800px 400px at 10% 10%, rgba(122,110,255,0.12), transparent),
                  radial-gradient(600px 300px at 90% 80%, rgba(255,92,172,0.08), transparent),
                  var(--bg1);
      color:#fff;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      padding:48px 32px;
    }

    /* Header */
    .header{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:40px}
    .logo{display:flex;align-items:center;gap:12px}
    .logo-mark{width:52px;height:52px;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--accent-a),var(--accent-c));box-shadow:0 8px 30px rgba(122,110,255,0.12), 0 2px 8px rgba(0,0,0,0.5);font-weight:800}
    .brand{font-weight:800;font-size:20px;letter-spacing:0.2px}
    .tag{font-size:12px;color:var(--muted)}

    /* Hero */
    .hero{display:grid;grid-template-columns:1fr 420px;gap:28px;align-items:stretch}
    .hero-left{padding:28px;border-radius:18px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));backdrop-filter: blur(6px);box-shadow: 0 10px 40px rgba(2,6,23,0.6)}
    .eyebrow{display:inline-block;padding:6px 12px;border-radius:999px;background:linear-gradient(90deg,var(--accent-b),var(--accent-a));color:#02122a;font-weight:700;font-size:12px}
    h1{font-size:48px;margin:18px 0 12px;line-height:1.03;letter-spacing:-1px}
    p.lead{color:rgba(255,255,255,0.82);margin:0 0 18px;font-size:16px}
    .cta-row{display:flex;gap:12px;align-items:center}
    .btn{padding:12px 18px;border-radius:12px;font-weight:700;border:0;cursor:pointer}
    .btn-primary{background:linear-gradient(90deg,var(--accent-a),var(--accent-c));box-shadow:0 8px 30px rgba(122,110,255,0.18);}
    .btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.08)}

    /* Right column - featured card */
    .featured{padding:18px;border-radius:16px;background:linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));display:flex;flex-direction:column;justify-content:space-between;gap:12px}
    .cover{height:180px;border-radius:12px;background:linear-gradient(45deg,var(--accent-b),var(--accent-a));display:flex;align-items:end;padding:12px;color:#02122a;font-weight:800}
    .meta{display:flex;flex-direction:column;gap:6px}
    .meta .title{font-weight:800}
    .progress{height:8px;background:rgba(255,255,255,0.06);border-radius:999px;overflow:hidden}
    .progress > span{display:block;height:100%;width:38%;background:linear-gradient(90deg,var(--accent-b),var(--accent-c));box-shadow:0 6px 14px rgba(78,245,161,0.12)}

    /* Cards grid */
    .grid{margin-top:20px;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:18px}
    .card{border-radius:14px;padding:12px;background:var(--card);border:1px solid rgba(255,255,255,0.03);backdrop-filter: blur(6px);position:relative;overflow:hidden}
    .card .thumb{height:120px;border-radius:10px;background:linear-gradient(135deg,var(--accent-c),var(--accent-a));display:flex;align-items:end;padding:10px;font-weight:800;color:#02122a}
    .card .info{padding-top:10px}
    .title-sm{font-weight:700;font-size:15px}
    .muted{font-size:13px;color:rgba(255,255,255,0.68)}
    .controls{display:flex;gap:8px;margin-top:10px;align-items:center}
    .play{padding:8px 10px;border-radius:10px;font-weight:700;background:linear-gradient(90deg,var(--accent-b),var(--accent-a));border:none;cursor:pointer}

    /* Neon glow accents */
    .glow{position:absolute;filter:blur(60px);opacity:0.55;pointer-events:none}
    .g1{width:360px;height:160px;right:-60px;top:-40px;background:radial-gradient(circle at 30% 40%, #ff5cac,transparent 30%), radial-gradient(circle at 70% 70%, #7a6eff, transparent 35%)}
    .g2{width:260px;height:110px;left:-80px;bottom:-30px;background:radial-gradient(circle at 60% 50%, #4ef5a1,transparent 30%)}

    /* Footer */
    .foot{margin-top:26px;color:rgba(255,255,255,0.6);font-size:13px}

    @media (max-width:900px){
      .hero{grid-template-columns:1fr;}
      h1{font-size:36px}
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">
      <div class="logo-mark">B</div>
      <div>
        <div class="brand">bookloom</div>
        <div class="tag">a colorful home for audiobooks & summaries</div>
      </div>
    </div>
    <div>
      <button class="btn btn-ghost">Sign in</button>
      <button class="btn btn-primary">Get started</button>
    </div>
  </div>

  <div class="hero">
    <div class="hero-left">
      <span class="eyebrow">New • Curated</span>
      <h1>Discover books that glow — listen, learn, and bloom.</h1>
      <p class="lead">Bookloom curates bite-sized summaries and full audiobooks with vibrant art, easy playback controls, and progress that keeps you motivated.</p>
      <div class="cta-row">
        <button class="btn btn-primary">Explore Collections</button>
        <button class="btn btn-ghost">Browse by genre</button>
      </div>

      <div class="grid">
        <div class="card">
          <div class="thumb">The Creative Mind</div>
          <div class="info">
            <div class="title-sm">Creativity Unlocked</div>
            <div class="muted">by A. Author • 12m</div>
            <div class="controls">
              <button class="play">▶ Play</button>
              <div style="flex:1" class="muted">Progress: 38%</div>
            </div>
            <div class="progress" style="margin-top:8px"><span></span></div>
          </div>
        </div>

        <div class="card">
          <div class="thumb">Strategy</div>
          <div class="info">
            <div class="title-sm">Growth Hacking 101</div>
            <div class="muted">by Growth Co • 28m</div>
            <div class="controls">
              <button class="play">▶ Play</button>
              <div style="flex:1" class="muted">Progress: 12%</div>
            </div>
            <div class="progress" style="margin-top:8px"><span style="width:12%"></span></div>
          </div>
        </div>

      </div>

      <div class="foot">Tip: Use the bright play button to jump straight into highlights.</div>
    </div>

    <div class="featured">
      <div class="cover">Blooming Ideas — Full book play</div>
      <div class="meta">
        <div class="title">Blooming Ideas</div>
        <div class="muted">by Lumen • 6 chapters • 4h 12m</div>
        <div class="progress"><span style="width:38%"></span></div>
      </div>
      <div style="display:flex;gap:10px;align-items:center;justify-content:space-between">
        <div style="display:flex;gap:8px;align-items:center">
          <button class="btn btn-primary">▶ Resume</button>
          <button class="btn btn-ghost">+ Save</button>
        </div>
        <div class="muted">Chapter 2 of 6</div>
      </div>
    </div>

  </div>

  <div class="glow g1"></div>
  <div class="glow g2"></div>

</body>
</html>

import { useState, useEffect, useRef } from 'react'
import './App.css'
import './mint.css'
import Header from './header'




interface MintResult {
  txHash: string
}



const PRICE_PER_UNIT = 0.08
const MAX_PER_WALLET = 3





function App() {
  
  const [quantity, setQuantity] = useState<number>(1)
  const [loading, setLoading]   = useState<boolean>(false)
  const [result, setResult]     = useState<MintResult | null>(null)
  const sparksRef               = useRef<HTMLDivElement>(null)

  
  useEffect(() => {
    const container = sparksRef.current
    if (!container) return

    for (let i = 0; i < 30; i++) {
      const spark = document.createElement('div')
      spark.className = 'spark'
      spark.style.setProperty('--x',     `${Math.random() * 100}%`)
      spark.style.setProperty('--dur',   `${3 + Math.random() * 5}s`)
      spark.style.setProperty('--delay', `${Math.random() * 8}s`)
      spark.style.setProperty('--drift', `${(Math.random() * 2 - 1)}`)
      container.appendChild(spark)
    }

    return () => { container.innerHTML = '' }
  }, [])

 

  function changeQty(delta: number) {
    setQuantity(prev => Math.max(1, Math.min(MAX_PER_WALLET, prev + delta)))
  }

  
  async function handleMint() {
    setLoading(true)
    try {
     // Substituir pela chamada real de mint no contrato

      // Simulação 
      await new Promise(resolve => setTimeout(resolve, 3200))
      const fakeHash = '0x' + Array.from({ length: 64 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join('')
      setResult({ txHash: fakeHash })
      fireConfetti()

    } catch (err) {
      console.error('Mint falhou:', err)
    } finally {
      setLoading(false)
    }
  }

  function fireConfetti() {
    const colors = ['#f0cf6e', '#4af3ff', '#ff5e1a', '#fff']
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div')
      Object.assign(p.style, {
        position:    'fixed',
        zIndex:      '999',
        width:       '4px',
        height:      '4px',
        borderRadius:'50%',
        background:  colors[Math.floor(Math.random() * colors.length)],
        left:        '50%',
        top:         '50%',
        pointerEvents: 'none',
        animation:   'burst 1s ease-out forwards',
        transform:   `rotate(${Math.random() * 360}deg) translateX(${40 + Math.random() * 120}px)`,
      })
      document.body.appendChild(p)
      setTimeout(() => p.remove(), 1200)
    }
  }


  const total    = (PRICE_PER_UNIT * quantity).toFixed(2)
  

  

  return (

    
    <div className="App">
      <Header />
      

      <div className="bg-forge" />
      <div className="grid-overlay" />
      <div className="sparks" ref={sparksRef} />

      <section className="mint-section">
        <div className="mint-container">

          {/* ── Sword ── */}
          <div className="sword-display">
            <div className="sword-frame">
              <div className="corner corner-tl" />
              <div className="corner corner-tr" />
              <div className="corner corner-bl" />
              <div className="corner corner-br" />
              <div className="rune-ring" />
              <div className="glow-aura" />
              <div className="sword-svg-wrap">
                <SwordSVG />
              </div>
            </div>

            <div className="sword-attrs">
              {[
                { label: 'Força',    value: '87',  pct: 87 },
                { label: 'Magia',    value: '94',  pct: 94 },
                { label: 'Raridade', value: '★★★', pct: 75 },
              ].map(attr => (
                <div className="attr" key={attr.label}>
                  <div className="attr-label">{attr.label}</div>
                  <div className="attr-value">{attr.value}</div>
                  <div className="attr-bar">
                    <div className="attr-bar-fill" style={{ width: `${attr.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Painel de mint ── */}
          <div className="mint-panel">
            
            

            <div className="mint-title-wrap">
              <div className="eyebrow">✦ Cimitarra do Dragão✦</div>
              <h1 className="mint-title">Lâmina das<br />Runas Eternas</h1>
              <p className="mint-subtitle">
                Uma cimitarra letal com punho de couro escuro e pomo forjado em formato de cabeça de dragão. <br />
                Ideal para golpes rápidos e precisos.
              </p>
              <div className="rarity">
                <div className="rarity-dot" />
                <span className="rarity-text">Raro</span>
              </div>
            </div>

            <div className="mint-info-grid">
              <div className="info-box">
                <div className="info-box-label">Preço</div>
                <div className="info-box-value">{PRICE_PER_UNIT.toFixed(2)} <span>ETH</span></div>
              </div>
              <div className="info-box">
                <div className="info-box-label">Máx. por carteira</div>
                <div className="info-box-value">{MAX_PER_WALLET} <span>itens</span></div>
              </div>
            </div>

            

            <div className="divider">⚔</div>

            <div className="quantity-section">
              <label>Quantidade</label>
              <div className="quantity-control">
                <button className="qty-btn" onClick={() => changeQty(-1)}>−</button>
                <input className="qty-display" type="number" value={quantity} readOnly />
                <button className="qty-btn" onClick={() => changeQty(1)}>+</button>
              </div>
              <p className="qty-total">Total: <strong>{total} ETH</strong></p>
            </div>

            {!result && (
              <button className="mint-btn" onClick={handleMint} disabled={loading}>
                <div className="mint-btn-inner">
                  <span className="btn-icon">⚒</span>
                  <span>{loading ? 'Forjando...' : 'Forjar NFT'}</span>
                  {loading && <div className="spinner" />}
                </div>
              </button>
            )}

            {result && (
              <div className="mint-success">
                <div className="success-icon">⚔️</div>
                <div className="success-title">Espada Forjada!</div>
                <p className="success-sub">
                  Sua Lâmina das Runas Eternas foi cunhada com sucesso.
                  Que ela guie seu caminho, guerreiro.
                </p>
                <div className="tx-hash">TX: {result.txHash}</div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  )
}



function SwordSVG() {
  return (
    <svg width="120" height="380" viewBox="0 0 120 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bladeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#2a4055" />
          <stop offset="30%"  stopColor="#7ab8d8" />
          <stop offset="50%"  stopColor="#c8e8ff" />
          <stop offset="70%"  stopColor="#7ab8d8" />
          <stop offset="100%" stopColor="#1a2a38" />
        </linearGradient>
        <linearGradient id="runeGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#4af3ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4af3ff" stopOpacity="0"   />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#5a3e0a" />
          <stop offset="50%"  stopColor="#f0cf6e" />
          <stop offset="100%" stopColor="#5a3e0a" />
        </linearGradient>
        <filter id="glowBlue">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <polygon points="60,0 74,280 60,295 46,280" fill="url(#bladeGrad)" />
      <line x1="46" y1="280" x2="60" y2="0"   stroke="rgba(200,235,255,0.4)" strokeWidth="1" />
      <line x1="74" y1="280" x2="60" y2="0"   stroke="rgba(100,170,210,0.2)" strokeWidth="1" />

      <text x="60" y="80"  textAnchor="middle" fontSize="14" fill="url(#runeGlow)" filter="url(#glowBlue)" fontFamily="serif" opacity="0.9">ᚠ</text>
      <text x="60" y="115" textAnchor="middle" fontSize="13" fill="url(#runeGlow)" filter="url(#glowBlue)" fontFamily="serif" opacity="0.7">ᚱ</text>
      <text x="60" y="148" textAnchor="middle" fontSize="12" fill="url(#runeGlow)" filter="url(#glowBlue)" fontFamily="serif" opacity="0.5">ᚷ</text>

      <line x1="60" y1="5" x2="60" y2="270" stroke="rgba(74,243,255,0.15)" strokeWidth="1" />

      <rect x="26" y="280" width="68" height="14" rx="2" fill="url(#goldGrad)" />
      <rect x="28" y="282" width="64" height="10" rx="1" fill="none" stroke="rgba(240,207,110,0.3)" strokeWidth="1" />
      <circle cx="36" cy="287" r="4" fill="#4af3ff" opacity="0.8" filter="url(#glowBlue)" />
      <circle cx="84" cy="287" r="4" fill="#4af3ff" opacity="0.8" filter="url(#glowBlue)" />

      <rect x="52" y="294" width="16" height="60" rx="2" fill="#2a1a08" />
      {[302, 312, 322, 332, 342].map(y => (
        <line key={y} x1="52" y1={y} x2="68" y2={y} stroke="rgba(201,168,76,0.5)" strokeWidth="2" />
      ))}

      <ellipse cx="60" cy="358" rx="14" ry="10" fill="url(#goldGrad)" />
      <ellipse cx="60" cy="356" rx="10" ry="7"  fill="none" stroke="rgba(240,207,110,0.3)" strokeWidth="1" />
      <circle  cx="60" cy="358" r="4"  fill="#c9a84c" opacity="0.5" />
    </svg>
  )
}

export default App
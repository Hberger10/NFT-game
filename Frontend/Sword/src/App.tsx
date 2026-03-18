import { useState, useEffect, useRef, use, type JSX } from 'react'
import './App.css'
import './mint.css'
import Header from './header'
import { mint,getBalance } from './Web3Service'
import {BronzeSword, SilverSword, GoldSword} from './Swords'

const SWORD_DATA: Record<number, MetaData> = {
  0: {
    name: "Bronze Shortsword",
    description: "A solid bronze shortsword, ideal for your first battles. Its weight demands strength, but the blade is reliable.",
    attributes: [
      { label: 'Strength', value: '25', pct: 25 },
      { label: 'Magic', value: '10', pct: 10 }
    ],
    styleSword: <BronzeSword />
  },
  1: {
    name: "Silver Longsword",
    description: "Forged with pure silver and engraved with ancient runes. An agile and lethal blade that reacts to the presence of magic.",
    attributes: [
      { label: 'Strength', value: '60', pct: 60 },
      { label: 'Magic', value: '40', pct: 40 }
    ],
    styleSword: <SilverSword />
  },
  2: {
    name: "Gold Greatsword",
    description: "A magnificent golden greatsword, forged by the finest blacksmiths. Its immense weight and sharp edge make it a formidable weapon.",
    attributes: [
      { label: 'Strength', value: '90', pct: 90 },
      { label: 'Magic', value: '80', pct: 80 }
    ],
    styleSword: <GoldSword />
  }
}



interface MetaData {
  name: string;
  description: string;
  attributes: { label: string; value: string; pct: number }[]; 
  styleSword: JSX.Element; 
}




interface MintResult {
  txHash: string
}



const PRICE_PER_UNIT = 0.08
const MAX_PER_WALLET = 3





function App() {
  
  const [quantity, setQuantity] = useState<number>(1)
  const [loading, setLoading]   = useState<boolean>(false)
  const [result, setResult]     = useState<MintResult | null>(null)
  const [error, setError]       = useState<string | null>(null)
  const [balance, setBalance]   = useState<number>(0)
  const sparksRef               = useRef<HTMLDivElement>(null)

  const currentLevel = Math.min(2, balance);
  const activeSword = SWORD_DATA[currentLevel];
  

  
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

  useEffect(() => {
    const cachedAccount = localStorage.getItem("account");
    if (cachedAccount) {
      getBalance(cachedAccount).then(setBalance).catch(console.error);
    }

    
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length > 0) {
        const newAccount = accounts[0];
        localStorage.setItem("account", newAccount); 
        getBalance(newAccount).then(setBalance).catch(console.error);
      } else {
        
        localStorage.removeItem("account");
        setBalance(0); 
      }
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []); 

  function readSwordAfterLogin(){
    const cachedAccount = localStorage.getItem("account");
    if (cachedAccount) {
      getBalance(cachedAccount).then(setBalance).catch(console.error);
    }
    
  }

 

  function changeQty(delta: number) {
    setQuantity(prev => Math.max(1, Math.min(MAX_PER_WALLET, prev + delta)))
  }

  
  async function handleMint() {
    setLoading(true)
    try {
      
      await mint()
      fireConfetti()
      getBalance(localStorage.getItem("account") || "").then(setBalance)
      setResult({ txHash: result?.txHash || '0x1234...abcd' })
    } catch (err) {
      alert('Mint failed. Please try again.')
      setError('Mint failed. Please try again.',)
      
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
      <Header onLoginSuccess={readSwordAfterLogin} />
      

      <div className="bg-forge" />
      <div className="grid-overlay" />
      <div className="sparks" ref={sparksRef} />

      <section className="mint-section">
        <div className="mint-container">

          
          <div className="sword-display">
            <div className="sword-frame">
              <div className="corner corner-tl" />
              <div className="corner corner-tr" />
              <div className="corner corner-bl" />
              <div className="corner corner-br" />
              <div className="rune-ring" />
              <div className="glow-aura" />
              <div className="sword-svg-wrap">
                {activeSword.styleSword}
              </div>
            </div>

            <div className="sword-attrs">
              {activeSword.attributes.map(attr => (
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

          
          <div className="mint-panel">
            
            

            <div className="mint-title-wrap">
              <div className="eyebrow">✦ {activeSword.name}</div>
              <h1 className="mint-title">{activeSword.name}</h1>
              <p className="mint-subtitle">
                {activeSword.description}
              </p>
              <div className="rarity">
                <div className="rarity-dot" />
                <span className="rarity-text">Rare</span>
              </div>
            </div>

            <div className="mint-info-grid">
              <div className="info-box">
                <div className="info-box-label">Price</div>
                <div className="info-box-value">{PRICE_PER_UNIT.toFixed(2)} <span>ETH</span></div>
              </div>
              <div className="info-box">
                <div className="info-box-label">Max. per Address</div>
                <div className="info-box-value">{MAX_PER_WALLET} <span>items</span></div>
              </div>
            </div>


            

            <div className="divider">⚔</div>

            <div className="quantity-section">
              <label>Quantity</label>
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
                  <span>{loading ? 'Forging...' : 'Forge NFT'}</span>
                  {loading && <div className="spinner" />}
                </div>
              </button>
            )}

            {result && (
              <div className="mint-success">
                <div className="success-icon">⚔️</div>
                <div className="success-title">Sword Forged!</div>
                <p className="success-sub">
                  Your {activeSword.name} Rune Blade has been forged successfully.
                  May it guide your path, warrior.
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

export default App
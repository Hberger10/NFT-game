import { useState } from 'react';
import { Login } from './Web3Service';

function Header() {
    const [wallet, setWallet] = useState<string>("");

    async function handleConnect() {
        try {
            const resultado = await Login();
            
            setWallet(resultado.account); 
        } catch (error) {
            console.error("Error connecting:", error);
        }
    }

    return (
        <header style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            zIndex: 100, 
            padding: '1rem 2rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            background: 'rgba(0,0,0,0.8)', 
            borderBottom: '1px solid #4af3ff',
            boxSizing: 'border-box'
        }}>
            <div style={{ color: '#f0cf6e', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif' }}>
                ⚔️ Forge NFT
            </div>

            <div>
                {wallet ? (
                    <span style={{ color: '#4af3ff', border: '1px solid #4af3ff', padding: '0.5rem 1rem', borderRadius: '4px' }}>
                        {wallet.substring(0, 6)}...{wallet.substring(38)}
                    </span>
                ) : (
                    <button 
                        onClick={handleConnect}
                        style={{ background: 'transparent', color: '#f0cf6e', border: '1px solid #f0cf6e', padding: '0.5rem 1rem', cursor: 'pointer', fontFamily: 'serif' }}
                    >
                        Connect MetaMask
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
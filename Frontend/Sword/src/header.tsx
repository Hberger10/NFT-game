import { Login } from './Web3Service';

interface HeaderProps {
  account: string | null;
  onLoginSuccess: (newAccount: string) => void;
}

export default function Header({ account, onLoginSuccess }: HeaderProps) {
    
    async function handleConnect() {
        try {
            const resultado = await Login();
            
            onLoginSuccess(resultado.account); 
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
            background: 'rgba(1, 6, 8, 0.8)', 
            borderBottom: '1px solid #4af3ff',
            boxSizing: 'border-box'
        }}>
            <div style={{ color: '#f0cf6e', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif' }}>
                ⚔️ Forge NFT
            </div>

            <div>
                
                {account ? (
                    <span style={{ color: '#4af3ff', border: '1px solid #4af3ff', padding: '0.5rem 1rem', borderRadius: '4px' }}>
                        {account.substring(0, 6)}...{account.substring(38)}
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
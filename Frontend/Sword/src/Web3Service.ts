import Web3 from 'web3';
import abi from './abi.json';


declare global {
    interface Window {
        ethereum?: any;
    }
}
type LoginResult = {
    account: string;
    isAdmin: boolean;
}
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS as string;


export async function Login() {
    const web3 = getWeb3();
    const accounts = await web3.eth.requestAccounts();
    
    if (!accounts || accounts.length === 0) {
        throw new Error(`Wallet not found/allowed.`);
    }
    
    
    localStorage.setItem("account", accounts[0]);

    
    return {
        account: accounts[0]
    }; 
}

function getWeb3(): Web3 {
    if (!window.ethereum) throw new Error(`No MetaMask found.`);
    return new Web3(window.ethereum);
    }

function getContract(web3?: Web3) {
    if (!web3) web3 = getWeb3();
    return new web3.eth.Contract(abi, contractAddress);
}
export async  function mint(): Promise<string> {
    const web3 = getWeb3();
    const contract = getContract(web3);
    const accounts = await web3.eth.requestAccounts();
    const price = web3.utils.toWei("0.01", 'ether');
    const tx = await contract.methods.forgeItem().send({ from: accounts[0], value: price });
    return tx.transactionHash;

}

export async function getBalance(account: string): Promise<number> {
    const web3 = getWeb3();
    const contract = getContract(web3);
    
    const balance = await contract.methods.balanceOf(account).call();
    
    return Number(balance);
}

    
    



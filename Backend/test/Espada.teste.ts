import { expect } from "chai";
import { network } from "hardhat";



const { ethers } = await network.connect();

describe("EspadaNft", function () {
    it("...", async function () {
        const contract = await ethers.deployContract("EspadaNft");

        
    });


    it("Should forge item with sufficient ETH and increment balance", async function () {
        const contract = await ethers.deployContract("EspadaNft");
        const [owner] = await ethers.getSigners();

        while (await contract.get_IdCounter() < 1n) {
        try {
            
            const tx = await contract.forgeItem({ value: ethers.parseEther("0.01") });
            await tx.wait(); 
        } catch (error) {
            
            
        }
    }
        
        
        const balance = await contract.balanceOf(owner.address);
        expect(balance).to.be.greaterThan(0n);
    });

    it("Should reject forging without sufficient ETH", async function () {
        const contract = await ethers.deployContract("EspadaNft");
        
        
        await expect(
            contract.forgeItem({ value: ethers.parseEther("0.001") })
        ).to.be.revertedWith("Insufficient ETH sent");
    });

    it("Should reject forging when balance reaches 3 items", async function () {
        const contract = await ethers.deployContract("EspadaNft");
        const [owner] = await ethers.getSigners();
        
        let minted = 0;
        while (minted < 3) {
            try {
                const tx = await contract.forgeItem({ value: ethers.parseEther("0.01") });
                await tx.wait();
                minted++;
            } catch {
                break;
            }
        }
        
        await expect(
            contract.forgeItem({ value: ethers.parseEther("0.01") })
        ).to.be.revertedWith("Forging failed. The metal broke!");
    });

    it("Should return correct tokenURI format", async function () {
    const contract = await ethers.deployContract("EspadaNft");

    
    while (await contract.get_IdCounter() < 1n) {
        try {
            
            const tx = await contract.forgeItem({ value: ethers.parseEther("0.01") });
            await tx.wait(); 
        } catch (error) {
            
            
        }
    }

    
    const uri = await contract.tokenURI(0);
    expect(uri).to.include("ipfs://bafybeihxfm4rxut5oesi2pjdfbg6ghlbn7slhky3x72vdvdwroc3wub25m/");
    expect(uri).to.include(".json");
});

    it("Should withdraw balance as owner", async function () {
        const contract = await ethers.deployContract("EspadaNft");
        
        await contract.forgeItem({ value: ethers.parseEther("0.01") });
        
        const tx = await contract.withdraw();
        await tx.wait();
        
        const balance = await ethers.provider.getBalance(contract.target);
        expect(balance).to.equal(0n);
    });

    it("Should reject withdraw from non-owner", async function () {
        const contract = await ethers.deployContract("EspadaNft");
        const [owner, address1] = await ethers.getSigners();
        
        await expect(
        contract.connect(address1).withdraw()
    ).to.be.revertedWithCustomError(contract, "OwnableUnauthorizedAccount")
    });

    it("Should increment token ID counter on successful forge", async function () {
        const contract = await ethers.deployContract("EspadaNft");
        
        const initialCounter = await contract.get_IdCounter();
        
        const tx = await contract.forgeItem({ value: ethers.parseEther("0.01") });
        await tx.wait();
        
        const newCounter = await contract.get_IdCounter();
        expect(newCounter).to.equal(initialCounter + 1n);
    });

    it("Should return MINT_PRICE constant", async function () {
        const contract = await ethers.deployContract("EspadaNft");
        
        const price = await contract.MINT_PRICE();
        expect(price).to.equal(ethers.parseEther("0.01"));
    });
});
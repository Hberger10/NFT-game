import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("EspadaNft", function () {
    it("...", async function () {
        const contract = await ethers.deployContract("EspadaNft");

        
    });

    it("Should increment balance", async function () {
        const contract = await ethers.deployContract("EspadaNft");
        const [owner,address1] = await ethers.getSigners();
        
        try{const mint= await contract.forgeItem();
        await mint.wait();
        console.log("Forging is sucess");
        const balance= await contract.balanceOf(owner.address);
        console.log(balance);
        expect(await contract.balanceOf(owner.address)).to.equal(1);  


        } catch(error){
            console.log("Forging failed. Try again!")
            const balance= await contract.balanceOf(owner.address);
            console.log(balance);
            expect(await contract.balanceOf(owner.address)).to.equal(0)
        } 
    });

    

        it("Should set url", async function () {
        const contract = await ethers.deployContract("EspadaNft");
        const [owner,address1] = await ethers.getSigners();
        
        try{
        const mint= await contract.forgeItem();
        await mint.wait();
        console.log("Forging is sucess");
        
        const url= await contract.tokenURI(0);
        console.log(url);
        expect(url).to.equal("ipfs://bafybeihxfm4rxut5oesi2pjdfbg6ghlbn7slhky3x72vdvdwroc3wub25m/0.json");  


        } catch(error:any){
            console.log("ERC721NonexistentToken(0)");
        }
        });

        it("Should set url again", async function () {
        const contract = await ethers.deployContract("EspadaNft");
        const [owner,address1] = await ethers.getSigners();
        
        
        while(await contract.get_IdCounter() < 3n){
            
        
        try{
            
            
                const mint= await contract.forgeItem();
                await mint.wait();
                
            } catch(error:any){
                
            }}
            
        const url= await contract.tokenURI(2);
        console.log(url);
        expect(url).to.equal("ipfs://bafybeihxfm4rxut5oesi2pjdfbg6ghlbn7slhky3x72vdvdwroc3wub25m/2.json");
       
        });

        it("Should set url again", async function () {
        const contract = await ethers.deployContract("EspadaNft");
        const [owner,address1] = await ethers.getSigners();
        
        
        while(await contract.get_IdCounter() < 3n){
            
        
        try{
            
            
                const mint= await contract.forgeItem();
                await mint.wait();
                
            } catch(error:any){
                
            }}
            
        const url= await contract.tokenURI(2);
        console.log(url);
        expect(url).to.equal("ipfs://bafybeihxfm4rxut5oesi2pjdfbg6ghlbn7slhky3x72vdvdwroc3wub25m/2.json");
       
        });

        it("Should not set url again", async function () {
        const contract = await ethers.deployContract("EspadaNft");
        const [owner,address1] = await ethers.getSigners();
        
        
        while(await contract.get_IdCounter() < 3n){
            
        
        try{
            
            
                const mint= await contract.forgeItem();
                await mint.wait();
                
            } catch(error:any){
                
            }}

            try{
                await contract.forgeItem();
            } catch(error:any){
                expect(error.message).to.contain("You can only forge up to 3 items.");
            }

        
            
        const url= await contract.tokenURI(2);
        console.log(url);
        expect(url).to.equal("ipfs://bafybeihxfm4rxut5oesi2pjdfbg6ghlbn7slhky3x72vdvdwroc3wub25m/2.json");
       
        });



});
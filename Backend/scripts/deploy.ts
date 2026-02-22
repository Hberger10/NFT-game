import { network } from "hardhat";

const { ethers } = await network.connect();
const EspadaNFT = await ethers.getContractFactory("EspadaNft");
const espadaNFT = await EspadaNFT.deploy();

await espadaNFT.waitForDeployment();

console.log(`EspadaNFT deployed to: ${espadaNFT.target}`);
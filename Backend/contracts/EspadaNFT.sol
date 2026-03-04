
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract EspadaNft is ERC721, ERC721Enumerable, ERC721Burnable, Ownable {
    uint256 private _tokenIdCounter;
    uint256 public constant MINT_PRICE = 0.01 ether;

    event ItemForged(address indexed owner, uint256 indexed tokenId);

    
    constructor() ERC721("EspadaNFT", "ESPADA") Ownable(msg.sender) {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://bafybeihxfm4rxut5oesi2pjdfbg6ghlbn7slhky3x72vdvdwroc3wub25m/";
    }

    function forgeItem() public payable {
        uint256 balance = balanceOf(msg.sender);
        
        
        require(msg.value >= MINT_PRICE, "Insufficient ETH sent");
        require(balance < 3, "You can only forge up to 3 items.");

        uint256 result = randomNum();
        uint256 difficultyThreshold;

        
        if (balance == 0) {
            difficultyThreshold = 30; 
        } else if (balance == 1) {
            difficultyThreshold = 50; 
        } else if (balance == 2) {
            difficultyThreshold = 70; 
        }

        require(result >= difficultyThreshold, "Forging failed. The metal broke!");

        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;
        
        _safeMint(msg.sender, tokenId);
        emit ItemForged(msg.sender, tokenId);
    }

    function randomNum() internal view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, _tokenIdCounter))) % 100;
    }

    
    function withdraw() public onlyOwner {
        uint256 amount = address(this).balance;
        (bool success, ) = payable(owner()).call{value: amount}("");
        require(success, "Withdrawal failed");
    }

    
    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721)
        returns (string memory)
    {
        _requireOwned(tokenId);
        string memory base = _baseURI();
        return string.concat(base, Strings.toString(tokenId), ".json");
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function get_IdCounter() external view returns (uint256) {
        return _tokenIdCounter;
    }
}
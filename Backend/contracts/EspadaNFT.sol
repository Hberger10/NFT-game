// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract EspadaNft is ERC721, ERC721Enumerable,  ERC721Burnable {
    uint private _tokenIdCounter;
    
    event ItemForged(address indexed owner, uint256 indexed tokenId);
    

    constructor() ERC721("EspadaNFT", "ESPADA") {

    }
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://bafybeihxfm4rxut5oesi2pjdfbg6ghlbn7slhky3x72vdvdwroc3wub25m/";
    }

    function forgeItem() public {
      
      uint256 tokenId= _tokenIdCounter;
      require(balanceOf(msg.sender) < 3, "You can only forge up to 3 items.");
      uint256 randomNum = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 100;

      if (randomNum < 50 ) {
          _tokenIdCounter++;
          _safeMint(msg.sender, tokenId);
          
          emit ItemForged(msg.sender, tokenId);
      } else {
          revert("Forging failed. Try again!");
      }


         
    }
    

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }


    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
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

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    
    function get_IdCounter() external view returns (uint256) {
        return _tokenIdCounter;
    }
    

    

  
}

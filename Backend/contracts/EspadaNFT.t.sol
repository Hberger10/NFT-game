// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {EspadaNft} from "./EspadaNFT.sol";
import {Test} from "forge-std/Test.sol";



contract EspadaNftTest is Test {
  EspadaNft instance;

  function setUp() public {
    instance = new EspadaNft();
  }

  
}

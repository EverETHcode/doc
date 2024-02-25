## EverETH Marketplace

dApp currently under development.

<hr className="home__divider" />

## Overview

EverETH Marketplace is a decentralized digital asset marketplace where users can buy, sell, and trade various digital assets and collectibles. 

The marketplace connects buyers and sellers directly via non-custodial peer-to-peer trades. Assets are represented as ERC-20/721/1155 tokens and transactions use ETH or stablecoins. 


## Architecture

- Sellers list ERC tokens representing their digital assets
- Buyers browse listings and place orders via the marketplace interface 
- Orders match two parties directly into an atomic swap
- NFT trades execute direct token transfers
- ETH and stables handle payment
- User balances live on their own wallets

## User Guide 

### Buying

To buy assets, users can browse listings or search for specific items/collections. Click the buy button to enter the desired order quantity and price. 

The order gets matched to a seller, executes an atomic swap between the two parties, and transfers ownership of the tokens.

### Selling 

Users can list any ERC20/721/1155 token for sale by specifying a list price or accepting offers. Once an order matches, the atomic swap executes to transfer ownership to the buyer in exchange for payment.

Sellers have full control over the sale price and process.

### Fees

**Listing fee:** 0%

**Sale fee:** 1.5% charged to sellers on secondary sales, taken upon successful sale.

A secondary sale refers to any sale of an NFT after the initial minting and purchase from the creator. This includes:

- Person A mints an NFT and sells it to Person B - Primary Sale
- Person B later resells the NFT to Person C - Secondary Sale

On secondary sales, EverETH Marketplace charges a 1.5% transaction fee to the seller. This fee does not apply on the primary sale from the original minter to the first buyer.

Distinguish between primary and secondary sales:

- No fees for creators minting and selling their works initially 
- Lower barriers for creators entering the market
- EverETH earns revenue from secondary trading activity between buyers and collectors

So in summary:

Primary Sale:
- From minter to first buyer
- No EverETH fees 

Secondary Sale: 
- Any resale of the NFT after the first purchase
- 1.5% transaction fee applies to seller

This structure aims to balance enabling creators while collecting some value from secondary market activity on their platform.

### Wallets & Assets

Digital assets and sale proceeds are held in users' own crypto wallets. The marketplace never takes custody.

Supported wallet options include MetaMask, WalletConnect, Coinbase Wallet, etc. 

Assets stay under a user's control until the moment of trade.


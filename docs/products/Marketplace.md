## EverETH Marketplace

dApp currently under development.

<hr className="home__divider" />

## Overview

EverETH Marketplace is a decentralized digital asset marketplace where users can buy, sell, and trade various digital assets and collectibles. 

The marketplace connects buyers and sellers directly via non-custodial peer-to-peer trades. Assets are represented as ERC-20/721/1155 tokens and transactions use ETH or stablecoins. 

A 2.5% fee is charged on transactions, which gets used for EETH dividends - providing value to EETH shareholders.

## Architecture

- Sellers list ERC tokens representing their digital assets
- Buyers browse listings and place orders via the marketplace interface 
- Orders match two parties directly into an atomic swap
- 2.5% of the trade value goes to the fee pool
- EETH tokens are bought back from the open market and burned
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

A 2.5% transaction fee is charged on all trades. This covers gas/operating costs and the EETH dividends. 

The fee is taken from the payment - there are no upfront listing fees. Sellers receive 97.5% of the sale price.

### Wallets & Assets

Digital assets and sale proceeds are held in users' own crypto wallets. The marketplace never takes custody.

Supported wallet options include MetaMask, WalletConnect, Coinbase Wallet, etc. 

Assets stay under a user's control until the moment of trade.

## Development

EverETH Marketplace uses open source components for its order book, asset listings, peer-to-peer swaps, and ERC20/721/1155 integrations.

Developers can build custom interfaces, assets, analytics, and workflows on top of the marketplace architecture.

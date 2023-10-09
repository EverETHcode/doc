# EverETH Stake

## Overview

EverETH Stake is a liquid staking protocol that allows ETH holders to earn staking rewards without locking up their ETH. Users deposit ETH into EverETH Stake smart contracts, which issues them stEETH (staked EETH) tokens on a 1:1 basis. The staked ETH is then delegated to Ethereum consensus layer validators to earn staking rewards.

stEETH tokens can be freely transferred, traded, or used in DeFi protocols - unlocking the liquidity of staked ETH. stEETH balances are redeemable for ETH at any time. The stEETH exchange rate vs ETH rises slowly over time as staking rewards accrue. 

## Architecture

- Users deposit ETH into the EverETH Stake smart contract  
- The contract mints stEETH tokens (ERC-20) representing a claim on the staked ETH assets
- EverETH nodes aggregate staked ETH deposits and delegate to validators on the Ethereum Beacon Chain 
- Validators perform duties and earn staking rewards in ETH
- EverETH nodes withdraw rewards and add to staked ETH deposits 
- stEETH/ETH exchange rate rises, backed by staking yield
- Users can burn stEETH to redeem ETH + accrued rewards at any time

## User Guide

### Depositing 

To earn staking rewards, users simply need to deposit ETH into the EverETH Stake portal/dapp. This is a simple blockchain transaction that approves the contract to take the ETH and mints stEETH tokens in return.

1 ETH deposited = 1 stEETH received. 

stEETH is an ERC-20 token that can be freely transferred or used in other DeFi apps.

### Withdrawing

Users can withdraw their original ETH deposit + any accrued staking rewards at any time by burning their stEETH tokens. 

1 stEETH burned = 1 ETH + rewards withdrawn

There are no lockup periods. Withdrawals take 2-3 days to process as the staked ETH must be withdrawn from the Beacon Chain. 

### Tracking Rewards 

The stEETH/ETH exchange rate tracks accrued rewards. Users can see their rewards grow in real-time as the exchange rate slowly rises. 

For example, if 1 ETH = 1.05 stEETH, this means staking rewards have caused stEETH to appreciate 5% vs ETH. If a user deposits 10 ETH they would get 10 stEETH, which could later be redeemed for 10.5 ETH if the exchange rate rises to 1.05.

An analytics dashboard tracks deposit size, staking yield, and estimated earnings.

### Fees

EverETH Stake charges a % fee on staking rewards to pay for platform operations and compensate ETH stakers for their work. For example, a 15% fee means 15% of staking rewards go to EverETH Stake, 85% of rewards go to users. 

Fees are only taken from earned staking rewards. Users' original ETH deposits are not impacted.

## Development

EverETH Stake smart contracts are audited and designed to integrate with the Ethereum Beacon Chain. The system is decentralized across independent node operators. An open source frontend and analytics dashboard are available. 

Developers can build on top of EverETH Stake by integrating the stEETH token into their own dApps and DeFi protocols.

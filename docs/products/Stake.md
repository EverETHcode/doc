## [EverETH Stake](https://app.evereth.net/stake){:target="_blank"}

<iframe width="1024" height="576" src="https://www.youtube.com/embed/MSs3Fe71nUs?si=_X1vcFkUc27LVTsM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Introduction

EverETH Stake emerges as a decentralized protocol within the Ethereum ecosystem, bringing the innovative capabilities of liquid staking to users seeking seamless participation in blockchain networks. EverETH Stake enables users to stake their Ethereum assets efficiently, unlocking liquidity and participation in various decentralized financial activities.
EverETH Stake is a liquid staking protocol that allows ETH holders to earn staking rewards without locking up their ETH. Users deposit ETH into EverETH Stake smart contracts, which issues them stkETH (staked ETH) tokens on a 1:1 basis. The staked ETH is then delegated to Ethereum consensus layer validators to earn staking rewards.

stkETH tokens will be freely transferred, traded, or used in DeFi protocols - unlocking the liquidity of staked ETH. stkETH balances are redeemable for ETH at any time. The stkETH exchange rate vs ETH rises slowly over time as staking rewards accrue. 

## Architecture

- Users deposit ETH into the EverETH Stake smart contract  
- The contract mints stkETH tokens (ERC-20) representing a claim on the staked ETH assets
- EverETH nodes aggregate staked ETH deposits and delegate to validators on the Ethereum Beacon Chain 
- Validators perform duties and earn staking rewards in ETH
- EverETH nodes withdraw rewards and add to staked ETH deposits 
- stkETH/ETH exchange rate rises, backed by staking yield
- Users can burn stkETH to redeem ETH + accrued rewards at any time

![Stake dashboard](/assets/stake.png)

## User Guide

### Depositing 

To earn staking rewards, users simply need to deposit ETH into the EverETH Stake portal/dapp. This is a simple blockchain transaction that approves the contract to take the ETH and mints stkETH tokens in return.

1 ETH deposited = 1 stkETH received. 

stkETH is an ERC-20 token that can be freely transferred or used in other DeFi apps.

### Withdrawing

Users can withdraw their original ETH deposit + any accrued staking rewards at any time by burning their stkETH tokens. 

1 stkETH burned = 1 ETH + rewards withdrawn

There are no lockup periods. Withdrawals take 2-3 days to process as the staked ETH must be withdrawn from the Beacon Chain. 

### Tracking Rewards 

The stkETH/ETH exchange rate tracks accrued rewards. Users can see their rewards grow in real-time as the exchange rate slowly rises. 

For example, if 1 ETH = 1.05 stkETH, this means staking rewards have caused stkETH to appreciate 5% vs ETH. If a user deposits 10 ETH they would get 10 stkETH, which could later be redeemed for 10.5 ETH if the exchange rate rises to 1.05.

An analytics dashboard tracks deposit size, staking yield, and estimated earnings.

### Fees

EverETH Stake applies a 5% fee which is split between node operators and the DAO treasury. For example, a 5% fee means 5% of staking rewards. Fees are only taken from earned staking rewards. Users' original ETH deposits are not impacted. 

The fee is subject to change at any time by the EverETH DAO proposals.


### Development

EverETH Stake smart contracts are audited and designed to integrate with the Ethereum Beacon Chain. The system is decentralized across independent node operators. An open source frontend and analytics dashboard are available. 

Developers can build on top of EverETH Stake by integrating the stkETH token into their own dApps and DeFi protocols.

## Important aspects

1. Security details: Our smart contract are pending for being audited. All our products are currently in the BETA stage.

2. Risk management: While the platform aims for security, potential vulnerabilities may exist in our smart contracts. Users should review our third-party audit reports when are ready. The cryptocurrency market's volatility can impact staked assets' value, affecting potential returns.

3. Governance structure: EverETH DAO is responsible on taking decisions regarding any aspects/products of the EverETH project. A stake user must hold EETH tokens if wants to take part in any future proposals regarding EverETH Stake.

4. Return calculation: There is no minimum guaranteed return.

The following factors can affect and influence the staking returns:
- The overall health and performance of the Ethereum network. Network participation, validator efficiency, and protocol parameters can influence the returns.
- The duration for which users stake their assets.
- The total amount of assets staked on the platform .
- Users may need to wait until the staking pool accumulates enough contributions from various users to meet the 32 ETH threshold. Once the pool has reached this minimum requirement, a new validator can be created, and the staking process can commence.

5. Liquidity mechanisms: stkETH tokens act as a representation of the staked ETH during the staking period. When a user decides to withdraw, they return the stkETH tokens, which are then burned, and the corresponding amount of ETH is transferred back to their wallet.

6. Fee structure: EverETH Stake applies a 5% fee which is split between node operators and the DAO treasury. This fee can be modified in the future by DAO Vote.

7. Integration with other DeFi protocols: We aim to integrate stkETH into Curve, Yearn Finance, Bancor and Balancer as soon as we have audits ready and EverETH Stake has passed the beta stage.

8. Tax treatment: There is no special tax treatment. All users are treated equally.

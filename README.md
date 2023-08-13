# <a href="https://university.alchemy.com/course/ethereum/md/63f8fb47716397000257645a" target="_blank">Ethereum Block Explorer</a>

The lessons this week covered the Ethereum JSON-RPC API and the `ethers.js` library giving us the ability to query the Ethereum blockchain and make transactions!

Let's put that knowledge to the test by building our very own **Ethereum Block Explorer**!

Blockexplorers give us the ability to view lots of different information about the blockchain including data about:

- the blockchain network itself
- blocks in the blockchain
- transactions in a block
- accounts
- and many other things

[Etherscan](https://etherscan.io/) is a good example of an Ethereum blockexplorer. Check it out to get familiar with how blockexplorers generally work.

This particular project is very much open-ended. We'll add some challenges here to get your imagination going, but use Etherscan as a guide for features you might consider building in your project.

## Dev

```bash
npm ci
make start
```

## Completed

- Allow users to click on a block listed in the webpage to get the block's details including its list of transactions
- From the list of transactions allow users to click on specific transactions to get the details of the transaction
- Make an accounts page where a user can look up their balance or someone else's balance
- NFT methods
- WebSocket methods

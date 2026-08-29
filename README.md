# Nicolás Pedernera

Backend / Automation / AI / Blockchain Engineering

Systems Engineer (Universidad de Buenos Aires, 2024). Founder & CEO of [ZendX](https://zendx.finance) — a fintech platform combining P2P lending, trading/exchange, prediction markets, a card product, and a custom Layer 1 blockchain.

I work across the full stack of a real fintech product: backend APIs, real-time data infrastructure, PostgreSQL persistence, and Solidity smart contracts running on our own EVM-compatible chain.

## What I work on

- **Backend & APIs** — Node.js, TypeScript, Fastify, PostgreSQL
- **Real-time systems** — WebSocket architectures with reconnection handling, rate limiting, and multi-client broadcast
- **Blockchain & Solidity** — smart contract design with a security-first mindset (Checks-Effects-Interactions, reentrancy guards, access control)
- **AI-assisted engineering** — using AI coding tools daily, always with deliberate review rather than blind acceptance

## Featured projects

**[realtime-sync-engine](https://github.com/Nicolas-Pedernera/realtime-sync-engine)**
Real-time data sync layer: exponential backoff reconnection, per-key throttled broadcast, and multi-client fan-out. Includes a live dashboard connected to a real exchange price feed.

**[defi-vault-contracts](https://github.com/Nicolas-Pedernera/defi-vault-contracts)**
A Solidity staking vault built to demonstrate real security patterns — CEI ordering, a reentrancy guard, and a test suite that actually attacks the contract to prove the guard works.

**[realtime-dashboard](https://github.com/Nicolas-Pedernera/realtime-dashboard)**
Next.js frontend consuming the real-time backend above, with its own independent reconnection logic on the client side.

**[ai-workflow-backend](https://github.com/Nicolas-Pedernera/ai-workflow-backend)**
Production-oriented backend for AI workflow orchestration — PostgreSQL persistence, versioned migrations, and on-chain workflow registration via a Solidity contract.

**[zendx-chain](https://github.com/Nicolas-Pedernera/zendx-chain)**
ZendX Chain devnet — an open PoW chain with UTXO model. Consensus, P2P, and wallet code, mirrored publicly for external node operators.

## Tech stack

`TypeScript` `Node.js` `Solidity` `PostgreSQL` `Fastify` `Next.js` `React` `Hardhat` `Docker` `Rust`

## Contact

- Website: [zendx.finance](https://zendx.finance)
- LinkedIn: [nicolas-pedernera-zendx](https://www.linkedin.com/in/nicolas-pedernera-zendx/)
- LinkedIn (ZendX): [company/zend-x](https://www.linkedin.com/company/zend-x/)

# Codex Protocol Bug Bounty

With the launch of our registry around the corner, we would love the community to help provide disclosure of security vulnerabilities via our bounty program described below.

Original announcement on Medium here: https://medium.com/@johnhforrest/codex-protocol-bug-bounty-57a735fd6a73

## What you Should Know About Codex
Codex is a decentralized registry for unique assets like art, fine wines, watches and more. It tracks the identity and ownership history (provenance) of those assets and helps owners to easily access services like insurance, asset backed loans and fractional ownership.

The Codex uses two tokens. Codex Records are non-fungible tokens ([see ERC #721](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md)) created for each asset that are indivisible and unique, and CODX, a fungible token ([see ERC #20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)) used to pay for fees on the platform, provide staking discounts to users and enforce accountability from stakeholders.

Codex Records record transfers of ownership, and users can also upload additional historical provenance documentation such as an appraisal
Codex is built on the Ethereum network; however CODX will be used to fuel transactions, which include creating and transferring records, and uploading documentation.

## Deployed contracts
The smart contracts are deployed in the Rinkeby test network. Below are the addresses of them on Etherscan with verified. As noted below in the FAQ, the deployed contracts won't change at any point during the program, but the code eligible for bounty will. THIS MEANS THAT THE CODE VERIFIED ON RINKEBY WILL LIKELY BE OUT OF SYNC WITH WHAT IS IN THE REPO.

Use the deployed contracts only as a starting place—the code in the repo is setup for easy local deployment via [Truffle](truffleframework.com) so that you can break things locally to your heart's content.

If you find a critical bug that would compromise the integrity of the deployed contracts we kindly ask that you refrain from exploiting it to avoid disrupting other users who are providing feedback on our Codex Viewer dapp.

- CodexRecordProxy: https://rinkeby.etherscan.io/address/0x034b42734234ef65e2032c0e6c80348e1ca1d40a
- CodexRecord: https://rinkeby.etherscan.io/address/0x757e39484e81b2c80cbf8cff70724103f35fbdf7
- CodexStakeContainer: https://rinkeby.etherscan.io/address/0x8fa7c01220396a205181d289ea805023abecce61
- CodexCoin: https://rinkeby.etherscan.io/token/0xb7f7848507a6af9c6d7560da89d4778aa1043d69

## The Scope for this Bug Bounty Program:
For the contracts deployed to the Rinkeby network, there will be 2 phases.

- Phase 1: No fees or staking. At this point, the fees for the ERC-721 smart contract are turned off and all operations on the protocol are fee (minus gas costs). Phase 1 will take place from these dates: June 27th at 12:01am CST to July 11th at 9:00am CST.
- Phase 2: Fees and staking are turned on. This means all operations on the ERC-721 smart contract now require fees in the form of the CodexCoin (the Codex Protocol ERC-20 token, denoted as CODX). Phase 2 will start as soon as Phase 1 ends, and will end on July 2nd at 11:59pm CST.

Prior to Phase 2 going live in Rinkeby we'll expose faucet functionality within Codex Viewer to obtain CODX tokens.

REMEMBER: Use the deployed contracts only as a starting place. Only the code in this repository is eligible for the program, so always check here first before trying to break things in Rinkeby.

At any time, all code in this repo is fair game. Meaning, that even though during Phase 1 of the program, fees aren’t turned on in Rinkeby, the staking contract and ERC-20 contracts are still eligible for rewards. Help us identify bugs, vulnerabilities, and exploits in the smart contract such as:
- Creating duplicate tokens in the registry (contents don’t matter--but duplicate token IDs should be impossible)
- Performing operations on tokens that you don’t have permissions on (transferring it, modifying metadata, etc)
- In Phase 2, when fees are turned on, performing “write” operations on the registry without paying fees or staking tokens (transfers, modifications, and creation of new Codex Records)
- Impersonating one of the admin accounts to make administrator-level changes on the deployed contract

## Rules & Rewards:
- Issues that have already been submitted by another user or are already known to the Codex team are not eligible for bounty rewards.
- Bugs and vulnerabilities should only be found using accounts you own and create. Please respect third party applications and understand that an exploit that is not specific to the Codex smart contract is not part of the bounty program. Attacks on the network that result in bad behaviour are not allowed.
- No other Codex software is part of the bounty program, only the smart contract code included in this repo. In the future we may run separate programs for Codex Viewer and Biddable, but they are currently out of scope.
- The Codex bounty program considers a number of variables in determining rewards. Determinations of eligibility, score and all terms related to a reward are at the sole and final discretion of Codex team.
- Reports will only be accepted via GitHub issues submitted to this repo.
- In general, please investigate and report bugs in a way that makes a reasonable, good faith effort not to be disruptive or harmful to us or others.

The value of rewards paid out will vary depending on Severity which is calculated based on Impact and Likelihood as outlined on the [OWASP](https://www.owasp.org/index.php/OWASP_Risk_Rating_Methodology) website.

Note: Rewards are at the sole discretion of the Codex Team. 1 point currently corresponds to 1 USD (paid in ETH) The top 10 people on our leaderboard of accepted bugs with at least 250 points will receive a limited edition digital artwork available only to successful participants in this bounty program.
- Critical: up to 1000 points
- High: up to 500 points
- Medium: up to 250 points
- Low: up to 125 points
- Note: up to 50 points

### Examples of Impact:
- High: Steal a record from someone, steal/redirect CODX or records to another address, modify the contents of a record you don’t own, block actions for all users or some non-trivial fraction of users.
- Medium: Bypass protocol fees once they are enabled in Phase 2 to create/update/transfer Codex Records without paying or staking CODX. Double spend your staked CODX (i.e., stake some CODX but also use that same CODX for protocol operations).
- Low: Block a single user from creating a record, block a single user from transferring a record or cancelling their transfer attempt.

#### Suggestions for Getting the Highest Score:
- Description: Be clear in describing the vulnerability or bug. e.g., share code scripts, screenshots or detailed descriptions.
- Fix it: if you can suggest how we fix this issue in an appropriate manner, higher points will be rewarded.

Codex appreciates you taking the time to participate in our program, which is why we’ve created rules for us too:
- We will respond as quickly as we can to your submission (within 3 days).
- Let you know if your submission will qualify for a bounty (or not) within 7 business days.
- We will keep you updated as we work to fix the bug you submitted.
- Codex' core development team, employees and all other people paid by the Codex project, are not eligible for rewards.

### How to Create a Good Vulnerability Submission:
- Description: A brief description of the vulnerability
- Scenario: A description of the requirements for the vulnerability to happen
- Impact: The result of the vulnerability and what or who can be affected
- Reproduction: Provide the exact steps on how to reproduce this vulnerability on a new contract, and if possible, point to specific tx hashes or accounts used.
- Note: If we can't reproduce with given instructions then a (Truffle) test case will be required.
- Fix: If applies, what would would you do to fix this

### Important Legal Information:
The bug bounty program is an experimental rewards program for our community to encourage and reward those who are helping us to improve Codex. You should know that we can close the program at any time, and rewards are at the sole discretion of the Codex team. All rewards are subject to applicable law and thus applicable taxes. Don't target our physical security measures, or attempt to use social engineering, spam, distributed denial of service (DDOS) attacks, etc. Lastly, your testing must not violate any law or compromise any data that is not yours.


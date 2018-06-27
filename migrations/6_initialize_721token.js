const CodexCoin = artifacts.require('./CodexCoin.sol')
const CodexRecord = artifacts.require('./CodexRecord.sol')
const CodexRecordProxy = artifacts.require('./CodexRecordProxy.sol')
const CodexStakeContainer = artifacts.require('./CodexStakeContainer.sol')

module.exports = async (deployer, network, accounts) => {
  const proxiedCodexRecord = CodexRecord.at(CodexRecordProxy.address)

  deployer
    .then(async () => {
      let initialFees = web3.toWei(0, 'ether')

      // Uncomment to enable fees for local testing
      // initialFees = web3.toWei(1, 'ether')

      await proxiedCodexRecord.setFees(
        CodexCoin.address,
        accounts[0],
        initialFees, // creationFee
        initialFees, // transferFee
        initialFees, // modificationFee
      )

      const tokensNeededForFullDiscount = web3.toWei(10000, 'ether')
      await proxiedCodexRecord.setTokensNeededForFullDiscount(
        tokensNeededForFullDiscount
      )

      await proxiedCodexRecord.setStakeContainer(
        CodexStakeContainer.address
      )
    })
    .then(async () => {

      await proxiedCodexRecord.setTokenURIPrefix('http://localhost:3001/token-metadata')

    })
    .catch((error) => {
      console.log(error)

      throw error
    })
}

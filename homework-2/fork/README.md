# used [hardhat-template](https://github.com/paulrberg/hardhat-template)

## test array manipulation contract

```bash
$ REPORT_GAS=true yarn test
```

## fork

```bash
$ yarn hardhat node --network hardhat --fork https://mainnet.infura.io/v3/460f40a260564ac4a4f4b3fffb032dad
```

## query latest block number

```bash
$ curl --data '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST localhost:8545
```

returned valued can be converted on this [website](https://www.rapidtables.com/convert/number/hex-to-decimal.html)

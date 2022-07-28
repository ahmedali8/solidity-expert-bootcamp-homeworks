# Homework 1

## 1. What information is held for an Ethereum account?

[Ethereum accounts](https://ethereum.org/en/developers/docs/accounts/#an-account-examined) have four fields:

1. nonce: A counter that indicates the number of transactions sent from the account. This ensures transactions are only processed once. In a contract account, this number represents the number of contracts created by the account.
2. balance: The number of wei owned by this address. Wei is a denomination of ETH and there are 1e+18 wei per ETH.
3. codeHash: This hash refers to the code of an account on the Ethereum virtual machine (EVM). Contract accounts have code fragments programmed in that can perform different operations. This EVM code gets executed if the account gets a message call. It cannot be changed, unlike the other account fields. All such code fragments are contained in the state database under their corresponding hashes for later retrieval. This hash value is known as a codeHash. For externally owned accounts, the codeHash field is the hash of an empty string.

4. storageHash: Sometimes known as a storage hash. A 256-bit hash of the root node of a Merkle Patricia trie that encodes the storage contents of the account (a mapping between 256-bit integer values), encoded into the trie as a mapping from the Keccak 256-bit hash of the 256-bit integer keys to the RLP-encoded 256-bit integer values. This trie encodes the hash of the storage contents of this account, and is empty by default.

## 2. Where is the full Ethereum state held ?

It's stored on every node.

## 3. What is a replay attack ? which 2 pieces of information can prevent it ?

[replay attack](https://www.geeksforgeeks.org/replay-attack/)

## 4. What checks are made on transactions for view functions ?

checks the logic must not modify any state but only read from it, STATICCAll is used only

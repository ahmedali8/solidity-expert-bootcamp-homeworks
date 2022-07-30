import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import type { ArrayManipulation } from "../src/types/ArrayManipulation";

type Fixture<T> = () => Promise<T>;

declare module "mocha" {
  export interface Context {
    arrayManipulation: ArrayManipulation;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}

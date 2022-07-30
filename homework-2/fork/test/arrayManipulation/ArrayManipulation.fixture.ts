import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { ArrayManipulation } from "../../src/types/ArrayManipulation";
import type { ArrayManipulation__factory } from "../../src/types/factories/ArrayManipulation__factory";

export async function deployArrayManipulationFixture(): Promise<{ arrayManipulation: ArrayManipulation }> {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const admin: SignerWithAddress = signers[0];

  const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const arrayManipulationFactory: ArrayManipulation__factory = <ArrayManipulation__factory>(
    await ethers.getContractFactory("ArrayManipulation")
  );
  const arrayManipulation: ArrayManipulation = <ArrayManipulation>(
    await arrayManipulationFactory.connect(admin).deploy(array)
  );
  await arrayManipulation.deployed();

  return { arrayManipulation };
}

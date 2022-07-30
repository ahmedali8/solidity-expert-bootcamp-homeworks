import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { ArrayManipulation } from "../../src/types/ArrayManipulation";
import type { ArrayManipulation__factory } from "../../src/types/factories/ArrayManipulation__factory";

task("deploy:ArrayManipulation")
  .addParam<Array<number>>("array", "1,2,3")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const signers: SignerWithAddress[] = await ethers.getSigners();
    const arrayManipulationFactory: ArrayManipulation__factory = <ArrayManipulation__factory>(
      await ethers.getContractFactory("ArrayManipulation")
    );
    const array: number[] = taskArguments.array.split(",").filter((i: string) => Number(i));

    console.log("input: ", array);

    const arrayManipulation: ArrayManipulation = <ArrayManipulation>(
      await arrayManipulationFactory.connect(signers[0]).deploy(array)
    );
    await arrayManipulation.deployed();
    console.log("ArrayManipulation deployed to: ", arrayManipulation.address);
  });

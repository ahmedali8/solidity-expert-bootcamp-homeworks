import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { Signers } from "../types";
import { shouldBehaveLikeArrayManipulation } from "./ArrayManipulation.behavior";
import { deployArrayManipulationFixture } from "./ArrayManipulation.fixture";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];

    this.loadFixture = loadFixture;
  });

  describe("ArrayManipulation", function () {
    beforeEach(async function () {
      const { arrayManipulation } = await this.loadFixture(deployArrayManipulationFixture);
      this.arrayManipulation = arrayManipulation;
    });

    shouldBehaveLikeArrayManipulation();
  });
});

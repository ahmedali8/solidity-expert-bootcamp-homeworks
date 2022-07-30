import { expect } from "chai";

export function shouldBehaveLikeArrayManipulation(): void {
  context("when using removeArrayItemAtIndexUsingSwap", function () {
    const prevArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    it("should return array without gap after removing an index other then last", async function () {
      expect(await this.arrayManipulation.getArray()).to.deep.equal(prevArray);
      expect(await this.arrayManipulation.getArrayLength()).to.equal(prevArray.length);

      const indexToRemove = 2;
      await this.arrayManipulation.removeArrayItemAtIndexUsingSwap(indexToRemove);

      const newArray: number[] = [0, 1, 11, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(await this.arrayManipulation.getArray()).to.deep.equal(newArray);
      expect(await this.arrayManipulation.getArrayLength()).to.equal(newArray.length);
    });

    it("should remove last index correctly", async function () {
      expect(await this.arrayManipulation.getArray()).to.deep.equal(prevArray);
      expect(await this.arrayManipulation.getArrayLength()).to.equal(prevArray.length);

      const indexToRemove = 11;
      await this.arrayManipulation.removeArrayItemAtIndexUsingSwap(indexToRemove);

      const newArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(await this.arrayManipulation.getArray()).to.deep.equal(newArray);
      expect(await this.arrayManipulation.getArrayLength()).to.equal(newArray.length);
    });
  });

  context("when using removeArrayItemAtIndexInOrder", function () {
    const prevArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    it("should return array without gap after removing an index other then last", async function () {
      expect(await this.arrayManipulation.getArray()).to.deep.equal(prevArray);
      expect(await this.arrayManipulation.getArrayLength()).to.equal(prevArray.length);

      const indexToRemove = 2;
      await this.arrayManipulation.removeArrayItemAtIndexInOrder(indexToRemove);

      const newArray: number[] = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      expect(await this.arrayManipulation.getArray()).to.deep.equal(newArray);
      expect(await this.arrayManipulation.getArrayLength()).to.equal(newArray.length);
    });

    it("should remove last index correctly", async function () {
      expect(await this.arrayManipulation.getArray()).to.deep.equal(prevArray);
      expect(await this.arrayManipulation.getArrayLength()).to.equal(prevArray.length);

      const indexToRemove = 11;
      await this.arrayManipulation.removeArrayItemAtIndexInOrder(indexToRemove);

      const newArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(await this.arrayManipulation.getArray()).to.deep.equal(newArray);
      expect(await this.arrayManipulation.getArrayLength()).to.equal(newArray.length);
    });
  });
}

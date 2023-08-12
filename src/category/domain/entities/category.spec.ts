import { Category } from "./category";

describe("Category", () => {
  it("Constructor of category", () => {
    const category = new Category("Movie");

    expect(category.name).toBe("Movie");
  });
});

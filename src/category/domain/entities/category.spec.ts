import { Category } from "./category";
import { omit } from "lodash";

describe("Category Unit Test", () => {
  test("constructor of category", () => {
    /** Triple AAA - Arrange act assert*/

    let category = new Category({ name: "Movie" });
    let props = omit(category.props, "created_at");
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    /** @dev test pass all parameters */
    let created_at = new Date();
    category = new Category({
      name: "Movie",
      description: "Description of movie",
      is_active: false,
    });
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "Description of movie",
      is_active: false,
      created_at,
    });

    /** @dev testing with params name and description */
    category = new Category({
      name: "Movie",
      description: "other description of movie",
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "other description of movie",
    });

    /** @dev testing pass name with is_active */
    category = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });
  });
});

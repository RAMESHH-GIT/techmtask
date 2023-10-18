import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchField";

test("handles input change", () => {
  const setFilterQuery = jest.fn();
  const { getByLabelText } = render(
    <SearchInput filterQuery="" setFilterQuery={setFilterQuery} onChange={() => {}} />
  );
  const inputElement = getByLabelText("Filter by Username");

  fireEvent.change(inputElement, { target: { value: "example" } });

  expect(setFilterQuery).toHaveBeenCalledWith("example");
});
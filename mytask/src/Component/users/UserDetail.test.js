import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import UserDetails from "./UserDetails";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("UserDetails API Fetch", () => {
  it("fetches data from the API and displays it", async () => {
    // Mock the API response
    const mockData = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    render(<UserDetails />); // Render your component

    // Use waitFor with async/await to wait for the component to fetch and display data
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalled();
      const johnDoeElement = screen.getByText("John Doe");
      expect(johnDoeElement).toBeInTheDocument();
    });
  });
});

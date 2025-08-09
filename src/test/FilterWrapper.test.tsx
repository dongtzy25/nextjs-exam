import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterWrapper from "@/component/filters";

describe("FilterWrapper", () => {
  it("renders filters and handles clicks", () => {
    const mockOnFilter = jest.fn();
    const filters = ["All", "Live"];
    const countMatches = { All: 2, Live: 1 };

    render(
      <FilterWrapper
        filters={filters}
        activeFilter="All"
        countMatches={countMatches["All"]}
        onFilter={mockOnFilter}
      />
    );

    // Renders both filters
    expect(screen.getByText("All (2)")).toBeInTheDocument();
    expect(screen.getByText("Live (1)")).toBeInTheDocument();

    // Click Live
    fireEvent.click(screen.getByText("Live (1)"));
    expect(mockOnFilter).toHaveBeenCalledWith("Live");
  });
});

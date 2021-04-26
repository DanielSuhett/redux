import { render, screen } from "@testing-library/react";
import { ThemeProvider, theme } from "@chakra-ui/react";

import Main from "..";

describe("<Main />", () => {
  it("should render the heading ", () => {
    render(
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: /Daniels Boilerplate/i }));
  });
});

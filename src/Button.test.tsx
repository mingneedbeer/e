import { beforeEach, describe, it, expect, vi } from "vitest";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import Button from "./Button";

// Mock window.alert
const alertMock = vi.fn();

describe("Button", () => {
  beforeEach(() => {
    cleanup();
    if (typeof window !== "undefined") {
      Object.defineProperty(window, "alert", { value: alertMock, configurable: true });
    }
    alertMock.mockClear();
  });


  it("renders with label", () => {
    const { getByText } = render(<Button label="Click me" />);
    expect(getByText("Click me")).toBeTruthy();
  });

  it("shows alert on click if no onClick provided", () => {
    const { getByText } = render(<Button label="Click me" />);
    fireEvent.click(getByText("Click me"));
    expect(alertMock).toBeCalledWith("Button clicked!");
  });

  it("calls onClick prop if provided", () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClick} />);
    fireEvent.click(getByText("Click me"));
    expect(onClick).toBeCalledTimes(1);
  });
});

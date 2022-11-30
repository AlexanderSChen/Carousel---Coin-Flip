import React from 'react';
import { render, fireEvent, queryByAltText } from "@testing-library/react";
import CoinContainer from './CoinContainer';

beforeEach(function() {
    jest 
        .spyOn(Math, "random")
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.75);
});

test("Smoke test", function() {
    render(<CoinContainer />);
});

test("Matches snapshot", function() {
    const { asFragment } = render(<CoinContainer />);
    expect(asFragment()).toMatchSnapshot();
});

test("Doesn't show coin when the page loads", function() {
    const { queryByTestId } = render(<CoinContainer />);

    expect(queryByTestId("coin")).toBeNull();
});

test("Counts correctly when coin flips heads", function() {
    const { getByText, queryByAltText } = render(<CoinContainer />);

    const button = getByText("Flip!");
    fireEvent.click(button);

    expect(queryByAltText("head")).toBeInTheDocument();
    expect(queryByAltText("tail")).not.toBeInTheDocument();
    expect(
        getByText("1 head & 0 tails")
    ).toBeInTheDocument();
});

test("Counts correctly when coin flips tails", function() {
    const { getByText, queryByAltText } = render(<CoinContainer />);

    const button = getByText("Flip!");
    fireEvent.click(button);
    fireEvent.click(button);

    expect(queryByAltText("tail")).toBeInTheDocument();
    expect(queryByAltText("head")).not.toBeInTheDocument();
    expect(
        getByText("1 head & 1 tail")
    ).toBeInTheDocument();
});

afterEach(function() {
    Math.random.mockRestore();
});
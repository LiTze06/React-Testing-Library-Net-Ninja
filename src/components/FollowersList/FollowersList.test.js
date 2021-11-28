import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "./FollowersList";

const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large: "https://exmaple.jpg",
        },
        login: {
          username: "TheLaith01",
        },
      },
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large: "https://exmaple.jpg",
        },
        login: {
          username: "TheLaith01",
        },
      },
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large: "https://exmaple.jpg",
        },
        login: {
          username: "TheLaith01",
        },
      },
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large: "https://exmaple.jpg",
        },
        login: {
          username: "TheLaith01",
        },
      },
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large: "https://exmaple.jpg",
        },
        login: {
          username: "TheLaith01",
        },
      },
    ],
  },
};

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => mockResponse,
  },
}));

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe("FollowersList", () => {
  beforeEach(() => {
    // render(<MockFollowersList />);
    console.log("before each");
  });

  // beforeAll(() => {
  //   console.log("running once before all tests")
  // })

  it("render follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("render multiple follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElement.length).toBe(5);
  });
});

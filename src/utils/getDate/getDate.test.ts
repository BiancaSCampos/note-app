import getDate from "./getDate";

describe("getCurrentDateTime function", () => {
  afterEach(() => {
    jest.restoreAllMocks(); // Clean up all mocks after each test
  });

  it("should return the current date and time in the expected format", () => {
    const mockDate = new Date("2023-10-30T12:34:56");
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    const expectedOutput = {
      date: "30/10/2023",
      time: "12:34",
    };

    const result = getDate();

    expect(result).toEqual(expectedOutput);
  });

  it("should return the current date and time in the expected format for a different date", () => {
    const mockDate = new Date("2023-11-30T12:34:56");
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    const expectedOutput = {
      date: "30/11/2023",
      time: "12:34",
    };

    const result = getDate();

    expect(result).toEqual(expectedOutput);
  });
});

import getDate from "../getDate/getDate";
import createNote from "./createNote";

describe("createNote function", () => {
  it("should create a new note ", () => {
    const note = createNote({
      title: "title",
      date: getDate().date,
      content: "test",
      category: "Work",
    });
  });
});

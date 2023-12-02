import createNote from "./createNote";

describe("createNote function", () => {
  it("should add an item to an empty array  ", () => {
    const notes = [];

    const note = {
      title: "Exemplo de Título",
      date: "2023-11-26",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper volutpat turpis, sit amet ultricies quam sollicitudin ut. Duis iaculis viverra ante eget dignissim. Etiam quis nulla id odio mattis congue. Pellentesque tincidunt odio id mattis pharetra. Nunc non mollis dui, eget venenatis lectus. Nunc vel malesuada sem. Suspendisse mi mauris, rhoncus eu augue vitae, rhoncus venenatis libero. Nullam venenatis odio eget mi ornare vestibulum. Vivamus posuere lorem quis rhoncus varius. Aliquam dapibus enim eget tempor fermentum. Sed pharetra nulla elit, at pulvinar erat laoreet egestas. Nam interdum, leo in ultrices scelerisque, purus ante pulvinar purus, sed eleifend turpis eros pellentesque leo. Ut non accumsan purus. Curabitur non quam nec massa rutrum semper. Sed sapien tellus, elementum quis maximus dictum, rhoncus quis nisl. Nam blandit odio mauris, ac molestie mi sodales vitae. Pellentesque condimentum bibendum nulla suscipit lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum non fermentum augue.",
      category: "personal",
      completed: false,
    };

    createNote(note, notes);

    expect(notes).toEqual([
      {
        title: "Exemplo de Título",
        date: "2023-11-26",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper volutpat turpis, sit amet ultricies quam sollicitudin ut. Duis iaculis viverra ante eget dignissim. Etiam quis nulla id odio mattis congue. Pellentesque tincidunt odio id mattis pharetra. Nunc non mollis dui, eget venenatis lectus. Nunc vel malesuada sem. Suspendisse mi mauris, rhoncus eu augue vitae, rhoncus venenatis libero. Nullam venenatis odio eget mi ornare vestibulum. Vivamus posuere lorem quis rhoncus varius. Aliquam dapibus enim eget tempor fermentum. Sed pharetra nulla elit, at pulvinar erat laoreet egestas. Nam interdum, leo in ultrices scelerisque, purus ante pulvinar purus, sed eleifend turpis eros pellentesque leo. Ut non accumsan purus. Curabitur non quam nec massa rutrum semper. Sed sapien tellus, elementum quis maximus dictum, rhoncus quis nisl. Nam blandit odio mauris, ac molestie mi sodales vitae. Pellentesque condimentum bibendum nulla suscipit lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum non fermentum augue.",
        category: "personal",
        completed: false,
      },
    ]);
  });
});

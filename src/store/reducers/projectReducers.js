const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
  ],
};

const projectReducers = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created project", action.project);
      return state;
    case "CREATE_PROJECT__ERR":
      console.log("Created project Error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducers;

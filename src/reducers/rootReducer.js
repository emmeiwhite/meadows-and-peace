const initState = {
  posts: [
    {
      body:
        "est rerum tempore vitae↵sequi sint nihil reprehenderit dolor n debitis possimus qui neque nisi nulla",
      id: 1,
      title: "First post",
    },
    {
      body:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis odit maxime delectus quasi ipsum? Molestiae, quisquam laborum. Dignissimos corrupti repellendus, quo alias nemo .",
      id: 2,
      title: "Second Post",
    },
    {
      body:
        "lorem lormpore modi nulla quia sequi dicta? Voluptates nihil tempora quis quam dolorum laboriosam, beatae nemo.",
      id: 3,
      title: "Third Post",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  return state;
};

export default rootReducer;

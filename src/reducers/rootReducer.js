const initState = {
  posts: [
    {
      body:
        "est rerum tempore vitae↵sequi sint nihil reprehenderit dolor beatae ea dolores neque↵fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis↵qui aperiam non debitis possimus qui neque nisi nulla",
      id: 1,
      title: "First post",
    },
    {
      body:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis odit maxime delectus quasi ipsum? Molestiae, quisquam laborum. Dignissimos corrupti repellendus, quo alias nemo voluptate eaque a itaque, blanditiis, quis error necessitatibus? Nesciunt omnis, natel numquam praesentium debitis voluptate aspernatur temporibus earum libero dolor tempore modi nulla quia sequi dicta? Voluptates nihil tempora quis quam dolorum laboriosam, beatae nemo.",
      id: 2,
      title: "Second Post",
    },
    {
      body:
        "lorem lorem lorem ro dolor tempore modi nulla quia sequi dicta? Voluptates nihil tempora quis quam dolorum laboriosam, beatae nemo.",
      id: 3,
      title: "Third Post",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;

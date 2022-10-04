
export function manageFriends(state, action) {
  switch(action.type){
    case "friends/add":
      return {
        friends: [...state.friends, action.payload],
      }
    case "friends/remove":
      return {
        friends: state.friends.filter((friend) => {
          return friend.id !== action.payload
        })
    default:
      return state;
  }
}

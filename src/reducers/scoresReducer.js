const initial_state = {};

export const scoresReducer = function (state = initial_state, action) {
  switch (action.type) {
    case "ADD_MATCHES_BATCH":
      return {
        ...state,
        matches: {
          ...state.matches,
          ...Object.fromEntries(
            action.matches.map((match) => [match.id, match])
          ),
        },
      };
  }
};

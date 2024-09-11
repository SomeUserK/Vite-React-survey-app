export const TYPES = Object.freeze({
  ADD_SURVEY: 'ADD_SURVEY',
  DELETE_SURVEY: 'DELETE_SURVEY',
  VOTE: 'VOTE'
});

export function surveyReducer(state, action) {
  const { type, payload /* newState */ } = action;

  switch (type) {
    case TYPES.ADD_SURVEY:
      return [
        ...state,
        {
          question: payload,
          votes: 0
        }
      ];

    case TYPES.VOTE:
      return state.map((survey, index) =>
        index === payload ? { ...survey, votes: survey.votes++ } : survey
      );

    case TYPES.DELETE_SURVEY:
      return state.filter((survey, index) => index !== payload);

    default:
      return state;
  }
}

export const coachReducer = (
    state = {
      cricketCoaches: ["Saurabh Ganguly", "Anil Kumble", "Kapil Dev"],
      footballCoaches: ["Micheal", "Zidaan", "Ronaldo"],
      kabaddiCoaches: ["Amrinder Singh", "Surender Kumar"],
    },
    action
  ) => {
    const { payload, type } = action;
    const { cricketCoaches, footballCoaches, kabaddiCoaches } = state;
    switch (type) {
      case "cricketCoaches":
        return {
          ...state,
          cricketCoaches: [payload, ...cricketCoaches],
        };
        break;
      case "footballCoaches":
        return {
          ...state,
          footballCoaches: [payload, ...footballCoaches],
        };
        break;
      case "kabaddiCoaches":
        return {
          ...state,
          kabaddiCoaches: [payload, ...kabaddiCoaches],
        };
        break;
      default:
        return state;
    }
    return state;
  };
export const counter = {
  state: {
    value: 0,
  },
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    decrement(state, payload) {
      return {
        ...state,
        value: state.value - 1,
      };
    },
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.increment(payload);
    },
    async decrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.decrement(payload);
    },
  },
};

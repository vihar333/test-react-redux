const duckRoot = "app/groceries/";

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const initialState = {
  list: [
    {
      id: 66,
      name: "Bananas",
      category: "Fruit",
      deliveryMethod: "Air"
    },
    {
      id: 16,
      name: "Whole Grain Bread",
      category: "Grains",
      deliveryMethod: "Air"
    },
    {
      id: 100,
      name: "Lettuce",
      category: "Vegitable",
      deliveryMethod: "Ground"
    },
    {
      id: 10,
      name: "Roasted Turkey",
      category: "Deli",
      deliveryMethod: "Ground"
    }
  ],
  isItemSelected: false,
  selectedItem: {
    id: 0,
    name: "",
    category: "",
    deliveryMethod: ""
  }
};

// Reducers
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  let list = [...state.list];

  switch (type) {
    case ADD_ITEM:
      list.push(payload);
      return { ...state, list: list };

    case REMOVE_ITEM:
      // Write a custom reducer that will remove an item from the list array
      list = list.filter((x) => {
        return x.id !== payload.id;
      });
      let isItemSelected = state.isItemSelected;
      let selectedItem = state.selectedItem;
      if (selectedItem.id === payload.id) {
        isItemSelected = false;
        selectedItem = {
          id: 0,
          name: "",
          category: "",
          deliveryMethod: ""
        };
      }
      return {
        ...state,
        list: list,
        isItemSelected: isItemSelected,
        selectedItem: selectedItem
      };

    case SELECT_ITEM:
      // Write a custom reducer that will select an item
      return {
        ...state,
        isItemSelected: true,
        selectedItem: payload
      };

    case DESELECT_ITEM:
      // Write a customer reducer that will deselect an item
      return {
        ...state,
        isItemSelected: false,
        selectedItem: payload
      };

    default:
      return state;
  }
}

// Action Creators
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item
});

export const selectItem = (item) => ({
  type: SELECT_ITEM,
  payload: item
});

export const deSelectItem = (item) => ({
  type: DESELECT_ITEM,
  payload: item
});

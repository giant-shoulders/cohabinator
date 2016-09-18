import { createSelector } from 'reselect';

export const selectPetTypes = createSelector(
  [state => state.petTypes],
  petTypes => petTypes,
);

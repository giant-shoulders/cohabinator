import { createSelector } from 'reselect';

const byId = id => record => record.id === id;

const petTypesState = state => state.petTypes;

export const selectPetTypes = createSelector(
  [petTypesState],
  petTypes => petTypes
);

const petsState = state => state.pets;

export const selectPets = createSelector(
  [petsState, selectPetTypes],
  (pets, petTypes) => pets.map(pet => ({
    ...pet,
    type: petTypes.find(byId(pet.petType)),
  }))
);

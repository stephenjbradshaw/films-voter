/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFilm = /* GraphQL */ `
  mutation CreateFilm(
    $input: CreateFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    createFilm(input: $input, condition: $condition) {
      id
      title
      year
      likes
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateFilm = /* GraphQL */ `
  mutation UpdateFilm(
    $input: UpdateFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    updateFilm(input: $input, condition: $condition) {
      id
      title
      year
      likes
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteFilm = /* GraphQL */ `
  mutation DeleteFilm(
    $input: DeleteFilmInput!
    $condition: ModelFilmConditionInput
  ) {
    deleteFilm(input: $input, condition: $condition) {
      id
      title
      year
      likes
      description
      createdAt
      updatedAt
    }
  }
`;

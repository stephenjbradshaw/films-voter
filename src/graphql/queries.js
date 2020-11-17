/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFilm = /* GraphQL */ `
  query GetFilm($id: ID!) {
    getFilm(id: $id) {
      id
      type
      title
      year
      likes
      description
      createdAt
      updatedAt
    }
  }
`;
export const listFilms = /* GraphQL */ `
  query ListFilms(
    $filter: ModelFilmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        title
        year
        likes
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const filmsByLikes = /* GraphQL */ `
  query FilmsByLikes(
    $type: String
    $likes: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFilmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    filmsByLikes(
      type: $type
      likes: $likes
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        title
        year
        likes
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

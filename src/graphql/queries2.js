export const listDataTypes2 = `query ListDataTypes(
  $filter: ModelDataTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listDataTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      type
    }
    nextToken
  }
}
`;

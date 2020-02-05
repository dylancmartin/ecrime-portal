/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubject = `query GetSubject($id: ID!) {
  getSubject(id: $id) {
    id
    name
    dataTypes {
      items {
        id
        type
        endorsements
      }
      nextToken
    }
    requestDescription
    privacyPolicyUrl
    unapprovedWarrants {
      items {
        id
        content
        county
        creationYear
        isTemplate
        state
        crimes
        dataTypes
        uploadTimestamp
        votes
      }
      nextToken
    }
    approvedWarrants {
      items {
        id
        content
        county
        creationYear
        isTemplate
        state
        subjectName
        subjectNames
        crimes
        dataTypes
        votes
        uploadTimestamp
      }
      nextToken
    }
    unapprovedWarrantsTemp {
      items {
        id
      }
      nextToken
    }
    approvedWarrantsTemp {
      items {
        id
      }
      nextToken
    }
    tips {
      items {
        id
        authorEmail
        authorName
        body
        source
        headline
        votes
        createAt
      }
      nextToken
    }
  }
}
`;
export const listSubjects = `query ListSubjects(
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      dataTypes {
        nextToken
      }
      requestDescription
      privacyPolicyUrl
      unapprovedWarrants {
        nextToken
      }
      approvedWarrants {
        nextToken
      }
      unapprovedWarrantsTemp {
        nextToken
      }
      approvedWarrantsTemp {
        nextToken
      }
      tips {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getDataType = `query GetDataType($id: ID!) {
  getDataType(id: $id) {
    id
    type
    endorsements
    subjects {
      id
      name
      dataTypes {
        nextToken
      }
      requestDescription
      privacyPolicyUrl
      unapprovedWarrants {
        nextToken
      }
      approvedWarrants {
        nextToken
      }
      unapprovedWarrantsTemp {
        nextToken
      }
      approvedWarrantsTemp {
        nextToken
      }
      tips {
        nextToken
      }
    }
  }
}
`;
export const listDataTypes = `query ListDataTypes(
  $filter: ModelDataTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listDataTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      endorsements
      subjects {
        id
        name
        requestDescription
        privacyPolicyUrl
      }
    }
    nextToken
  }
}
`;
export const getCrime = `query GetCrime($id: ID!) {
  getCrime(id: $id) {
    id
    name
    count
  }
}
`;
export const listCrimes = `query ListCrimes(
  $filter: ModelCrimeFilterInput
  $limit: Int
  $nextToken: String
) {
  listCrimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      count
    }
    nextToken
  }
}
`;
export const getUnapprovedWarrant = `query GetUnapprovedWarrant($id: ID!) {
  getUnapprovedWarrant(id: $id) {
    id
    content
    county
    creationYear
    isTemplate
    state
    subject {
      id
      name
      dataTypes {
        nextToken
      }
      requestDescription
      privacyPolicyUrl
      unapprovedWarrants {
        nextToken
      }
      approvedWarrants {
        nextToken
      }
      unapprovedWarrantsTemp {
        nextToken
      }
      approvedWarrantsTemp {
        nextToken
      }
      tips {
        nextToken
      }
    }
    subjects {
      items {
        id
      }
      nextToken
    }
    crimes
    dataTypes
    uploadTimestamp
    votes
  }
}
`;
export const listUnapprovedWarrants = `query ListUnapprovedWarrants(
  $filter: ModelUnapprovedWarrantFilterInput
  $limit: Int
  $nextToken: String
) {
  listUnapprovedWarrants(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      county
      creationYear
      isTemplate
      state
      subject {
        id
        name
        requestDescription
        privacyPolicyUrl
      }
      subjects {
        nextToken
      }
      crimes
      dataTypes
      uploadTimestamp
      votes
    }
    nextToken
  }
}
`;
export const getApprovedWarrant = `query GetApprovedWarrant($id: ID!) {
  getApprovedWarrant(id: $id) {
    id
    content
    county
    creationYear
    isTemplate
    state
    subject {
      id
      name
      dataTypes {
        nextToken
      }
      requestDescription
      privacyPolicyUrl
      unapprovedWarrants {
        nextToken
      }
      approvedWarrants {
        nextToken
      }
      unapprovedWarrantsTemp {
        nextToken
      }
      approvedWarrantsTemp {
        nextToken
      }
      tips {
        nextToken
      }
    }
    subjects {
      items {
        id
      }
      nextToken
    }
    subjectName
    subjectNames
    crimes
    dataTypes
    votes
    uploadTimestamp
  }
}
`;
export const listApprovedWarrants = `query ListApprovedWarrants(
  $filter: ModelApprovedWarrantFilterInput
  $limit: Int
  $nextToken: String
) {
  listApprovedWarrants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      county
      creationYear
      isTemplate
      state
      subject {
        id
        name
        requestDescription
        privacyPolicyUrl
      }
      subjects {
        nextToken
      }
      subjectName
      subjectNames
      crimes
      dataTypes
      votes
      uploadTimestamp
    }
    nextToken
  }
}
`;
export const getTip = `query GetTip($id: ID!) {
  getTip(id: $id) {
    id
    authorEmail
    authorName
    body
    source
    subject {
      id
      name
      dataTypes {
        nextToken
      }
      requestDescription
      privacyPolicyUrl
      unapprovedWarrants {
        nextToken
      }
      approvedWarrants {
        nextToken
      }
      unapprovedWarrantsTemp {
        nextToken
      }
      approvedWarrantsTemp {
        nextToken
      }
      tips {
        nextToken
      }
    }
    headline
    votes
    createAt
  }
}
`;
export const listTips = `query ListTips($filter: ModelTipFilterInput, $limit: Int, $nextToken: String) {
  listTips(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      authorEmail
      authorName
      body
      source
      subject {
        id
        name
        requestDescription
        privacyPolicyUrl
      }
      headline
      votes
      createAt
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    editors {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      editors {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    posts {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      posts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const searchUnapprovedWarrants = `query SearchUnapprovedWarrants(
  $filter: SearchableUnapprovedWarrantFilterInput
  $sort: SearchableUnapprovedWarrantSortInput
  $limit: Int
  $nextToken: String
) {
  searchUnapprovedWarrants(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      county
      creationYear
      isTemplate
      state
      subject {
        id
        name
        requestDescription
        privacyPolicyUrl
      }
      subjects {
        nextToken
      }
      crimes
      dataTypes
      uploadTimestamp
      votes
    }
    nextToken
  }
}
`;

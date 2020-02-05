/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSubject = `mutation CreateSubject($input: CreateSubjectInput!) {
  createSubject(input: $input) {
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
export const updateSubject = `mutation UpdateSubject($input: UpdateSubjectInput!) {
  updateSubject(input: $input) {
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
export const deleteSubject = `mutation DeleteSubject($input: DeleteSubjectInput!) {
  deleteSubject(input: $input) {
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
export const createDataType = `mutation CreateDataType($input: CreateDataTypeInput!) {
  createDataType(input: $input) {
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
export const updateDataType = `mutation UpdateDataType($input: UpdateDataTypeInput!) {
  updateDataType(input: $input) {
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
export const deleteDataType = `mutation DeleteDataType($input: DeleteDataTypeInput!) {
  deleteDataType(input: $input) {
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
export const createCrime = `mutation CreateCrime($input: CreateCrimeInput!) {
  createCrime(input: $input) {
    id
    name
    count
  }
}
`;
export const updateCrime = `mutation UpdateCrime($input: UpdateCrimeInput!) {
  updateCrime(input: $input) {
    id
    name
    count
  }
}
`;
export const deleteCrime = `mutation DeleteCrime($input: DeleteCrimeInput!) {
  deleteCrime(input: $input) {
    id
    name
    count
  }
}
`;
export const createSubjectUnapprovedWarrant = `mutation CreateSubjectUnapprovedWarrant(
  $input: CreateSubjectUnapprovedWarrantInput!
) {
  createSubjectUnapprovedWarrant(input: $input) {
    id
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
    warrant {
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
  }
}
`;
export const updateSubjectUnapprovedWarrant = `mutation UpdateSubjectUnapprovedWarrant(
  $input: UpdateSubjectUnapprovedWarrantInput!
) {
  updateSubjectUnapprovedWarrant(input: $input) {
    id
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
    warrant {
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
  }
}
`;
export const deleteSubjectUnapprovedWarrant = `mutation DeleteSubjectUnapprovedWarrant(
  $input: DeleteSubjectUnapprovedWarrantInput!
) {
  deleteSubjectUnapprovedWarrant(input: $input) {
    id
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
    warrant {
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
  }
}
`;
export const createUnapprovedWarrant = `mutation CreateUnapprovedWarrant($input: CreateUnapprovedWarrantInput!) {
  createUnapprovedWarrant(input: $input) {
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
export const updateUnapprovedWarrant = `mutation UpdateUnapprovedWarrant($input: UpdateUnapprovedWarrantInput!) {
  updateUnapprovedWarrant(input: $input) {
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
export const deleteUnapprovedWarrant = `mutation DeleteUnapprovedWarrant($input: DeleteUnapprovedWarrantInput!) {
  deleteUnapprovedWarrant(input: $input) {
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
export const createSubjectApprovedWarrant = `mutation CreateSubjectApprovedWarrant(
  $input: CreateSubjectApprovedWarrantInput!
) {
  createSubjectApprovedWarrant(input: $input) {
    id
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
    warrant {
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
  }
}
`;
export const updateSubjectApprovedWarrant = `mutation UpdateSubjectApprovedWarrant(
  $input: UpdateSubjectApprovedWarrantInput!
) {
  updateSubjectApprovedWarrant(input: $input) {
    id
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
    warrant {
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
  }
}
`;
export const deleteSubjectApprovedWarrant = `mutation DeleteSubjectApprovedWarrant(
  $input: DeleteSubjectApprovedWarrantInput!
) {
  deleteSubjectApprovedWarrant(input: $input) {
    id
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
    warrant {
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
  }
}
`;
export const createApprovedWarrant = `mutation CreateApprovedWarrant($input: CreateApprovedWarrantInput!) {
  createApprovedWarrant(input: $input) {
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
export const updateApprovedWarrant = `mutation UpdateApprovedWarrant($input: UpdateApprovedWarrantInput!) {
  updateApprovedWarrant(input: $input) {
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
export const deleteApprovedWarrant = `mutation DeleteApprovedWarrant($input: DeleteApprovedWarrantInput!) {
  deleteApprovedWarrant(input: $input) {
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
export const createTip = `mutation CreateTip($input: CreateTipInput!) {
  createTip(input: $input) {
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
export const updateTip = `mutation UpdateTip($input: UpdateTipInput!) {
  updateTip(input: $input) {
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
export const deleteTip = `mutation DeleteTip($input: DeleteTipInput!) {
  deleteTip(input: $input) {
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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createPostEditor = `mutation CreatePostEditor($input: CreatePostEditorInput!) {
  createPostEditor(input: $input) {
    id
    post {
      id
      title
      editors {
        nextToken
      }
    }
    editor {
      id
      username
      posts {
        nextToken
      }
    }
  }
}
`;
export const updatePostEditor = `mutation UpdatePostEditor($input: UpdatePostEditorInput!) {
  updatePostEditor(input: $input) {
    id
    post {
      id
      title
      editors {
        nextToken
      }
    }
    editor {
      id
      username
      posts {
        nextToken
      }
    }
  }
}
`;
export const deletePostEditor = `mutation DeletePostEditor($input: DeletePostEditorInput!) {
  deletePostEditor(input: $input) {
    id
    post {
      id
      title
      editors {
        nextToken
      }
    }
    editor {
      id
      username
      posts {
        nextToken
      }
    }
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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

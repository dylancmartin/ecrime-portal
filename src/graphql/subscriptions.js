/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubject = `subscription OnCreateSubject {
  onCreateSubject {
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
export const onUpdateSubject = `subscription OnUpdateSubject {
  onUpdateSubject {
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
export const onDeleteSubject = `subscription OnDeleteSubject {
  onDeleteSubject {
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
export const onCreateDataType = `subscription OnCreateDataType {
  onCreateDataType {
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
export const onUpdateDataType = `subscription OnUpdateDataType {
  onUpdateDataType {
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
export const onDeleteDataType = `subscription OnDeleteDataType {
  onDeleteDataType {
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
export const onCreateCrime = `subscription OnCreateCrime {
  onCreateCrime {
    id
    name
    count
  }
}
`;
export const onUpdateCrime = `subscription OnUpdateCrime {
  onUpdateCrime {
    id
    name
    count
  }
}
`;
export const onDeleteCrime = `subscription OnDeleteCrime {
  onDeleteCrime {
    id
    name
    count
  }
}
`;
export const onCreateSubjectUnapprovedWarrant = `subscription OnCreateSubjectUnapprovedWarrant {
  onCreateSubjectUnapprovedWarrant {
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
export const onUpdateSubjectUnapprovedWarrant = `subscription OnUpdateSubjectUnapprovedWarrant {
  onUpdateSubjectUnapprovedWarrant {
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
export const onDeleteSubjectUnapprovedWarrant = `subscription OnDeleteSubjectUnapprovedWarrant {
  onDeleteSubjectUnapprovedWarrant {
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
export const onCreateUnapprovedWarrant = `subscription OnCreateUnapprovedWarrant {
  onCreateUnapprovedWarrant {
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
export const onUpdateUnapprovedWarrant = `subscription OnUpdateUnapprovedWarrant {
  onUpdateUnapprovedWarrant {
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
export const onDeleteUnapprovedWarrant = `subscription OnDeleteUnapprovedWarrant {
  onDeleteUnapprovedWarrant {
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
export const onCreateSubjectApprovedWarrant = `subscription OnCreateSubjectApprovedWarrant {
  onCreateSubjectApprovedWarrant {
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
export const onUpdateSubjectApprovedWarrant = `subscription OnUpdateSubjectApprovedWarrant {
  onUpdateSubjectApprovedWarrant {
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
export const onDeleteSubjectApprovedWarrant = `subscription OnDeleteSubjectApprovedWarrant {
  onDeleteSubjectApprovedWarrant {
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
export const onCreateApprovedWarrant = `subscription OnCreateApprovedWarrant {
  onCreateApprovedWarrant {
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
export const onUpdateApprovedWarrant = `subscription OnUpdateApprovedWarrant {
  onUpdateApprovedWarrant {
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
export const onDeleteApprovedWarrant = `subscription OnDeleteApprovedWarrant {
  onDeleteApprovedWarrant {
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
export const onCreateTip = `subscription OnCreateTip {
  onCreateTip {
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
export const onUpdateTip = `subscription OnUpdateTip {
  onUpdateTip {
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
export const onDeleteTip = `subscription OnDeleteTip {
  onDeleteTip {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreatePostEditor = `subscription OnCreatePostEditor {
  onCreatePostEditor {
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
export const onUpdatePostEditor = `subscription OnUpdatePostEditor {
  onUpdatePostEditor {
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
export const onDeletePostEditor = `subscription OnDeletePostEditor {
  onDeletePostEditor {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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

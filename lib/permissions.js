// check that the userId specified ownes the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}


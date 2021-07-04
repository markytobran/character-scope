export default function(doc) {
  // Then it executes a switch to determine how to treat the item
  if (doc.type === 'leader-types') {
    // If you have a singleton 'homepage' document, you return the root
    return '/'
  }
  // Otherwise, return a 404
  return '/404'
}

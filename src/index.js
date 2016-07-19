function attach_annotation(exact, prefix, payload, data) {
  var TextQuoteAnchor = require ('dom-anchor-text-quote');
  var tqa = new TextQuoteAnchor(document.body, exact, {'prefix':prefix});
}

module.exports = attach_annotation;

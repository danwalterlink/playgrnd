import { join } from "path";

/**
 * js does not implement pattern matching
 * but the gist of pattern matching is just a branching  tree
 * that could be emulated using conditionals
 * but can also be approximated by string-matching names of sub-object-names
 * 
 * otherwise, the intelligent use of de- and restructuring assignments could lead to versions of pattern matching,
 * whereby the 'topos' (topological shape) of an object is known
 * and the correct structure loosely inferred
 */

let joiner = {
  root,
  kit: join(root, 'kit'),
  smoe: join(root, 'smoe'),
  jon: join(root, 'jon'),

  get(fn) {
  }
}
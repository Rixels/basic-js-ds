const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootHelper = null;
  }
  root() {
    return this.rootHelper;
  }
  add(data) {
    const addHelper = (helpr, data) => {
      if (!helpr) return { 
        data, 
        left: null, 
        right: null
       };
      if (data < helpr.data) {
        helpr.left = addHelper(helpr.left, data);
      } else if (data > helpr.data) {
        helpr.right = addHelper(helpr.right, data);
      }
      return helpr;
    };
    this.rootHelper = addHelper(this.rootHelper, data);
  }
  has(data) {
    const searchHelper = (helpr, data) => {
      if (!helpr) {
        return false;
      }
      if (data === helpr.data) {
        return true;
      }
      return data < helpr.data
        ? searchHelper(helpr.left, data)
        : searchHelper(helpr.right, data);
    };
    return searchHelper(this.rootHelper, data);
  }
  find(data) {
    const locateHelper = (helpr, data) => {
      if (!helpr) {
        return null;
      }
      if (data === helpr.data) {
        return helpr;
      }
      return data < helpr.data
        ? locateHelper(helpr.left, data)
        : locateHelper(helpr.right, data);
    };
    return locateHelper(this.rootHelper, data);
  }
  remove(data) {
    const deleteHelper = (helpr, data) => {
      if (!helpr) {
        return null;
      }
      if (data < helpr.data) {
        helpr.left = deleteHelper(helpr.left, data);
      } else if (data > helpr.data) {
        helpr.right = deleteHelper(helpr.right, data);
      } else {
        if (!helpr.left) {
          return helpr.right;
        }
        if (!helpr.right) {
          return helpr.left;
        }
        let rightMin = helpr.right;
        while (rightMin.left) {
          rightMin = rightMin.left;
        }
        helpr.data = rightMin.data;
        helpr.right = deleteHelper(helpr.right, rightMin.data);
      }
      return helpr;
    };
    this.rootHelper = deleteHelper(this.rootHelper, data);
  }
  min() {
    let iterator = this.rootHelper;
    if (!iterator) {
      return null;
    }
    while (iterator.left) {
      iterator = iterator.left;
    }
    return iterator.data;
  }
  max() {
    let iterator = this.rootHelper;
    if (!iterator) {
      return null;
    }
    while (iterator.right) {
      iterator = iterator.right;
    }
    return iterator.data;
  }
}

module.exports = {
  BinarySearchTree
};
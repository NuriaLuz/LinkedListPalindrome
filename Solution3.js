//METHOD 3 Recursion
const isPalindrome = (list) => {
    let length = lengthOfList(list);
    let result = isPalindromeRecurse(list, length);
    return result;
  };
  const isPalindromeRecurse = (node, length) => {
    //even number of nodes
    if (!node || length <= 0) return true;
    //odd number of nodes
    else if (length === 1) return true;
    let counter = 0;
    let first = node;
    let last;
    while (node) {
      if (counter === length - 1) {
        last = node;
        break;
      }
      counter++;
      node = node.next;
    }
    if (last.data === first.data) {
      return isPalindromeRecurse(first.next, length - 2);
    } else {
      return false;
    }
  };
  const lengthOfList = (node) => {
    let size = 0;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  };
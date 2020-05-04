//METHOD 1
// Reverse and compare 
// need to create 2 helpful callback functions : 
// 1- reverse function,
// 2 - function compare original first half and reversed first half 

function isPalindrome(list) {
    const reversed = reverseAndClone(list);
    return isEqual(list, reversed);
  }
function reverseAndClone(list) {
    let head = null;
    //going through the original list and creating a new reversed list 
    while (list) {
      const copy = new Node(list.data);
      copy.next = head;
      head = copy;
      list = list.next;
    }
    return head;
  }
function isEqual(one, two) {
    while (one && two) {
      if (one.data !== two.data) {
        return false
      }
      one = one.next;
      two = two.next;
    }
    //if we finished the whole while loop and both one and two  undefined return true
    return true
  }

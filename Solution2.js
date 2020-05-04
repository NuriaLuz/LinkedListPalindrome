//METHOD 2 
// use a stack
// 1 - traverse list from head to the middle and push every visited node to stack
// 2 - traverse list again from the middle. For every visited node, pop a node from stack and compare data 
// o(n) time and O(n) space
function isPalindrome(list) {
    let fast = list
    let slow = list
    let stack = []
    //will go to the middle of the list and push every visited node to the stack
    while (fast && fast.next) {
        stack.push(slow.data)
        slow = slow.next
        fast = fast.next.next
    }
    //if list has odd number of elements , we skip middle element
    if (fast) {
        slow = slow.next
    }
    //will go through the second half of the list and compare every visited node with top element of the stack
    //if equal, will go to the next node of the list and remove top element from the stack
    while (slow) {
        //taking last element from stack
        let top = stack.pop()
        if (top !== slow.data) return false 
        slow = slow.next
    }
    return true
}
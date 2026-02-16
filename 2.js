// Worst Time O(n), Space O(n)
// Best Time O(k), Space 0(k-1)
// Average O(n), Space(n)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let root = null;
    let iter = root;
    let remainder= 0;
    
    while( l1 !== null || l2 !== null || remainder !== 0){
        let sum = remainder;
        
        if(l1){
            sum+=l1.val;
            l1 = l1.next;
        }

        if(l2){
            sum+=l2.val;
            l1 = l2.next;
        }

        let value = sum % 10;
        remainder = Math.floor(sum / 10);

        if(root === null){
            root = new ListNode(value);
            iter = root;
        }else {
            iter.next = new ListNode(value);
            iter = iter.next;
        }

    }


    return root;
};





// l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
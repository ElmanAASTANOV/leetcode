/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const root = new ListNode();
    let iter = root;

    while(list1 && list2){
        if(list1.val < list2.val){
            iter.next = list1;
            list1 = list1.next;
        }else {
            iter.next = list2;
            list2 = list2.next;
        }

        iter = iter.next;
    }
    
    iter.next = list1 || list2;

    return root.next;
};
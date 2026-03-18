
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }


var removeNthFromEnd = function(head, n) {
    let point = head, root = head;

    if(!head.next){
        return head.next;
    }

    while(root){
        if(n < 0){
            point = point.next;
        }
        root = root.next;
        n--;
    }
    if(n === 0){
        head = head.next;
    }else{
        point.next = point.next.next;
    }   
    return head;  
};
//[1,2,3,4,5] 2
var head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5 )))));
var res;
res = removeNthFromEnd(head1, 2);
var show = '[';
while(res) { show+=res.val + ','; res = res.next;};
console.log(show+']');

//[1] 1

show = '[';
res = removeNthFromEnd(new ListNode(1), 1);
while(res) { show+=res.val + ','; res = res.next;};
console.log(show+']');


//[1, 2] 2
show = '[';
res = removeNthFromEnd(new ListNode(1, new ListNode(2), 2), 2);
while(res) { show+=res.val + ','; res = res.next;};
console.log(show+']');


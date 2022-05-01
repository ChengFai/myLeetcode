/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head || !head.next)
    {
        return head;
    }
    else{
        let tail = null
        while(head)
        {
            let second = head.next
            head.next = tail 
            tail = head
            head = second
        }
        return tail;
    }
};
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* tail = NULL, *pre = head;
        while (pre != NULL) {
            ListNode* t = pre->next;
            pre->next = tail;
            tail = pre;
            pre = t;
        }
        return tail;
    }
};
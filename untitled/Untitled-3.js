/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDepth = (root) => {
    // 访问到空节点了，返回0
    if (root == null) return 0;
    // 左子树为根的子树的的深度
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    return 1 + Math.max(leftMax, rightMax);
  };
  if (root == null) return 0;
  // 计算出左右子树的最大高度
  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);
  // root 这个节点的直径
  let res = leftMax + rightMax;
  // 递归遍历 root.left 和 root.right 两个子树
  return Math.max(
    res,
    Math.max(diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right))
  );
};


// 经过后序遍历优化



/**
 * @param {TreeNode} root
 * @return {number}
 */
 var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0;
    const dfs = (root) => {
      // 访问到空节点了，返回0
      if (root == null) return 0;
      // 左子树为根的子树的的深度
      let leftMax = dfs(root.left);
      let rightMax = dfs(root.right);
      maxDiameter = Math.max(maxDiameter, leftMax + rightMax);
      // 返回该节点为根的子树的的深度
      return Math.max(leftMax, rightMax) + 1;
    };
    dfs(root);
    return maxDiameter;
  };


<?php
require_once('./session.php');
require_once('./db.php');
checkAuth();
isAdmin();
$products = [];
$escape = static fn($value): string => htmlspecialchars((string)($value ?? ''), ENT_QUOTES, 'UTF-8');
$image_path = 'uploads/images/';
if($_SERVER['REQUEST_METHOD'] === 'GET') {
    //make query for getting all the data of all products
    $sql = "SELECT * FROM php_crud_products";
    //prepare the query
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $result = $stmt->get_result();
    while ($row = $result->fetch_assoc()) {
      $products[] = $row;
    }
}
?>
<p><?php require_once('./alert.php'); ?> </p>
<p>Welcome back <?php echo $_SESSION['username']; ?></p>
<button><a href="1_create.php">Add product</a></button>
<form action="logout.php" method="POST" style="display: inline;">
  <button type="submit" style="background-color: red;">Logout</button>
</form>
<table border='1'>
  <tr>
    <th>ID</th>
    <th>Image</th>
    <th>Name</th>
    <th>Decription</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Created date</th>
    <th>Actions</th>
  </tr>

    <?php if (empty($products)) { ?>
      <tr><td colspan="8">NO PRODUCTS AVAILABLE</td></tr>
    <?php } else {
      foreach ($products as $row) { ?>
  <tr>
    <td><?= $escape($row['id'] ?? null) ?></td>
    <td>
        <?php if($row['image'] === null || $row['image'] === '') {?>
            <img 
            width="50"
            height="50"
            src="<?= $image_path . 'product_placeholder.png' ?>" 
            alt="Product Image"
        >
        <?php } else { ?>

        <img 
            width="50"
            height="50"
            src="<?= $image_path . $escape($row['image'] ?? null) ?>" 
            alt="Product Image"
        >
        <?php } ?>
    </td>
    <td><?= $escape($row['name'] ?? null) ?></td>
    <td><?= $escape($row['description'] ?? null) ?></td>
    <td><?= $escape($row['price'] ?? null) ?></td>
    <td><?= $escape($row['quantity'] ?? null) ?></td>
    <td><?= $escape($row['created_at'] ?? null) ?></td>
    <td>
      <form action="3_update.php" method="GET">
        <input type="hidden" name="id" value="<?= $escape($row['id'] ?? null) ?>">
        <button type="submit">Edit</button>
      </form>
      <form action="4_delete.php" method="POST" onsubmit="return confirm('Are you sure you want to delete this product?');">
        <input type="hidden" name="id" value="<?= $escape($row['id'] ?? null) ?>">
        <button type="submit">Delete</button>
      </form>
    </td>
  </tr>
  <?php }} ?>
</table>
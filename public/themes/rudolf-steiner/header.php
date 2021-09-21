<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?= wp_head(); ?>
</head>

<?php $menuItems = wp_get_nav_menu_items('main-nav'); ?>

<body>
    <nav>
        <ul>
            <?php foreach ($menuItems as $menuItem) : ?>
                <li>
                    <a href="<?= $menuItem->url; ?>">
                        <?= $menuItem->title; ?>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </nav>

<?php

add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');

    register_nav_menus([
        'navigation' => __('Navigation'),
    ]);
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('style', get_theme_file_uri('assets/app.css'));
    wp_enqueue_script('script', get_theme_file_uri('assets/app.js'));
});

function orderMenu($menuItems)
{
    $orderedMenuItems = [];

    foreach ($menuItems as $menuItem) {
        if ($menuItem->menu_item_parent === "0") {
            // Add item to the page array
            $orderedMenuItems[]["page"] = $menuItem;
        } else {
            // Add item to it's "parent"
            $orderedMenuItems[sizeof($orderedMenuItems) - 1]["children"][] = $menuItem;
        }
    }

    return $orderedMenuItems;
}

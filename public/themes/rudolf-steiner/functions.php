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

function orderMenu(array $menuItems): array
{
    $fixedMenu = [];
    $index = 0;

    foreach ($menuItems as $menuItem) {
        if ((int) $menuItem->menu_item_parent === 0) {
            // Add item as top level
            $menuItem->children = [];
            $fixedMenu[++$index] = $menuItem;
        } else {
            // Add item as child to corresponding parent
            $fixedMenu[$index]->children[] = $menuItem;
        }
    }

    return $fixedMenu;
}

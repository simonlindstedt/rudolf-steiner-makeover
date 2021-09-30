<?php $menuItems = orderMenu(wp_get_nav_menu_items("main-nav")) ?>

<nav>
    <ul>
        <?php foreach ($menuItems as $menuItem) : ?>
            <?php if (!array_key_exists("children", $menuItem)) : ?>
                <li class="page">
                    <a href="<?= $menuItem["page"]->url ?>">
                        <?= $menuItem["page"]->title ?>
                    </a>
                </li>
            <?php else : ?>
                <li class="submenu">
                    <a href="<?= $menuItem["page"]->url ?>">
                        <?= $menuItem["page"]->title ?>
                    </a>
                    <ul class="submenu-list">
                        <?php foreach ($menuItem["children"] as $child) : ?>
                            <li class="page">
                                <a href="<?= $child->url; ?>">
                                    <?= $child->title ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </li>
            <?php endif; ?>
        <?php endforeach; ?>
    </ul>
</nav>

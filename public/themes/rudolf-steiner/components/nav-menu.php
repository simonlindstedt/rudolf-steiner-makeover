<?php $menuItems = orderMenu(wp_get_nav_menu_items("main-nav")); ?>
<nav>
    <div class="menu-wrapper">
        <div class="decoration">
            <h2>meny</h2>
        </div>
        <ul>
            <?php foreach ($menuItems as $menuItem) : ?>
                <?php if (sizeof($menuItem->children) === 0) : ?>
                    <li class="page">
                        <a href="<?= $menuItem->url ?>">
                            <?= $menuItem->title ?>
                        </a>
                    </li>
                <?php else : ?>
                    <li class="submenu">
                        <button>
                            <?= $menuItem->title ?>
                        </button>
                        <ul class="submenu-list">
                            <?php foreach ($menuItem->children as $child) : ?>
                                <li class="page">
                                    <a href="<?= $child->url ?>">
                                        <?= $child->title ?>
                                    </a>
                                </li>
                            <?php endforeach ?>
                        </ul>
                    </li>
                <?php endif; ?>
            <?php endforeach; ?>
        </ul>
    </div>
    <button class="menu-button">
        🍔
    </button>
</nav>

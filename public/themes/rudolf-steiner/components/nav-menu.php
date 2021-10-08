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
        <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H29V3.91304H0V0ZM0 9.78261H29V13.6957H0V9.78261ZM0 19.5652H29V23.4783H0V19.5652Z" fill="white" />
        </svg>
    </button>
</nav>

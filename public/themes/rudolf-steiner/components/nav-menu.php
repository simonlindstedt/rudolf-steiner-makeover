<?php $menuItems = orderMenu(wp_get_nav_menu_items("main-nav")); ?>
<nav>
    <div class="menu-wrapper">
        <div class="decoration">
            <h2>meny</h2>
        </div>
        <a class="nav-logo" href="<?= get_home_url() ?>">
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.76 365.42">
                <path d="M622.11,1122c1.44-11.14,10.85-46,47.59-40.24a1.92,1.92,0,0,1,1.6,1.7c.73,7.24,1.22,39,1.33,46.21a1.24,1.24,0,0,1-1.44,1.23L623,1123.16A1,1,0,0,1,622.11,1122Z" transform="translate(-380.36 -974.83)" />
                <path d="M679.05,1086.32l1.89,45.13a1.94,1.94,0,0,0,1.58,1.84l34,6.43a1.1,1.1,0,0,0,1.31-1.21c-2.18-18.57-9.39-43-37.58-53.08A.91.91,0,0,0,679.05,1086.32Z" transform="translate(-380.36 -974.83)" />
                <path d="M620.87,1136.69l-4.72,61.36a1.39,1.39,0,0,0,1.73,1.46c6.85-1.74,31.28-7.71,54.7-10.35a1.57,1.57,0,0,0,1.39-1.59l-.94-43.25a1.58,1.58,0,0,0-1.33-1.52l-49-7.54A1.57,1.57,0,0,0,620.87,1136.69Z" transform="translate(-380.36 -974.83)" />
                <path d="M683,1187.43l-.94-41.88a1.3,1.3,0,0,1,1.5-1.3l34.17,5.54a1.75,1.75,0,0,1,1.46,1.52l4.68,39.39a.93.93,0,0,1-1.1,1c-5.42-1-20.5-2.63-38.16-2.73A1.6,1.6,0,0,1,683,1187.43Z" transform="translate(-380.36 -974.83)" />
                <path d="M593.78,1118.48l-13.51,88.72a3.37,3.37,0,0,1-1.94,2.56c-50.93,23.08-66.39,31.29-110.44,56.17a.83.83,0,0,1-1.21-1l35.84-107.5a3.37,3.37,0,0,1,1.88-2l88.23-37.81A.83.83,0,0,1,593.78,1118.48Z" transform="translate(-380.36 -974.83)" />
                <path d="M473.81,1151.77l130.85-57.19a4.79,4.79,0,0,0,2.12-1.81l73.64-117a.64.64,0,0,0-.89-.87L552,1059l-79,91.68A.7.7,0,0,0,473.81,1151.77Z" transform="translate(-380.36 -974.83)" />
                <path d="M679.28,1002.55l9.12-18.34a.68.68,0,0,1,1.22,0l62.68,120.43a1.49,1.49,0,0,1-.82,2.09l-19,6.74a1.78,1.78,0,0,1-2.21-.92l-51-108.87A1.29,1.29,0,0,1,679.28,1002.55Z" transform="translate(-380.36 -974.83)" />
                <path d="M381.67,1340.18a1,1,0,0,1-.86-1.7C412.44,1317.79,548.57,1232.3,667,1213c114.16-18.6,161.82,58.62,173.81,82.9A3,3,0,0,1,837,1300C751.83,1265,606,1258.49,381.67,1340.18Z" transform="translate(-380.36 -974.83)" />
            </svg>
        </a>
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
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="11" width="26" height="28" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8V42C0 46.4183 3.58172 50 8 50H50V0H8ZM36.8853 11.9565H13.1148V16.3044H36.8853V11.9565ZM36.8853 22.8261H13.1148V27.1739H36.8853V22.8261ZM36.8853 33.6957H13.1148V38.0435H36.8853V33.6957Z" fill="#25342E" />
        </svg>
    </button>
</nav>

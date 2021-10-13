<?php $menuItems = orderMenu(wp_get_nav_menu_items("main-nav")); ?>
<a class="nav-logo-mobile" href="<?= get_home_url() ?>">
    <svg width="40" height="44" viewBox="0 0 461 366" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
            <path d="M241.75 147.17C243.19 136.03 252.6 101.17 289.34 106.93C289.756 106.998 290.139 107.202 290.428 107.509C290.717 107.816 290.897 108.21 290.94 108.63C291.67 115.87 292.16 147.63 292.27 154.84C292.271 155.02 292.233 155.199 292.157 155.362C292.082 155.526 291.972 155.672 291.835 155.789C291.698 155.906 291.537 155.992 291.364 156.04C291.19 156.089 291.008 156.099 290.83 156.07L242.64 148.33C242.504 148.317 242.371 148.276 242.251 148.209C242.131 148.143 242.026 148.052 241.943 147.943C241.859 147.834 241.799 147.71 241.766 147.577C241.733 147.444 241.727 147.305 241.75 147.17Z" fill="white" />
            <path d="M298.69 111.49L300.58 156.62C300.595 157.061 300.76 157.483 301.047 157.817C301.334 158.152 301.727 158.379 302.16 158.46L336.16 164.89C336.331 164.925 336.507 164.918 336.675 164.871C336.842 164.824 336.996 164.738 337.124 164.62C337.252 164.502 337.35 164.355 337.41 164.192C337.47 164.028 337.491 163.853 337.47 163.68C335.29 145.11 328.08 120.68 299.89 110.6C299.751 110.553 299.602 110.541 299.458 110.564C299.313 110.587 299.175 110.644 299.057 110.732C298.939 110.819 298.844 110.934 298.781 111.066C298.717 111.198 298.685 111.343 298.69 111.49V111.49Z" fill="white" />
            <path d="M240.51 161.86L235.79 223.22C235.772 223.441 235.807 223.663 235.892 223.867C235.977 224.072 236.109 224.253 236.279 224.396C236.448 224.538 236.649 224.639 236.865 224.688C237.081 224.738 237.305 224.735 237.52 224.68C244.37 222.94 268.8 216.97 292.22 214.33C292.608 214.285 292.965 214.098 293.222 213.804C293.479 213.51 293.617 213.13 293.61 212.74L292.67 169.49C292.66 169.121 292.522 168.767 292.279 168.49C292.036 168.212 291.704 168.028 291.34 167.97L242.34 160.43C242.124 160.393 241.903 160.402 241.691 160.455C241.479 160.509 241.281 160.606 241.109 160.74C240.936 160.875 240.794 161.044 240.691 161.237C240.588 161.43 240.526 161.642 240.51 161.86V161.86Z" fill="white" />
            <path d="M302.64 212.6L301.7 170.72C301.698 170.531 301.737 170.344 301.814 170.172C301.891 169.999 302.006 169.846 302.148 169.722C302.291 169.598 302.459 169.507 302.641 169.455C302.822 169.403 303.013 169.391 303.2 169.42L337.37 174.96C337.745 175.02 338.091 175.201 338.354 175.476C338.618 175.75 338.785 176.103 338.83 176.48L343.51 215.87C343.523 216.014 343.503 216.158 343.451 216.293C343.399 216.427 343.316 216.548 343.209 216.645C343.103 216.742 342.975 216.812 342.836 216.852C342.697 216.891 342.551 216.897 342.41 216.87C336.99 215.87 321.91 214.24 304.25 214.14C303.834 214.143 303.433 213.984 303.133 213.696C302.832 213.409 302.655 213.016 302.64 212.6V212.6Z" fill="white" />
            <path d="M213.42 143.65L199.91 232.37C199.825 232.924 199.604 233.449 199.265 233.896C198.926 234.343 198.481 234.698 197.97 234.93C147.04 258.01 131.58 266.22 87.5301 291.1C87.3827 291.19 87.2107 291.232 87.0383 291.22C86.8659 291.208 86.7016 291.142 86.5683 291.032C86.4351 290.922 86.3396 290.773 86.2951 290.606C86.2506 290.438 86.2593 290.262 86.3201 290.1L122.16 182.6C122.316 182.153 122.563 181.744 122.887 181.4C123.211 181.055 123.604 180.783 124.04 180.6L212.27 142.79C212.404 142.733 212.55 142.712 212.695 142.729C212.839 142.747 212.976 142.802 213.093 142.889C213.209 142.976 213.301 143.092 213.358 143.226C213.416 143.359 213.437 143.506 213.42 143.65V143.65Z" fill="white" />
            <path d="M93.4499 176.94L224.3 119.75C225.17 119.37 225.908 118.74 226.42 117.94L300.06 0.940029C300.134 0.816614 300.164 0.671986 300.145 0.529445C300.127 0.386905 300.061 0.25474 299.958 0.154262C299.855 0.0537845 299.721 -0.00916624 299.578 -0.0244488C299.435 -0.0397313 299.292 -0.00643938 299.17 0.0700337L171.64 84.17L92.6399 175.85C92.541 175.971 92.4853 176.121 92.4816 176.277C92.478 176.433 92.5265 176.586 92.6196 176.711C92.7127 176.836 92.8449 176.927 92.9953 176.968C93.1458 177.01 93.3058 177 93.4499 176.94V176.94Z" fill="white" />
            <path d="M298.92 27.72L308.04 9.38C308.096 9.26611 308.183 9.17016 308.291 9.10309C308.399 9.03602 308.523 9.00049 308.65 9.00049C308.777 9.00049 308.901 9.03602 309.009 9.10309C309.117 9.17016 309.204 9.26611 309.26 9.38L371.94 129.81C372.038 129.999 372.095 130.206 372.106 130.419C372.117 130.631 372.083 130.843 372.005 131.041C371.927 131.239 371.808 131.418 371.656 131.566C371.503 131.715 371.32 131.828 371.12 131.9L352.12 138.64C351.703 138.789 351.246 138.777 350.837 138.607C350.429 138.437 350.098 138.121 349.91 137.72L298.91 28.85C298.826 28.6732 298.783 28.4796 298.785 28.2838C298.786 28.088 298.833 27.8952 298.92 27.72V27.72Z" fill="white" />
            <path d="M1.30986 365.35C1.10051 365.384 0.885882 365.35 0.697006 365.253C0.50813 365.157 0.354758 365.003 0.259048 364.814C0.163338 364.625 0.130242 364.41 0.164535 364.201C0.198828 363.992 0.298747 363.799 0.449844 363.65C32.0798 342.96 168.21 257.47 286.64 238.17C400.8 219.57 448.46 296.79 460.45 321.07C460.715 321.614 460.809 322.226 460.72 322.825C460.631 323.425 460.363 323.983 459.951 324.426C459.538 324.87 459.001 325.178 458.41 325.311C457.82 325.444 457.202 325.395 456.64 325.17C371.47 290.17 225.64 283.66 1.30986 365.35Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="460.76" height="365.42" fill="white" />
            </clipPath>
        </defs>
    </svg>
    Rudolf <br /> Steinerskolan
</a>
<nav>
    <div class="menu-wrapper">
        <div class="decoration">
            <h2>meny</h2>
        </div>
        <a class="nav-logo" href="<?= get_home_url() ?>">
            <svg width="40" height="44" viewBox="0 0 461 366" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                    <path d="M241.75 147.17C243.19 136.03 252.6 101.17 289.34 106.93C289.756 106.998 290.139 107.202 290.428 107.509C290.717 107.816 290.897 108.21 290.94 108.63C291.67 115.87 292.16 147.63 292.27 154.84C292.271 155.02 292.233 155.199 292.157 155.362C292.082 155.526 291.972 155.672 291.835 155.789C291.698 155.906 291.537 155.992 291.364 156.04C291.19 156.089 291.008 156.099 290.83 156.07L242.64 148.33C242.504 148.317 242.371 148.276 242.251 148.209C242.131 148.143 242.026 148.052 241.943 147.943C241.859 147.834 241.799 147.71 241.766 147.577C241.733 147.444 241.727 147.305 241.75 147.17Z" fill="#25342E" />
                    <path d="M298.69 111.49L300.58 156.62C300.595 157.061 300.76 157.483 301.047 157.817C301.334 158.152 301.727 158.379 302.16 158.46L336.16 164.89C336.331 164.925 336.507 164.918 336.675 164.871C336.842 164.824 336.996 164.738 337.124 164.62C337.252 164.502 337.35 164.355 337.41 164.192C337.47 164.028 337.491 163.853 337.47 163.68C335.29 145.11 328.08 120.68 299.89 110.6C299.751 110.553 299.602 110.541 299.458 110.564C299.313 110.587 299.175 110.644 299.057 110.732C298.939 110.819 298.844 110.934 298.781 111.066C298.717 111.198 298.685 111.343 298.69 111.49V111.49Z" fill="#25342E" />
                    <path d="M240.51 161.86L235.79 223.22C235.772 223.441 235.807 223.663 235.892 223.867C235.977 224.072 236.109 224.253 236.279 224.396C236.448 224.538 236.649 224.639 236.865 224.688C237.081 224.738 237.305 224.735 237.52 224.68C244.37 222.94 268.8 216.97 292.22 214.33C292.608 214.285 292.965 214.098 293.222 213.804C293.479 213.51 293.617 213.13 293.61 212.74L292.67 169.49C292.66 169.121 292.522 168.767 292.279 168.49C292.036 168.212 291.704 168.028 291.34 167.97L242.34 160.43C242.124 160.393 241.903 160.402 241.691 160.455C241.479 160.509 241.281 160.606 241.109 160.74C240.936 160.875 240.794 161.044 240.691 161.237C240.588 161.43 240.526 161.642 240.51 161.86V161.86Z" fill="#25342E" />
                    <path d="M302.64 212.6L301.7 170.72C301.698 170.531 301.737 170.344 301.814 170.172C301.891 169.999 302.006 169.846 302.148 169.722C302.291 169.598 302.459 169.507 302.641 169.455C302.822 169.403 303.013 169.391 303.2 169.42L337.37 174.96C337.745 175.02 338.091 175.201 338.354 175.476C338.618 175.75 338.785 176.103 338.83 176.48L343.51 215.87C343.523 216.014 343.503 216.158 343.451 216.293C343.399 216.427 343.316 216.548 343.209 216.645C343.103 216.742 342.975 216.812 342.836 216.852C342.697 216.891 342.551 216.897 342.41 216.87C336.99 215.87 321.91 214.24 304.25 214.14C303.834 214.143 303.433 213.984 303.133 213.696C302.832 213.409 302.655 213.016 302.64 212.6V212.6Z" fill="#25342E" />
                    <path d="M213.42 143.65L199.91 232.37C199.825 232.924 199.604 233.449 199.265 233.896C198.926 234.343 198.481 234.698 197.97 234.93C147.04 258.01 131.58 266.22 87.5301 291.1C87.3827 291.19 87.2107 291.232 87.0383 291.22C86.8659 291.208 86.7016 291.142 86.5683 291.032C86.4351 290.922 86.3396 290.773 86.2951 290.606C86.2506 290.438 86.2593 290.262 86.3201 290.1L122.16 182.6C122.316 182.153 122.563 181.744 122.887 181.4C123.211 181.055 123.604 180.783 124.04 180.6L212.27 142.79C212.404 142.733 212.55 142.712 212.695 142.729C212.839 142.747 212.976 142.802 213.093 142.889C213.209 142.976 213.301 143.092 213.358 143.226C213.416 143.359 213.437 143.506 213.42 143.65V143.65Z" fill="#25342E" />
                    <path d="M93.4499 176.94L224.3 119.75C225.17 119.37 225.908 118.74 226.42 117.94L300.06 0.940029C300.134 0.816614 300.164 0.671986 300.145 0.529445C300.127 0.386905 300.061 0.25474 299.958 0.154262C299.855 0.0537845 299.721 -0.00916624 299.578 -0.0244488C299.435 -0.0397313 299.292 -0.00643938 299.17 0.0700337L171.64 84.17L92.6399 175.85C92.541 175.971 92.4853 176.121 92.4816 176.277C92.478 176.433 92.5265 176.586 92.6196 176.711C92.7127 176.836 92.8449 176.927 92.9953 176.968C93.1458 177.01 93.3058 177 93.4499 176.94V176.94Z" fill="#25342E" />
                    <path d="M298.92 27.72L308.04 9.38C308.096 9.26611 308.183 9.17016 308.291 9.10309C308.399 9.03602 308.523 9.00049 308.65 9.00049C308.777 9.00049 308.901 9.03602 309.009 9.10309C309.117 9.17016 309.204 9.26611 309.26 9.38L371.94 129.81C372.038 129.999 372.095 130.206 372.106 130.419C372.117 130.631 372.083 130.843 372.005 131.041C371.927 131.239 371.808 131.418 371.656 131.566C371.503 131.715 371.32 131.828 371.12 131.9L352.12 138.64C351.703 138.789 351.246 138.777 350.837 138.607C350.429 138.437 350.098 138.121 349.91 137.72L298.91 28.85C298.826 28.6732 298.783 28.4796 298.785 28.2838C298.786 28.088 298.833 27.8952 298.92 27.72V27.72Z" fill="#25342E" />
                    <path d="M1.30986 365.35C1.10051 365.384 0.885882 365.35 0.697006 365.253C0.50813 365.157 0.354758 365.003 0.259048 364.814C0.163338 364.625 0.130242 364.41 0.164535 364.201C0.198828 363.992 0.298747 363.799 0.449844 363.65C32.0798 342.96 168.21 257.47 286.64 238.17C400.8 219.57 448.46 296.79 460.45 321.07C460.715 321.614 460.809 322.226 460.72 322.825C460.631 323.425 460.363 323.983 459.951 324.426C459.538 324.87 459.001 325.178 458.41 325.311C457.82 325.444 457.202 325.395 456.64 325.17C371.47 290.17 225.64 283.66 1.30986 365.35Z" fill="#25342E" />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="460.76" height="365.42" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            Rudolf <br /> Steinerskolan
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

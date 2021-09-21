<?php get_header(); ?>
<main>
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post() ?>
            <div>
                <h2><?= the_title() ?></h2>
                <p><?= the_content() ?></p>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
</main>
<?php get_footer(); ?>

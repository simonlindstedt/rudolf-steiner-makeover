<?php get_header(); ?>
<section>
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post() ?>
            <h2><?= the_title() ?></h2>
            <?= the_content() ?>
        <?php endwhile; ?>
    <?php endif; ?>
</section>
<?php get_footer(); ?>

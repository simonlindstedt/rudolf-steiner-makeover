<?php get_header(); ?>
<section>
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post() ?>
            <div>
                <h2><?= the_title() ?></h2>
                <p><?= the_content() ?></p>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
</section>
<?php get_footer(); ?>

<?= $this->extend('layouts/main.php') ?>
<?= $this->section('content') ?>

<div class="dashboard">
    <?= $this->include('admin/sidebar') ?>
</div>

<?= $this->endSection() ?>
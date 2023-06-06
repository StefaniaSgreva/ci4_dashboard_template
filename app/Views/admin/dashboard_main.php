<?= $this->extend('layouts/main.php') ?>
<?= $this->section('content') ?>

<div class="dashboard_wrapper">
    <!-- Mobile Button  -->
    <input type="checkbox" class="mobile_btn" id="mobile_btn">
    <label for="mobile_btn" class="mobile_label">
        <div class="label_icons flex">
            <i class="uil uil-bars"></i>
            <i class="uil uil-times"></i>
        </div>
    </label>

    <div class="dashboard">
        <?= $this->include('admin/sidebar') ?>
        <?= $this->include('admin/main_content') ?>
    </div>
</div>

<?= $this->endSection() ?>
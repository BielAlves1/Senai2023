-- CreateTable
CREATE TABLE `Venda` (
    `id_venda` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `vendedor_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_venda`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalhe` (
    `id_detalhe` INTEGER NOT NULL AUTO_INCREMENT,
    `quantidade` INTEGER NOT NULL,
    `produto_id` INTEGER NOT NULL,
    `venda_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_detalhe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Venda` ADD CONSTRAINT `Venda_vendedor_id_fkey` FOREIGN KEY (`vendedor_id`) REFERENCES `Vendedor`(`id_vendedor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalhe` ADD CONSTRAINT `Detalhe_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `Produto`(`id_produto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalhe` ADD CONSTRAINT `Detalhe_venda_id_fkey` FOREIGN KEY (`venda_id`) REFERENCES `Venda`(`id_venda`) ON DELETE RESTRICT ON UPDATE CASCADE;

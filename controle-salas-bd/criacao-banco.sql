CREATE DATABASE `Controle-Sala`;

USE `Controle-Sala`;

CREATE TABLE `Controle-Sala`.`Salas` (

    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `descricao` VARCHAR(1000)
);

CREATE TABLE `Controle-Sala`.`Agendamentos` (
	
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `nomeResponsavel` VARCHAR(255) NOT NULL,
    `nomeTurma` VARCHAR(255) NOT NULL,
    `data` DATE NOT NULL,
    `id_sala` INT NOT NULL,
    
    CONSTRAINT `FK_AGEND_SALA` FOREIGN KEY (`id_sala`)
    	REFERENCES `Salas`(`id`)
        ON DELETE CASCADE
    
);
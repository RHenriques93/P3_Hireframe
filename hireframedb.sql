-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 11-Jun-2020 às 14:13
-- Versão do servidor: 10.4.10-MariaDB
-- versão do PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `hireframedb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `area`
--

DROP TABLE IF EXISTS `area`;
CREATE TABLE IF NOT EXISTS `area` (
  `id_area` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `img_area` varchar(255) NOT NULL,
  PRIMARY KEY (`id_area`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `area`
--

INSERT INTO `area` (`id_area`, `nome`, `descricao`, `data`, `img_area`) VALUES
(5, 'Design Gráfico', 'Design Gráfico', '2020-05-03 11:11:04', '/img/computer.png'),
(6, 'Vídeo ', 'Vídeo ', '2020-05-03 11:11:31', '/img/video.png'),
(7, 'Programação', 'Programação', '2020-05-03 11:11:45', '/img/html-coding.png'),
(8, 'Áudio', 'Serviços de Áudio', '2020-05-03 11:11:45', '/img/speaker.png'),
(9, 'Fotografia', 'Serviços de Fotografia', '2020-05-03 11:11:45', '/img/camera.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `img_service`
--

DROP TABLE IF EXISTS `img_service`;
CREATE TABLE IF NOT EXISTS `img_service` (
  `id_img_serv` int(11) NOT NULL AUTO_INCREMENT,
  `img_serv` varchar(255) NOT NULL DEFAULT 'http://localhost/projetofinal/img/uploads/exemplo.jpg',
  `id_servico` int(11) NOT NULL,
  PRIMARY KEY (`id_img_serv`),
  KEY `fk_id_servico_img_service` (`id_servico`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `img_service`
--

INSERT INTO `img_service` (`id_img_serv`, `img_serv`, `id_servico`) VALUES
(2, 'logodesign', 19),
(10, 'videoinstiticional', 18),
(15, 'logodesign3', 45),
(16, 'logodesign2', 19),
(17, 'motiongraphics', 21),
(18, 'flyer', 17),
(19, 'webdesing_img', 46),
(20, 'fotodeproduto', 48),
(21, 'timeline', 49),
(24, 'party-flyer', 30);

-- --------------------------------------------------------

--
-- Estrutura da tabela `preco_servico`
--

DROP TABLE IF EXISTS `preco_servico`;
CREATE TABLE IF NOT EXISTS `preco_servico` (
  `id_preco_servico` int(11) NOT NULL AUTO_INCREMENT,
  `base` int(11) NOT NULL,
  `padrao` int(11) NOT NULL,
  `premium` int(11) NOT NULL,
  `id_servico` int(11) NOT NULL,
  PRIMARY KEY (`id_preco_servico`),
  KEY `fk_id_servico_servico` (`id_servico`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `preco_servico`
--

INSERT INTO `preco_servico` (`id_preco_servico`, `base`, `padrao`, `premium`, `id_servico`) VALUES
(6, 25, 50, 75, 17),
(7, 200, 350, 500, 18),
(8, 55, 125, 200, 19),
(9, 75, 125, 200, 21),
(11, 40, 50, 60, 30),
(12, 100, 175, 250, 45),
(13, 500, 700, 1000, 46),
(15, 100, 175, 250, 48),
(16, 75, 110, 150, 49),
(31, 10, 20, 30, 76),
(35, 50, 70, 100, 80),
(37, 10, 20, 30, 82),
(55, 1500, 2000, 3000, 100),
(56, 76, 101, 156, 101),
(67, 100, 200, 300, 112);

-- --------------------------------------------------------

--
-- Estrutura da tabela `requisicao`
--

DROP TABLE IF EXISTS `requisicao`;
CREATE TABLE IF NOT EXISTS `requisicao` (
  `id_requisicao` int(11) NOT NULL AUTO_INCREMENT,
  `id_subarea` int(11) NOT NULL,
  `nome_projeto` varchar(50) NOT NULL,
  `descricao` varchar(250) NOT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_utilizador` int(11) NOT NULL,
  `preco` int(11) NOT NULL,
  `img_req` varchar(255) NOT NULL DEFAULT '"uploads\\\\exemplo.jpg"',
  PRIMARY KEY (`id_requisicao`),
  KEY `fk_id_utilizador_req_utilizador_req` (`id_utilizador`),
  KEY `fk_id_subarea_req_subarea_req` (`id_subarea`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `requisicao`
--

INSERT INTO `requisicao` (`id_requisicao`, `id_subarea`, `nome_projeto`, `descricao`, `data`, `id_utilizador`, `preco`, `img_req`) VALUES
(1, 7, 'Auto Carlos Stand 2020', 'Criação de um logótipo para um stand de automóveis com o nome Auto Carlos.', '2020-06-03 13:33:31', 8, 250, '\"uploads\\\\logotipostand.png\"'),
(2, 7, 'Evento de Natal ', 'Criação de um flyer para um evento de natal onde  irão decorrer concertos etc.', '2020-06-03 13:35:04', 8, 150, '\"uploads\\\\christmasevent.jpg\"'),
(6, 10, 'Marca XPTO', '1Animação de Logótipo da Marca XPTO para intro do canal do Youtube.', '2020-06-03 13:36:37', 11, 100, '\"uploads\\\\xpto_logo.png\"'),
(17, 10, 'A Jóia', 'Animaço de logotipo para intro de videos.', '2020-06-07 19:52:08', 89, 100, '\"uploads\\\\exemplo.jpg\"'),
(18, 19, 'Evento Noturnos', 'Reportagem Fotográfica de Evento Noturno', '2020-06-07 20:39:34', 90, 255, '\"uploads\\\\1591562338479.png\"');

-- --------------------------------------------------------

--
-- Estrutura da tabela `servico`
--

DROP TABLE IF EXISTS `servico`;
CREATE TABLE IF NOT EXISTS `servico` (
  `id_utilizador` int(11) NOT NULL,
  `id_subarea` int(11) NOT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_servico` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) NOT NULL,
  `img_serv` varchar(255) DEFAULT '"uploads\\\\exemplo.jpg"',
  PRIMARY KEY (`id_servico`),
  KEY `fk_id_utilizador_utilizador` (`id_utilizador`),
  KEY `fk_id_subarea_subarea` (`id_subarea`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `servico`
--

INSERT INTO `servico` (`id_utilizador`, `id_subarea`, `data`, `id_servico`, `descricao`, `img_serv`) VALUES
(2, 7, '2020-06-03 14:20:46', 17, 'Realização de flyers para todo o tipo de eventos.', '\"uploads\\\\flyer.jpg\"'),
(1, 9, '2020-06-03 14:21:25', 18, 'Melhore a comunicação da sua empresa através dos ví­deos instituicionais.', '\"uploads\\\\videoinstiticional.jpg\"'),
(1, 6, '2020-06-03 14:22:17', 19, 'Criação de Logótipos para vários tipos de empresas ou indivíduos.', '\"uploads\\\\logodesign.jpg\"'),
(2, 12, '2020-06-03 14:22:59', 21, 'Desenvolvimento de grafismos animados.', '\"uploads\\\\motiongraphics.jpg\"'),
(11, 7, '2020-06-03 14:24:41', 30, 'Desenvolvimento de flyers para eventos...', '\"uploads\\\\party-flyer.png\"'),
(4, 6, '2020-06-03 14:25:35', 45, 'Criação de logótipos para todos os tipos de marcas.', '\"uploads\\\\logodesign3.png\"'),
(4, 13, '2020-06-03 14:26:15', 46, 'Desenvolvimento de Websites em PHP', '\"uploads\\\\webdesing_img.jpg\"'),
(2, 18, '2020-06-03 14:26:56', 48, 'Fotografias de Produto / Publicidade para o seu evento ou empresa. ', '\"uploads\\\\fotodeproduto.jpg\"'),
(1, 11, '2020-06-03 14:27:22', 49, 'Serviços em Edição de Vídeo ', '\"uploads\\\\timeline.jpg\"'),
(60, 17, '2020-06-05 10:52:31', 76, 'Foley para Video de Natureza', '\"uploads\\\\exemplo.jpg\"'),
(60, 18, '2020-06-04 13:07:21', 80, 'Casamento', '\"uploads\\\\exemplo.jpg\"'),
(60, 15, '2020-06-05 16:38:47', 82, 'teste2', '\"uploads\\\\1591375124899.png\"'),
(89, 14, '2020-06-06 22:40:37', 100, 'Mobile App for Android', '\"uploads\\\\1591483235986.png\"'),
(90, 16, '2020-06-07 20:44:16', 101, 'Masterizaço de Áudio', '\"uploads\\\\1591562653371.png\"'),
(90, 15, '2020-06-11 14:10:40', 112, 'Produço de Faixa de Áudio', '\"uploads\\\\exemplo.jpg\"');

-- --------------------------------------------------------

--
-- Estrutura da tabela `subarea`
--

DROP TABLE IF EXISTS `subarea`;
CREATE TABLE IF NOT EXISTS `subarea` (
  `id_subarea` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_area` int(11) NOT NULL,
  `img_subarea` varchar(255) NOT NULL,
  PRIMARY KEY (`id_subarea`),
  KEY `fk_id_area_area` (`id_area`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `subarea`
--

INSERT INTO `subarea` (`id_subarea`, `nome`, `data`, `id_area`, `img_subarea`) VALUES
(6, 'Logotipo', '2020-05-03 12:30:10', 5, '/img/logo-design.png'),
(7, 'Flyer', '2020-05-03 12:30:10', 5, '/img/flyer-for-promotion.png'),
(8, 'Ilustração', '2020-05-03 12:30:10', 5, '/img/illustration.png'),
(9, 'Video Institucional', '2020-05-03 12:30:10', 6, '/img/video_institucional.png'),
(10, 'Animação de Logotipo', '2020-05-03 12:30:10', 6, '/img/logo-design.png'),
(11, 'Edição de Vídeo', '2020-05-03 12:30:10', 6, '/img/videoediting.png'),
(12, 'Motion Graphics', '2020-05-03 12:30:10', 6, '/img/motion-graphics.png'),
(13, 'Web Design', '2020-05-03 12:30:10', 7, '/img/web_design.png'),
(14, 'Mobile Apps', '2020-05-03 12:30:10', 7, '/img/mobile-app.png'),
(15, 'Produção', '2020-05-03 12:30:10', 8, '/img/sound-frecuency.png'),
(16, 'Mixagem e Masterização', '2020-05-03 12:30:10', 8, '/img/sound-faders.png'),
(17, 'Foley / Sonoplastia', '2020-05-03 12:30:10', 8, '/img/dubbing.png'),
(18, 'Publicidade', '2020-05-03 12:30:10', 9, '/img/picture.png'),
(19, 'Eventos', '2020-05-03 12:30:10', 9, '/img/calendar.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_utilizador`
--

DROP TABLE IF EXISTS `tipo_utilizador`;
CREATE TABLE IF NOT EXISTS `tipo_utilizador` (
  `id_tipo` int(11) NOT NULL,
  `nome_tipo` varchar(255) NOT NULL,
  PRIMARY KEY (`id_tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tipo_utilizador`
--

INSERT INTO `tipo_utilizador` (`id_tipo`, `nome_tipo`) VALUES
(1, 'Cliente'),
(2, 'Trabalhador'),
(3, 'Cliente e Trabalhador');

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilizador`
--

DROP TABLE IF EXISTS `utilizador`;
CREATE TABLE IF NOT EXISTS `utilizador` (
  `id_utilizador` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(15) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `email` varchar(100) NOT NULL,
  `data_nascimento` date NOT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `pass` varchar(255) NOT NULL,
  `id_tipo` int(11) NOT NULL DEFAULT 1,
  `biografia` varchar(255) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT '"uploads\\\\user_picture.png"',
  `repor_pass` varchar(255) DEFAULT NULL,
  `genero` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_utilizador`),
  UNIQUE KEY `id_area` (`id_utilizador`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_id_tipo_tipo_utilizador` (`id_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `utilizador`
--

INSERT INTO `utilizador` (`id_utilizador`, `username`, `nome`, `email`, `data_nascimento`, `data`, `pass`, `id_tipo`, `biografia`, `imagem`, `repor_pass`, `genero`) VALUES
(1, 'rafaelhenriques', 'Rafael Henriques', 'rafaelhenriques1993@gmail.com', '1993-10-16', '2020-06-03 12:32:01', '12345', 2, 'Licenciatura em Multimédia no ISMT....', '\"uploads\\\\rafaelhenriques.jpg\"', 'a38a1d64322708af4d3a07e72bad391a', 'Masculino'),
(2, 'andreferreira', 'André Ferreira', 'falcon.oficialyt@gmail.com', '1999-12-18', '2020-06-11 13:26:44', '12345', 2, 'Estudante de Multimédia no Instituto Superior Miguel Torga.', '\"uploads\\\\andreferreira.jpg\"', 'ad394df9cbcaeeb677f1648d8483fdd4', 'Masculino'),
(4, 'sofiabarreira', 'Sofia Barreira', 'sofiasbarreira@gmail.com', '1992-08-09', '2020-06-03 12:39:23', 'sofiab', 2, 'Designer Gráfica e Web Designer...', '\"uploads\\\\sofiabarreira.jpg\"', '', 'Feminino'),
(8, 'Carlos', 'Carlos Xavier', 'carlos@gmail.com', '1981-07-05', '2020-06-03 12:40:31', '12345', 1, 'Negociante do Automóveis.', '\"uploads\\\\carlos.jpg\"', '', 'Masculino'),
(11, 'sheila19', 'Sheila Margarida Costa', 'sheila@gmail.com', '1987-05-20', '2020-06-03 12:40:52', 'sheila', 3, 'Designer Gráfica em Part-Time...', '\"uploads\\\\sheila.jpg\"', '', 'Feminino'),
(60, 'testepostman4', 'testpostman4', 'testepost4@gmail.com', '1993-12-04', '2020-06-05 16:07:06', '12345', 3, 'Teste Biografia', '\"uploads\\\\1591354230003.png\"', NULL, 'Feminino'),
(89, 'nconceicao', 'Nuno Semceiçāo', 'nuno@gmail.com', '1997-10-18', '2020-06-07 19:49:46', 'nunoc', 3, 'Estudante de Multimedia no ISMT', '\"uploads\\\\1591397015849.png\"', NULL, 'Masculino'),
(90, 'xico_silva', 'Francisco Silva', 'xicosilva@gmail.com', '1998-02-07', '2020-06-07 20:34:37', 'xicosilva', 3, NULL, '\"uploads\\\\1591562074425.png\"', NULL, 'Masculino');

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `img_service`
--
ALTER TABLE `img_service`
  ADD CONSTRAINT `fk_id_servico_img_service` FOREIGN KEY (`id_servico`) REFERENCES `servico` (`id_servico`);

--
-- Limitadores para a tabela `preco_servico`
--
ALTER TABLE `preco_servico`
  ADD CONSTRAINT `fk_id_servico_servico` FOREIGN KEY (`id_servico`) REFERENCES `servico` (`id_servico`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `requisicao`
--
ALTER TABLE `requisicao`
  ADD CONSTRAINT `fk_id_subarea_req_subarea_req` FOREIGN KEY (`id_subarea`) REFERENCES `subarea` (`id_subarea`),
  ADD CONSTRAINT `fk_id_utilizador_req_utilizador_req` FOREIGN KEY (`id_utilizador`) REFERENCES `utilizador` (`id_utilizador`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `servico`
--
ALTER TABLE `servico`
  ADD CONSTRAINT `fk_id_subarea_subarea` FOREIGN KEY (`id_subarea`) REFERENCES `subarea` (`id_subarea`),
  ADD CONSTRAINT `fk_id_utilizador_utilizador` FOREIGN KEY (`id_utilizador`) REFERENCES `utilizador` (`id_utilizador`);

--
-- Limitadores para a tabela `subarea`
--
ALTER TABLE `subarea`
  ADD CONSTRAINT `fk_id_area_area` FOREIGN KEY (`id_area`) REFERENCES `area` (`id_area`);

--
-- Limitadores para a tabela `utilizador`
--
ALTER TABLE `utilizador`
  ADD CONSTRAINT `fk_id_tipo_tipo_utilizador` FOREIGN KEY (`id_tipo`) REFERENCES `tipo_utilizador` (`id_tipo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

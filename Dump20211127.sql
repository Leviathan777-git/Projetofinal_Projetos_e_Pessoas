-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dados212n
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autores` (
  `aut_codigo` int NOT NULL AUTO_INCREMENT,
  `aut_ativoinativo` char(1) DEFAULT NULL,
  `aut_nome` varchar(40) DEFAULT NULL,
  `aut_apelido` varchar(10) DEFAULT NULL,
  `aut_sexo` char(1) DEFAULT NULL,
  `aut_telefone` varchar(15) DEFAULT NULL,
  `aut_email` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`aut_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `autores` WRITE;
/*!40000 ALTER TABLE `autores` DISABLE KEYS */;
INSERT INTO `autores` VALUES (1,'I','Fernando Chinaglia','Fernando','M','11-5205-4907',''),(2,'I','Aguinaldo Aragon Fernandes','Aguinaldo','M','21-2568-1507',''),(3,'A','Vladimir Ferraz de Abreu','Vladimir','M','11-2148-1437',''),(4,'A','Willian Stallings','Stallings','M','','email@gmail.com'),(5,'A','Costinha','Costinha','M','1191551088','Costinha@gmail.com'),(6,'A','Magali','Ma','F','16','Ma@gmail.com');
/*!40000 ALTER TABLE `autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `editoras`
--

DROP TABLE IF EXISTS `editoras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editoras` (
  `edt_codigo` int NOT NULL AUTO_INCREMENT,
  `edt_ativoinativo` char(1) DEFAULT NULL,
  `edt_nome` varchar(40) DEFAULT NULL,
  `edt_cidade` varchar(30) DEFAULT NULL,
  `edt_cep` char(9) DEFAULT NULL,
  `edt_estado` char(2) DEFAULT NULL,
  `edt_email` varchar(40) DEFAULT NULL,
  `edt_telefone` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`edt_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editoras`
--

LOCK TABLES `editoras` WRITE;
/*!40000 ALTER TABLE `editoras` DISABLE KEYS */;
INSERT INTO `editoras` VALUES (1,'A','BRASPORT Livros e Multimídia Ltda','Rio de Janeiro','20270-280','RJ','editorial@brasport.com.br','21-2568-1415'),(2,'A','Pearson Education do Brasil','São Paulo','02712-100','SP','vendas@pearson.com','11-2178-8688'),(3,'A','Editoria Makron Books','São Paulo','05083-130','SP','editorial@mbooks.com.br','11-3641-5314'),(4,'I','Editora Ano Zero Ltda','Rio de Janeiro','22210-010','RJ','editorial@editoraanozero.com.br','11-205-4907');
/*!40000 ALTER TABLE `editoras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livros`
--

DROP TABLE IF EXISTS `livros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livros` (
  `liv_codigo` int NOT NULL AUTO_INCREMENT,
  `liv_titulo` varchar(50) DEFAULT NULL,
  `liv_edicao` varchar(10) DEFAULT NULL,
  `liv_isbn` varchar(20) DEFAULT NULL,
  `liv_ano` decimal(10,0) DEFAULT NULL,
  `aut_codigo` int NOT NULL,
  `edt_codigo` int NOT NULL,
  `liv_ativoinativo` char(1) DEFAULT NULL,
  PRIMARY KEY (`liv_codigo`),
  KEY `fk_livros_autores_idx` (`aut_codigo`),
  KEY `fk_livros_editoras_idx` (`edt_codigo`),
  CONSTRAINT `fk_livros_autores` FOREIGN KEY (`aut_codigo`) REFERENCES `autores` (`aut_codigo`),
  CONSTRAINT `fk_livros_editoras` FOREIGN KEY (`edt_codigo`) REFERENCES `editoras` (`edt_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livros`
--

LOCK TABLES `livros` WRITE;
/*!40000 ALTER TABLE `livros` DISABLE KEYS */;
INSERT INTO `livros` VALUES (1,'Dominando o Delphi 7 - A Biblia','1ª Edição','853-46-1408-3',2001,3,1,'A'),(2,'Arquitetura e Organização de Computadores ','8ª Edição','978-85-7605-564-8',2010,2,1,'A'),(3,'Implantando a Governança de TI','4ª Edição','978-85-7452-658-4',2014,1,2,'A'),(4,'dBase III Plus - Master Informática','1ª Edição','84-88094-03-05',1992,4,1,'A'),(5,'Guia Mangá - Microprocessadores','1ª Edição','987-321',2016,2,3,'A'),(6,'O Amigo','23ª Edição','103-8-3762-18',2011,1,3,'I'),(7,'Manual NodeJS','1ª Edição','987-32-1008',2016,2,3,'A'),(8,'Eletrônica Digital','3a Ed','54553334',2008,3,2,'A');
/*!40000 ALTER TABLE `livros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoa_pes`
--

DROP TABLE IF EXISTS `pessoa_pes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoa_pes` (
  `pes_codigo` int NOT NULL AUTO_INCREMENT,
  `pes_nome` varchar(20) DEFAULT NULL,
  `pes_apelido` varchar(10) DEFAULT NULL,
  `pes_sexo` char(1) DEFAULT NULL,
  `pes_dtnascimento` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`pes_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa_pes`
--

LOCK TABLES `pessoa_pes` WRITE;
/*!40000 ALTER TABLE `pessoa_pes` DISABLE KEYS */;
INSERT INTO `pessoa_pes` VALUES (1,'Gabriel','gabs','M','06-02-1999'),(2,'Joao','jao','M','24-07-1978'),(3,'Carlos','carlinho','M','01-01-1980');
/*!40000 ALTER TABLE `pessoa_pes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projeto_prj`
--

DROP TABLE IF EXISTS `projeto_prj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projeto_prj` (
  `prj_codigo` int NOT NULL AUTO_INCREMENT,
  `prj_tipo` varchar(30) DEFAULT NULL,
  `prj_descricao` varchar(10) DEFAULT NULL,
  `prj_iniciativa` varchar(10) DEFAULT NULL,
  `prj_dtinicio` varchar(10) DEFAULT NULL,
  `pes_codigo` int DEFAULT NULL,
  PRIMARY KEY (`prj_codigo`),
  KEY `fk_codigo` (`pes_codigo`),
  CONSTRAINT `fk_codigo` FOREIGN KEY (`pes_codigo`) REFERENCES `pessoa_pes` (`pes_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projeto_prj`
--

LOCK TABLES `projeto_prj` WRITE;
/*!40000 ALTER TABLE `projeto_prj` DISABLE KEYS */;
INSERT INTO `projeto_prj` VALUES (1,'social','pessoas','público','02-10-2010',1),(2,'educacional','crianças','privado','10-03-2008',2),(3,'esportivos','Idosos','público','25-12-2015',3);
/*!40000 ALTER TABLE `projeto_prj` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `usu_codigo` int NOT NULL AUTO_INCREMENT,
  `usu_nome` varchar(40) DEFAULT NULL,
  `usu_apelido` varchar(15) DEFAULT NULL,
  `usu_password` varchar(20) DEFAULT NULL,
  `usu_usuario` varchar(20) DEFAULT NULL,
  `usu_email` varchar(60) DEFAULT NULL,
  `usu_celular` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`usu_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Antonio','Neto','1234','acneto','acneto.frc@hotmail.com','16999671440'),(2,'Maria Madalena','Maria','123','mariagc','mariamada@hotmail.com','16999671525');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-27 13:28:25
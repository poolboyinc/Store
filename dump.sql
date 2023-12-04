-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: clothing_store
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clothes`
--

DROP TABLE IF EXISTS `clothes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clothes` (
  `clothes_id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(9,0) NOT NULL,
  `make` varchar(255) NOT NULL,
  `size` int NOT NULL,
  PRIMARY KEY (`clothes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clothes`
--

LOCK TABLES `clothes` WRITE;
/*!40000 ALTER TABLE `clothes` DISABLE KEYS */;
INSERT INTO `clothes` VALUES (1,'T-shirt','Comfortable cotton T-shirt',20,'Brand A',3),(2,'Jeans','Classic blue denim jeans',50,'Brand B',30),(3,'Hoodie','Warm and stylish hoodie',35,'Brand C',2),(4,'Dress Shirt','Formal white dress shirt',45,'Brand A',15),(5,'Shorts','Casual shorts for summer',25,'Brand D',28),(6,'Sweater','Cozy knitted sweater',40,'Brand B',12),(7,'Jacket','Water-resistant outdoor jacket',60,'Brand C',10),(8,'Skirt','Elegant black skirt',30,'Brand D',20),(9,'Polo Shirt','Collared polo shirt',28,'Brand A',5),(10,'Sweatpants','Relaxed fit sweatpants',32,'Brand B',25),(11,'Blouse','Flowy patterned blouse',38,'Brand C',8),(12,'Cargo Pants','Multi-pocket cargo pants',45,'Brand D',32),(13,'Tank Top','Sleeveless cotton tank top',18,'Brand A',7),(14,'Denim Jacket','Classic denim jacket',55,'Brand B',14),(15,'Maxi Dress','Long and elegant maxi dress',65,'Brand C',18),(16,'Capri Pants','Cropped capri pants',28,'Brand D',22),(17,'Pullover','Casual pullover sweater',30,'Brand A',10),(18,'Swim Trunks','Colorful swim trunks',22,'Brand B',34),(19,'Cardigan','Versatile button-up cardigan',42,'Brand C',16),(20,'Joggers','Comfy jogger pants',30,'Brand D',28),(21,'Halter Top','Stylish halter neck top',25,'Brand A',6),(22,'Chinos','Classic khaki chinos',35,'Brand B',30),(23,'Peplum Top','Flared peplum style top',32,'Brand C',9),(24,'Windbreaker','Lightweight windbreaker jacket',48,'Brand D',14),(25,'V-neck Sweater','V-neck knit sweater',40,'Brand A',12),(26,'Cropped Jeans','Trendy cropped denim jeans',45,'Brand B',26),(27,'Tunic','Loose-fitting tunic top',30,'Brand C',14),(28,'Parka','Insulated parka for winter',70,'Brand D',11),(29,'Poncho','Compact sling bag',18,'Brand A',11),(30,'Beanie','Warm knitted beanie hat',15,'Brand B',3);
/*!40000 ALTER TABLE `clothes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_history`
--

DROP TABLE IF EXISTS `purchase_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_history` (
  `purchase_history_id` int unsigned NOT NULL AUTO_INCREMENT,
  `purchase_date` date NOT NULL,
  `user_id` int unsigned NOT NULL,
  `clothes_id` int unsigned NOT NULL,
  PRIMARY KEY (`purchase_history_id`),
  KEY `user_id` (`user_id`),
  KEY `clothes_id` (`clothes_id`),
  CONSTRAINT `purchase_history_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `purchase_history_ibfk_2` FOREIGN KEY (`clothes_id`) REFERENCES `clothes` (`clothes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_history`
--

LOCK TABLES `purchase_history` WRITE;
/*!40000 ALTER TABLE `purchase_history` DISABLE KEYS */;
INSERT INTO `purchase_history` VALUES (12,'2023-11-26',7,1),(13,'2023-11-26',7,8),(14,'2023-11-26',7,9),(15,'2023-11-26',7,10);
/*!40000 ALTER TABLE `purchase_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_cart`
--

DROP TABLE IF EXISTS `user_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `clothes_id` int unsigned NOT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`),
  KEY `clothes_id` (`clothes_id`),
  CONSTRAINT `user_cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `user_cart_ibfk_2` FOREIGN KEY (`clothes_id`) REFERENCES `clothes` (`clothes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_cart`
--

LOCK TABLES `user_cart` WRITE;
/*!40000 ALTER TABLE `user_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `style` varchar(255) NOT NULL,
  `phone_number` varchar(45) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'user1@example.com','password1','plain','+38267328437','2001-10-13'),(8,'user2@example.com','password2','plain','+38267328437','1972-06-09'),(9,'user3@example.com','password3','casual','555-555-5555','1995-02-20'),(10,'user4@example.com','password4','vintage','111-222-3333','1988-07-10'),(11,'user5@example.com','password5','boho','999-888-7777','1992-09-25'),(12,'user6@example.com','password6','preppy','777-777-7777','1997-03-18');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-26 19:48:29

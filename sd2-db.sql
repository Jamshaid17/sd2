-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Oct 30, 2022 at 09:54 AM
-- Server version: 8.0.24
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sd2-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `test_table`
--

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);


INSERT INTO users (username, email, password) VALUES ('hammad', 'hammad@gmail.com', '123xyz');
-- --
-- -- Dumping data for table `test_table`
-- --



-- --
-- -- Indexes for dumped tables
-- --

-- --
-- -- Indexes for table `test_table`
-- --
-- ALTER TABLE `test_table`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- AUTO_INCREMENT for dumped tables
-- --

-- --
-- -- AUTO_INCREMENT for table `test_table`
-- --
-- ALTER TABLE `test_table`
--   MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
-- COMMIT;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

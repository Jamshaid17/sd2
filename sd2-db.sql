-- Check if the database 'sd2' exists, and if not, create it
CREATE DATABASE IF NOT EXISTS sd2;

-- Use the 'sd2' database
USE sd2;

-- Create users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Create login table if it doesn't exist
CREATE TABLE IF NOT EXISTS login (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
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

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-01-2023 a las 00:20:23
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hunteando`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `nameCategory` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `nameCategory`, `createdAt`, `updatedAt`, `image`) VALUES
(1, 'Hogar', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'https://i.ibb.co/ZcVGP0N/producto-1-y-categoria-hogar.png'),
(2, 'Linea Bebe', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'https://i.ibb.co/zJsVn7z/categoria-bebe-y-producto-3.png'),
(3, 'Accesorio', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'https://i.ibb.co/WyPh11T/categoria-accesorios.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datosenvios`
--

CREATE TABLE `datosenvios` (
  `id` int(11) NOT NULL,
  `postalCode` varchar(150) NOT NULL,
  `city` varchar(150) NOT NULL,
  `state` varchar(150) NOT NULL,
  `number` int(11) NOT NULL,
  `dept` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL,
  `imageA` varchar(100) DEFAULT NULL,
  `imageB` varchar(100) DEFAULT NULL,
  `imageC` varchar(100) DEFAULT NULL,
  `description` text NOT NULL,
  `stock` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `destacado` tinyint(5) DEFAULT NULL,
  `descuento` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `imageA`, `imageB`, `imageC`, `description`, `stock`, `price`, `categoryId`, `createdAt`, `updatedAt`, `destacado`, `descuento`) VALUES
(1, 'Delantal con repasador de Microfibra', 'https://i.ibb.co/ZcVGP0N/producto-1-y-categoria-hogar.png', NULL, NULL, NULL, 'Delantal de cocina realizado en gabardina estampada ,con bolsillo delantero y repasador de toalla microfibra.', 3, 2000, 1, '2022-11-12 22:51:11', '2022-11-12 22:51:11', NULL, NULL),
(2, 'Set matero \"hojitas\"', 'https://i.ibb.co/rmBdvyC/producto-2.png', NULL, NULL, NULL, 'Set matero completo,realizado en gabardina y forrado con plástico anti hongos. Prácticos y cómodos.Lavables.El set incluye azucarero, yerbero,porta mate,mate y bombilla.', 1, 1750, 1, '2022-11-12 22:51:12', '2022-11-12 22:51:12', NULL, NULL),
(3, 'Bolso matero-lona', 'https://i.ibb.co/tX4HzLs/producto-4.png', 'https://i.ibb.co/Jtv96jZ/httpsi-ibb-co-Nm7-SBx6-Producto4-png-png-2.png', 'https://i.ibb.co/dkSY2D2/httpsi-ibb-co-Nm7-SBx6-Producto4-png-png-3.png', NULL, ' Bolso matero transformable en lona o mantel,con bolsillo exterior.Realizado en gabardina y sarga.', 2, 3500, 3, '2022-11-12 22:51:12', '2022-11-12 22:51:12', NULL, NULL),
(4, 'Set bebé', 'https://i.ibb.co/zJsVn7z/categoria-bebe-y-producto-3.png', NULL, NULL, NULL, 'Contiene :organizador rectangular,mantita de piqué y Polar y muñeco de apego.', 2, 3500, 2, '2022-11-12 22:51:12', '2022-11-12 22:51:12', NULL, NULL),
(5, ' Botinero', 'https://i.ibb.co/LCKBFst/producto-5.png', NULL, NULL, NULL, ' Botinero amplio,con bolsillo exterior e interior. Realizado en cordura y forrado en gabardina.', NULL, 2400, 3, '2022-11-15 21:19:24', '2022-11-15 21:19:24', NULL, NULL),
(6, 'Set neceser', 'https://i.ibb.co/ZXMYHMx/producto-6.png', NULL, NULL, NULL, ' Compuesto por 2 necesers y contenedor para cepillo de dientes,forrado en plástico.', NULL, 1850, 3, '2022-11-15 21:20:25', '2022-11-15 21:20:25', NULL, NULL),
(7, 'Cortinas', 'https://i.ibb.co/hKbMKH9/producto-7.png', NULL, NULL, NULL, 'Cortinas largas,realizadas en tropical mecánico y faldón de gabardina estampada. 1,90 x 1,50m cada p', NULL, 4200, 1, '2022-11-15 21:22:32', '2022-11-15 21:22:32', NULL, NULL),
(8, ' Mochila', 'https://i.ibb.co/Y0J0vGk/producto-8.png', NULL, NULL, NULL, 'Realizada en gabardina combinada con bolsillo frontal y dos bolsillos laterales.\r\nCategoría: Accesor', NULL, 3800, 3, '2022-11-15 21:24:34', '2022-11-15 21:24:34', NULL, NULL),
(9, 'Mochila', 'https://i.ibb.co/CMgtRLF/producto-9.png', NULL, NULL, NULL, 'Realizada en gabardina, con bolsillo frontal. ¡Súper amplia y resistente!\r\nCategoría: Accesorio\r\n', NULL, 3800, 3, '2022-11-15 21:30:33', '2022-11-15 21:30:33', NULL, NULL),
(10, 'Porta papel higiénico', 'https://i.ibb.co/2YCJpYW/producto-10.png', NULL, NULL, NULL, 'Porta papel higiénico. Realizado en provenzal.', NULL, 500, 1, '2022-11-15 21:34:27', '2022-11-15 21:34:27', NULL, NULL),
(12, 'Carolina', 'https://i.ibb.co/ZcVGP0N/producto-1-y-categoria-hogar.png', NULL, NULL, NULL, 'Delantal de cocina realizado', 1, 2000, 3, '2023-01-25 14:04:12', '2023-01-25 14:04:12', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `total` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20221020200436-create-category.js'),
('20221020200650-create-product.js'),
('20221020211025-create-descuento.js'),
('20221020211802-create-descuento-products.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `saleId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` text NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `_id` varchar(50) CHARACTER SET utf8 NOT NULL,
  `firstname` varchar(30) CHARACTER SET utf8 NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8 NOT NULL,
  `address_mail` varchar(50) CHARACTER SET utf8 NOT NULL,
  `password` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `google_id` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `rol_user` varchar(20) CHARACTER SET utf8 NOT NULL,
  `photo_perfil` varchar(200) CHARACTER SET utf16 DEFAULT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `createdAt` varchar(50) CHARACTER SET utf8 NOT NULL,
  `updatedAt` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `_id`, `firstname`, `lastname`, `address_mail`, `password`, `google_id`, `rol_user`, `photo_perfil`, `phone_number`, `createdAt`, `updatedAt`) VALUES
(1, '7f3b4815-25d6-45b2-bc61-af3201e48906', 'Gabriela', 'Martinez', 'gabi15@gmail.com', '$2b$12$99oEn/eKz7d6.c7LK9vfk.CewPTV21d5o0TDUmAiXgCYb9avhGt6O', 'jsldkjflsdfhs', 'cliente', 'sdhkfsh.jpg', '646547848', '2022-11-22 02:17:48', '2022-11-22 02:17:48'),
(2, 'a187cca8-c2f6-472e-84e3-c38673eaf0ea', 'Caro', 'Ciri', 'caro@gmail', '$2b$12$HpG7jFDawAoS665o/.4ZIeHzpxr0vfxUodbVhjMxM3QUhqnSoDQMa', 'jsldkjflsdfhs', 'admin', 'sdhkfsh.jpg', '646547848', '2022-11-25 22:02:59', '2023-01-18 18:49:27');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `datosenvios`
--
ALTER TABLE `datosenvios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tickets` (`productId`),
  ADD KEY `saleId` (`saleId`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `datosenvios`
--
ALTER TABLE `datosenvios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `saleId` FOREIGN KEY (`saleId`) REFERENCES `sales` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

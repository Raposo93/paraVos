-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-11-2022 a las 00:25:04
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hunteando_bd`
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
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `nameCategory`, `createdAt`, `updatedAt`, `image`) VALUES
(1, 'Hogar', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'categoriaHogar.png'),
(2, 'Linea Bebe', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'categoriaBebe.jpg'),
(3, 'Accesorio', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'categoriaAccesorios.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descuentoproducts`
--

CREATE TABLE `descuentoproducts` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descuentos`
--

CREATE TABLE `descuentos` (
  `id` int(11) NOT NULL,
  `porcentaje` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `stock` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `description`, `stock`, `price`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(1, 'Delantal con repasador de Microfibra', 'Producto1.png', 'Delantal de cocina realizado en gabardina estampada ,con bolsillo delantero y repasador de toalla mi', NULL, 2000, 1, '2022-11-12 22:51:11', '2022-11-12 22:51:11'),
(2, 'Set matero \"hojitas\"', 'Producto2.png', 'Set matero completo,realizado en gabardina y forrado con plástico anti hongos. Prácticos y cómodos.L', NULL, 1750, 1, '2022-11-12 22:51:12', '2022-11-12 22:51:12'),
(3, 'Bolso matero-lona', 'Producto3.png', ' Bolso matero transformable en lona o mantel,con bolsillo exterior.Realizado en gabardina y sarga, p', NULL, 3500, 3, '2022-11-12 22:51:12', '2022-11-12 22:51:12'),
(4, 'Set bebé', 'Producto4.png', 'Contiene :organizador rectangular,mantita de piqué y Polar y muñeco de apego.', NULL, 3500, 2, '2022-11-12 22:51:12', '2022-11-12 22:51:12'),
(5, ' Botinero', 'Producto5.png', ' Botinero amplio,con bolsillo exterior e interior. Realizado en cordura y forrado en gabardina.', NULL, 2400, 3, '2022-11-15 21:19:24', '2022-11-15 21:19:24'),
(6, 'Set neceser', 'Producto6.png', ' Compuesto por 2 necesers y contenedor para cepillo de dientes,forrado en plástico.', NULL, 1850, 3, '2022-11-15 21:20:25', '2022-11-15 21:20:25'),
(7, 'Cortinas', 'Producto7.png', 'Cortinas largas,realizadas en tropical mecánico y faldón de gabardina estampada. 1,90 x 1,50m cada p', NULL, 4200, 1, '2022-11-15 21:22:32', '2022-11-15 21:22:32'),
(8, ' Mochila', 'Producto8.png', 'Realizada en gabardina combinada con bolsillo frontal y dos bolsillos laterales.\r\nCategoría: Accesor', NULL, 3800, 3, '2022-11-15 21:24:34', '2022-11-15 21:24:34'),
(9, 'Mochila', 'Producto9.png', 'Realizada en gabardina, con bolsillo frontal. ¡Súper amplia y resistente!\r\nCategoría: Accesorio\r\n', NULL, 3800, 3, '2022-11-15 21:30:33', '2022-11-15 21:30:33'),
(10, 'Porta papel higiénico', 'Producto10.png', 'Porta papel higiénico. Realizado en provenzal.', NULL, 500, 1, '2022-11-15 21:34:27', '2022-11-15 21:34:27');

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
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `_id` varchar(50) CHARACTER SET utf8 NOT NULL,
  `firstname` varchar(30) CHARACTER SET utf8 NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8 NOT NULL,
  `address_mail` varchar(50) CHARACTER SET utf8 NOT NULL,
  `password` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `google_id` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `rol_user` varchar(20) CHARACTER SET utf8 NOT NULL,
  `photo_perfil` varchar(200) CHARACTER SET utf16 NOT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8 NOT NULL,
  `createdAt` varchar(50) CHARACTER SET utf8 NOT NULL,
  `updatedAt` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`_id`, `firstname`, `lastname`, `address_mail`, `password`, `google_id`, `rol_user`, `photo_perfil`, `phone_number`, `createdAt`, `updatedAt`) VALUES
('7f3b4815-25d6-45b2-bc61-af3201e48906', 'Gabriela', 'Martinez', 'gabi15@gmail.com', '$2b$12$99oEn/eKz7d6.c7LK9vfk.CewPTV21d5o0TDUmAiXgCYb9avhGt6O', 'jsldkjflsdfhs', 'cliente', 'sdhkfsh.jpg', '646547848', '2022-11-22 02:17:48', '2022-11-22 02:17:48'),
('a187cca8-c2f6-472e-84e3-c38673eaf0ea', 'Juanito', 'Perez', 'juanito@gmail.com', '$2b$12$HpG7jFDawAoS665o/.4ZIeHzpxr0vfxUodbVhjMxM3QUhqnSoDQMa', 'jsldkjflsdfhs', 'cliente', 'sdhkfsh.jpg', '646547848', '2022-11-25 22:02:59', '2022-11-25 22:22:55');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `descuentoproducts`
--
ALTER TABLE `descuentoproducts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `descuentos`
--
ALTER TABLE `descuentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `descuentoproducts`
--
ALTER TABLE `descuentoproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `descuentos`
--
ALTER TABLE `descuentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

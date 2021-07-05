CREATE DATABASE desafio;

USE desafio;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `password` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1

CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `id_user_owner` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user_owner` (`id_user_owner`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`id_user_owner`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1


CREATE TABLE `loan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user_receiver` int(11) NOT NULL,
  `id_book` int(11) NOT NULL,
  `returned` tinyint(1) NOT NULL,
  `date_loan` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user_receiver` (`id_user_receiver`),
  KEY `loan_ibfk_2` (`id_book`),
  CONSTRAINT `loan_ibfk_1` FOREIGN KEY (`id_user_receiver`) REFERENCES `user` (`id`),
  CONSTRAINT `loan_ibfk_2` FOREIGN KEY (`id_book`) REFERENCES `book` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1




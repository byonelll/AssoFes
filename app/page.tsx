"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      
      {/* Effet décoratif en arrière-plan */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/logo_assoFes.png"
          alt="Logo Asso Fès"
          width={200}
          height={200}
          priority
        />
      </motion.div>

      {/* Titre principal */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mt-8 mb-4 text-center text-gray-800 leading-snug"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Bienvenue sur la plateforme des associations{" "}
        <span className="text-blue-600">étudiantes et stagiaires</span> de Fès
      </motion.h1>

      {/* Texte enrichi */}
      <motion.p
        className="text-lg md:text-xl text-center max-w-3xl mb-20 text-gray-600"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Retrouvez toutes les associations étudiantes et stagiaires, leurs missions, 
        contacts et bureaux sur une seule plateforme moderne et intuitive. <br />
        Vous y découvrirez la richesse de la vie associative de Fès, 
        des opportunités de réseautage et des événements pour renforcer 
        les liens entre étudiants et stagiaires de tous horizons. <br /><br />
       
      </motion.p>

      {/* Bouton FIXE */}
      <motion.a
        href="/associations"
        className="fixed bottom-8 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 hover:scale-105 transform transition"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Voir les associations
      </motion.a>
    </main>
  );
}

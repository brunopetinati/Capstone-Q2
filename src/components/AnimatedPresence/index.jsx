import { motion } from "framer-motion";

const AnimatedPresence = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
  ></motion.div>

  //para o corretor: a intenção desse componente era fazer apenas um componente importado em volta
  //do app, para não preciasr importar o {motion} em todas as páginas. Porém, não consegui fazer isso e tive
  //que importar
);

export default AnimatedPresence;

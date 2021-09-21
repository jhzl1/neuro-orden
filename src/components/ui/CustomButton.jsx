import { motion } from "framer-motion";

const CustomButton = ({
  title,
  type = "button",
  className,
  color = "primary",
  ...rest
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={` ${
        color === "primary" ? "btn-primary " : "btn-secondary"
      } py-2  px-5 rounded  font-bold ${className} transitions`}
      type={type}
      {...rest}
    >
      {title}
    </motion.button>
  );
};

export default CustomButton;

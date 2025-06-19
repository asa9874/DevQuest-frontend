import { motion } from "framer-motion";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-red-500 text-white px-4 py-2 rounded-md text-sm text-center mt-4"
    >
      {message}
    </motion.div>
  );
}

export default ErrorMessage;
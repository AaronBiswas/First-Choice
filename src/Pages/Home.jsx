import CardWrapper from "../Components/CardWrapper";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (gender) => {
    navigate(`/Clothes/${gender}`);
  };

  return (
    <div className="flex md:flex-row justify-center items-center gap-4 p-4 mt-16">
      <div className="w-1/3 h-64 p-4">
        <CardWrapper>
          <img
            src="/men.jpg"
            alt="Men's Collection"
            className="w-full h-1/2 object-cover rounded"
          />
          <h2 className="text-2xl font-semibold mt-2">Men</h2>
          <p className="text-sm text-gray-600">Explore our men's collection.</p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <button
              onClick={() => handleClick("Men")}
              className="btn sm:btn-sm md:btn-md lg:btn-lg rounded-full mt-4"
            >
              Shop Now!
            </button>
          </motion.div>
        </CardWrapper>
      </div>
      <div className="w-1/3 h-64 p-4">
        <CardWrapper>
          <img
            src="/women.jpg"
            alt="Women's Collection"
            className="w-full h-1/2 object-cover rounded"
          />
          <h2 className="text-2xl font-semibold mt-2">Women</h2>
          <p className="text-sm text-gray-600">Discover the women's range.</p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <button
              onClick={() => handleClick("Women")}
              className="btn sm:btn-sm md:btn-md lg:btn-lg rounded-full mt-4"
            >
              Shop Now!
            </button>
          </motion.div>
        </CardWrapper>
      </div>
    </div>
  );
};

export default Home;

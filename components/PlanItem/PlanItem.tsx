import { motion, AnimatePresence } from "framer-motion";
import {
  BsTrash,
  BsRocketTakeoff,
  BsStar,
  BsStarFill,
  BsRocketTakeoffFill,
  BsTrashFill,
} from "react-icons/bs";

const PlanItem = ({
  id,
  text,
  imgSrc,
  moreImages,
  hoveredIcon,
  handleMouseEnter,
  handleMouseLeave,
  isNew,
}: any) =>
  isNew ? (
    <AnimatePresence key={id}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-center h-[120px] border border-solid border-orange-600 m-1 flex items-center p-2"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative flex-shrink-0"
        >
          <img src={imgSrc} alt="image" className="h-24 w-24 object-cover" />
          <div className="absolute bottom-0 right-0 bg-black text-white text-xs rounded-full px-2 py-1">
            +{moreImages}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="ml-4 h-full text-left flex flex-col justify-around w-full "
        >
          <div className="text-xl font-semibold">{text}</div>
          <div className="text-gray-600 flex justify-between items-center pr-2">
            <div>description</div>
            <div className="flex gap-2 cursor-pointer text-primary">
              <div
                onMouseEnter={() => handleMouseEnter(id, "rocket")}
                onMouseLeave={() => handleMouseLeave(id)}
              >
                {hoveredIcon === "rocket" ? (
                  <BsRocketTakeoffFill />
                ) : (
                  <BsRocketTakeoff />
                )}
              </div>
              <div
                onMouseEnter={() => handleMouseEnter(id, "star")}
                onMouseLeave={() => handleMouseLeave(id)}
              >
                {hoveredIcon === "star" ? <BsStarFill /> : <BsStar />}
              </div>
              <div
                onMouseEnter={() => handleMouseEnter(id, "trash")}
                onMouseLeave={() => handleMouseLeave(id)}
              >
                {hoveredIcon === "trash" ? <BsTrashFill /> : <BsTrash />}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  ) : (
    <div
      key={id}
      className="text-center h-[120px] border border-solid border-orange-600 m-1 flex items-center p-2"
    >
      <div className="relative flex-shrink-0">
        <img src={imgSrc} alt="image" className="h-24 w-24 object-cover" />
        <div className="absolute bottom-0 right-0 bg-black text-white text-xs rounded-full px-2 py-1 opacity-80">
          +{moreImages}
        </div>
      </div>
      <div className="ml-4 h-full w-full text-left flex flex-col justify-around">
        <div className="text-xl font-semibold">{text}</div>
        <div className="text-gray-600 flex justify-between items-center pr-2">
          <div>description</div>
          <div className="flex gap-2 cursor-pointer text-primary">
            <div
              onMouseEnter={() => handleMouseEnter(id, "rocket")}
              onMouseLeave={() => handleMouseLeave(id)}
            >
              {hoveredIcon === "rocket" ? (
                <BsRocketTakeoffFill />
              ) : (
                <BsRocketTakeoff />
              )}
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(id, "star")}
              onMouseLeave={() => handleMouseLeave(id)}
            >
              {hoveredIcon === "star" ? <BsStarFill /> : <BsStar />}
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(id, "trash")}
              onMouseLeave={() => handleMouseLeave(id)}
            >
              {hoveredIcon === "trash" ? <BsTrashFill /> : <BsTrash />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default PlanItem;

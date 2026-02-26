import { MdOutlineWaterDrop } from "react-icons/md";
import { LiaExclamationCircleSolid } from "react-icons/lia";
import { FiCheckSquare } from "react-icons/fi";
import { LuCircleCheckBig } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";

function Features() {
  return (
    <section className="bg-gray-100 py-20 ">
      <div className="max-w-6xl mx-auto px-6 sm:py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-center">
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm sm:border-0 sm:shadow-none sm:bg-transparent">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm mb-4">
              <MdOutlineWaterDrop className="w-7 h-7 text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-800">
              Unvented Hot Water Systems
            </h3>
            <p className="text-sm text-gray-500 mt-2">
             Specialists in modern systems
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm sm:border-0 sm:shadow-none sm:bg-transparent">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm mb-4">
              <LiaExclamationCircleSolid className="w-8 h-8 text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-800">Best Setup Advice</h3>
            <p className="text-sm text-gray-500 mt-2">
              Expert recommendations
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm sm:border-0 sm:shadow-none sm:bg-transparent">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm mb-4">
              <FiCheckSquare  className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-800">
              Fully Certified & Insured
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Complete peace of mind
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm sm:border-0 sm:shadow-none sm:bg-transparent">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm mb-4">
              <LuCircleCheckBig className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-800">
              Preventative Maintenance
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Reduce breakdowns
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm sm:border-0 sm:shadow-none sm:bg-transparent">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm mb-4">
              <FaRegClock className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-800">Fast Turnaround</h3>
            <p className="text-sm text-gray-500 mt-2">
              Quick repairs when needed
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm sm:border-0 sm:shadow-none sm:bg-transparent">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm mb-4">
              <LuDollarSign className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-800">Transparent Pricing</h3>
            <p className="text-sm text-gray-500 mt-2">
              No hidden costs
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;
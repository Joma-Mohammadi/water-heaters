import { FaCheck } from "react-icons/fa6";

function ServiceCard({ icon, title, description, features = [] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
      <div>
        <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full mb-4 ">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-slate-700 mb-2">{title}</h3>

        <p className="text-sm text-gray-500 mb-4">{description}</p>

        <ul className="space-y-5 mb-6">
          {features.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <span className="text-green-500">
                <FaCheck />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <a
       href="tel:07852121346"
        className="inline-flex  border-2 border-slate-800 text-slate-700  font-semibold px-4 py-2 rounded-md hover:bg-slate-800 hover:text-white transition"
      >
       <p> Call Us Now →</p>
      </a>
    </div>
  );
}

export default ServiceCard;

import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

const Contac = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-gray-400 to-gray-600 text-white">
      <div className="max-w-2xl  w-3/4 bg-white bg-opacity-10 mx-auto rounded-lg p-8 shadow-lg backdrop-blur-sm">
        <div className="text-center pb-6">
          <h1 className="text-4xl font-bold text-white mb-2">Contact Information</h1>
          <p className="text-gray-300">Here are my details, feel free to reach out!</p>
        </div>

        <div className="space-y-6 text-lg">
          {/* Full Name */}
          <div className="flex items-center gap-4">
            <FaUser className="text-2xl text-primary" />
            <span className="font-semibold">Full Name:</span>
            <span>Amos Clinton Wanyangu</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-primary" />
            <span className="font-semibold">Email:</span>
            <span>amosclinton196@gmail.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-primary" />
            <span className="font-semibold">Phone:</span>
            <span>+254 114 290 760</span>
          </div>

          {/* ID */}
          <div className="flex items-center gap-4">
            <FaIdCard className="text-2xl text-primary" />
            <span className="font-semibold">ID No:</span>
            <span>40027677</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-primary" />
            <span className="font-semibold">Location:</span>
            <span>Kisii</span>
          </div>

          {/* Education */}
          <div className="flex items-center gap-4">
            <FaGraduationCap className="text-2xl text-primary" />
            <span className="font-semibold">Education:</span>
            <span>BSC Information Technology Graduate, Kisii University, Class of 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contac;

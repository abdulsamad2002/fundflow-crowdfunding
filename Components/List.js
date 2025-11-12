import React from "react";

const List = (props) => {
  return (
    <div className="group bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 ">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {props.name.charAt(0).toUpperCase()}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-semibold text-lg truncate">
              {props.name}
            </h3>
            <div className="flex items-center gap-1 bg-gradient-to-r from-green-500/20 to-emerald-600/20 px-3 py-1 rounded-full border border-green-500/30">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-400 font-bold text-sm">
                ${props.amount}
              </span>
            </div>
          </div>

          {props.message && (
            <p className="text-gray-400 text-sm leading-relaxed break-words">
              {props.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;

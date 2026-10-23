import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Outer Spinner Ring */}
            <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                {/* Inner Decorative Dot */}
                <div className="absolute w-4 h-4 bg-indigo-600 rounded-full animate-pulse"></div>
            </div>

            {/* Loading Text */}
            <h2 className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-200 animate-pulse">
                Loading, please wait...
            </h2>
            <p className="text-sm text-gray-400">Preparing content for you</p>
        </div>
    );
};

export default Loading;
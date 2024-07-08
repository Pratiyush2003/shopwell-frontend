import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="flex flex-col">
          <div className="w-full border-b-2 border-gray-200"></div>
          <div className="flex bg-gray-100 overflow-x-hidden">
            <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
              <div className="flex flex-col pt-5 overflow-y-auto">
                <div className="h-full flex flex-col justify-between px-4">
                  <div className="space-y-4">
                    <div className="bg-top bg-cover space-y-1">
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                      >
                        <span className="flex items-center">
                          <svg
                            className="flex-shrink-0 w-5 h-5 mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        </span>
                        <span>Dashboard</span>
                      </a>
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 block transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                      >
                        <span className="flex items-center">
                          <svg
                            className="mr-4"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17"
                              stroke="#4F4F4F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="2"
                              stroke="#4F4F4F"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                        <span>About</span>
                      </a>
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                      >
                        <span className="flex items-center">
                          <svg
                            className="mr-4"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 10L8 16"
                              stroke="#4F4F4F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 12V16"
                              stroke="#4F4F4F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 8V16"
                              stroke="#4F4F4F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="16"
                              rx="2"
                              stroke="#4F4F4F"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                        <span>Hero</span>
                      </a>
                    </div>
                    <div>
                      <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">
                        Data
                      </p>
                      <div className="mt-4 bg-top bg-cover space-y-1">
                        <a
                          href="#"
                          className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 block transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <span className="flex items-center">
                            <svg
                              className="mr-4"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <ellipse
                                cx="12"
                                cy="7"
                                rx="7"
                                ry="3"
                                stroke="#4F4F4F"
                                strokeWidth="2"
                              />
                            </svg>
                          </span>
                          <span>Folders</span>
                        </a>
                        <a
                          href="#"
                          className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 block transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <span className="flex items-center">
                            <svg
                              className="mr-4"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.90112 11.8461C7.55156 9.56955 9.63235 8 12 8V8C14.3676 8 16.4484 9.56954 17.0989 11.8461L17.6571 13.7998C17.8843 14.5951 18.2336 15.3504 18.6924 16.0386L18.8012 16.2018C18.9408 16.4111 19.0105 16.5158 19.045 16.5932C19.3105 17.1894 18.943 17.8759 18.2997 17.9857C18.2162 18 18.0904 18 17.8388 18H6.16116C5.90958 18 5.78379 18 5.70027 17.9857C5.05697 17.8759 4.68952 17.1894 4.955 16.5932C4.98947 16.5158 5.05924 16.4111 5.19879 16.2018L5.30758 16.0386C5.76642 15.3504 6.11569 14.5951 6.34293 13.7998L6.90112 11.8461Z"
                                fill="#4F4F4F"
                              />
                              <path
                                d="M11 9L12 3"
                                stroke="#4F4F4F"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M13 9L12 3"
                                stroke="#4F4F4F"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M12.5 21H11.5"
                                stroke="#4F4F4F"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                          <span>Alerts</span>
                        </a>
                        <a
                          href="#"
                          className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <span className="flex items-center">
                            <svg
                              className="flex-shrink-0 w-5 h-5 mr-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 12h.01M12 12h.01M16 12h.01M9 16h6M8 20h8a2 2 0 002-2v-6a2 2 0 00-2-2V7a4 4 0 10-8 0v3a2 2 0 00-2 2v6a2 2 0 002 2z"
                              />
                            </svg>
                          </span>
                          <span>Sales</span>
                        </a>
                        <a
                          href="#"
                          className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <span className="flex items-center">
                            <svg
                              className="flex-shrink-0 w-5 h-5 mr-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.121 17.804A2 2 0 014 16.414V12a8 8 0 018-8V3.5a1.5 1.5 0 013 0V4a8 8 0 018 8v4.414a2 2 0 01-1.121 1.39m-15.758 0a3.97 3.97 0 001.529.291h12.6a3.97 3.97 0 001.529-.291m-15.758 0L7 21m10.879-3.196L17 21"
                              />
                            </svg>
                          </span>
                          <span>Manage</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="border-t-2 pt-4 border-gray-200">
                      <div className="bg-top bg-cover space-y-1">
                        <a
                          href="#"
                          className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 block transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <span className="flex items-center">
                            <svg
                              className="mr-4"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="9"
                                stroke="#4F4F4F"
                                strokeWidth="2"
                              />
                              <path
                                d="M8.464 15.536 15.536 8.464M15.536 15.536 8.464 8.464"
                                stroke="#4F4F4F"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                          <span>Logout</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border-t-2 border-gray-200"></div>
            </div>
            <div className="flex-grow flex-col w-full min-w-0 p-6">
              <div className="lg:hidden lg:pb-0 pb-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

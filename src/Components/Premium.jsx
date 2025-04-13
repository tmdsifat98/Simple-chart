import React, { use } from "react";

const Premium = ({ promisePremium }) => {
  const premiumDataSet = use(promisePremium);
  const premiumData = premiumDataSet.data;
  return (
    <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-16 my-12 ">
      {premiumData.map((singleData) => (
        <div className="card w-96 mx-auto bg-base-100 shadow-lg shadow-gray-300">
          <div className="card-body">
            {singleData.popular && (
              <span className="badge badge-xs badge-warning">Most Popular</span>
            )}

            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">{singleData.name}</h2>
              <span className="text-xl">${singleData.price}/Mo</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
              {singleData.features.map((feature) => (
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block">Subscribe</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Premium;

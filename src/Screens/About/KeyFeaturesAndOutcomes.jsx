import React from 'react';

const KeyFeaturesAndOutcomes = () => {
  return (
    <div className="bg-[#03091D] py-12">
      <div className="max-w-[1350px] mx-auto w-full my-10 md:my-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pathsetter.AI's Core Values in AI Innovation
          </h2>
          <p className="text-xl text-gray-300">
            We Design to Elevate Your Organization’s Performance to Peak Success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Key Features</h3>
            <div className="space-y-6">
              {[
                "Real-Time Data Integration",
                "Natural Language Processing (NLP)",
                "Pre-built Algorithms",
                "Dynamic Dashboards",
                "Drill-Down Capabilities",
                "Data fetching from non-digital sources",
                "Annotation of data",
              ].map((feature) => (
                <div key={feature} className="p-4 bg-[#121212] text-white rounded-lg shadow-lg border-2 border-transparent hover:border-[#00bcd4] transition-all">
                  <h4 className="text-2xl font-semibold mb-2">{feature}</h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Key Outcomes</h3>
            <div className="space-y-6">
              {[
                "Action-oriented insights",
                "Custom platform for your organization",
                "Constant updating with evolving LLMs",
                "Insights from all data types- historical and disparate",
                "Comprehensive data correlations towards root-cause analysis",
              ].map((outcome) => (
                <div key={outcome} className="p-4 bg-[#121212] text-white rounded-lg shadow-lg border-2 border-transparent hover:border-[#00bcd4] transition-all">
                  <h4 className="text-2xl font-semibold mb-2">{outcome}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesAndOutcomes;

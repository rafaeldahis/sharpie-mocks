
import React from 'react';
import { SketchCard, SketchPricingTable } from '../marker';
import { Check, X } from 'lucide-react';

interface PricingTableSectionProps {
  pricingTiers: Array<{
    name: string;
    price: number;
    period: string;
    description: string;
    features: Array<{ name: string; included: boolean }>;
    buttonText: string;
    highlight?: boolean;
  }>;
  className?: string; // Added className prop to the interface
}

const PricingTableSection: React.FC<PricingTableSectionProps> = ({ pricingTiers, className = '' }) => {
  return (
    <SketchCard title="Pricing Table" className={`mb-6 ${className}`}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`sketch-border p-5 flex flex-col ${
                tier.highlight ? 'bg-sketch-hover transform -translate-y-1 border-2 border-sketch-accentBlue' : ''
              }`}
              style={{ transform: `rotate(${index % 2 === 0 ? '0.3deg' : '-0.3deg'})` }}
            >
              <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-large-metric font-bold">${tier.price}</span>
                <span className="text-sm text-gray-500">/{tier.period}</span>
              </div>
              <p className="text-sm mb-4">{tier.description}</p>
              
              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-sketch-accentBlue mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-2" />
                      )}
                      <span className={`text-sm ${feature.included ? '' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className={`sketch-btn ${tier.highlight ? 'bg-sketch-accentBlue text-white' : 'bg-sketch-midGrey text-white'}`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </SketchCard>
  );
};

export default PricingTableSection;

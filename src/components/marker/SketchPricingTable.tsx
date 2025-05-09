
import React from 'react';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string | number;
  period?: string;
  description?: string;
  features: PricingFeature[];
  buttonText?: string;
  onButtonClick?: () => void;
  highlight?: boolean;
}

interface SketchPricingTableProps {
  tiers: PricingTier[];
  className?: string;
}

const SketchPricingTable: React.FC<SketchPricingTableProps> = ({
  tiers,
  className = '',
}) => {
  return (
    <div className={`sketch-pricing-container ${className}`}>
      <div className="sketch-pricing-tiers">
        {tiers.map((tier, index) => (
          <div 
            key={index} 
            className={`sketch-pricing-tier ${tier.highlight ? 'sketch-pricing-tier-highlighted' : ''}`}
          >
            <div className="sketch-pricing-header">
              <h3 className="sketch-pricing-name">{tier.name}</h3>
              <div className="sketch-pricing-price">
                {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                {tier.period && <span className="sketch-pricing-period">/{tier.period}</span>}
              </div>
              {tier.description && (
                <p className="sketch-pricing-description">{tier.description}</p>
              )}
            </div>
            
            <div className="sketch-pricing-features">
              {tier.features.map((feature, featureIndex) => (
                <div 
                  key={featureIndex} 
                  className={`sketch-pricing-feature ${!feature.included ? 'sketch-pricing-feature-excluded' : ''}`}
                >
                  {feature.included ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  )}
                  <span>{feature.name}</span>
                </div>
              ))}
            </div>
            
            <div className="sketch-pricing-footer">
              <button 
                className={`sketch-btn ${tier.highlight ? 'sketch-btn-primary' : ''}`}
                onClick={tier.onButtonClick}
              >
                {tier.buttonText || 'Choose Plan'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SketchPricingTable;

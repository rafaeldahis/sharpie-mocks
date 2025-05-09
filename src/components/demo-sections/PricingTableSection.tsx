
import React from 'react';
import { SketchCard, SketchPricingTable } from '../marker';

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
}

const PricingTableSection: React.FC<PricingTableSectionProps> = ({ pricingTiers }) => {
  return (
    <SketchCard title="Pricing Table" className="mb-6 col-span-1 md:col-span-2">
      <div className="space-y-4">
        <p>Pricing comparison table:</p>
        <SketchPricingTable tiers={pricingTiers} />
      </div>
    </SketchCard>
  );
};

export default PricingTableSection;

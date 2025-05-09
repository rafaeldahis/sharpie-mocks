
import React from 'react';
import { SketchCard } from '../marker';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <SketchCard title="Frequently Asked Questions" className="mb-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="sketch-border border rounded-md mb-2">
          <AccordionTrigger className="px-4 py-2">
            How do I use this component?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-2">
            Simply import the Accordion components from UI library and customize the content as needed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="sketch-border border rounded-md mb-2">
          <AccordionTrigger className="px-4 py-2">
            Can I customize the styling?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-2">
            Yes! You can modify the sketch-style CSS classes to match your application's design.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="sketch-border border rounded-md">
          <AccordionTrigger className="px-4 py-2">
            Is this responsive?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-2">
            Absolutely! All components are designed with mobile-first principles.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SketchCard>
  );
};

export default FAQSection;

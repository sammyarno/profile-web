import { FaCode, FaDatabase, FaPalette } from 'react-icons/fa';

import { services } from 'constants/About';

const Services = () => {
  const renderIcon = (icon: string) => {
    if (icon === 'palette') {
      return <FaPalette className="text-2xl" />;
    } else if (icon === 'code') {
      return <FaCode className="text-2xl" />;
    } else if (icon === 'database') {
      return <FaDatabase className="text-2xl" />;
    }
  };

  return (
    <div className="flex flex-col">
      <h4 className="font-fira text-primary mb-6 text-2xl tracking-wider">Services()</h4>
      <div className="flex flex-col gap-4">
        {services.map(service => (
          <div key={service.title} className="rounded bg-[#598392]/20 px-4 py-3">
            <div className="text-primary mb-3 flex justify-between">
              <h4 className="text-lg tracking-wider">{service.title}</h4>
              {renderIcon(service.icon)}
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

import { FaPalette, FaCode, FaDatabase } from 'react-icons/fa';
import useViewportSize from 'hooks/ViewportSize';
import { services } from 'constants/About';

const MapIconToFA = {
  palette: FaPalette,
  code: FaCode,
  database: FaDatabase,
}

const Services = () => {
  const viewportSize = useViewportSize();

  const renderIcon = (icon: string) => {
    if (icon === 'palette') {
      return <FaPalette size="lg" />;
    } else if (icon === 'code') {
      return <FaCode size="lg" />;
    } else if (icon === 'database') {
      return <FaDatabase size="lg" />;
    }
  };

  return (
    <>
      <h4 className="fira-mono text-primary mb-3">Services()</h4>
      <div className="service-container">
        {
          services.map((service) => (
            <div key={service.title} className="service rounded py-3 px-4">
              <div className="header d-flex justify-content-between align-items-center text-primary mb-3">
                {
                  !viewportSize.isMobile
                    ? (
                      <>
                        <h4>{service.title}</h4>
                        {renderIcon(service.icon)}
                      </>
                    ) : (
                      <>
                        <h5><strong>{service.title}</strong></h5>
                        {renderIcon(service.icon)}
                      </>
                    )
                }
              </div>
              <p>{service.description}</p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Services;

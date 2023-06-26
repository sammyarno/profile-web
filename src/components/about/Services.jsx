import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useViewportSize from 'hooks/ViewportSize';
import { services } from 'constants/About';

const Services = () => {
  const viewportSize = useViewportSize();

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
                        <FontAwesomeIcon icon={service.icon} size="lg" />
                      </>
                    ) : (
                      <>
                        <h5><strong>{service.title}</strong></h5>
                        <FontAwesomeIcon icon={service.icon} size="lg" />
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

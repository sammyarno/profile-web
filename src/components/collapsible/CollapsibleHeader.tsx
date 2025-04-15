import { ICollapsibleHeaderProps } from './types';

const CollapsibleHeader = ({ company, duration }: ICollapsibleHeaderProps) => (
  <h5 className="header rounded py-2 px-3 text-primary">
    {company} <small className="text-muted">({duration})</small>
  </h5>
);

export default CollapsibleHeader;

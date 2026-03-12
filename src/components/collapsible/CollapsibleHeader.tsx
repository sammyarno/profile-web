import { ICollapsibleHeaderProps } from './types';

const CollapsibleHeader = ({ company, duration }: ICollapsibleHeaderProps) => (
  <h5 className="text-primary bg-primary/20 font-fira tracking-wi rounded p-2">
    {company} <small className="text-muted">({duration})</small>
  </h5>
);

export default CollapsibleHeader;

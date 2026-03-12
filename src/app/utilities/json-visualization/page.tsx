import JSONVisualization from 'containers/utilities/jsonVisualization';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JSON Visualization',
  description: 'Visualize JSON data as an interactive tree diagram.',
};

export default function JSONVisualizationPage() {
  return <JSONVisualization />;
}

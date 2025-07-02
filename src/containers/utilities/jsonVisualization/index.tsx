'use client';

import { useEffect, useRef, useState } from 'react';

import * as d3 from 'd3';

import { IHierarchyNode, ISampleData } from './types';

const sampleData: ISampleData = {
  name: 'John Doe',
  age: 30,
  contact: {
    email: 'johndoe@example.com',
    phone: '+1234567890',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipcode: '10001',
      country: 'USA',
    },
  },
  social: {
    twitter: '@johndoe',
    instagram: '@johndoe',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',
    website: 'johndoe.com',
  },
  work: {
    position: 'Software Engineer',
    company: {
      name: 'TechCorp',
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zipcode: '94107',
        street: '456 Tech Street',
      },
      industry: 'Technology',
    },
    experience: {
      years: 8,
      skills: {
        frontend: ['React', 'Vue', 'CSS'],
        backend: ['Node.js', 'Express', 'MongoDB'],
        devops: ['Docker', 'AWS', 'CI/CD'],
        tools: ['Git', 'JIRA', 'Postman'],
        soft_skills: ['Leadership', 'Communication', 'Problem-solving'],
      },
      projects: {
        project1: {
          name: 'E-commerce Platform',
          tech_stack: ['React', 'Node.js', 'MongoDB'],
          role: 'Lead Developer',
          duration: '2 years',
          team_size: 5,
        },
        project2: {
          name: 'Social Media App',
          tech_stack: ['Vue', 'Django', 'PostgreSQL'],
          role: 'Backend Engineer',
          duration: '1.5 years',
          team_size: 4,
        },
      },
    },
  },
};

const JSONVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [jsonInput, setJsonInput] = useState<string>('');
  const [jsonData, setJsonData] = useState<ISampleData | null>(null);
  const [error, setError] = useState<string>('');

  // Initialize with sample data
  useEffect(() => {
    setJsonInput(JSON.stringify(sampleData, null, 2));
    setJsonData(sampleData);
  }, []);

  // Function to convert JSON to hierarchical structure for D3
  const convertToHierarchy = (obj: any, name = 'root'): IHierarchyNode => {
    if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return { name, value: obj, children: [] };
    }

    return {
      name,
      children: Object.entries(obj).map(([key, value]) => {
        if (value === null || typeof value !== 'object') {
          return { name: key, value, children: [] };
        }

        if (Array.isArray(value)) {
          return {
            name: key,
            children: value.map((item, i) => convertToHierarchy(item, `${i}`)),
          };
        }
        return convertToHierarchy(value, key);
      }),
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
    try {
      const parsedJson = JSON.parse(e.target.value);
      setJsonData(parsedJson);
      setError('');
    } catch (err) {
      setError('Invalid JSON format. Please check your input.');
    }
  };

  const visualizeJson = (): void => {
    if (!svgRef.current || !jsonData) return;

    // Clear any existing content
    d3.select(svgRef.current).selectAll('*').remove();

    // Prepare data
    const hierarchyData = convertToHierarchy(jsonData, 'root');
    const root = d3.hierarchy(hierarchyData);

    // Set dimensions with proper typing
    const container = d3.select<HTMLDivElement, unknown>(svgRef.current!.parentNode as HTMLDivElement);
    const { width, height } = container.node()!.getBoundingClientRect();
    const margin = {
      top: 250,
      right: 150,
      bottom: 20,
      left: 50,
    };

    // Create SVG
    const svg = d3
      .select<SVGSVGElement, unknown>(svgRef.current)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create a tree layout
    const treeLayout = d3
      .tree<IHierarchyNode>()
      .size([height - margin.top - margin.bottom, width - margin.left - margin.right])
      .nodeSize([20, 200]); // Set node size to allow more space for long text

    // Assign positions to nodes
    treeLayout(root);

    // Color scale for different levels
    const colorScale = d3.scaleOrdinal().domain(['0', '1', '2', '3', '4', '5', '6', '7']).range([
      '#4285F4', // Blue
      '#EA4335', // Red
      '#FBBC05', // Yellow
      '#34A853', // Green
      '#8E24AA', // Purple
      '#16A5A5', // Teal
      '#FB8C00', // Orange
      '#607D8B', // Blue Grey
    ]);

    // Create links with curved paths (initially with 0 length for animation)
    const links = svg
      .selectAll('.link')
      .data(root.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr(
        'd',
        d => `M${d.source.y},${d.source.x}
                C${d.source.y},${d.source.x}
                 ${d.source.y},${d.source.x}
                 ${d.source.y},${d.source.x}`
      )
      .style('fill', 'none')
      .style('stroke', (d: d3.HierarchyLink<IHierarchyNode>) => colorScale(d.source.depth.toString()) as string)
      .style('stroke-width', 2)
      .style('opacity', 0);

    // Create node groups (initially invisible for animation)
    const nodes = svg
      .selectAll('.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y},${d.x})`)
      .style('opacity', 0);

    // Add circles for nodes
    nodes
      .append('circle')
      .attr('r', 6)
      .style('fill', (d): string => colorScale(d.depth.toString()) as string)
      .style('stroke', 'white')
      .style('stroke-width', 1);

    // Function to truncate text
    const truncateText = (text: string, maxLength = 30): string =>
      text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

    // Add labels for nodes with text wrapping for long text
    nodes
      .append('text')
      .attr('dy', '.31em')
      .attr('x', d => (d.children ? -12 : 12))
      .style('text-anchor', d => (d.children ? 'end' : 'start'))
      .style('font-size', '12px')
      .style('font-family', 'Arial, sans-serif')
      .text(d => {
        if (d.data.value !== undefined && (typeof d.data.value !== 'object' || d.data.value === null)) {
          const valueStr = String(d.data.value);
          return `${d.data.name}: ${truncateText(valueStr)}`;
        }
        return truncateText(d.data.name);
      });

    // Add tooltips for better information display (especially for long text)
    nodes.append('title').text(d => {
      if (d.data.value !== undefined && (typeof d.data.value !== 'object' || d.data.value === null)) {
        return `${d.data.name}: ${d.data.value}`;
      }
      return d.data.name;
    });

    // Animation sequence
    // 1. Fade in nodes
    nodes
      .transition()
      .duration(800)
      .delay((d, i) => i * 20)
      .style('opacity', 1);

    // 2. Animate links
    links
      .transition()
      .duration(800)
      .delay((d, i) => 500 + i * 20)
      .style('opacity', 1)
      .attr(
        'd',
        d => `M${d.source.y},${d.source.x}
                C${((d.source?.y || 0) + (d.target?.y || 0)) / 2},${d.source?.x ?? 0}
                 ${(d.source?.y ?? 0 + (d.target?.y || 0)) / 2},${d.target.x}
                 ${d.target.y},${d.target.x}`
      );

    // Add pan and zoom behavior
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 3])
      .on('zoom', event => {
        svg.attr('transform', event.transform);
      });

    d3.select<SVGSVGElement, unknown>(svgRef.current).call(zoom);
  };

  // Initialize with sample data
  useEffect(() => {
    setJsonInput(JSON.stringify(sampleData, null, 2));
    setJsonData(sampleData);
  }, []);

  // Add resize handler
  useEffect(() => {
    const handleResize = () => {
      if (jsonData) {
        visualizeJson();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [jsonData]);

  // Visualize whenever jsonData changes
  useEffect(() => {
    if (jsonData) {
      visualizeJson();
    }
  }, [jsonData]);

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-146.5px)] w-full max-w-7xl items-stretch gap-6 px-2 py-8 md:min-h-[calc(100dvh-106px)] md:px-0">
      <div className="grid w-full gap-6 md:grid-cols-2">
        <section id="data-input" className="flex w-full flex-col gap-2">
          <p className="font-fira text-xl tracking-wide">Sample Data</p>
          <textarea
            value={jsonInput}
            className="border-primary mb-1 h-96 w-full rounded border p-2 md:h-full"
            onChange={handleInputChange}
          />
          {error && (
            <p className="text-danger">
              <strong>{error}</strong>
            </p>
          )}
        </section>
        <section id="data-visualization" className="flex w-full flex-col gap-2">
          <p className="font-fira text-xl tracking-wide">Data Visualization</p>
          <div className="border-primary mb-1 h-96 w-full rounded border bg-white p-2 md:h-4/5">
            <svg ref={svgRef} />
          </div>
          <div className="h-1/5 w-full py-2">
            <p>• Hover over nodes to see full text for truncated labels</p>
            <p>• Scroll to zoom, drag to pan</p>
            <p>• Different colors represent different levels in the JSON hierarchy</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JSONVisualization;

import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import system from '../utils/theme';
import Home from '../pages/index';

// Mock Next.js Head component
jest.mock(
  'next/head',
  () =>
    function Head({ children }) {
      return <>{children}</>;
    }
);

// Mock react-icons
jest.mock('react-icons/fa6', () => ({
  FaLocationDot: () => <div data-testid="location-icon">📍</div>,
  FaDownload: () => <div data-testid="download-icon">⬇️</div>,
}));

jest.mock('react-icons/lu', () => ({
  LuExternalLink: () => <div data-testid="external-link-icon">🔗</div>,
}));

// Mock npm utilities to avoid fetch calls
jest.mock('../utils/npmDownloads', () =>
  jest.fn(() => Promise.resolve('1,234'))
);

jest.mock('../utils/npmVersion', () => jest.fn(() => Promise.resolve('2.1.1')));

// Create a test wrapper with ChakraProvider
function TestWrapper({ children }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}

describe('Home Page', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('contains expected content elements', () => {
    const { getByText, getByTestId } = render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    );

    // Check for main heading
    expect(getByText('Ismail Mohammed')).toBeInTheDocument();

    // Check for job title
    expect(getByText('Full Stack Engineer')).toBeInTheDocument();

    // Check for location
    expect(getByText('Tallinn')).toBeInTheDocument();
    expect(getByTestId('location-icon')).toBeInTheDocument();

    // Check for section headings
    expect(getByText('About Me')).toBeInTheDocument();
    expect(getByText('Connect with me')).toBeInTheDocument();
    expect(getByText('Work Experience')).toBeInTheDocument();
    expect(getByText('Side Projects')).toBeInTheDocument();
    expect(getByText('Publishing')).toBeInTheDocument();

    // Check for some work experience content
    expect(getByText('Full Stack Engineer – Pipedrive')).toBeInTheDocument();
    expect(getByText('Senior Software Engineer – Symplr')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the home page', () => {
    render(<Home />);
    const mainElement = screen.getByText('Junrey');
    expect(mainElement).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { QuoteCard } from '../quote-card';

describe('QuoteCard', () => {
  it('renders quote text and author', () => {
    render(<QuoteCard text="Sample quote" author="Sample Author" />);
    const quoteMatcher = (_: string, node: Element | null) => {
      return (
        node?.textContent?.replace(/[“”"]/g, '').includes('Sample quote') ??
        false
      );
    };
    const authorMatcher = (_: string, node: Element | null) => {
      return (
        node?.textContent?.replace(/[-–—]/g, '').includes('Sample Author') ??
        false
      );
    };
    expect(screen.getAllByText(quoteMatcher).length).toBeGreaterThan(0);
    expect(screen.getAllByText(authorMatcher).length).toBeGreaterThan(0);
  });
});

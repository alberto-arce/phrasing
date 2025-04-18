import { render, screen } from '@testing-library/react';
import { QuoteList } from '../QuoteList';

describe('QuoteList', () => {
  it('renders a list of quotes', () => {
    const quotes = [
      { id: '1', text: 'Test quote 1', author: 'Author 1' },
      { id: '2', text: 'Test quote 2', author: 'Author 2' },
    ];
    render(<QuoteList displayQuotes={quotes} />);
    const quoteMatcher1 = (_: string, node: Element | null) =>
      node?.textContent?.replace(/[“”"]/g, '').includes('Test quote 1') ??
      false;
    const quoteMatcher2 = (_: string, node: Element | null) =>
      node?.textContent?.replace(/[“”"]/g, '').includes('Test quote 2') ??
      false;
    const authorMatcher1 = (_: string, node: Element | null) =>
      node?.textContent?.replace(/[-–—]/g, '').includes('Author 1') ?? false;
    const authorMatcher2 = (_: string, node: Element | null) =>
      node?.textContent?.replace(/[-–—]/g, '').includes('Author 2') ?? false;

    expect(screen.getAllByText(quoteMatcher1).length).toBeGreaterThan(0);
    expect(screen.getAllByText(quoteMatcher2).length).toBeGreaterThan(0);
    expect(screen.getAllByText(authorMatcher1).length).toBeGreaterThan(0);
    expect(screen.getAllByText(authorMatcher2).length).toBeGreaterThan(0);
  });
});

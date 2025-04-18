import { render, screen } from '@testing-library/react';
import { CategorySelector } from '../CategorySelector';

describe('CategorySelector', () => {
  it('renders category tabs', () => {
    const categories = [
      { id: 'motivation', name: 'Motivación' },
      { id: 'love', name: 'Amor' },
    ];
    render(
      <CategorySelector
        categories={categories}
        selectedCategory="motivation"
        onCategoryChange={() => { }}
      />,
    );
    expect(screen.getAllByText('Motivación').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Amor').length).toBeGreaterThan(0);
  });
});

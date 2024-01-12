import { render, screen } from '@testing-library/react';
import ListaFrutas from './ListaFrutas';

test('Renderizar la pagina del listado de frutas', () => {
  render(<ListaFrutas />);

  expect(screen.getByRole("Table")).toBeInTheDocument();
});
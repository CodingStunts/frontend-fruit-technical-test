import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// 1. All fruit GET request - Fruit name & image.
//      Main page will be all fruit listed.
//      Each fruit should link to its individual page.

// 2. Single fruit by id/name GET request - Name, genus, family, nutrition info, image. (As per wire frame)
//      Needs a back button to return to all fruit.
//      URL should be dynamic www.fruit.com/apple or /pear for example.

// 3. GET request allows sorting of fruit - See wireframe for details sort box.
//      When sort is confirmed re-render with sorted criteria fulfilled.
//      Sort by asc or desc, sort by NUTRITION type.
//      CLEAR will remove all sorting criteria and restore unsorted list.
//          LASTLY - Sorted criteria should be in the URI. ~ useSearchParams, React Router?

// 4. ADDED FUNCTIONALITY
//      6 items at a time! LOAD MORE button loads 6 new fruits until all fruits is exhuasted and rendered.
//      LOAD MORE should no longer be visible when all fruit are rendered.

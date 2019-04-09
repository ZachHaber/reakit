import * as React from "react";
import { render } from "react-testing-library";
import { Menu } from "../Menu";

function createRef(id: string) {
  const ref = React.createRef() as React.MutableRefObject<HTMLElement>;
  ref.current = document.createElement("div");
  ref.current.id = id;
  return ref;
}

const props: Parameters<typeof Menu>[0] = {
  unstable_hiddenId: "hidden",
  unstable_stops: [
    { id: "a", ref: createRef("a") },
    { id: "b", ref: createRef("b") }
  ],
  unstable_move: jest.fn(),
  "aria-label": "menu"
};

test("render", () => {
  const { baseElement } = render(<Menu {...props} />);
  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <div
          aria-hidden="true"
          aria-label="menu"
          aria-modal="false"
          class="__reakit-portal"
          data-dialog="true"
          hidden=""
          id="hidden"
          role="menu"
          style="z-index: 999;"
          tabindex="-1"
        />
      </div>
    </body>
  `);
});
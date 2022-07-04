export const math = {
  functions: {
    output: {
      inputs: ["Input 1", "Input 2", "Operation"],
      outputs: ["Result"],
      functionUpdate: (self, a, b, op) => {
        switch (op) {
          case "+":
            return a + b;
          case "-":
            return a - b;
          case "*":
            return a * b;
          case "/":
            return a / b;
          default:
            return 0;
        }
      },
    },
  },
  elements: [
    { type: "output-text", name: "Result" },
    [
      {
        type: "ui-dropdown",
        name: "Operation",
        values: [
          { value: "+", label: "Add" },
          { value: "-", label: "Subtract" },
          { value: "*", label: "Multiply" },
          { value: "/", label: "Divide" },
        ],
      },
    ],
    [
      {
        type: "input-text",
        name: "Input 1",
      },
    ],
    [
      {
        type: "input-text",
        name: "Input 2",
      },
    ],
  ],
};

export const displayData = {
  functions: {
    output: {
      inputs: ["Input"],
      outputs: [],
      functionInit: (self, i) => {
        self.display = self.dom.querySelector(".display");
      },
      functionUpdate: (self, i) => {
        self.display.innerText = i;
      }
    },
  },
  elements: [
    {
      type: "input-text",
      name: "Input",
    },
    { type: "custom",
      name: "Display",
      html: `
      <div class="bg-red rounded-lg">
        <span class="display text-3xl"></span>
      </div>
      `,
    },
  ],
};